// Générateur des documents PDF du module « Cartographie des processus et
// parties prenantes » (QSEAL11).
//
// Chaque cabinet traite une entreprise cliente différente (secteur
// différent) : Keryos Médical, Arvano Conseil, Virel Semiconducteurs,
// Haranis Construction. Chaque entreprise a son propre jeu de documents
// (organigramme, cartographie « version 0 » + inventaire d'activités, note
// de mandat), rendu avec l'en-tête commun de la plateforme mais le nom et
// le monogramme de SON entreprise (voir ./lib/letterhead.mjs).
//
// Prérequis : pdfkit doit être résolvable (lien symbolique ou installation).
// Puis : `node scripts/generate-qseal11-pdfs.mjs`.

import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildDocument } from "./lib/letterhead.mjs";

const ROOT = path.resolve(fileURLToPath(import.meta.url), "../..");
const OUT = path.join(ROOT, "public/documents/qseal11-cartographie");
const BANNER = "Cartographie des processus et parties prenantes";

function build(ref, rel, docTitle, blocks, companyName, monogram) {
  return buildDocument({
    outPath: path.join(OUT, rel),
    ref,
    headerSubtitle: BANNER,
    docTitle,
    blocks,
    companyName,
    monogram
  });
}

// -- Fabriques de documents récurrents, par entreprise ---------------------

function ficheOrganigramme(ref, rel, { company, monogram, dg, equipe, effectif, siteDetail }) {
  return build(
    ref,
    rel,
    "Organigramme",
    [
      { meta: [["Référence", ref], ["Entreprise", company], ["Diffusion", "Encadrement, sur demande auditeurs/clients"]] },
      { h: "Direction" },
      { table: { head: ["Fonction", "Nom", "Rattachement"], widths: [2.2, 1.6, 1.6], rows: [[dg.role, dg.nom, "—"], ...equipe.map((p) => [p.role, p.nom, dg.nom])] } },
      { h: "Effectif" },
      { p: effectif },
      { h: "Implantation" },
      { p: siteDetail }
    ],
    company.toUpperCase(),
    monogram
  );
}

function ficheCartographieVersion0(ref, rel, { company, monogram, intro, cases, limite, inventaire }) {
  return build(
    ref,
    rel,
    "Cartographie « version 0 » et inventaire des activités",
    [
      { p: intro },
      { meta: [["Entreprise", company], ["Version", "0"], ["Statut", "Non validé"]] },
      { h: "Cases identifiées sur la carte actuelle" },
      { table: { head: ["Case", "Nature", "Pilote désigné"], widths: [1.8, 2, 1.4], rows: cases } },
      { h: "Limite principale" },
      { p: limite },
      { h: "Inventaire des activités à regrouper" },
      { list: inventaire },
      { h: "À faire" },
      { p: `Regroupez, nommez (verbe d'action + objet) et hiérarchisez ces activités pour proposer une cartographie corrigée de ${company}, en intégrant ses parties prenantes à chaque niveau.` }
    ],
    company.toUpperCase(),
    monogram
  );
}

function noteMandat(ref, rel, { company, monogram, cabinet, contexte, perimetre, attendus, vigilance }) {
  return build(
    ref,
    rel,
    `Note de mandat — ${company}`,
    [
      { meta: [["Équipe missionnée", cabinet], ["Entreprise", company], ["Émetteur", "Direction qualité"], ["Statut", "Validé"]] },
      { h: "Contexte" },
      { p: contexte },
      { h: "Périmètre confié" },
      { p: perimetre },
      { h: "Attendus du comité de direction" },
      { list: attendus },
      { h: "Points de vigilance" },
      { list: vigilance }
    ],
    company.toUpperCase(),
    monogram
  );
}

// -- Document commun (toutes les entreprises) -------------------------------

