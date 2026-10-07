// Générateur des documents PDF du module « Veille réglementaire ».
//
// Source versionnée du pack documentaire : chaque document est décrit en
// données ci-dessous, puis rendu en PDF avec l'en-tête commun de la plateforme
// (emblème Montrel + filet doré), défini dans ./lib/letterhead.mjs.
//
// Prérequis : pdfkit doit être résolvable (lien symbolique ou installation).
// Puis : `node scripts/generate-veille-pdfs.mjs`.

import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildDocument } from "./lib/letterhead.mjs";

const ROOT = path.resolve(fileURLToPath(import.meta.url), "../..");
const OUT = path.join(ROOT, "public/documents/veille-reglementaire");
const BANNER = "Veille réglementaire et normative";

function build(ref, rel, docTitle, blocks) {
  return buildDocument({
    outPath: path.join(OUT, rel),
    ref,
    headerSubtitle: BANNER,
    docTitle,
    blocks
  });
}

// -- Fabriques de documents récurrents -------------------------------------

function ficheVeille(ref, rel, { domaine, contexte, exigences, sources, evolutions, attention }) {
  return build(ref, rel, `Exigences applicables — ${domaine}`, [
    { p: "Panorama des exigences réglementaires et normatives du domaine." },
    { meta: [["Version", "1.0"], ["Statut", "Validé"]] },
    { h: "Périmètre du domaine" },
    { p: contexte },
    { h: "Principales exigences applicables" },
    { table: { head: ["Exigence", "Texte / référence", "Statut"], widths: [1.6, 1.9, 1.5], rows: exigences } },
    { h: "Sources de veille" },
    { list: sources },
    { h: "Évolutions récentes à évaluer" },
    { list: evolutions },
    { h: "Points d'attention" },
    { list: attention }
  ]);
}

function noteMandat(ref, rel, { domaine, cabinet, contexte, perimetre, attendus, vigilance }) {
  return build(ref, rel, `Note de mandat — Veille ${domaine}`, [
    { meta: [["Équipe missionnée", cabinet], ["Émetteur", "Direction qualité"], ["Version", "1.0"], ["Statut", "Validé"]] },
    { h: "Contexte" },
    { p: contexte },
    { h: "Périmètre confié" },
    { p: perimetre },
    { h: "Attendus du comité de conformité" },
    { list: attendus },
    { h: "Points de vigilance" },
    { list: vigilance }
  ]);
}

// -- Documents communs (niveau mission) ------------------------------------

