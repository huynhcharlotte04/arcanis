// Générateur des documents PDF du module « QSEAL13 » (management des processus).
//
// Source versionnée du pack documentaire : chaque document est décrit en
// données ci-dessous, puis rendu en PDF avec l'en-tête commun de la plateforme
// (emblème Montrel + filet doré), défini dans ./lib/letterhead.mjs.
//
// Prérequis : pdfkit doit être résolvable (lien symbolique ou installation).
// Puis : `node scripts/generate-qseal13-pdfs.mjs`.

import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildDocument } from "./lib/letterhead.mjs";

const ROOT = path.resolve(fileURLToPath(import.meta.url), "../..");
const OUT = path.join(ROOT, "public/documents/qseal13-bpm");
const BANNER = "Management des processus QSE — Approche BPM";

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

function fichePilote(ref, rel, { processus, pilote, finalite, entrees, sorties, activites, interfaces, indicateurs }) {
  return build(ref, rel, `Fiche pilote — Processus ${processus}`, [
    { p: "Description synthétique du processus tel qu'il fonctionne aujourd'hui." },
    { meta: [["Pilote du processus", pilote], ["Version", "1.0"], ["Statut", "Validé"]] },
    { h: "Finalité du processus" },
    { p: finalite },
    { h: "Données d'entrée" },
    { list: entrees },
    { h: "Données de sortie" },
    { list: sorties },
    { h: "Activités clés" },
    { list: activites },
    { h: "Interfaces amont / aval" },
    { list: interfaces },
    { h: "Indicateurs actuels (à challenger)" },
    { list: indicateurs }
  ]);
}

function noteMandat(ref, rel, { processus, cabinet, contexte, perimetre, attendus, vigilance }) {
  return build(ref, rel, `Note de mandat — Processus ${processus}`, [
    { meta: [["Équipe missionnée", cabinet], ["Émetteur", "Direction qualité"], ["Version", "1.0"], ["Statut", "Validé"]] },
    { h: "Contexte" },
    { p: contexte },
    { h: "Périmètre confié" },
    { p: perimetre },
    { h: "Attendus de la revue de direction" },
    { list: attendus },
    { h: "Points de vigilance" },
    { list: vigilance }
  ]);
}

// -- Documents communs (niveau mission) ------------------------------------

await build("CART-002", "qualite/CART-002_Cartographie_Processus.pdf", "Cartographie macro des processus", [
  { p: "Vue d'ensemble des processus de Montrel Industries." },
  { meta: [["Émetteur", "Direction qualité"], ["Version", "1.0"], ["Statut", "Validé"]] },
  { h: "Processus de management" },
  { list: [
    "Pilotage stratégique et revue de direction",
    "Management de la qualité et amélioration continue"
  ] },
  { h: "Processus de réalisation (chaîne commande → livraison)" },
  { list: [
    "Prise de commande / Commercial",
    "Achats / Approvisionnement",
    "Production / Réalisation",
    "Livraison / Service client et traitement des réclamations"
  ] },
  { h: "Processus support" },
  { list: [
    "Ressources humaines et compétences",
    "Système d'information",
    "Maintenance et moyens industriels"
  ] },
  { h: "Constat" },
  { p: "Les processus sont formalisés mais pilotés en silos. Les réclamations clients se logent principalement aux interfaces entre processus de réalisation." }
]);

await build("STRAT-002", "direction/STRAT-002_Plan_Strategique_Processus.pdf", "Plan stratégique — Orientations processus", [
  { p: "Priorités de la direction pour le management par les processus." },
  { meta: [["Émetteur", "Direction générale"], ["Version", "1.0"], ["Statut", "Validé"]] },
  { h: "Orientation 1 — Piloter de bout en bout" },
  { p: "Passer d'un pilotage par service à un pilotage par processus, du devis à la livraison, pour tenir les engagements clients." },
  { h: "Orientation 2 — Réduire les réclamations" },
  { p: "Ramener les réclamations sur le traitement des commandes à un niveau maîtrisé, en agissant sur les causes et non sur les symptômes." },
  { h: "Orientation 3 — Mobiliser les pilotes" },
  { p: "Faire des pilotes de processus les acteurs de la démarche, en s'appuyant sur des indicateurs partagés et des objectifs communs." },
  { h: "Facteurs de réussite" },
  { list: [
    "Une lecture du réel, pas du théorique",
    "Des indicateurs utiles au pilotage",
    "L'adhésion des équipes et la maîtrise des interfaces"
  ] }
]);

