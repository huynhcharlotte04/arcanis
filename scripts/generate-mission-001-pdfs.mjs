// Generateur des documents PDF du module « Autres referentiels » (mission-001).
//
// Source versionnee du pack documentaire de Montrel Industries : chaque document
// est decrit en donnees ci-dessous, puis rendu en PDF avec l'en-tete (emblème
// Montrel) et le style commun a la plateforme.
//
// Prerequis : pdfkit doit etre resolvable (ex. `npm i pdfkit --no-save` a la
// racine, ou un lien symbolique). Puis : `node scripts/generate-mission-001-pdfs.mjs`.
//
// La plateforme s'appelle ARCANIS ; l'entreprise fictive s'appelle Montrel
// Industries (le pied de page conserve « Usage simulation ARCANIS »).

import PDFDocument from "pdfkit";
import fs from "node:fs";
import path from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = path.resolve(fileURLToPath(import.meta.url), "../..");
const OUT = path.join(ROOT, "public/documents/mission-001");

const GOLD = "#A9862F";
const INK = "#1a1712";
const MUTED = "#5b5344";
const RULE = "#c9b787";
const M = 56; // marge

// -- Emblème Montrel (monogramme M dans un hexagone), dessine en vectoriel --
function drawEmblem(doc, x, y, size, color = GOLD) {
  const s = size / 48;
  doc.save();
  doc.translate(x, y).scale(s);
  doc.lineJoin("round").lineCap("round").strokeColor(color);
  doc
    .strokeOpacity(0.5)
    .lineWidth(1.4)
    .polygon([24, 3], [41.2, 13.5], [41.2, 34.5], [24, 45], [6.8, 34.5], [6.8, 13.5])
    .stroke();
  doc.strokeOpacity(1).lineWidth(2).path("M15 33 L15 16 L24 26 L33 16 L33 33").stroke();
  doc.fillColor(color).fillOpacity(1).circle(24, 38.5, 1.3).fill();
  doc.restore();
  doc.strokeOpacity(1).fillOpacity(1);
}

const contentW = () => 595.28 - M * 2;

function header(doc, ref, title) {
  drawEmblem(doc, M, 40, 30);
  doc
    .fillColor(INK)
    .font("Helvetica-Bold")
    .fontSize(10)
    .text("MONTREL INDUSTRIES", M + 40, 44, { characterSpacing: 1.5 });
  doc
    .fillColor(MUTED)
    .font("Helvetica")
    .fontSize(8)
    .text(title, M + 40, 57);
  doc
    .fillColor(GOLD)
    .font("Helvetica-Bold")
    .fontSize(9)
    .text(ref, 595.28 - M - 120, 48, { width: 120, align: "right" });
  doc
    .strokeColor(RULE)
    .lineWidth(1)
    .moveTo(M, 78)
    .lineTo(595.28 - M, 78)
    .stroke();
  doc.x = M;
  doc.y = 96;
}

function footer(doc, ref, page, total) {
  doc.page.margins.bottom = 0; // evite une pagination auto en ecrivant en bas de page
  doc
    .fillColor("#9a9385")
    .font("Helvetica")
    .fontSize(7.5)
    .text(
      `${ref} — Document interne Montrel Industries — Usage simulation ARCANIS`,
      M,
      812,
      { width: contentW() - 60, lineBreak: false }
    );
  doc.text(`Page ${page} / ${total}`, 595.28 - M - 60, 812, { width: 60, align: "right", lineBreak: false });
}

function ensure(doc, need) {
  if (doc.y + need > 790) doc.addPage();
}