// Organigramme et politique qualité : documents transverses de Montrel
// Industries, identiques à ceux du module « Autres référentiels » (même
// entreprise réelle). Repris ici pour que le centre documentaire tienne les
// promesses du support de cours (immersion : organigramme, politique qualité,
// rapport d'audit, messagerie).
await build("ORG-003", "rh/ORG-003_Organigramme.pdf", "Organigramme de Direction", [
  { meta: [["Référence", "ORG-003"], ["Indice de version", "4"], ["Mise à jour", "18/09/2023"], ["Diffusion", "Personnel encadrant, RH, sur demande auditeurs/clients"]] },
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

await build("POL-003", "qualite/POL-003_Politique_Qualite.pdf", "Politique Qualité", [
  { meta: [["Référence", "POL-003"], ["Indice de version", "6"], ["Date d'application", "15/01/2024"], ["Diffusion", "Ensemble du personnel, clients et parties intéressées sur demande"]] },
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

await build("NOTE-003", "direction/NOTE-003_Cadrage_Veille.pdf", "Note de cadrage — Veille réglementaire", [
  { p: "Orientations de la direction pour structurer la veille." },
  { meta: [["Émetteur", "Direction générale"], ["Version", "1.0"], ["Statut", "Validé"]] },
  { h: "Objectif" },
  { p: "Doter Montrel Industries d'un dispositif de veille réglementaire et normative fiable, tenable et orienté vers la mise en conformité." },
  { h: "Principes attendus" },
  { list: [
    "Une veille par domaine, avec un responsable identifié",
    "Une analyse d'impact systématique des évolutions",
    "Une priorisation des actions de mise en conformité",
    "Un dispositif tenable dans le temps (sources, fréquence)"
  ] },
  { h: "Périmètre de la mission" },
  { p: "Quatre domaines de veille sont confiés : environnement, santé-sécurité au travail, produit & normes, système & transverse." }
]);

await build("COPIL-003", "direction/COPIL-003_Ordre_du_jour_Comite_Conformite.pdf", "Ordre du jour — Comité de conformité", [
  { p: "Restitution des travaux de veille par domaine." },
  { meta: [["Émetteur", "Direction générale"], ["Version", "1.0"], ["Statut", "Validé"]] },
  { h: "Objet" },
  { p: "Présenter, pour chaque domaine, le tableau de veille annoté, l'analyse d'impact et le plan de mise en conformité." },
  { h: "Attendus par équipe" },
  { list: [
    "Tableau de veille annoté (exigences, sources, statut)",
    "Analyse d'impact des évolutions récentes",
    "Plan de mise en conformité priorisé",
    "Dispositif de veille pérenne (responsabilités, fréquence)"
  ] },
  { h: "Déroulé" },
  { list: [
    "Restitution par domaine",
    "Échanges avec la direction et le manager QSE",
    "Priorités de mise en conformité retenues"
  ] }
]);

await build("AUD-003", "qualite/AUD-003_Rapport_Audit_Veille.pdf", "Rapport d'audit — Détection tardive", [
  { p: "Constat à l'origine de la mission de structuration de la veille." },
  { meta: [["Émetteur", "Audit interne"], ["Version", "1.0"], ["Statut", "Validé"]] },
  { h: "Constat" },
  { p: "L'audit a relevé plusieurs évolutions réglementaires et normatives détectées après leur entrée en vigueur, ou en passe de le devenir, faute de dispositif de veille structuré." },
  { h: "Exemples relevés" },
  { list: [
    "Volume de solvants d'une nouvelle ligne de traitement de surface dépassant potentiellement un seuil ICPE, sans revérification du régime applicable",
    "Droit d'alerte du CSE sur un poste dont le DUERP n'a pas été mis à jour depuis 14 mois",
    "Dossier technique produit resté sur l'ancienne Directive Machines alors que le nouveau règlement européen approche",
    "Engagement contractuel de sécurité de l'information pris par le commercial, sans dispositif interne pour le tenir"
  ] },
  { h: "Recommandation" },
  { p: "Structurer une veille par domaine, reliant exigences, sources, impact et statut de conformité, avec des responsabilités et une fréquence définies." }
]);

await build("TAB-003", "qualite/TAB-003_Tableau_Veille_Actuel.pdf", "Tableau de veille actuel", [
  { p: "État existant, partiel et non consolidé." },
  { meta: [["Émetteur", "Direction qualité"], ["Version", "0.9"], ["Statut", "Brouillon"]] },
  { h: "État des lieux" },
  { p: "La veille existe de façon informelle et dispersée. Le tableau ci-dessous illustre son caractère lacunaire — chaque domaine porte aujourd'hui une situation ouverte et non traitée." },
  { h: "Extrait du suivi actuel" },
  { table: { head: ["Domaine", "État actuel"], widths: [1.4, 3], rows: [
    ["Environnement", "Seuil ICPE potentiellement dépassé sur le site secondaire, non revérifié ; restriction REACH sur la NMP (solvant utilisé sur la ligne) en cours de notification."],
    ["Santé-sécurité au travail", "Droit d'alerte CSE en cours sur un poste ; DUERP du site secondaire non mis à jour depuis 14 mois."],
    ["Produit & normes", "Dossier technique basé sur l'ancienne Directive Machines ; nouveau règlement et demande client non traités."],
    ["Système & transverse", "Exigence client liée à la cybersécurité déjà acceptée commercialement, sans dispositif interne."]
  ] } },
  { h: "Limite principale" },
  { p: "Aucune analyse d'impact ni priorisation ne relie les exigences aux actions de mise en conformité." }
]);

// -- Par domaine : fiche de veille + note de mandat ------------------------

await ficheVeille("FV-ENV", "environnement/FV-ENV_Exigences_Environnement.pdf", {
  domaine: "Environnement",
  contexte: "Deux sujets coexistent actuellement : la vérification du régime ICPE d'une ligne récemment ajoutée sur le site secondaire, et l'anticipation de la restriction REACH applicable à la NMP (N-méthylpyrrolidone), un solvant utilisé sur cette ligne.",
  exigences: [
    ["Classement ICPE des installations", "Nomenclature ICPE (rubriques stockage et traitement de surface)", "À revérifier depuis l'ajout de la nouvelle ligne"],
    ["Gestion et traçabilité des déchets industriels", "Code de l'environnement", "Suivi partiel"],
    ["Restriction REACH sur la NMP (N-méthylpyrrolidone)", "Règlement REACH, annexe XVII, entrée 71", "Notification fournisseur reçue, impact non évalué"]
  ],
  sources: ["Journal officiel et bases réglementaires environnement (Légifrance, base AIDA)", "AFNOR / Norm'Info pour les évolutions normatives", "Fédérations professionnelles", "Notifications réglementaires des fournisseurs de produits chimiques", "Prescriptions préfectorales des sites"],
  evolutions: ["La ligne de traitement de surface ajoutée il y a 8 mois a fait grimper le volume de solvants stockés : le seuil de classement ICPE est à revérifier sans délai.", "Un fournisseur a notifié la restriction européenne applicable à la NMP (N-méthylpyrrolidone), un solvant utilisé sur cette ligne, avec un délai de mise en conformité serré."],
  attention: ["Le régime ICPE applicable (déclaration, enregistrement, autorisation) conditionne des obligations très différentes : l'écart peut être lourd.", "Si une exploitation non conforme depuis 8 mois est confirmée, elle doit être traitée avec prudence dans la restitution."]
});

await noteMandat("NM-ENV", "environnement/NM-ENV_Note_Mandat_Environnement.pdf", {
  domaine: "Environnement",
  cabinet: "Cabinet Horizon",
  contexte: "Une nouvelle ligne de traitement de surface, ajoutée il y a 8 mois sur le site secondaire, a fait grimper le volume de solvants stockés au-delà d'un seuil ICPE sans revérification du régime, et un fournisseur notifie la restriction REACH applicable à la NMP (N-méthylpyrrolidone), un des produits utilisés sur cette ligne.",
  perimetre: "Qualifier le régime ICPE réellement applicable, évaluer le risque d'une exploitation déjà non conforme, et intégrer l'échéance REACH dans le plan de mise en conformité.",
  attendus: ["Tableau de veille environnement, avec le régime ICPE clarifié", "Analyse d'impact des deux évolutions (ICPE et REACH)", "Plan de mise en conformité priorisé, avec les échéances"],
  vigilance: ["Ne pas minimiser un possible dépassement de seuil déjà en cours depuis 8 mois", "Distinguer l'urgence ICPE du chantier REACH, aux échéances différentes"]
});

await ficheVeille("FV-SST", "sst/FV-SST_Exigences_SST.pdf", {
  domaine: "Santé-sécurité au travail",
  contexte: "Une situation d'urgence (droit d'alerte du CSE sur un poste) coexiste avec un chantier de fond sur les obligations de conservation du DUERP issues de la réforme santé au travail.",
  exigences: [
    ["Obligation de sécurité de l'employeur", "Code du travail, art. L.4121-1", "Engagée sur la presse d'assemblage n°3"],
    ["Droit d'alerte du CSE pour danger grave et imminent", "Code du travail, dispositions CSE", "En cours de traitement"],
    ["Conservation et dépôt du DUERP", "Réforme santé au travail (loi du 2 août 2021)", "Non couvert : DUERP non mis à jour depuis 14 mois"]
  ],
  sources: ["Code du travail (Légifrance)", "INRS", "Retours du CSE et des animateurs prévention", "Organismes de prévention (CARSAT, services de santé au travail)"],
  evolutions: ["Le CSE a formalisé un droit d'alerte pour danger grave et imminent sur la presse d'assemblage n°3, après un quasi-accident.", "La réforme santé au travail impose désormais une conservation du DUERP pendant 40 ans et, à terme, son dépôt sur un portail dématérialisé."],
  attention: ["Distinguer le traitement de l'urgence (poste n°3) du chantier de fond (mise à jour et conservation du DUERP).", "Anticiper un contrôle possible de l'inspection du travail, déjà informée par le CSE."]
});

await noteMandat("NM-SST", "sst/NM-SST_Note_Mandat_SST.pdf", {
  domaine: "Santé-sécurité au travail",
  cabinet: "Cabinet Polaris",
  contexte: "Un droit de retrait suivi d'un droit d'alerte du CSE sur la presse d'assemblage n°3 révèle, en creusant, un DUERP du site secondaire non mis à jour depuis 14 mois, alors que la réforme santé au travail a changé les obligations de conservation.",
  perimetre: "Traiter le droit d'alerte en cours et structurer la veille sur les obligations de mise à jour, de conservation et de dépôt du DUERP.",
  attendus: ["Tableau de veille SST, distinguant l'urgence du poste n°3 et le chantier DUERP", "Analyse d'impact sur les postes et les sites", "Plan de mise en conformité priorisé"],
  vigilance: ["Ne pas traiter l'urgence sans regarder le chantier de fond, et inversement", "Se préparer à un contrôle possible de l'inspection du travail"]
});

await ficheVeille("FV-PROD", "produit/FV-PROD_Exigences_Produit.pdf", {
  domaine: "Produit & normes sectorielles",
  contexte: "La transition entre la Directive Machines et le nouveau Règlement Machines européen est en cours, avec une échéance qui approche et une demande de conformité immédiate formulée par un client.",
  exigences: [
    ["Marquage CE des machines", "Directive 2006/42/CE, puis Règlement (UE) 2023/1230 (application générale janvier 2027)", "Dossier technique actuel basé sur l'ancienne directive"],
    ["Exigences de cybersécurité pour machines connectées", "Nouvelles exigences essentielles du Règlement Machines", "Non couvert à ce jour"],
    ["Documentation technique et notice", "Réglementation machines", "À faire évoluer"]
  ],
  sources: ["Organismes de normalisation (AFNOR, CEN/CENELEC)", "Norm'Info et veille sectorielle", "Exigences exprimées par les donneurs d'ordre dans les appels d'offres"],
  evolutions: ["Le Règlement Machines devient pleinement applicable en janvier 2027, avec de nouvelles exigences de cybersécurité pour les machines connectées.", "Un client a demandé une attestation de conformité au nouveau règlement dans un appel d'offres en cours."],
  attention: ["Les modules de pilotage à supervision à distance sont directement concernés par le volet cybersécurité, entièrement nouveau pour Montrel.", "Le calendrier de l'appel d'offres peut être plus court que celui laissé par le règlement lui-même."]
});

await noteMandat("NM-PROD", "produit/NM-PROD_Note_Mandat_Produit.pdf", {
  domaine: "Produit & normes sectorielles",
  cabinet: "Cabinet Meridian",
  contexte: "Le Règlement Machines (UE) 2023/1230 remplace progressivement la Directive Machines, avec de nouvelles exigences de cybersécurité pour les machines connectées ; un client demande déjà une attestation de conformité au nouveau texte.",
  perimetre: "Clarifier ce qui change entre l'ancienne directive et le nouveau règlement, évaluer l'écart du dossier technique actuel, et construire une trajectoire crédible avant l'échéance de janvier 2027.",
  attendus: ["Tableau de veille produit, avec le volet cybersécurité identifié", "Analyse d'impact sur le dossier technique et les produits concernés", "Plan de mise en conformité priorisé, exploitable pour répondre au client"],
  vigilance: ["Ne pas confondre l'échéance réglementaire (2027) et l'échéance commerciale, plus courte", "Le volet cybersécurité est entièrement nouveau : ne pas le sous-traiter à un simple ajustement documentaire"]
});

await ficheVeille("FV-SYS", "systeme/FV-SYS_Exigences_Systeme.pdf", {
  domaine: "Système & transverse",
  contexte: "Une exigence contractuelle client, liée à la directive européenne NIS2, dépasse le périmètre couvert par l'ISO 9001 actuel — et un engagement a déjà été pris côté commercial.",
  exigences: [
    ["Système de management de la qualité", "ISO 9001:2015", "En place, ne couvre pas la sécurité de l'information"],
    ["Sécurité de l'information pour les fonctions connectées (télémaintenance)", "Exigence contractuelle d'un client régulé au titre de la directive NIS2", "Engagement commercial pris, dispositif interne inexistant"],
    ["Traçabilité des exigences clients transverses", "Contrats et avenants", "Non consolidée entre services"]
  ],
  sources: ["Organismes de certification", "Veille clients et contrats", "Veille réglementaire européenne sur la cybersécurité", "Consolidation entre services (commercial, qualité, système d'information)"],
  evolutions: ["Un client représentant environ 18 % du chiffre d'affaires impose une clause de sécurité de l'information sur la télémaintenance, en référence à la directive NIS2.", "Le service commercial a déjà répondu favorablement à cette clause sans consultation de la direction qualité."],
  attention: ["L'écart entre l'engagement déjà pris et la capacité réelle de Montrel doit être évalué sans détour.", "Un système de management de la sécurité de l'information formalisé n'existe pas encore : la réponse doit être réaliste, pas cosmétique."]
});

await noteMandat("NM-SYS", "systeme/NM-SYS_Note_Mandat_Systeme.pdf", {
  domaine: "Système & transverse",
  cabinet: "Cabinet Nova",
  contexte: "Un client stratégique a inséré une clause de sécurité de l'information liée à NIS2 dans un avenant contractuel, déjà accepté par le commercial, alors que Montrel n'a aucun dispositif formalisé sur ce sujet et que l'ISO 9001 actuel ne le couvre pas.",
  perimetre: "Qualifier l'exigence client et son ancrage réglementaire, évaluer l'écart avec l'engagement déjà pris, et proposer une trajectoire réaliste ou une position claire à faire remonter au COMEX.",
  attendus: ["Tableau de veille système, avec l'exigence NIS2 qualifiée", "Analyse d'impact sur le système de management actuel", "Plan de mise en conformité priorisé, ou alerte argumentée si l'engagement n'est pas tenable"],
  vigilance: ["Ne pas endosser silencieusement un engagement déjà pris sans en avoir vérifié la faisabilité", "Clarifier les responsabilités transverses entre commercial, qualité et système d'information"]
});

console.log("14 documents veille-reglementaire générés.");