await build(
  "REGLES-004",
  "direction/REGLES-004_Regles_Exercice.pdf",
  "Règles de l'exercice",
  [
    { p: "Document commun aux 4 cabinets de cette session, quelle que soit l'entreprise confiée." },
    { meta: [["Émetteur", "Direction de la simulation"], ["Version", "1.0"], ["Statut", "Validé"]] },
    { h: "Principe" },
    { p: "Chaque cabinet reçoit une entreprise cliente différente, dans un secteur différent. Chaque entreprise a déjà une cartographie « version 0 », mais elle est pleine de défauts. Votre travail est de la corriger, pas de repartir de zéro." },
    { h: "Ce qui est fourni pour votre entreprise" },
    { list: [
      "Une fiche entreprise (dossier client de la plateforme)",
      "Un organigramme",
      "Une cartographie « version 0 » et un inventaire des activités à regrouper",
      "Une note de mandat précisant les attendus"
    ] },
    { h: "Ce qui est attendu en pitch" },
    { list: [
      "Une cartographie corrigée sur l'entreprise confiée",
      "Les parties prenantes intégrées à tous les niveaux (carte, processus, fiches, indicateurs)",
      "Des processus nommés et hiérarchisés (10 à 16 processus au niveau 1)",
      "Des processus clés sélectionnés et justifiés (matrice d'impact)",
      "Au moins un pilote désigné sur les processus critiques",
      "Une décision précise demandée au comité de direction"
    ] },
    { h: "Restitution croisée" },
    { p: "Chaque cabinet présente à une autre équipe, qui joue le comité de direction de l'entreprise. Comme les 4 entreprises sont différentes, chaque pitch apporte un cas réellement nouveau aux autres équipes." }
  ]
);

// -- Keryos Médical (Cabinet Horizon, dispositifs médicaux) -----------------

ficheOrganigramme("ORG-KM", "keryos/ORG-KM_Organigramme.pdf", {
  company: "Keryos Médical",
  monogram: "KM",
  dg: { role: "Directeur général", nom: "Laurent Chambon" },
  equipe: [
    { role: "Responsable assurance qualité et affaires réglementaires", nom: "Sélia Fontaine" },
    { role: "Responsable de production", nom: "Marc Oriol" },
    { role: "Responsable R&D", nom: "Noor Haddad" },
    { role: "Responsable achats et logistique", nom: "Inès Travers" }
  ],
  effectif: "95 collaborateurs, répartis entre la production en salle blanche, le laboratoire de contrôle qualité et les fonctions support.",
  siteDetail: "Site unique à Annecy : production, laboratoire de contrôle qualité et siège administratif."
});

ficheCartographieVersion0("CARTO-KM", "keryos/CARTO-KM_Cartographie_Version_0.pdf", {
  company: "Keryos Médical",
  monogram: "KM",
  intro: "Carte actuelle de Keryos Médical, non revue depuis la première certification ISO 13485. Présentée ici telle quelle, défauts inclus.",
  cases: [
    ["Clients (hôpitaux)", "Partie prenante, visible à une seule extrémité", "—"],
    ["Service Commercial", "Nommé par un service", "Aucun"],
    ["Service Qualité", "Nommé par un service", "Aucun"],
    ["Production", "Bloc fourre-tout (réception, fabrication, conditionnement, stérilisation)", "Aucun"],
    ["R&D", "Nommé par un service", "Aucun"],
    ["Achats", "Nommé par un service", "Aucun"],
    ["RH", "Nommé par un service", "Aucun"],
    ["Maintenance", "Nommé par un service", "Aucun"],
    ["Qualité (bis)", "Doublon non résolu", "Aucun"],
    ["Direction", "Présente, sans processus de pilotage identifié", "Aucun"]
  ],
  limite: "Et 15 autres cases du même niveau, sans pilote ni flèche entre elles. Aucun processus de matériovigilance, aucune traçabilité lot visible, aucune famille de management.",
  inventaire: [
    "Réceptionner les matières premières", "Fabriquer en salle blanche", "Contrôler en cours de fabrication",
    "Stériliser les dispositifs", "Libérer les lots", "Gérer les non-conformités", "Traiter les réclamations clients",
    "Remonter les alertes de matériovigilance", "Qualifier les fournisseurs de matières premières",
    "Concevoir de nouveaux dispositifs", "Valider les changements de process", "Former le personnel de production",
    "Étalonner les instruments de mesure", "Archiver les dossiers de lot", "Préparer les audits réglementaires",
    "Facturer les hôpitaux", "Gérer les stocks de consommables stériles", "Animer la revue de direction"
  ]
});

