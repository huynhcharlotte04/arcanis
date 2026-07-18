// Générateur des documents PDF du module « Autres référentiels » (mission-001).
//
// Source versionnée du pack documentaire de Montrel Industries : chaque document
// est décrit en données ci-dessous, puis rendu en PDF avec l'en-tête commun de
// la plateforme (emblème Montrel + filet doré), défini dans ./lib/letterhead.mjs.
//
// Prérequis : pdfkit doit être résolvable (lien symbolique ou installation).
// Puis : `node scripts/generate-mission-001-pdfs.mjs`.

import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildDocument } from "./lib/letterhead.mjs";

const ROOT = path.resolve(fileURLToPath(import.meta.url), "../..");
const OUT = path.join(ROOT, "public/documents/mission-001");

// Conserve la signature build(ref, title, subtitle, blocks) des appels ci-dessous.
function build(ref, title, subtitle, blocks) {
  return buildDocument({ outPath: DOC_PATHS[ref], ref, headerSubtitle: title, docTitle: subtitle, blocks });
}

const DOC_PATHS = {
  "POL-001": path.join(OUT, "qualite/POL-001_Politique_Qualite.pdf"),
  "STRAT-001": path.join(OUT, "direction/STRAT-001_Plan_Strategique.pdf"),
  "ORG-001": path.join(OUT, "rh/ORG-001_Organigramme.pdf"),
  "AUD-001": path.join(OUT, "qualite/AUD-001_Rapport_Audit_ISO9001.pdf"),
  "CAT-001": path.join(OUT, "commercial/CAT-001_Catalogue_Produits_Marches.pdf"),
  "CERT-001": path.join(OUT, "certification/CERT-001_Certificat_ISO9001.pdf"),
  "COMEX-001": path.join(OUT, "direction/COMEX-001_Ordre_du_jour.pdf"),
  // Annexes internes et notes de mandat (chemins historiques conservés)
  "MAN-001": path.join(OUT, "Manuel-Qualite.pdf"),
  "CAR-001": path.join(OUT, "Cartographie-Processus.pdf"),
  "NDM-13485": path.join(OUT, "ISO13485/Note-Mandat-ISO13485.pdf"),
  "ANX-13485": path.join(OUT, "ISO13485/Qualification-Fournisseurs-Medicaux.pdf"),
  "NDM-16949": path.join(OUT, "IATF16949/Note-Mandat-IATF16949.pdf"),
  "ANX-16949": path.join(OUT, "IATF16949/Capacite-Production-Automobile.pdf"),
  "NDM-9100": path.join(OUT, "EN9100/Note-Mandat-EN9100.pdf"),
  "ANX-9100": path.join(OUT, "EN9100/Analyse-Exigences-Aeronautiques.pdf"),
  "NDM-22000": path.join(OUT, "ISO22000/Note-Mandat-ISO22000.pdf"),
  "ANX-22000": path.join(OUT, "ISO22000/Diagnostic-Hygiene-Flux.pdf"),
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
  { meta: [["Référence", "STRAT-001"], ["Indice de version", "3"], ["Statut", "Approuvé par le COMEX le 08/12/2023"], ["Diffusion", "COMEX"]] },
  { h: "Contexte économique" },
  { p: "Le marché historique de Montrel Industries — donneurs d'ordre industriels européens et intégrateurs de solutions automatisées — reste solide mais montre des signes de tension : allongement des cycles de décision chez plusieurs clients, pression accrue sur les prix lors des renégociations annuelles, et une dépendance croissante à un nombre restreint de grands comptes." },
  { p: "Cette situation n'appelle pas de mesure d'urgence, mais elle invite le COMEX à engager une réflexion sur l'élargissement des marchés adressés par le groupe à moyen terme." },
  { h: "Constat interne" },
  { p: "Le socle qualité du groupe, certifié ISO 9001 depuis 2018, est solide sur le site historique de Lyon. Le développement du second site de production a toutefois révélé des écarts de pratiques entre les deux implantations, en particulier sur la formalisation des contrôles et la gestion documentaire. Ce point, déjà identifié lors du dernier audit de suivi, devra être traité indépendamment de toute décision de diversification." },
  { h: "Axes stratégiques" },
  { list: [
    "Axe 1 — Consolider la performance opérationnelle du groupe : poursuivre l'harmonisation des pratiques entre les deux sites et sécuriser les indicateurs de service client.",
    "Axe 2 — Explorer l'élargissement des marchés adressés : étudier la faisabilité d'un développement vers un marché sectoriel présentant des exigences réglementaires plus fortes que celles actuellement maîtrisées par le groupe. Cette exploration doit permettre au COMEX d'arbitrer, d'ici la fin du premier semestre, l'opportunité et les modalités d'une telle diversification.",
    "Axe 3 — Renforcer l'attractivité employeur : accompagner la montée en compétences des équipes, notamment sur le second site, pour soutenir les deux premiers axes."
  ] },
  { h: "Un sujet non consensuel" },
  { p: "La Direction de Production a exprimé, lors du COMEX de novembre 2023, des réserves quant à la faisabilité à court terme d'un développement vers un nouveau marché sectoriel, compte tenu des tensions actuelles sur les délais fournisseurs et de la charge déjà mobilisée par l'harmonisation inter-sites. La Direction Générale a acté la poursuite des études tout en prenant note de ce point de vigilance." },
  { h: "Calendrier prévisionnel" },
  { table: { head: ["Étape", "Échéance"], widths: [3, 1], rows: [
    ["Cadrage des marchés potentiels", "T1 2024"],
    ["Mandat de cabinets externes pour évaluation sectorielle", "T1-T2 2024"],
    ["Recommandation présentée au COMEX", "T2 2024"],
    ["Décision d'orientation", "T2 2024"],
    ["Premiers investissements engagés", "À partir de T3 2024"]
  ] } },
  { h: "Validation" },
  { p: "Ce plan a été approuvé par le COMEX le 8 décembre 2023. Il fera l'objet d'une revue à l'occasion du prochain exercice budgétaire." }
]);