function renderBlocks(doc, blocks) {
  for (const b of blocks) {
    if (b.h) {
      ensure(doc, 40);
      doc.moveDown(0.6);
      doc.fillColor(GOLD).font("Helvetica-Bold").fontSize(12).text(b.h, M, doc.y, { width: contentW() });
      doc.moveDown(0.35);
    } else if (b.p) {
      ensure(doc, 30);
      doc.fillColor("#222").font("Helvetica").fontSize(10).text(b.p, M, doc.y, { width: contentW(), align: "justify", lineGap: 1.5 });
      doc.moveDown(0.4);
    } else if (b.list) {
      for (const item of b.list) {
        ensure(doc, 24);
        doc.fillColor("#222").font("Helvetica").fontSize(10).text(`•  ${item}`, M + 6, doc.y, { width: contentW() - 6, lineGap: 1.5 });
        doc.moveDown(0.2);
      }
      doc.moveDown(0.3);
    } else if (b.meta) {
      for (const [k, v] of b.meta) {
        ensure(doc, 16);
        const y = doc.y;
        doc.fillColor(MUTED).font("Helvetica-Bold").fontSize(9).text(k, M, y, { width: 175 });
        doc.fillColor("#222").font("Helvetica").fontSize(9).text(v, M + 180, y, { width: contentW() - 180 });
        doc.y = Math.max(doc.y, y + 13);
      }
      doc.moveDown(0.4);
    } else if (b.table) {
      renderTable(doc, b.table);
      doc.moveDown(0.4);
    } else if (b.spacer) {
      doc.moveDown(b.spacer);
    } else if (b.signoff) {
      ensure(doc, 60);
      doc.moveDown(1);
      for (const line of b.signoff) {
        doc.fillColor("#222").font(line.b ? "Helvetica-Bold" : "Helvetica").fontSize(10).text(line.t, M, doc.y, { width: contentW() });
        doc.moveDown(0.15);
      }
    }
  }
}

function renderTable(doc, { head, rows, widths }) {
  const totalW = contentW();
  const cols = widths.map((w) => (w / widths.reduce((a, c) => a + c, 0)) * totalW);
  const pad = 6;
  const rowHeight = (cells, font, fs) => {
    let h = 0;
    cells.forEach((c, i) => {
      doc.font(font).fontSize(fs);
      h = Math.max(h, doc.heightOfString(String(c), { width: cols[i] - pad * 2 }));
    });
    return h + pad * 2;
  };
  const drawRow = (cells, { fill, font, fs, color }) => {
    const h = rowHeight(cells, font, fs);
    ensure(doc, h + 4);
    const y = doc.y;
    if (fill) doc.rect(M, y, totalW, h).fill(fill);
    let x = M;
    cells.forEach((c, i) => {
      doc.fillColor(color).font(font).fontSize(fs).text(String(c), x + pad, y + pad, { width: cols[i] - pad * 2 });
      x += cols[i];
    });
    doc.strokeColor("#e4ddcd").lineWidth(0.6).rect(M, y, totalW, h).stroke();
    doc.y = y + h;
  };
  if (head) drawRow(head, { fill: "#f3ecda", font: "Helvetica-Bold", fs: 8.5, color: INK });
  rows.forEach((r) => drawRow(r, { font: "Helvetica", fs: 8.5, color: "#333" }));
}

function build(ref, title, subtitle, blocks) {
  const doc = new PDFDocument({ size: "A4", margin: M, bufferPages: true });
  const outPath = DOC_PATHS[ref];
  fs.mkdirSync(path.dirname(outPath), { recursive: true });
  doc.pipe(fs.createWriteStream(outPath));
  doc.on("pageAdded", () => header(doc, ref, title));
  header(doc, ref, title);
  doc.fillColor(INK).font("Helvetica-Bold").fontSize(19).text(subtitle, M, doc.y, { width: contentW() });
  doc.moveDown(0.6);
  renderBlocks(doc, blocks);
  const range = doc.bufferedPageRange();
  for (let i = 0; i < range.count; i++) {
    doc.switchToPage(i);
    footer(doc, ref, i + 1, range.count);
  }
  doc.end();
  return new Promise((res) => doc.on("end", () => { console.log("ecrit:", path.relative(ROOT, outPath)); res(); }));
}

const DOC_PATHS = {
  "POL-001": path.join(OUT, "qualite/POL-001_Politique_Qualite.pdf"),
  "STRAT-001": path.join(OUT, "direction/STRAT-001_Plan_Strategique.pdf"),
  "ORG-001": path.join(OUT, "rh/ORG-001_Organigramme.pdf"),
  "AUD-001": path.join(OUT, "qualite/AUD-001_Rapport_Audit_ISO9001.pdf"),
  "CAT-001": path.join(OUT, "commercial/CAT-001_Catalogue_Produits_Marches.pdf"),
  "CERT-001": path.join(OUT, "certification/CERT-001_Certificat_ISO9001.pdf"),
  "COMEX-001": path.join(OUT, "direction/COMEX-001_Ordre_du_jour.pdf"),
};