noteMandat("NM-KM", "keryos/NM-KM_Note_Mandat.pdf", {
  company: "Keryos Médical",
  monogram: "KM",
  cabinet: "Cabinet Horizon",
  contexte: "La cartographie « version 0 » de Keryos Médical ne couvre pas la matériovigilance exigée par le Règlement (UE) 2017/745, et confond plusieurs activités dans un bloc « Production » unique, à 4 mois de l'audit de l'organisme notifié.",
  perimetre: "Cartographier Keryos Médical en intégrant le processus de matériovigilance et la traçabilité lot par lot, avant l'audit de l'organisme notifié.",
  attendus: ["Le processus de matériovigilance positionné sur la carte, avec un pilote et un délai de remontée", "Une traçabilité lot par lot visible de bout en bout", "Une carte présentable telle quelle à l'organisme notifié"],
  vigilance: ["Ne pas sous-estimer l'exigence réglementaire du Règlement (UE) 2017/745", "Distinguer la qualification d'un changement de process de la production courante"]
});

// -- Arvano Conseil (Cabinet Polaris, conseil) -------------------------------

ficheOrganigramme("ORG-AC", "arvano/ORG-AC_Organigramme.pdf", {
  company: "Arvano Conseil",
  monogram: "AC",
  dg: { role: "Directrice générale et associée fondatrice", nom: "Delphine Ayrault" },
  equipe: [
    { role: "Directeur qualité et méthodes", nom: "Thibault Varane" },
    { role: "Responsable avant-vente", nom: "Margaux Soubise" },
    { role: "Responsable des missions", nom: "Hugo Lescure" },
    { role: "Responsable RH et recrutement", nom: "Zoé Rambert" }
  ],
  effectif: "42 collaborateurs, dont la majorité des consultants sont en mission chez les clients. Effectif triplé en trois ans.",
  siteDetail: "Bureaux à Nantes ; consultants majoritairement affectés chez les clients, pas de site de production."
});

ficheCartographieVersion0("CARTO-AC", "arvano/CARTO-AC_Cartographie_Version_0.pdf", {
  company: "Arvano Conseil",
  monogram: "AC",
  intro: "Carte actuelle d'Arvano Conseil, reprise telle quelle d'un ancien client industriel il y a plusieurs années. Présentée ici telle quelle, défauts inclus.",
  cases: [
    ["Clients", "Partie prenante, visible à une seule extrémité", "—"],
    ["Service Commercial", "Nommé par un service", "Aucun"],
    ["Stocker les matières premières", "Recopié d'un ancien client industriel : n'a aucun sens pour Arvano", "Aucun"],
    ["Production", "Recopié d'un ancien client industriel : n'a aucun sens pour Arvano", "Aucun"],
    ["Maintenance", "Recopié d'un ancien client industriel : n'a aucun sens pour Arvano", "Aucun"],
    ["Qualité", "Nommé par un service", "Aucun"],
    ["Achats", "Nommé par un service", "Aucun"],
    ["RH", "Nommé par un service", "Aucun"],
    ["Direction", "Présente, sans processus de pilotage identifié", "Aucun"]
  ],
  limite: "Et 12 autres cases du même niveau. Aucune case ne représente l'avant-vente, la mission ou la capitalisation des retours d'expérience : le cœur de métier d'Arvano est absent de sa propre cartographie.",
  inventaire: [
    "Répondre aux appels d'offres", "Chiffrer une proposition commerciale", "Signer un contrat-cadre",
    "Cadrer une mission avec le client", "Recruter et staffer les consultants", "Réaliser les missions de conseil",
    "Développer un outil interne pour un client", "Suivre l'avancement d'une mission", "Facturer au temps passé",
    "Clôturer une mission", "Capitaliser un retour d'expérience", "Former les consultants",
    "Gérer les réclamations clients", "Renouveler un contrat-cadre", "Piloter la rentabilité des missions",
    "Animer la revue de direction"
  ]
});