await build("ORG-001", "Organigramme", "Organigramme de Direction", [
  { meta: [["Référence", "ORG-001"], ["Indice de version", "4"], ["Mise à jour", "18/09/2023"], ["Diffusion", "Personnel encadrant, RH, sur demande auditeurs/clients"]] },
  { h: "Comité exécutif (COMEX)" },
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
  { meta: [["Référence", "CAT-001"], ["Indice de version", "2"], ["Mise à jour", "09/10/2023"], ["Diffusion", "Direction Commerciale, COMEX"]] },
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

await build("COMEX-001", "Ordre du jour COMEX", "Ordre du jour — Comité exécutif", [
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
    ["15h20 – 16h30", "Questions du COMEX, échanges"],
    ["16h30 – 17h00", "Synthèse et prochaines étapes"]
  ] } },
  { p: "Chaque présentation inclut 15 minutes d'exposé et 10 minutes de questions immédiates. Les échanges approfondis sont regroupés en fin de séance." },
  { h: "Critères pris en compte par le COMEX" },
  { list: [
    "Pertinence de la recommandation au regard du contexte réel de l'entreprise.",
    "Faisabilité compte tenu des ressources et de la maturité actuelle du groupe.",
    "Solidité et réalisme du plan d'action proposé.",
    "Qualité de l'argumentation et capacité à répondre aux questions du COMEX."
  ] },
  { h: "Consignes de forme" },
  { list: [
    "Support de présentation : 15 slides maximum.",
    "Une note de synthèse d'une page à remettre au COMEX en fin de présentation."
  ] }
]);

// ---------------------------------------------------------------------------
// Annexes internes (support formateur)
// ---------------------------------------------------------------------------

await build("MAN-001", "Manuel Qualité", "Manuel Qualité — Système de management", [
  { meta: [["Référence", "MAN-001"], ["Indice de version", "3"], ["Mise à jour", "18/03/2024"], ["Diffusion", "Personnel encadrant, support formateur"]] },
  { h: "Objet et périmètre" },
  { p: "Le présent manuel décrit le système de management de la qualité (SMQ) de Montrel Industries, certifié ISO 9001 depuis 2018. Il couvre les activités de conception, d'industrialisation, d'achat, de production, de contrôle et de livraison des équipements industriels, sur les deux sites du groupe (Lyon et site secondaire)." },
  { h: "Organisation du système" },
  { list: [
    "Une politique qualité (POL-001) déclinée en objectifs mesurables et revue en revue de direction.",
    "Une approche processus formalisée (cartographie CAR-001) reliant processus de management, de réalisation et de support.",
    "Un pilotage par indicateurs : conformité produit, respect des délais, satisfaction client, traitement des non-conformités.",
    "Un dispositif d'audits internes et de revues de direction annuelles."
  ] },
  { h: "Points de vigilance" },
  { list: [
    "Les pratiques ne sont pas encore totalement homogènes entre les deux sites.",
    "L'analyse des risques reste conduite au niveau global et n'est pas systématisée par processus.",
    "Toute extension vers un référentiel sectoriel supposera de renforcer les interfaces inter-sites et la profondeur documentaire."
  ] }
]);