await build("POL-001", "Politique Qualité", "Politique Qualité", [
  { meta: [["Référence", "POL-001"], ["Indice de version", "6"], ["Date d'application", "15/01/2024"], ["Diffusion", "Ensemble du personnel, clients et parties intéressées sur demande"]] },
  { h: "Le mot de la Direction" },
  { p: "Depuis 2018, Montrel Industries s'appuie sur un système de management de la qualité certifié ISO 9001. Ce système nous permet de répondre aux exigences de nos clients industriels européens, dans un contexte où la conformité, les délais et la traçabilité conditionnent notre capacité à conserver et développer nos marchés. Cette politique qualité fixe le cadre dans lequel s'inscrit l'ensemble de nos collaborateurs, sur nos deux sites de production." },
  { h: "Présentation de l'entreprise" },
  { p: "Montrel Industries conçoit et fabrique des équipements industriels pour des environnements techniques exigeants. L'entreprise emploie 420 collaborateurs répartis sur deux sites et réalise un chiffre d'affaires de 86 M€. Ses clients sont principalement des donneurs d'ordre industriels européens et des intégrateurs de solutions automatisées." },
  { h: "Nos engagements" },
  { list: [
    "Garantir la conformité de nos produits et services aux exigences contractuelles et réglementaires applicables.",
    "Respecter les délais de livraison convenus avec nos clients.",
    "Assurer la traçabilité des opérations de conception, de fabrication et de contrôle.",
    "Développer les compétences de nos équipes sur nos deux sites.",
    "Être force de proposition auprès de nos clients historiques et les accompagner dans l'évolution de leurs besoins."
  ] },
  { h: "Objectifs qualité 2024" },
  { table: { head: ["Objectif", "Cible", "Résultat 2023", "Résultat 2022"], widths: [3, 1, 1.2, 1.2], rows: [
    ["Taux de service client (livraisons conformes et à l'heure)", ">= 95 %", "95,1 %", "94,8 %"],
    ["Taux de non-conformité produit interne", "< 1,2 %", "1,3 %", "1,4 %"],
    ["Réclamations clients traitées sous 15 jours", "100 %", "92 %", "90 %"]
  ] } },
  { h: "Revue et diffusion" },
  { p: "Cette politique est revue lors de la revue de direction annuelle. Elle est diffusée à l'ensemble du personnel par voie d'affichage et transmise aux clients qui en font la demande dans le cadre de leurs audits fournisseurs." },
  { signoff: [{ t: "Fait à Lyon, le 15 janvier 2024" }, { t: "La Directrice Générale" }, { t: "Claire MONTREUIL", b: true }] }
]);

await build("STRAT-001", "Plan stratégique 2024-2027", "Plan Stratégique 2024-2027", [
  { meta: [["Référence", "STRAT-001"], ["Indice de version", "3"], ["Statut", "Approuvé par le CODIR le 08/12/2023"], ["Diffusion", "CODIR"]] },
  { h: "Contexte économique" },
  { p: "Le marché historique de Montrel Industries — donneurs d'ordre industriels européens et intégrateurs de solutions automatisées — reste solide mais montre des signes de tension : allongement des cycles de décision chez plusieurs clients, pression accrue sur les prix lors des renégociations annuelles, et une dépendance croissante à un nombre restreint de grands comptes." },
  { p: "Cette situation n'appelle pas de mesure d'urgence, mais elle invite le CODIR à engager une réflexion sur l'élargissement des marchés adressés par le groupe à moyen terme." },
  { h: "Constat interne" },
  { p: "Le socle qualité du groupe, certifié ISO 9001 depuis 2018, est solide sur le site historique de Lyon. Le développement du second site de production a toutefois révélé des écarts de pratiques entre les deux implantations, en particulier sur la formalisation des contrôles et la gestion documentaire. Ce point, déjà identifié lors du dernier audit de suivi, devra être traité indépendamment de toute décision de diversification." },
  { h: "Axes stratégiques" },
  { list: [
    "Axe 1 — Consolider la performance opérationnelle du groupe : poursuivre l'harmonisation des pratiques entre les deux sites et sécuriser les indicateurs de service client.",
    "Axe 2 — Explorer l'élargissement des marchés adressés : étudier la faisabilité d'un développement vers un marché sectoriel présentant des exigences réglementaires plus fortes que celles actuellement maîtrisées par le groupe. Cette exploration doit permettre au CODIR d'arbitrer, d'ici la fin du premier semestre, l'opportunité et les modalités d'une telle diversification.",
    "Axe 3 — Renforcer l'attractivité employeur : accompagner la montée en compétences des équipes, notamment sur le second site, pour soutenir les deux premiers axes."
  ] },
  { h: "Un sujet non consensuel" },
  { p: "La Direction de Production a exprimé, lors du CODIR de novembre 2023, des réserves quant à la faisabilité à court terme d'un développement vers un nouveau marché sectoriel, compte tenu des tensions actuelles sur les délais fournisseurs et de la charge déjà mobilisée par l'harmonisation inter-sites. La Direction Générale a acté la poursuite des études tout en prenant note de ce point de vigilance." },
  { h: "Calendrier prévisionnel" },
  { table: { head: ["Étape", "Échéance"], widths: [3, 1], rows: [
    ["Cadrage des marchés potentiels", "T1 2024"],
    ["Mandat de cabinets externes pour évaluation sectorielle", "T1-T2 2024"],
    ["Recommandation présentée au CODIR", "T2 2024"],
    ["Décision d'orientation", "T2 2024"],
    ["Premiers investissements engagés", "À partir de T3 2024"]
  ] } },
  { h: "Validation" },
  { p: "Ce plan a été approuvé par le CODIR le 8 décembre 2023. Il fera l'objet d'une revue à l'occasion du prochain exercice budgétaire." }
]);

