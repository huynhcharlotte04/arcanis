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

function ficheVeille(ref, rel, { domaine, exigences, sources, evolutions, attention }) {
  return build(ref, rel, `Exigences applicables — ${domaine}`, [
    { p: "Panorama des exigences réglementaires et normatives du domaine." },
    { meta: [["Version", "1.0"], ["Statut", "Validé"]] },
    { h: "Périmètre du domaine" },
    { p: `Domaine de veille : ${domaine}. Exigences applicables à Montrel Industries, à compléter et tenir à jour.` },
    { h: "Principales exigences applicables" },
    { list: exigences },
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
  { p: "L'audit a relevé plusieurs évolutions réglementaires et normatives détectées après leur entrée en vigueur, faute de dispositif de veille structuré." },
  { h: "Exemples relevés" },
  { list: [
    "Évolution sur la gestion de déchets industriels appliquée dans l'urgence",
    "Obligations sur des postes sensibles intégrées avec retard",
    "Révision d'une norme technique produit non détectée à temps"
  ] },
  { h: "Recommandation" },
  { p: "Structurer une veille par domaine, reliant exigences, sources, impact et statut de conformité, avec des responsabilités et une fréquence définies." }
]);

await build("TAB-003", "qualite/TAB-003_Tableau_Veille_Actuel.pdf", "Tableau de veille actuel", [
  { p: "État existant, partiel et non consolidé." },
  { meta: [["Émetteur", "Direction qualité"], ["Version", "0.9"], ["Statut", "Brouillon"]] },
  { h: "État des lieux" },
  { p: "La veille existe de façon informelle et dispersée. Le tableau ci-dessous illustre son caractère lacunaire." },
  { h: "Extrait du suivi actuel" },
  { table: { head: ["Domaine", "État actuel"], widths: [1.4, 3], rows: [
    ["Environnement", "Suivi partiel, sources non formalisées, impact non évalué."],
    ["Santé-sécurité au travail", "Suivi par la prévention, sans consolidation."],
    ["Produit & normes", "Suivi réactif, au coup par coup."],
    ["Système & transverse", "Pas de responsable identifié."]
  ] } },
  { h: "Limite principale" },
  { p: "Aucune analyse d'impact ni priorisation ne relie les exigences aux actions de mise en conformité." }
]);

// -- Par domaine : fiche de veille + note de mandat ------------------------

await ficheVeille("FV-ENV", "environnement/FV-ENV_Exigences_Environnement.pdf", {
  domaine: "Environnement",
  exigences: ["Classement et obligations ICPE des sites", "Gestion et traçabilité des déchets industriels", "Suivi des rejets et émissions"],
  sources: ["Journal officiel et bases réglementaires environnement", "Fédérations professionnelles", "Prescriptions préfectorales des sites"],
  evolutions: ["Évolution récente sur le tri de certains déchets industriels", "Renforcement attendu du suivi des rejets"],
  attention: ["Différences entre les deux sites", "Preuves de conformité à consolider"]
});

await noteMandat("NM-ENV", "environnement/NM-ENV_Note_Mandat_Environnement.pdf", {
  domaine: "Environnement",
  cabinet: "Cabinet Horizon",
  contexte: "Une évolution sur les déchets industriels a été appliquée dans l'urgence, faute de veille anticipée.",
  perimetre: "Structurer la veille du domaine environnement et évaluer l'impact des évolutions récentes.",
  attendus: ["Tableau de veille environnement", "Analyse d'impact des évolutions", "Plan de mise en conformité priorisé"],
  vigilance: ["Couvrir les deux sites", "Relier chaque exigence à une source et un statut"]
});

await ficheVeille("FV-SST", "sst/FV-SST_Exigences_SST.pdf", {
  domaine: "Santé-sécurité au travail",
  exigences: ["Obligations du Code du travail applicables", "Prévention des risques sur postes sensibles", "Document unique et plans d'action"],
  sources: ["Bases réglementaires travail et sécurité", "Organismes de prévention", "Retours des animateurs prévention"],
  evolutions: ["Nouvelles obligations sur certains postes sensibles", "Évolution des règles de prévention"],
  attention: ["Lien entre exigences et situations de travail réelles", "Preuves mobilisables en cas de contrôle"]
});

await noteMandat("NM-SST", "sst/NM-SST_Note_Mandat_SST.pdf", {
  domaine: "Santé-sécurité au travail",
  cabinet: "Cabinet Polaris",
  contexte: "Des évolutions concernant des postes sensibles doivent être intégrées sans dispositif de veille commun.",
  perimetre: "Structurer la veille santé-sécurité au travail et évaluer l'impact des évolutions récentes.",
  attendus: ["Tableau de veille SST", "Analyse d'impact sur postes et sites", "Plan de mise en conformité priorisé"],
  vigilance: ["Relier exigences et situations réelles", "Consolider les preuves de conformité"]
});

await ficheVeille("FV-PROD", "produit/FV-PROD_Exigences_Produit.pdf", {
  domaine: "Produit & normes sectorielles",
  exigences: ["Exigences de marquage applicables aux produits", "Normes techniques sectorielles par gamme", "Exigences de documentation technique"],
  sources: ["Organismes de normalisation", "Fédérations sectorielles", "Exigences des donneurs d'ordre"],
  evolutions: ["Révision récente d'une norme technique produit", "Évolutions attendues sur la documentation technique"],
  attention: ["Relier chaque norme aux produits concernés", "Anticiper avant mise sur le marché"]
});

await noteMandat("NM-PROD", "produit/NM-PROD_Note_Mandat_Produit.pdf", {
  domaine: "Produit & normes sectorielles",
  cabinet: "Cabinet Meridian",
  contexte: "Une norme technique applicable à une gamme a été révisée sans détection systématique.",
  perimetre: "Structurer la veille produit et normes sectorielles et évaluer l'impact des évolutions.",
  attendus: ["Tableau de veille produit", "Analyse d'impact sur les produits", "Plan de mise en conformité priorisé"],
  vigilance: ["Relier normes et produits", "Anticiper les évolutions avant commercialisation"]
});

await ficheVeille("FV-SYS", "systeme/FV-SYS_Exigences_Systeme.pdf", {
  domaine: "Système & transverse",
  exigences: ["Évolutions du référentiel ISO 9001", "Exigences clients transverses", "Obligations contractuelles et données"],
  sources: ["Organismes de certification", "Exigences clients et contrats", "Veilles des différents services à consolider"],
  evolutions: ["Nouvelles exigences clients transverses", "Évolutions attendues des référentiels système"],
  attention: ["Consolider les veilles des services", "Identifier un responsable transverse"]
});

await noteMandat("NM-SYS", "systeme/NM-SYS_Note_Mandat_Systeme.pdf", {
  domaine: "Système & transverse",
  cabinet: "Cabinet Nova",
  contexte: "Les évolutions des référentiels et des exigences clients arrivent sans anticipation au niveau système.",
  perimetre: "Structurer la veille système et transverse et évaluer l'impact des évolutions récentes.",
  attendus: ["Tableau de veille système", "Analyse d'impact sur le système de management", "Plan de mise en conformité priorisé"],
  vigilance: ["Consolider ce que chaque service détecte", "Clarifier les responsabilités transverses"]
});

console.log("14 documents veille-reglementaire générés.");