await build("CAR-001", "Cartographie des processus", "Cartographie des processus", [
  { meta: [["Référence", "CAR-001"], ["Indice de version", "3"], ["Mise à jour", "21/03/2024"], ["Diffusion", "Personnel encadrant, support formateur"]] },
  { h: "Processus de management" },
  { list: [
    "Piloter la stratégie et les objectifs qualité.",
    "Manager les ressources et les compétences.",
    "Améliorer en continu (audits, revues de direction, actions correctives)."
  ] },
  { h: "Processus de réalisation" },
  { table: { head: ["Processus", "Finalité"], widths: [1.2, 3], rows: [
    ["Développer", "Concevoir les équipements et valider les dossiers de définition."],
    ["Industrialiser", "Préparer les moyens et les gammes de fabrication."],
    ["Acheter", "Sélectionner et qualifier les fournisseurs, sécuriser les approvisionnements."],
    ["Produire", "Assembler et réaliser les sous-ensembles sur les deux sites."],
    ["Contrôler", "Vérifier la conformité et tracer les preuves."],
    ["Livrer", "Expédier et assurer le service au client."]
  ] } },
  { h: "Processus support" },
  { list: [
    "Ressources humaines et compétences.",
    "Maintenance et moyens industriels.",
    "Système d'information et maîtrise documentaire."
  ] },
  { p: "Les processus support devront être renforcés si un référentiel sectoriel plus exigeant est retenu, notamment sur la maîtrise documentaire, la gestion des compétences et la traçabilité." }
]);

// ---------------------------------------------------------------------------
// Notes de mandat et annexes techniques (par référentiel)
// ---------------------------------------------------------------------------

function noteMandat(ref, secteur, referentiel, emetteur, date, attendus, vigilance) {
  return build(ref, `Note de cadrage — ${referentiel}`, `Note de cadrage — Mandat ${secteur}`, [
    { meta: [["Référence", ref], ["Version", "1.0"], ["Date", date], ["Émetteur", emetteur], ["Destinataire", "Cabinet mandaté"]] },
    { h: "Contexte du mandat" },
    { p: `Dans le cadre de son projet de diversification, le COMEX de Montrel Industries confie à votre cabinet l'évaluation de la faisabilité d'une entrée sur le marché ${secteur}. Le référentiel ${referentiel} est imposé comme contrainte de départ : il ne constitue pas une variable d'arbitrage.` },
    { h: "Attendus de la restitution" },
    { list: attendus },
    { h: "Périmètre et points de vigilance" },
    { list: vigilance },
    { signoff: [
      { t: "Pour le COMEX", b: false },
      { t: emetteur + " — Montrel Industries", b: true }
    ] }
  ]);
}

await noteMandat("NDM-13485", "des dispositifs médicaux", "ISO 13485", "Direction générale", "20/06/2024",
  [
    "Clarifier les écarts majeurs entre ISO 9001 et ISO 13485.",
    "Identifier les impacts sur conception, achats, production et contrôle.",
    "Proposer une trajectoire soutenable avant engagement commercial."
  ],
  [
    "Maîtrise documentaire et preuves attendues plus strictes que dans le système ISO 9001 actuel.",
    "Exigences renforcées sur la gestion des risques, la traçabilité et les fournisseurs critiques.",
    "Crédibilité à construire face à des clients très sensibles à la conformité réglementaire."
  ]);

await noteMandat("NDM-16949", "automobile", "IATF 16949", "Direction commerciale", "20/06/2024",
  [
    "Identifier les prérequis avant de viser des donneurs d'ordre automobile.",
    "Évaluer les impacts sur production, méthodes, achats et pilotage de la performance.",
    "Définir les risques d'une entrée trop rapide sur ce marché."
  ],
  [
    "Attentes élevées sur la robustesse processus, l'APQP, la maîtrise des changements et les fournisseurs.",
    "Pression forte sur les délais, la preuve de capabilité et la performance série.",
    "Risque d'écart entre le niveau ISO 9001 actuel et les exigences client automobile."
  ]);

await noteMandat("NDM-9100", "aéronautique", "EN 9100", "Direction générale", "20/06/2024",
  [
    "Montrer ce que l'EN 9100 apporte au-delà d'ISO 9001.",
    "Prioriser les impacts sur l'organisation et la gouvernance qualité.",
    "Estimer les risques de crédibilité face aux donneurs d'ordre."
  ],
  [
    "Exigences renforcées sur la gestion des risques, la configuration et la maîtrise des fournisseurs.",
    "Besoin de preuves fiables dans un environnement où la sécurité et la conformité sont décisives.",
    "Transformation culturelle nécessaire pour passer d'un référentiel généraliste à un cadre sectoriel exigeant."
  ]);