await build("ORG-001", "Organigramme", "Organigramme de Direction", [
  { meta: [["Référence", "ORG-001"], ["Indice de version", "4"], ["Mise à jour", "18/09/2023"], ["Diffusion", "Personnel encadrant, RH, sur demande auditeurs/clients"]] },
  { h: "Comité de Direction (CODIR)" },
  { table: { head: ["Fonction", "Nom", "Rattachement"], widths: [2.2, 1.6, 1.6], rows: [
    ["Directrice Générale", "Claire MONTREUIL", "—"],
    ["Responsable Qualité Groupe", "Camille FERRAND", "Directrice Générale"],
    ["Directeur Commercial", "Karim BELKACEM", "Directrice Générale"],
    ["Directrice de Production — Site de Lyon", "Sophie LANGLOIS", "Directrice Générale"],
    ["Directeur du Site secondaire", "Marc DUBREUIL", "Directrice Générale"],
    ["Directeur Financier", "Antoine MERCIER", "Directrice Générale"],
    ["Responsable R&D / Bureau d'études", "Julie ANDRÉ", "Directrice de Production"],
    ["Responsable Ressources Humaines", "Nadia SAÏDI", "Directrice Générale"]
  ] } },
  { h: "Fonction Qualité — détail des rattachements" },
  { table: { head: ["Poste", "Titulaire", "Rattachement hiérarchique", "Rattachement fonctionnel"], widths: [1.8, 1.8, 1.4, 1.4], rows: [
    ["Responsable Qualité Groupe", "Camille FERRAND", "Directrice Générale", "—"],
    ["Responsable Qualité — Site de Lyon", "Élodie PASCAL", "Sophie LANGLOIS", "Camille FERRAND"],
    ["Responsable Qualité — Site secondaire", "Poste en recrutement depuis juillet 2023", "Marc DUBREUIL", "Camille FERRAND (liaison non formalisée)"]
  ] } },
  { p: "Intérim assuré par Marc DUBREUIL sur les missions qualité courantes du site secondaire." },
  { h: "Effectifs par site" },
  { table: { head: ["Site", "Effectif", "Fonctions principales"], widths: [1.4, 0.9, 3], rows: [
    ["Lyon (siège)", "260", "Direction, Commercial, R&D, Production, Qualité Groupe"],
    ["Site secondaire", "160", "Production, Qualité (intérim), Logistique"]
  ] } },
  { p: "Le présent organigramme est mis à jour à chaque mouvement de personnel d'encadrement. Prochaine actualisation prévue à la clôture du recrutement du poste de Responsable Qualité — Site secondaire." }
]);