await build("RECL-002", "service-client/RECL-002_Synthese_Reclamations.pdf", "Synthèse des réclamations clients", [
  { p: "Traitement des commandes — deux derniers trimestres." },
  { meta: [["Émetteur", "Service client"], ["Version", "1.0"], ["Statut", "Validé"]] },
  { h: "Familles de réclamations" },
  { table: { head: ["Famille", "Description"], widths: [1.3, 3], rows: [
    ["Délais non tenus", "Retards de livraison par rapport à la date confirmée au client."],
    ["Confirmations erronées", "Commande confirmée puis modifiée ou non tenable en l'état."],
    ["Informations incomplètes", "Spécifications produits ambiguës ou manquantes en entrée."],
    ["Suivi insuffisant", "Absence d'information proactive en cas d'aléa (rupture, retard)."]
  ] } },
  { h: "Origines pressenties" },
  { list: [
    "Ruptures d'information entre prise de commande, achats et production",
    "Absence de boucle de retour entre le service client et l'amont",
    "Priorisation peu lisible des commandes entre les deux sites"
  ] },
  { h: "Enjeu" },
  { p: "La majorité des réclamations naissent aux interfaces entre processus. Les cartographies doivent rendre ces interfaces visibles et mesurables." }
]);

await build("COPIL-002", "direction/COPIL-002_Ordre_du_jour_Revue_Direction.pdf", "Ordre du jour — Revue de direction", [
  { p: "Restitution des travaux de cartographie des processus." },
  { meta: [["Émetteur", "Direction générale"], ["Version", "1.0"], ["Statut", "Validé"]] },
  { h: "Objet de la revue" },
  { p: "Présenter, pour chaque processus étudié, la cartographie annotée, les points de rupture et le plan d'indicateurs proposés." },
  { h: "Attendus par équipe" },
  { list: [
    "Cartographie du processus réel, annotée",
    "Points de rupture reliés aux réclamations clients",
    "Interfaces amont / aval du processus",
    "Plan d'indicateurs de pilotage",
    "Leviers de mobilisation des pilotes"
  ] },
  { h: "Déroulé" },
  { list: [
    "Restitution par équipe",
    "Échanges avec la direction et le manager QSE",
    "Décisions de pilotage et suites à donner"
  ] }
]);

// -- Par équipe : fiche pilote + note de mandat ----------------------------

await fichePilote("FP-COM", "commande/FP-COM_Fiche_Pilote_Commande.pdf", {
  processus: "Prise de commande",
  pilote: "Sophie Renaud (Administration des ventes)",
  finalite: "Transformer une demande client en commande confirmée, complète et exploitable par l'aval.",
  entrees: ["Demande ou appel d'offres client", "Catalogue et conditions commerciales", "Disponibilité prévisionnelle"],
  sorties: ["Commande confirmée au client", "Dossier de commande transmis aux achats et à la production"],
  activites: ["Qualification du besoin", "Chiffrage et proposition", "Confirmation de commande", "Transmission à l'aval"],
  interfaces: ["Amont : client, commercial", "Aval : achats, production, planification"],
  indicateurs: ["Délai de confirmation de commande", "Taux de commandes confirmées complètes", "Taux de modification après confirmation"]
});

await noteMandat("NM-COM", "commande/NM-COM_Note_Mandat_Commande.pdf", {
  processus: "Prise de commande",
  cabinet: "Cabinet Horizon",
  contexte: "Une part des réclamations provient de commandes confirmées trop vite, avec des données incomplètes transmises à l'aval.",
  perimetre: "Cartographier le processus de prise de commande, de la demande client à la transmission à l'aval.",
  attendus: ["Cartographie annotée du processus réel", "Points de rupture reliés aux réclamations", "Indicateurs de fiabilité des confirmations"],
  vigilance: ["Regarder les interfaces avec les achats et la production", "Distinguer le processus théorique du réel"]
});