await noteMandat("NDM-22000", "agroalimentaire", "ISO 22000", "Direction commerciale", "20/06/2024",
  [
    "Expliquer les exigences nouvelles par rapport au socle ISO 9001.",
    "Identifier les transformations nécessaires sur sites, fournisseurs et contrôles.",
    "Proposer une trajectoire réaliste pour éviter un engagement prématuré."
  ],
  [
    "Intégration de la sécurité des denrées, des PRP et de l'approche HACCP dans un système industriel existant.",
    "Nouveaux contrôles sur l'hygiène, la contamination, le nettoyage et la maîtrise des dangers.",
    "Besoin de clarifier les conditions de faisabilité entre opportunité commerciale et transformation opérationnelle."
  ]);

await build("ANX-13485", "Annexe — Fournisseurs médicaux", "Qualification des fournisseurs — Enjeux dispositifs médicaux", [
  { meta: [["Référence", "ANX-13485"], ["Version", "1.0"], ["Date", "21/06/2024"], ["Émetteur", "Direction qualité"]] },
  { h: "Objet" },
  { p: "Cette note attire l'attention du cabinet sur la maîtrise fournisseur, point sensible pour toute entrée sur le marché des dispositifs médicaux (ISO 13485)." },
  { h: "Points de vigilance" },
  { list: [
    "La qualification fournisseur actuelle repose surtout sur la performance délai / prix et la conformité produit ; les exigences médicales imposent une évaluation du risque et une surveillance renforcée.",
    "La traçabilité amont (composants, matières) doit être démontrable jusqu'au dossier de lot.",
    "La maîtrise des changements fournisseurs (notification préalable) n'est pas encore contractualisée de façon systématique.",
    "Les fournisseurs critiques devront faire l'objet d'audits et d'accords qualité spécifiques."
  ] }
]);

await build("ANX-16949", "Annexe — Capacité automobile", "Capacité de production — Lecture pour le mandat automobile", [
  { meta: [["Référence", "ANX-16949"], ["Version", "1.0"], ["Date", "21/06/2024"], ["Émetteur", "Direction des opérations"]] },
  { h: "Objet" },
  { p: "Synthèse des capacités industrielles utiles à l'évaluation d'une entrée sur le marché automobile (IATF 16949)." },
  { h: "Éléments de capacité" },
  { list: [
    "Deux sites d'assemblage, avec des niveaux d'équipement et de maturité hétérogènes.",
    "Capacité série existante, mais discipline opérationnelle (APQP, PPAP, maîtrise des changements) non encore formalisée au niveau attendu.",
    "Indicateurs de capabilité process suivis ponctuellement, sans systématisation.",
    "La performance série et la preuve de capabilité constituent les principaux points d'effort."
  ] }
]);

await build("ANX-9100", "Annexe — Exigences aéronautiques", "Analyse des exigences aéronautiques (EN 9100)", [
  { meta: [["Référence", "ANX-9100"], ["Version", "1.0"], ["Date", "21/06/2024"], ["Émetteur", "Direction qualité"]] },
  { h: "Objet" },
  { p: "Première analyse des exigences sectorielles aéronautiques, en complément d'ISO 9001." },
  { h: "Exigences renforcées" },
  { list: [
    "Gestion de configuration et maîtrise des évolutions de définition.",
    "Gestion des risques et des opportunités formalisée à chaque étape clé.",
    "Maîtrise fournisseur renforcée (approvisionnements spéciaux, sources approuvées).",
    "Preuves de conformité robustes : revues de premier article, dossiers justificatifs."
  ] },
  { h: "Écart estimé" },
  { p: "L'effort principal portera sur la gestion de configuration et la formalisation systématique des preuves, aujourd'hui partielles." }
]);

await build("ANX-22000", "Annexe — Hygiène et flux", "Diagnostic hygiène et flux (ISO 22000)", [
  { meta: [["Référence", "ANX-22000"], ["Version", "1.0"], ["Date", "21/06/2024"], ["Émetteur", "Direction des opérations"]] },
  { h: "Objet" },
  { p: "Diagnostic initial des contraintes d'hygiène, de flux et de maîtrise des contaminations pour l'évaluation d'une entrée sur le marché agroalimentaire." },
  { h: "Constats" },
  { list: [
    "Les ateliers n'ont pas été conçus autour de contraintes d'hygiène alimentaire (zonage, marche en avant).",
    "Les flux matières et personnels ne séparent pas les zones à risque de contamination.",
    "Aucune démarche HACCP ni programme prérequis (PRP) n'est en place à ce jour.",
    "Le nettoyage et la désinfection ne font pas l'objet de plans validés ni de vérifications documentées."
  ] },
  { h: "Enjeu" },
  { p: "L'entrée sur ce marché suppose une transformation profonde des installations et des pratiques, au-delà d'une simple évolution documentaire." }
]);

console.log("\n17 documents mission-001 générés (7 principaux + 10 annexes).");