await build("AUD-001", "Rapport d'audit de suivi ISO 9001:2015", "Rapport d'Audit de Suivi ISO 9001:2015", [
  { meta: [["Référence", "AUD-001"], ["Organisme certificateur", "BUREAU CERTIS INTERNATIONAL"], ["Type d'audit", "Audit de suivi (surveillance, cycle depuis 2018)"], ["Dates d'audit", "14 et 15 novembre 2023"], ["Auditeur principal", "M. Frédéric NOËL, IRCA"], ["Périmètre audité", "Conception, fabrication et assemblage d'équipements industriels — site de Lyon et site secondaire"]] },
  { h: "Contexte de l'audit" },
  { p: "Le présent audit s'inscrit dans le cycle de certification ISO 9001:2015 de Montrel Industries, certifiée depuis 2018. Il s'agit du second audit de suivi du cycle en cours. L'audit a couvert les deux sites de production de l'entreprise." },
  { h: "Constats favorables" },
  { list: [
    "Le système de management de la qualité reste solidement installé sur le site de Lyon, avec une bonne appropriation des processus par les équipes.",
    "Le suivi de la satisfaction client et le traitement des réclamations restent documentés et tracés.",
    "Les actions correctives issues du précédent audit ont été soldées dans les délais.",
    "La direction commerciale dispose d'une visibilité claire sur les indicateurs de service client."
  ] },
  { h: "Non-conformités mineures et remarques" },
  { table: { head: ["Réf.", "Constat", "Exigence"], widths: [0.6, 4, 1.6], rows: [
    ["NC-01", "Les pratiques de contrôle et la gestion documentaire diffèrent sensiblement entre le site de Lyon et le site secondaire, sans référentiel commun formalisé.", "4.4 — SMQ et ses processus"],
    ["NC-02", "Le poste de Responsable Qualité du site secondaire est vacant depuis juillet 2023 (4 mois à la date de l'audit). L'intérim est assuré par le Directeur de Site, sans plan d'action formalisé.", "7.1 — Ressources"],
    ["NC-03", "L'analyse des risques n'est pas formalisée de manière systématique par processus, notamment sur le site secondaire.", "6.1 — Actions face aux risques"],
    ["REM-01", "Le rattachement fonctionnel du Responsable Qualité du site secondaire vers le Responsable Qualité Groupe n'est pas formalisé dans l'organigramme.", "Remarque — sans écart direct"]
  ] } },
  { h: "Avis de l'auditeur" },
  { p: "Aucune non-conformité majeure n'a été relevée. Le système de management de la qualité reste conforme aux exigences de la norme ISO 9001:2015 sur le périmètre audité. L'auditeur attire toutefois l'attention de la Direction sur le délai de vacance du poste qualité du site secondaire (NC-02), qui interroge la disponibilité effective des ressources sur ce site au regard de l'exigence 7.1." },
  { p: "L'auditeur ne se prononce pas sur les orientations stratégiques de l'entreprise, son mandat portant exclusivement sur le système de management en place." },
  { h: "Conclusion" },
  { p: "La certification ISO 9001:2015 de Montrel Industries est maintenue. Un plan d'actions correctives est attendu sous 90 jours pour les non-conformités NC-01, NC-02 et NC-03." }
]);

await build("CAT-001", "Catalogue Produits & Marchés", "Catalogue Produits & Marchés", [
  { meta: [["Référence", "CAT-001"], ["Indice de version", "2"], ["Mise à jour", "09/10/2023"], ["Diffusion", "Direction Commerciale, CODIR"]] },
  { h: "Gammes de produits actuelles" },
  { list: [
    "Équipements mécaniques de précision — usinage, assemblage de sous-ensembles pour environnements industriels exigeants.",
    "Équipements électromécaniques — intégration de composants électriques et automatismes simples sur des lignes clients.",
    "Prestations d'accompagnement technique — support à l'installation et au maintien en conditions opérationnelles chez les clients."
  ] },
  { h: "Portefeuille clients actuel" },
  { table: { head: ["Typologie de client", "Poids indicatif", "Nature de la relation"], widths: [2, 1.4, 2.6], rows: [
    ["Donneurs d'ordre industriels européens", "Majoritaire", "Contrats-cadres pluriannuels, renégociation annuelle des prix"],
    ["Intégrateurs de solutions automatisées", "Minoritaire, en croissance", "Commandes plus ponctuelles, cycles de décision courts"]
  ] } },
  { h: "Marchés explorés" },
  { p: "Le service commercial a engagé, à titre exploratoire, quelques prises de contact sur les marchés suivants, sans démarche structurée à ce stade :" },
  { list: [
    "Dispositifs médicaux — 2 échanges informels avec des sous-traitants déjà positionnés sur ce marché, à l'occasion d'un salon professionnel.",
    "Automobile — 1 contact entrant d'un équipementier de rang 2, resté sans suite faute de disponibilité interne pour instruire la demande.",
    "Aéronautique — aucun contact commercial direct à ce jour ; intérêt identifié via une veille sectorielle.",
    "Agroalimentaire — 1 échange exploratoire avec un fabricant de lignes de conditionnement, en marge d'un salon régional."
  ] },
  { h: "Point de vigilance commercial" },
  { p: "Le Directeur Commercial note que les cycles de vente observés dans les secteurs à référentiel réglementaire renforcé (homologation fournisseur, audits qualification) sont, de façon générale, sensiblement plus longs que ceux pratiqués sur les marchés actuels de Montrel Industries. Ce constat vaut pour l'ensemble des marchés explorés et n'a pas encore été chiffré précisément." },
  { p: "Document de suivi commercial mis à jour au fil des opportunités identifiées. Ne constitue pas une étude de marché formalisée." }
]);