await fichePilote("FP-ACH", "achats/FP-ACH_Fiche_Pilote_Achats.pdf", {
  processus: "Achats / Approvisionnement",
  pilote: "Karim Belkacem (Approvisionnement)",
  finalite: "Assurer la disponibilité des composants et matières nécessaires au respect des commandes clients.",
  entrees: ["Dossier de commande", "Prévisions et stocks", "Panel fournisseurs"],
  sorties: ["Composants disponibles pour la production", "Alertes en cas d'aléa fournisseur"],
  activites: ["Analyse du besoin", "Passation et suivi des commandes fournisseurs", "Gestion des aléas et non-conformités"],
  interfaces: ["Amont : prise de commande, production", "Aval : production, service client"],
  indicateurs: ["Taux de service fournisseur", "Délai d'approvisionnement des composants critiques", "Taux de rupture impactant une commande"]
});

await noteMandat("NM-ACH", "achats/NM-ACH_Note_Mandat_Achats.pdf", {
  processus: "Achats / Approvisionnement",
  cabinet: "Cabinet Polaris",
  contexte: "Les ruptures de composants critiques se transforment en retards clients, sans communication anticipée vers l'aval.",
  perimetre: "Cartographier le processus achats et approvisionnement et ses interfaces amont / aval.",
  attendus: ["Cartographie annotée du processus", "Ruptures se répercutant sur les réclamations", "Indicateurs de pilotage fournisseur"],
  vigilance: ["Rendre visibles les aléas et leur traitement", "Relier les ruptures aux effets clients"]
});

await fichePilote("FP-PROD", "production/FP-PROD_Fiche_Pilote_Production.pdf", {
  processus: "Production / Réalisation",
  pilote: "Antoine Ferreira (Production)",
  finalite: "Réaliser les produits conformes aux spécifications et les mettre à disposition dans les délais.",
  entrees: ["Ordres de fabrication", "Composants approvisionnés", "Spécifications produits"],
  sorties: ["Produits réalisés et contrôlés", "Traçabilité des aléas de production"],
  activites: ["Ordonnancement", "Fabrication et assemblage", "Contrôle et essais", "Mise à disposition"],
  interfaces: ["Amont : commande, achats", "Aval : livraison, service client"],
  indicateurs: ["Taux de reprise / retouche", "Respect du délai de mise à disposition", "Taux de conformité au premier contrôle"]
});

await noteMandat("NM-PROD", "production/NM-PROD_Note_Mandat_Production.pdf", {
  processus: "Production / Réalisation",
  cabinet: "Cabinet Meridian",
  contexte: "Des reprises évitables naissent de spécifications incomplètes en entrée et d'une priorisation peu lisible entre sites.",
  perimetre: "Cartographier le processus de production, de l'ordre de fabrication à la mise à disposition.",
  attendus: ["Cartographie annotée du processus", "Ruptures internes dégradant délai et conformité", "Indicateurs de performance de réalisation"],
  vigilance: ["Ne pas isoler la production de la chaîne", "Distinguer causes internes et causes amont"]
});

await fichePilote("FP-SAV", "livraison/FP-SAV_Fiche_Pilote_Livraison.pdf", {
  processus: "Livraison & traitement des réclamations",
  pilote: "Élodie Nguyen (Service client)",
  finalite: "Livrer les clients dans les délais et traiter les réclamations en alimentant l'amélioration de l'amont.",
  entrees: ["Produits mis à disposition", "Commandes clients", "Réclamations clients"],
  sorties: ["Livraisons réalisées", "Réclamations traitées", "Retours d'information vers l'amont"],
  activites: ["Expédition", "Suivi client", "Traitement des réclamations", "Analyse des causes"],
  interfaces: ["Amont : production, achats, commande", "Aval : client"],
  indicateurs: ["Taux de livraison à l'heure", "Délai de traitement des réclamations", "Taux de réclamations récurrentes"]
});

await noteMandat("NM-SAV", "livraison/NM-SAV_Note_Mandat_Livraison.pdf", {
  processus: "Livraison & traitement des réclamations",
  cabinet: "Cabinet Nova",
  contexte: "Les réclamations sont absorbées par le service client mais leurs causes ne remontent pas vers l'amont.",
  perimetre: "Cartographier le processus de livraison et de traitement des réclamations.",
  attendus: ["Cartographie annotée du processus", "Causes récurrentes et leurs origines amont", "Indicateurs de satisfaction et de traitement"],
  vigilance: ["Rendre visibles les boucles de retour manquantes", "Relier la satisfaction aux processus amont"]
});

console.log("12 documents qseal13-bpm générés.");
