// Générateur des documents PDF du module « Cartographie des processus et
// parties prenantes » (QSEAL11).
//
// Source versionnée du pack documentaire : chaque document est décrit en
// données ci-dessous, puis rendu en PDF avec l'en-tête commun de la
// plateforme (emblème Montrel + filet doré), défini dans ./lib/letterhead.mjs.
//
// Prérequis : pdfkit doit être résolvable (lien symbolique ou installation).
// Puis : `node scripts/generate-qseal11-pdfs.mjs`.

import path from "node:path";
import { fileURLToPath } from "node:url";
import { buildDocument } from "./lib/letterhead.mjs";

const ROOT = path.resolve(fileURLToPath(import.meta.url), "../..");
const OUT = path.join(ROOT, "public/documents/qseal11-cartographie");
const BANNER = "Cartographie des processus et parties prenantes";

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

function ficheLentille(ref, rel, { prisme, contexte, attentes, sources, evolutions, attention }) {
  return build(ref, rel, `Attentes à vérifier — ${prisme}`, [
    { p: "Attentes de la partie prenante confiée, et endroit où elles doivent apparaître sur la cartographie." },
    { meta: [["Version", "1.0"], ["Statut", "Validé"]] },
    { h: "Périmètre du prisme" },
    { p: contexte },
    { h: "Attentes à vérifier sur la cartographie" },
    { table: { head: ["Attente de la partie prenante", "Où elle doit apparaître sur la carte", "Statut actuel"], widths: [1.7, 1.8, 1.5] , rows: attentes } },
    { h: "Sources à consulter" },
    { list: sources },
    { h: "Évolutions récentes à intégrer" },
    { list: evolutions },
    { h: "Points d'attention" },
    { list: attention }
  ]);
}

function noteMandat(ref, rel, { prisme, cabinet, contexte, perimetre, attendus, vigilance }) {
  return build(ref, rel, `Note de mandat — Prisme ${prisme}`, [
    { meta: [["Équipe missionnée", cabinet], ["Émetteur", "Direction qualité"], ["Version", "1.0"], ["Statut", "Validé"]] },
    { h: "Contexte" },
    { p: contexte },
    { h: "Périmètre confié" },
    { p: perimetre },
    { h: "Attendus du comité de direction" },
    { list: attendus },
    { h: "Points de vigilance" },
    { list: vigilance }
  ]);
}

// -- Documents communs (niveau mission) ------------------------------------

// Organigramme et politique qualité : identiques à ceux des autres modules
// (même entreprise réelle), pour que le centre documentaire reste cohérent
// avec le reste de l'univers Montrel Industries.
await build("ORG-004", "rh/ORG-004_Organigramme.pdf", "Organigramme de Direction", [
  { meta: [["Référence", "ORG-004"], ["Indice de version", "4"], ["Mise à jour", "18/09/2023"], ["Diffusion", "Personnel encadrant, RH, sur demande auditeurs/clients"]] },
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
  { p: "Le présent organigramme est mis à jour à chaque mouvement de personnel d'encadrement." }
]);