noteMandat("NM-AC", "arvano/NM-AC_Note_Mandat.pdf", {
  company: "Arvano Conseil",
  monogram: "AC",
  cabinet: "Cabinet Polaris",
  contexte: "La cartographie « version 0 » d'Arvano Conseil a été recopiée d'un ancien client industriel et ne reflète pas une activité de service ; l'interface avant-vente / mission, source de réclamations, n'est tracée nulle part.",
  perimetre: "Reconstruire la cartographie d'Arvano Conseil en processus de service, et sécuriser l'interface avant-vente / mission avant le renouvellement du contrat-cadre avec le plus gros client.",
  attendus: ["Une cartographie en vocabulaire de service, sans trace industrielle", "L'interface avant-vente / mission clairement tracée", "Un processus de capitalisation des retours d'expérience"],
  vigilance: ["Ne pas garder par réflexe des processus industriels", "Le renouvellement du contrat-cadre se joue dans 2 mois : rester concret et convaincant"]
});

// -- Virel Semiconducteurs (Cabinet Meridian, semi-conducteurs) -------------

ficheOrganigramme("ORG-VS", "virel/ORG-VS_Organigramme.pdf", {
  company: "Virel Semiconducteurs",
  monogram: "VS",
  dg: { role: "Directeur général", nom: "Frédéric Lannoy" },
  equipe: [
    { role: "Responsable qualité fournisseur et client", nom: "Gauthier Pradier" },
    { role: "Responsable salle blanche / production", nom: "Anissa Kerbrat" },
    { role: "Responsable R&D et qualification produit", nom: "Paul-Henri Ziegler" },
    { role: "Responsable achats composants", nom: "Léna Castex" }
  ],
  effectif: "210 collaborateurs, entre ingénieurs R&D, opérateurs de salle blanche et fonctions support.",
  siteDetail: "Site unique à Grenoble : salle blanche de fabrication, laboratoire de caractérisation et siège."
});

ficheCartographieVersion0("CARTO-VS", "virel/CARTO-VS_Cartographie_Version_0.pdf", {
  company: "Virel Semiconducteurs",
  monogram: "VS",
  intro: "Carte actuelle de Virel Semiconducteurs, non revue depuis plusieurs années. Présentée ici telle quelle, défauts inclus.",
  cases: [
    ["Clients (automobile, industrie)", "Partie prenante, visible à une seule extrémité", "—"],
    ["Service Commercial", "Nommé par un service", "Aucun"],
    ["Production", "Bloc fourre-tout : qualification produit (NPI) ET production en continu confondues", "Aucun"],
    ["Qualité", "Nommé par un service", "Aucun"],
    ["Achats composants", "Nommé par un service", "Aucun"],
    ["RH", "Nommé par un service", "Aucun"],
    ["Maintenance équipements", "Nommé par un service", "Aucun"],
    ["Direction", "Présente, sans processus de pilotage identifié", "Aucun"]
  ],
  limite: "Et 14 autres cases du même niveau. Aucun processus de gestion des changements de process, alors qu'un client automobile stratégique l'exige désormais.",
  inventaire: [
    "Répondre à un appel d'offres automobile", "Concevoir un nouveau composant", "Qualifier un nouveau produit (NPI)",
    "Approvisionner les plaquettes de silicium", "Fabriquer en salle blanche", "Contrôler les plaquettes en cours de fabrication",
    "Tester les composants finis", "Gérer un changement de process", "Suivre le taux de rebut",
    "Qualifier les fournisseurs de matières", "Étalonner les équipements de salle blanche", "Traiter une réclamation client",
    "Auditer les processus internes", "Former les opérateurs de salle blanche", "Facturer les clients",
    "Animer la revue de direction"
  ]
});

noteMandat("NM-VS", "virel/NM-VS_Note_Mandat.pdf", {
  company: "Virel Semiconducteurs",
  monogram: "VS",
  cabinet: "Cabinet Meridian",
  contexte: "Un client automobile stratégique de Virel Semiconducteurs exige désormais la preuve d'une gestion maîtrisée des changements de process, absente de la cartographie « version 0 », qui confond par ailleurs qualification produit et production en continu.",
  perimetre: "Intégrer un processus de gestion des changements répondant à l'exigence du client automobile, et distinguer la qualification produit de la production en continu.",
  attendus: ["Un processus de gestion des changements, avec un pilote, relié à l'exigence client", "Qualification produit et production en continu distinguées", "Un indicateur relié au taux de rebut"],
  vigilance: ["Ne pas minimiser l'exigence du client automobile : elle conditionne la relation commerciale", "Vérifier que les deux populations (R&D, production) sont bien distinguées dans les interfaces"]
});