await build("CERT-001", "Certificat de conformité ISO 9001", "Certificat de conformité ISO 9001:2015", [
  { spacer: 0.5 },
  { p: "BUREAU CERTIS INTERNATIONAL — Organisme de certification accrédité" },
  { meta: [["N° de certificat", "CERTIS-2018-FR-08823-C2"]] },
  { h: "Le présent certificat atteste que" },
  { p: "MONTREL INDUSTRIES — Lyon, Auvergne-Rhône-Alpes, France a démontré la conformité de son système de management de la qualité aux exigences de la norme ISO 9001:2015." },
  { h: "Périmètre de certification" },
  { p: "Conception, fabrication et assemblage d'équipements industriels pour environnements techniques exigeants." },
  { p: "Sites couverts : Site de Lyon (siège) — Site secondaire (intégré en 2021)." },
  { h: "Dates clés" },
  { meta: [["Certification initiale", "12 juin 2018"], ["Dernier renouvellement", "12 juin 2021"], ["Dernier audit de suivi", "14-15 novembre 2023"], ["Date d'expiration", "11 juin 2024"]] },
  { signoff: [{ t: "Fait à Paris, le 12 juin 2021" }, { t: "Mme Isabelle GRANDJEAN" }, { t: "Directrice de la Certification, BUREAU CERTIS INTERNATIONAL", b: true }] }
]);

await build("COMEX-001", "Ordre du jour COMEX", "Ordre du Jour — Comité de Direction", [
  { meta: [["Référence", "COMEX-001"], ["Émetteur", "Assistante de Direction"], ["Date de la séance", "[à compléter par le formateur]"], ["Lieu", "Salle de Direction, siège de Lyon"], ["Horaire", "13h30 – 17h00"]] },
  { h: "Participants" },
  { list: [
    "Claire MONTREUIL, Directrice Générale — présidence de séance",
    "Camille FERRAND, Responsable Qualité Groupe",
    "Karim BELKACEM, Directeur Commercial",
    "Sophie LANGLOIS, Directrice de Production — Site de Lyon",
    "Marc DUBREUIL, Directeur du Site secondaire",
    "Antoine MERCIER, Directeur Financier (présent jusqu'à 15h00, impératif externe l'après-midi)",
    "Nadia SAÏDI, Responsable Ressources Humaines"
  ] },
  { h: "Objet de la séance" },
  { p: "Présentation par les quatre cabinets mandatés de leurs recommandations respectives concernant l'orientation sectorielle envisagée par Montrel Industries." },
  { h: "Déroulé" },
  { table: { head: ["Horaire", "Séquence"], widths: [1.2, 3], rows: [
    ["13h30 – 13h40", "Introduction par la Directrice Générale"],
    ["13h40 – 14h05", "Présentation du Cabinet Meridian"],
    ["14h05 – 14h30", "Présentation du Cabinet Horizon"],
    ["14h30 – 14h55", "Présentation du Cabinet Polaris"],
    ["14h55 – 15h20", "Présentation du Cabinet Nova"],
    ["15h20 – 16h30", "Questions du CODIR, échanges"],
    ["16h30 – 17h00", "Synthèse et prochaines étapes"]
  ] } },
  { p: "Chaque présentation inclut 15 minutes d'exposé et 10 minutes de questions immédiates. Les échanges approfondis sont regroupés en fin de séance." },
  { h: "Critères pris en compte par le CODIR" },
  { list: [
    "Pertinence de la recommandation au regard du contexte réel de l'entreprise.",
    "Faisabilité compte tenu des ressources et de la maturité actuelle du groupe.",
    "Solidité et réalisme du plan d'action proposé.",
    "Qualité de l'argumentation et capacité à répondre aux questions du CODIR."
  ] },
  { h: "Consignes de forme" },
  { list: [
    "Support de présentation : 15 slides maximum.",
    "Une note de synthèse d'une page à remettre au CODIR en fin de présentation."
  ] }
]);

console.log("\n7 documents mission-001 générés.");