await build("POL-004", "qualite/POL-004_Politique_Qualite.pdf", "Politique Qualité", [
  { meta: [["Référence", "POL-004"], ["Indice de version", "6"], ["Date d'application", "15/01/2024"], ["Diffusion", "Ensemble du personnel, clients et parties intéressées sur demande"]] },
  { h: "Le mot de la Direction" },
  { p: "Depuis 2018, Montrel Industries s'appuie sur un système de management de la qualité certifié ISO 9001. Cette politique qualité fixe le cadre dans lequel s'inscrit l'ensemble de nos collaborateurs, sur nos deux sites de production." },
  { h: "Présentation de l'entreprise" },
  { p: "Montrel Industries conçoit et fabrique des équipements industriels pour des environnements techniques exigeants. L'entreprise emploie 420 collaborateurs répartis sur deux sites et réalise un chiffre d'affaires de 86 M€." },
  { h: "Nos engagements" },
  { list: [
    "Garantir la conformité de nos produits et services aux exigences contractuelles et réglementaires applicables.",
    "Respecter les délais de livraison convenus avec nos clients.",
    "Assurer la traçabilité des opérations de conception, de fabrication et de contrôle.",
    "Développer les compétences de nos équipes sur nos deux sites.",
    "Faire de notre cartographie des processus un outil de pilotage, pas un document d'audit."
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

await build("NOTE-004", "direction/NOTE-004_Note_Cadrage.pdf", "Note de cadrage — Refonte de la cartographie", [
  { p: "Orientations de la direction pour reprendre la cartographie des processus." },
  { meta: [["Émetteur", "Direction générale"], ["Version", "1.0"], ["Statut", "Validé"]] },
  { h: "Objectif" },
  { p: "Faire de la cartographie des processus de Montrel Industries un outil de pilotage réel, intégrant les parties prenantes à tous les niveaux, avant l'audit client prévu dans 6 mois." },
  { h: "Constat de départ" },
  { p: "Une cartographie « version 0 » existe depuis deux ans. Un audit interne récent en a relevé neuf défauts majeurs (voir le rapport d'audit AUD-004). Elle n'a jamais été revue ni validée par la direction." },
  { h: "Principes attendus" },
  { list: [
    "Reprendre l'existant plutôt que repartir de zéro",
    "Intégrer les parties prenantes à chaque niveau de la carte, pas seulement en façade",
    "Hiérarchiser les processus et sélectionner ceux qui sont réellement clés",
    "Désigner un pilote par processus clé, avec une autorité réelle"
  ] },
  { h: "Périmètre de la mission" },
  { p: "Quatre équipes reprennent la cartographie « version 0 », chacune à travers le prisme d'une famille de parties prenantes : clients, collaborateurs, autorités et société, direction et performance." }
]);

await build("COPIL-004", "direction/COPIL-004_Ordre_du_jour_Comite_Direction.pdf", "Ordre du jour — Comité de direction", [
  { p: "Pitch de restitution par prisme de parties prenantes." },
  { meta: [["Émetteur", "Direction générale"], ["Version", "1.0"], ["Statut", "Validé"]] },
  { h: "Objet" },
  { p: "Présenter, pour chaque prisme, la cartographie corrigée, les processus clés sélectionnés et une décision à faire trancher par le comité de direction." },
  { h: "Attendus par équipe" },
  { list: [
    "Cartographie corrigée sur le prisme confié, avec les parties prenantes intégrées à tous les niveaux",
    "Processus clés sélectionnés et justifiés par une matrice d'impact",
    "Au moins un pilote désigné sur les processus critiques du prisme",
    "Une décision précise demandée au comité de direction"
  ] },
  { h: "Déroulé" },
  { list: [
    "Pitch par prisme (5 minutes)",
    "Questions du comité de direction",
    "Décisions retenues et priorités de mise en œuvre"
  ] }
]);

await build("AUD-004", "qualite/AUD-004_Rapport_Audit_Cartographie.pdf", "Rapport d'audit — Cartographie « version 0 »", [
  { p: "Constat à l'origine de la mission de refonte de la cartographie." },
  { meta: [["Émetteur", "Audit interne"], ["Version", "1.0"], ["Statut", "Validé"]] },
  { h: "Constat" },
  { p: "L'audit interne a examiné la cartographie des processus existante (« version 0 »), en place depuis deux ans sans révision ni validation par la direction. Neuf défauts ont été relevés." },
  { h: "Les neuf défauts relevés" },
  { list: [
    "Le client n'apparaît qu'à une seule extrémité de la carte, jamais à l'intérieur des processus",
    "Les processus sont nommés par des services (« Qualité », « Production »), pas par un verbe d'action et un objet",
    "Aucune famille de management (stratégie, pilotage, amélioration) n'est identifiée",
    "Le processus « Production » est un bloc fourre-tout qui absorbe plusieurs activités distinctes",
    "Aucun processus de sécurité ni d'environnement n'apparaît sur la carte",
    "Aucun pilote n'est désigné sur l'ensemble des processus",
    "Aucune interaction ni flux n'est tracé entre les processus",
    "34 processus figurent au même niveau, sans hiérarchie",
    "Aucun indicateur ni lien avec la stratégie de l'entreprise n'est visible"
  ] },
  { h: "Document associé" },
  { p: "L'état actuel de la cartographie « version 0 » est détaillé dans le document CARTO-004. L'inventaire des activités disponible pour la reconstruire figure dans le document INV-004." },
  { h: "Recommandation" },
  { p: "Reprendre la cartographie par prisme de parties prenantes, corriger les neuf défauts sur chaque prisme, et sélectionner les processus clés avant l'audit client prévu dans 6 mois." }
]);

await build("CARTO-004", "qualite/CARTO-004_Cartographie_Version_0.pdf", "Cartographie « version 0 » (état actuel)", [
  { p: "Carte actuelle de Montrel Industries, non revue depuis deux ans. Présentée ici telle quelle, défauts inclus : c'est le point de départ de la mission, pas un exemple à suivre." },
  { meta: [["Émetteur", "Direction qualité"], ["Version", "0"], ["Statut", "Non validé"]] },
  { h: "Cases identifiées sur la carte actuelle" },
  { table: { head: ["Case", "Nature", "Pilote désigné"], widths: [1.8, 2, 1.4], rows: [
    ["Clients", "Partie prenante, visible à une seule extrémité", "—"],
    ["Service Commercial", "Nommé par un service", "Aucun"],
    ["Service Qualité", "Nommé par un service", "Aucun"],
    ["Production", "Bloc fourre-tout (conception, fabrication, contrôle)", "Aucun"],
    ["Logistique", "Nommé par un service", "Aucun"],
    ["Achats", "Nommé par un service", "Aucun"],
    ["RH", "Nommé par un service", "Aucun"],
    ["Maintenance", "Nommé par un service", "Aucun"],
    ["Informatique", "Nommé par un service", "Aucun"],
    ["Comptabilité", "Nommé par un service", "Aucun"],
    ["Qualité (bis)", "Doublon non résolu", "Aucun"],
    ["Production (bis)", "Doublon non résolu", "Aucun"],
    ["Direction", "Présente, mais sans processus de pilotage identifié", "Aucun"]
  ] } },
  { h: "Limite principale" },
  { p: "Et 21 autres cases du même niveau, sans pilote, sans flèche entre elles, et sans indicateur associé. Aucune hiérarchie, aucune famille de management, aucune trace de la sécurité ou de l'environnement." },
  { h: "À faire" },
  { p: "Chaque équipe reprend cette carte à travers son prisme de parties prenantes et propose une version corrigée, en s'appuyant sur l'inventaire des activités (INV-004)." }
]);

await build("INV-004", "qualite/INV-004_Inventaire_Activites.pdf", "Inventaire des activités de Montrel Industries", [
  { p: "Matière première pour reconstruire la cartographie : liste des activités réellement observées, à regrouper, nommer et trier." },
  { meta: [["Émetteur", "Direction qualité"], ["Version", "1.0"], ["Statut", "Validé"]] },
  { h: "Activités recensées" },
  { list: [
    "Établir les devis", "Saisir les commandes", "Planifier la production", "Contrôler à réception",
    "Réaliser les audits internes", "Étalonner les instruments", "Gérer les formations", "Suivre les rejets atelier",
    "Négocier avec les fournisseurs", "Préparer les expéditions", "Évaluer les risques professionnels", "Gérer les déchets",
    "Répondre aux appels d'offres", "Maintenir les machines", "Animer la revue de direction", "Traiter les réclamations",
    "Gérer les droits d'accès SI", "Archiver les enregistrements", "Qualifier les fournisseurs", "Faire la veille réglementaire",
    "Facturer les clients", "Recruter", "Concevoir les produits", "Gérer les non-conformités",
    "Suivre la consommation d'énergie", "Piloter les budgets", "Accueillir les nouveaux", "Piloter les plans d'action",
    "Suivre la satisfaction client", "Gérer les habilitations"
  ] },
  { h: "Point de méthode" },
  { p: "Cette liste mélange volontairement des activités de nature différente : certaines sont des processus, d'autres des tâches ou des documents. Certaines se recoupent (par exemple « Gérer les non-conformités » et « Traiter les réclamations »). Le travail de chaque équipe est de les regrouper, de les nommer par un verbe d'action et un objet, et de les situer sur son prisme." }
]);

// -- Par prisme : fiche d'attentes + note de mandat ------------------------

await ficheLentille("FV-CLI", "clients/FV-CLI_Attentes_Clients.pdf", {
  prisme: "Clients",
  contexte: "Les clients de Montrel attendent un produit conforme, livré à la date promise, et une réponse rapide en cas de réclamation. La cartographie « version 0 » ne le montre pas : le client n'apparaît qu'à une extrémité de la carte, et le bloc « Production » absorbe tout le parcours qui le concerne.",
  attentes: [
    ["Produit conforme livré à la date promise", "Processus Vendre -> Produire -> Livrer, avec le client nommé à chaque étape", "Client visible seulement aux deux extrémités de la carte macro"],
    ["Réponse rapide et traçable en cas de réclamation", "Processus Traiter les réclamations, avec boucle de retour vers l'amont", "Aucune boucle de retour tracée vers la vente, la conception ou les achats"],
    ["Information fiable sur l'avancement de la commande", "Interfaces entre Vendre, Produire et Livrer", "Bloc « Production » fourre-tout : interfaces invisibles"]
  ],
  sources: ["Entretiens avec le service commercial et le service client", "Synthèse des réclamations clients du trimestre (centre documentaire)", "Inventaire des activités de Montrel (INV-004)", "Cartographie « version 0 » (CARTO-004)"],
  evolutions: ["La cartographie actuelle ne montre pas comment les exigences clients sont reprises à l'intérieur des processus.", "Le traitement des réclamations n'a aucune boucle de retour tracée vers les processus amont."],
  attention: ["Ne pas se contenter de replacer le mot « client » sur la carte macro : l'exigence doit être vérifiable à chaque niveau.", "Découper le bloc « Production » selon la règle de nommage (verbe d'action + objet), pas selon les habitudes de service."]
});

await noteMandat("NM-CLI", "clients/NM-CLI_Note_Mandat_Clients.pdf", {
  prisme: "Clients",
  cabinet: "Cabinet Horizon",
  contexte: "La cartographie « version 0 » de Montrel ne montre le client qu'à une seule extrémité de la carte, et le bloc « Production » absorbe tout le parcours qui crée sa valeur, sans qu'aucune boucle de retour des réclamations ne soit tracée.",
  perimetre: "Vérifier, prisme par prisme, que les exigences du client sont reprises à chaque niveau de la cartographie, et corriger le bloc « Production » et l'absence de boucle de retour des réclamations.",
  attendus: ["Le client visible à chaque étape du parcours, pas seulement en entrée et en sortie", "Le bloc « Production » découpé en processus nommés par un verbe d'action et un résultat", "Un indicateur de résultat relié à l'attente client la plus citée dans les réclamations"],
  vigilance: ["Ne pas confondre satisfaction client affichée et exigence réellement portée par un processus", "Vérifier que la boucle de retour des réclamations remonte bien jusqu'à la vente et à la conception"]
});

await ficheLentille("FV-COL", "collaborateurs/FV-COL_Attentes_Collaborateurs.pdf", {
  prisme: "Collaborateurs",
  contexte: "Les collaborateurs de Montrel attendent la sécurité au poste de travail, le développement de leurs compétences, et d'être informés par leurs représentants. La cartographie « version 0 » ne comporte aucun processus de sécurité ni d'environnement, et aucun pilote n'est désigné.",
  attentes: [
    ["Sécurité au poste de travail", "Processus dédié santé-sécurité, ou exigences intégrées au processus Produire", "Aucun processus sécurité sur la carte « version 0 »"],
    ["Développement des compétences", "Processus Gérer les compétences, positionné sur la carte", "Processus non positionné sur la carte actuelle"],
    ["Être informé et consulté (représentants du personnel)", "Partie prenante identifiée aux extrémités de la carte et dans les instances de pilotage", "Représentants du personnel absents de la carte"]
  ],
  sources: ["Entretiens avec les ressources humaines et les représentants du personnel", "Documents des démarches ISO 45001 / ISO 14001 du site secondaire", "Inventaire des activités de Montrel (INV-004)", "Cartographie « version 0 » (CARTO-004)"],
  evolutions: ["Les démarches ISO 45001 et ISO 14001 engagées sur le site secondaire avancent sans lien visible avec la cartographie.", "Aucun pilote n'est désigné sur les 34 cases de la carte actuelle."],
  attention: ["Choisir et argumenter entre processus dédiés (sécurité, environnement) et exigences intégrées à chaque processus concerné, sans se contenter d'empiler les deux.", "Vérifier qu'au moins un pilote est désigné avec une lettre de mission sur les processus les plus critiques pour les collaborateurs."]
});

await noteMandat("NM-COL", "collaborateurs/NM-COL_Note_Mandat_Collaborateurs.pdf", {
  prisme: "Collaborateurs",
  cabinet: "Cabinet Polaris",
  contexte: "La cartographie « version 0 » de Montrel ne comporte aucun processus de sécurité ni d'environnement, alors que des démarches ISO 45001 et ISO 14001 sont déjà engagées sur le site secondaire, et aucun pilote n'est désigné sur l'ensemble de la carte.",
  perimetre: "Vérifier que les exigences des collaborateurs (sécurité, compétences, représentation) sont intégrées à la cartographie, et proposer une décision argumentée sur le positionnement des processus sécurité et environnement.",
  attendus: ["Une décision claire : processus dédiés ou exigences intégrées, argumentée et pas improvisée", "Au moins un pilote désigné, avec lettre de mission, sur les processus critiques du prisme", "Un indicateur de sécurité ou de compétences relié à une attente concrète des équipes"],
  vigilance: ["Ne pas réduire les collaborateurs à une ligne « RH » sur la carte : leurs attentes traversent plusieurs processus", "Ne pas oublier les représentants du personnel comme partie prenante à part entière"]
});

await ficheLentille("FV-AUT", "autorites/FV-AUT_Attentes_Autorites.pdf", {
  prisme: "Autorités & société",
  contexte: "Montrel détient déjà quatre référentiels (ISO 9001, 14001, 45001, exigences clients) qui avancent chacun de leur côté, sans vue commune, et un client export réclame un référentiel sectoriel absent de la cartographie actuelle, à l'approche d'un audit client dans 6 mois.",
  attentes: [
    ["Conformité réglementaire à jour", "Processus de veille réglementaire et normative, positionné sur la carte", "Processus absent de la carte « version 0 »"],
    ["Conformité au référentiel sectoriel exigé par le client export", "Processus concernés identifiés et évalués au regard du référentiel", "Non évalué à ce jour"],
    ["Maîtrise démontrable des processus et de leurs interactions (préparation de l'audit client)", "Carte avec pilotes désignés et interactions tracées", "34 processus sans pilote ni interaction"]
  ],
  sources: ["Veille réglementaire et normative (voir le module QSE1)", "Cahier des charges de l'appel d'offres du client export", "Inventaire des activités de Montrel (INV-004)", "Cartographie « version 0 » (CARTO-004)"],
  evolutions: ["Un client export a conditionné un appel d'offres à un référentiel sectoriel absent de la cartographie actuelle.", "L'audit client annoncé dans 6 mois porte précisément sur la maîtrise des processus et de leurs interactions (ISO 9001:2015, art. 4.4)."],
  attention: ["Identifier le référentiel sectoriel réellement applicable au secteur du client export (par exemple IATF 16949 ou ISO 13485, selon le cas) avant d'en tirer des conséquences sur la carte.", "Ne pas traiter la veille réglementaire comme un sujet isolé : elle doit être positionnée sur la carte, avec un pilote."]
});

await noteMandat("NM-AUT", "autorites/NM-AUT_Note_Mandat_Autorites.pdf", {
  prisme: "Autorités & société",
  cabinet: "Cabinet Meridian",
  contexte: "La cartographie « version 0 » de Montrel ne fait apparaître aucun processus de veille réglementaire, et un client export réclame un référentiel sectoriel non couvert, à six mois d'un audit client qui portera sur la maîtrise des processus.",
  perimetre: "Positionner la veille réglementaire et normative sur la cartographie, qualifier l'exigence du référentiel sectoriel, et préparer la carte à servir de preuve lors de l'audit client.",
  attendus: ["Le processus de veille réglementaire et normative positionné sur la carte, avec un pilote identifié", "Une lecture claire de ce qu'ajoute le référentiel sectoriel identifié", "Une cartographie assez solide pour servir de preuve face à l'audit client dans 6 mois"],
  vigilance: ["Ne pas confondre les quatre référentiels existants (ISO 9001, 14001, 45001, exigences clients) : préciser ce que chacun ajoute à la carte", "Vérifier que le référentiel sectoriel identifié est bien applicable au secteur réel du client export"]
});

await ficheLentille("FV-DIR", "direction/FV-DIR_Attentes_Direction.pdf", {
  prisme: "Direction & performance",
  contexte: "Face à la hausse de 18 % des réclamations en 12 mois, la direction n'a aujourd'hui aucun moyen objectif de choisir où concentrer ses efforts : la cartographie « version 0 » aligne 34 processus au même niveau, sans famille de management ni lien avec la stratégie.",
  attentes: [
    ["Vision hiérarchisée des processus", "Carte à plusieurs niveaux (10 à 16 processus au niveau 1)", "34 processus au même niveau"],
    ["Processus clés identifiés et justifiés", "Matrice d'impact (AFNOR FD X 50-176, 2017)", "Aucune sélection à ce jour"],
    ["Lien entre stratégie, objectifs et processus", "Famille de management positionnée sur la carte", "Aucun processus de management sur la carte actuelle"]
  ],
  sources: ["Entretiens avec la direction financière et la direction générale", "AFNOR FD X 50-176 (2017), grille de sélection des processus clés", "Inventaire des activités de Montrel (INV-004)", "Cartographie « version 0 » (CARTO-004)"],
  evolutions: ["Aucun processus de management n'apparaît sur la carte actuelle.", "La direction ne dispose d'aucun critère objectif pour arbitrer où concentrer les moyens face à la hausse des réclamations."],
  attention: ["La sélection des processus clés doit rester un acte de direction objectivé par une matrice, pas une liste imposée par l'équipe.", "Un pitch qui ne débouche sur aucune décision précise ne répond pas à la commande du comité de direction."]
});

await noteMandat("NM-DIR", "direction/NM-DIR_Note_Mandat_Direction.pdf", {
  prisme: "Direction & performance",
  cabinet: "Cabinet Nova",
  contexte: "La cartographie « version 0 » de Montrel aligne 34 processus au même niveau, sans famille de management ni lien avec la stratégie, alors que la direction doit arbitrer où concentrer ses efforts face à la hausse des réclamations.",
  perimetre: "Hiérarchiser la cartographie, sélectionner 4 à 6 processus clés à l'aide d'une matrice d'impact, et construire un pitch qui porte une décision précise pour la direction.",
  attendus: ["Une hiérarchie claire de la carte, avec la famille management explicitée", "Une sélection de processus clés justifiée par une matrice d'impact", "Un pitch qui porte une décision précise, pas un simple constat"],
  vigilance: ["Ne pas sélectionner les processus clés par habitude : utiliser systématiquement la matrice d'impact", "Anticiper au moins deux objections du comité de direction (coût, temps) et préparer une réponse"]
});

console.log("15 documents qseal11-cartographie générés.");