// -- Haranis Construction (Cabinet Nova, BTP) --------------------------------

ficheOrganigramme("ORG-HC", "haranis/ORG-HC_Organigramme.pdf", {
  company: "Haranis Construction",
  monogram: "HC",
  dg: { role: "Directeur général", nom: "Bertrand Mallet" },
  equipe: [
    { role: "Responsable QSE groupe", nom: "Oriane Delcasse" },
    { role: "Conducteur de travaux senior", nom: "Yanis Berger" },
    { role: "Responsable bureau d'études / chiffrage", nom: "Sofia Nardelli" },
    { role: "Responsable achats et sous-traitance", nom: "Karl Dumesnil" }
  ],
  effectif: "160 collaborateurs, entre le siège de Toulouse et les équipes mobilisées sur les chantiers en cours.",
  siteDetail: "Siège administratif et dépôt de matériel à Toulouse ; activité répartie sur plusieurs chantiers simultanés."
});

ficheCartographieVersion0("CARTO-HC", "haranis/CARTO-HC_Cartographie_Version_0.pdf", {
  company: "Haranis Construction",
  monogram: "HC",
  intro: "Carte actuelle de Haranis Construction, non revue depuis plusieurs années. Présentée ici telle quelle, défauts inclus.",
  cases: [
    ["Clients (collectivités, promoteurs)", "Partie prenante, visible à une seule extrémité", "—"],
    ["Travaux", "Bloc fourre-tout : chiffrage, chantier et réception confondus", "Aucun"],
    ["Service Commercial", "Nommé par un service", "Aucun"],
    ["Qualité", "Nommé par un service", "Aucun"],
    ["Achats / sous-traitance", "Nommé par un service, sans qualification formelle des sous-traitants", "Aucun"],
    ["RH", "Nommé par un service", "Aucun"],
    ["Matériel / logistique", "Nommé par un service", "Aucun"],
    ["Direction", "Présente, sans processus de pilotage identifié", "Aucun"]
  ],
  limite: "Et 13 autres cases du même niveau. Aucun processus ne qualifie les sous-traitants ni ne coordonne la sécurité entre chantiers — un angle mort direct dans l'incident récent.",
  inventaire: [
    "Répondre à un appel d'offres public", "Chiffrer un chantier", "Qualifier un sous-traitant",
    "Planifier un chantier", "Coordonner la sécurité sur le chantier (SPS)", "Approvisionner les matériaux",
    "Réaliser les travaux", "Contrôler la qualité d'exécution", "Gérer un incident de sécurité",
    "Réceptionner le chantier avec le client", "Lever les réserves", "Facturer les situations de travaux",
    "Gérer le matériel et les engins", "Former les équipes chantier", "Archiver les dossiers d'ouvrage exécuté",
    "Animer la revue de direction"
  ]
});

noteMandat("NM-HC", "haranis/NM-HC_Note_Mandat.pdf", {
  company: "Haranis Construction",
  monogram: "HC",
  cabinet: "Cabinet Nova",
  contexte: "Un incident de sécurité récent sur un chantier de Haranis Construction impliquait un sous-traitant jamais formellement qualifié ; la cartographie « version 0 » regroupe chiffrage, chantier et réception dans un seul bloc « Travaux ».",
  perimetre: "Distinguer le chiffrage, le chantier et la réception, et formaliser la qualification et la coordination sécurité des sous-traitants.",
  attendus: ["Un processus de qualification des sous-traitants, relié à la coordination sécurité", "Chiffrage, chantier et réception distingués, avec un pilote chacun", "Un indicateur de réserves à la réception, avec cible et plan d'action"],
  vigilance: ["Ne pas minimiser l'incident de sécurité récent dans la restitution", "Tenir compte de la mobilité des équipes terrain, peu disponibles"]
});

console.log("13 documents qseal11-cartographie générés.");
