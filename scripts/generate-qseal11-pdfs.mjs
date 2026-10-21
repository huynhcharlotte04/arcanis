// Générateur des documents PDF du module « Cartographie des processus et
// parties prenantes » (QSEAL11).
//
// Chaque cabinet traite une entreprise cliente différente (secteur
// différent) : Keryos Médical, Arvano Conseil, Virel Semiconducteurs,
// Haranis Construction. Aucune entreprise n'a de cartographie formalisée :
// le dossier documentaire de chacune se limite à un organigramme, cinq
// témoignages narratifs (le DG puis les 4 responsables de l'organigramme,
// chacun décrivant en prose ce qu'il fait réellement) et une note de
// mandat. Les processus doivent être déduits et construits par les
// étudiants eux-mêmes à partir de ces récits — aucun document ne nomme ni
// ne regroupe les activités à leur place. Rendu avec l'en-tête commun de la
// plateforme mais le nom et le monogramme de SON entreprise (voir
// ./lib/letterhead.mjs).
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

function ficheTemoignage(ref, rel, { company, monogram, auteur, role, paragraphs }) {
  return build(
    ref,
    rel,
    `Témoignage — ${auteur}, ${role}`,
    [
      { meta: [["Entreprise", company], ["Rédigé par", auteur], ["Fonction", role], ["Nature", "Témoignage libre, aucune cartographie fournie"]] },
      ...paragraphs.map((p) => ({ p }))
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
    { p: "Chaque cabinet reçoit une entreprise cliente différente, dans un secteur différent. Aucune n'a de cartographie formalisée de ses processus. Votre travail est de la construire entièrement, en identifiant et en structurant vous-même les processus à partir des documents fournis — aucun schéma, aucune liste de processus ne vous est donné." },
    { h: "Ce qui est fourni pour votre entreprise" },
    { list: [
      "Une fiche entreprise (dossier client de la plateforme)",
      "Un organigramme",
      "Cinq témoignages narratifs (le dirigeant puis les 4 responsables), décrivant en prose ce que chacun fait réellement",
      "Une note de mandat précisant les attendus"
    ] },
    { h: "Ce qui est attendu en pitch" },
    { list: [
      "Une cartographie complète, construite par votre équipe, sur l'entreprise confiée",
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

ficheTemoignage("TEM-KM-DG", "keryos/TEM-KM-1_Temoignage_Laurent_Chambon.pdf", {
  company: "Keryos Médical",
  monogram: "KM",
  auteur: "Laurent Chambon",
  role: "Directeur général",
  paragraphs: [
    "Chaque trimestre, je réunis les responsables de service pour faire le point : résultats qualité, avancement des projets, décisions à prendre. C'est aussi dans ce cadre que je valide la facturation des hôpitaux clients et que je fais préparer les dossiers attendus par l'organisme notifié avant chaque audit de surveillance.",
    "Je constate qu'on prépare ces audits dans l'urgence, service par service, sans vue d'ensemble de ce qui doit être démontré. J'aimerais qu'on puisse, à l'avenir, s'appuyer sur une vision claire de nos activités pour anticiper ces échéances au lieu de les subir."
  ]
});

ficheTemoignage("TEM-KM-2", "keryos/TEM-KM-2_Temoignage_Selia_Fontaine.pdf", {
  company: "Keryos Médical",
  monogram: "KM",
  auteur: "Sélia Fontaine",
  role: "Responsable assurance qualité et affaires réglementaires",
  paragraphs: [
    "Quand une non-conformité est détectée, en production ou lors d'un contrôle, c'est à moi qu'elle remonte : j'ouvre un dossier, je fais qualifier la gravité et je m'assure qu'une action corrective est mise en place. Je traite aussi directement les réclamations des hôpitaux clients, qui peuvent signaler un défaut sur un dispositif livré.",
    "Le plus sensible, c'est la matériovigilance : une alerte sur un lot doit remonter vite. Récemment, il a fallu 19 jours avant que je sois informée d'un problème, parce que personne ne savait exactement à qui le signaler ni dans quel délai."
  ]
});

ficheTemoignage("TEM-KM-3", "keryos/TEM-KM-3_Temoignage_Marc_Oriol.pdf", {
  company: "Keryos Médical",
  monogram: "KM",
  auteur: "Marc Oriol",
  role: "Responsable de production",
  paragraphs: [
    "Mon équipe fabrique les dispositifs en salle blanche, à partir des matières premières réceptionnées et contrôlées par les achats. Chaque étape de fabrication fait l'objet d'un contrôle en cours de production, avant que les dispositifs ne passent en stérilisation. C'est moi qui signe la libération finale d'un lot, une fois tous les contrôles validés.",
    "Dès qu'on veut changer quelque chose dans le process — un réglage machine, un fournisseur de consommable — il faut faire valider le changement, et ça prend du temps que personne ne planifie vraiment à l'avance."
  ]
});

ficheTemoignage("TEM-KM-4", "keryos/TEM-KM-4_Temoignage_Noor_Haddad.pdf", {
  company: "Keryos Médical",
  monogram: "KM",
  auteur: "Noor Haddad",
  role: "Responsable R&D",
  paragraphs: [
    "Je conçois les nouveaux dispositifs, en lien avec les retours clients et les évolutions réglementaires. Une fois qu'un nouveau produit est prêt à passer en fabrication, c'est aussi mon équipe qui forme les opérateurs de production aux nouvelles exigences.",
    "On s'occupe également de l'étalonnage des instruments de mesure utilisés en laboratoire et en salle blanche, mais c'est souvent fait au dernier moment, sans planning partagé avec la production."
  ]
});

ficheTemoignage("TEM-KM-5", "keryos/TEM-KM-5_Temoignage_Ines_Travers.pdf", {
  company: "Keryos Médical",
  monogram: "KM",
  auteur: "Inès Travers",
  role: "Responsable achats et logistique",
  paragraphs: [
    "Je qualifie les fournisseurs de matières premières avant qu'ils ne puissent livrer Keryos, et je réceptionne chaque arrivage pour vérifier sa conformité avant qu'il n'entre en production. Je gère aussi les stocks de consommables stériles, pour que la production ne soit jamais en rupture.",
    "Une fois un lot libéré, c'est mon service qui archive le dossier complet — matières utilisées, contrôles, stérilisation — en cas de demande d'un hôpital ou d'un auditeur."
  ]
});

noteMandat("NM-KM", "keryos/NM-KM_Note_Mandat.pdf", {
  company: "Keryos Médical",
  monogram: "KM",
  cabinet: "Cabinet Horizon",
  contexte: "Aucune cartographie des processus n'a jamais été formalisée chez Keryos Médical. Le Règlement (UE) 2017/745 exige pourtant un processus de matériovigilance démontrable, à 4 mois de l'audit de l'organisme notifié.",
  perimetre: "Construire la cartographie complète de Keryos Médical en intégrant le processus de matériovigilance et la traçabilité lot par lot, avant l'audit de l'organisme notifié.",
  attendus: ["Le processus de matériovigilance positionné sur la carte construite, avec un pilote et un délai de remontée", "Une traçabilité lot par lot visible de bout en bout", "Une carte complète, présentable telle quelle à l'organisme notifié"],
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

ficheTemoignage("TEM-AC-DG", "arvano/TEM-AC-1_Temoignage_Delphine_Ayrault.pdf", {
  company: "Arvano Conseil",
  monogram: "AC",
  auteur: "Delphine Ayrault",
  role: "Directrice générale et associée fondatrice",
  paragraphs: [
    "Je signe personnellement les contrats-cadres avec nos clients les plus importants, et je négocie leur renouvellement quand l'échéance approche — c'est le cas avec notre plus gros client dans deux mois. Chaque trimestre, je réunis l'équipe de direction pour faire le point sur l'activité et la rentabilité de chaque mission en cours.",
    "Ce qui m'inquiète, c'est qu'on pilote la rentabilité mission par mission, sans jamais remonter sur ce qui se passe réellement entre la vente d'une offre et sa réalisation : les écarts qu'on nous signale viennent forcément de là."
  ]
});

ficheTemoignage("TEM-AC-2", "arvano/TEM-AC-2_Temoignage_Thibault_Varane.pdf", {
  company: "Arvano Conseil",
  monogram: "AC",
  auteur: "Thibault Varane",
  role: "Directeur qualité et méthodes",
  paragraphs: [
    "Quand une mission se termine, je m'assure qu'elle est correctement clôturée côté administratif, et j'essaie de récupérer les enseignements auprès du consultant qui l'a menée — avec plus ou moins de succès, parce que rien n'oblige vraiment à le faire. Je suis aussi celui qui reçoit les réclamations clients quand quelque chose n'a pas été au niveau attendu.",
    "Le problème, c'est qu'on ne garde quasiment aucune trace exploitable d'une mission à l'autre : chaque nouveau consultant repart avec les mêmes questions que le précédent."
  ]
});

ficheTemoignage("TEM-AC-3", "arvano/TEM-AC-3_Temoignage_Margaux_Soubise.pdf", {
  company: "Arvano Conseil",
  monogram: "AC",
  auteur: "Margaux Soubise",
  role: "Responsable avant-vente",
  paragraphs: [
    "Je réponds aux appels d'offres et je chiffre les propositions commerciales, en estimant le temps et les compétences nécessaires. Une fois l'offre signée, je participe au cadrage initial de la mission avec le client, avant de passer la main à l'équipe qui va la réaliser.",
    "Le souci, c'est que cette passation se fait souvent à l'oral, vite, sans document qui reprenne précisément ce qui a été promis au client. Je découvre parfois après coup que l'équipe de mission a compris autre chose."
  ]
});

ficheTemoignage("TEM-AC-4", "arvano/TEM-AC-4_Temoignage_Hugo_Lescure.pdf", {
  company: "Arvano Conseil",
  monogram: "AC",
  auteur: "Hugo Lescure",
  role: "Responsable des missions",
  paragraphs: [
    "Je recrute et j'affecte les consultants sur les missions en fonction des besoins clients. Mon équipe réalise les missions de conseil elles-mêmes — audit, accompagnement au changement — et développe parfois des outils internes sur mesure pour un client. Je suis l'avancement de chaque mission pour anticiper les dérapages.",
    "Mais je découvre souvent l'existence d'engagements pris en avant-vente au moment où le client s'étonne qu'on ne les tienne pas : rien ne me prévient de ce qui a été vendu avant que la mission démarre."
  ]
});

ficheTemoignage("TEM-AC-5", "arvano/TEM-AC-5_Temoignage_Zoe_Rambert.pdf", {
  company: "Arvano Conseil",
  monogram: "AC",
  auteur: "Zoé Rambert",
  role: "Responsable RH et recrutement",
  paragraphs: [
    "Je m'occupe de la formation des consultants, notamment des nouveaux arrivants, pour qu'ils soient rapidement opérationnels en mission. Je gère aussi la facturation au temps passé, à partir des relevés d'activité remplis par chacun.",
    "Avec le triplement des effectifs en trois ans, j'ai de plus en plus de mal à transmettre les bons réflexes : chacun fait un peu à sa façon, faute de référence commune sur ce qu'on attend à chaque étape d'une mission."
  ]
});

noteMandat("NM-AC", "arvano/NM-AC_Note_Mandat.pdf", {
  company: "Arvano Conseil",
  monogram: "AC",
  cabinet: "Cabinet Polaris",
  contexte: "Aucune cartographie des processus n'a jamais été formalisée chez Arvano Conseil ; l'interface avant-vente / mission, source de réclamations, n'est tracée nulle part.",
  perimetre: "Construire la cartographie complète d'Arvano Conseil en processus de service, et sécuriser l'interface avant-vente / mission avant le renouvellement du contrat-cadre avec le plus gros client.",
  attendus: ["Une cartographie en vocabulaire de service, sans trace industrielle", "L'interface avant-vente / mission clairement tracée", "Un processus de capitalisation des retours d'expérience"],
  vigilance: ["Ne pas calquer des processus industriels par réflexe", "Le renouvellement du contrat-cadre se joue dans 2 mois : rester concret et convaincant"]
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

ficheTemoignage("TEM-VS-DG", "virel/TEM-VS-1_Temoignage_Frederic_Lannoy.pdf", {
  company: "Virel Semiconducteurs",
  monogram: "VS",
  auteur: "Frédéric Lannoy",
  role: "Directeur général",
  paragraphs: [
    "Je porte personnellement la réponse aux appels d'offres de nos clients automobiles stratégiques, qui exigent un niveau de garanties de plus en plus élevé. Chaque trimestre, je réunis l'équipe de direction pour passer en revue l'activité, et je valide la facturation de nos clients.",
    "Le dernier avenant signé avec un client automobile nous impose de prouver une maîtrise des changements de process que je ne suis pas sûr qu'on puisse démontrer aujourd'hui, faute de vue d'ensemble sur nos activités."
  ]
});

ficheTemoignage("TEM-VS-2", "virel/TEM-VS-2_Temoignage_Gauthier_Pradier.pdf", {
  company: "Virel Semiconducteurs",
  monogram: "VS",
  auteur: "Gauthier Pradier",
  role: "Responsable qualité fournisseur et client",
  paragraphs: [
    "Je traite les réclamations de nos clients industriels et automobiles quand un composant livré pose problème, et je qualifie les fournisseurs de matières avant qu'ils ne puissent nous livrer. Je mène aussi des audits internes réguliers pour vérifier que nos pratiques tiennent la route.",
    "Le dernier avenant d'un client automobile stratégique exige une preuve de maîtrise des changements de process : je ne sais même pas vers qui me tourner en interne pour savoir comment un changement est aujourd'hui décidé et validé."
  ]
});

ficheTemoignage("TEM-VS-3", "virel/TEM-VS-3_Temoignage_Anissa_Kerbrat.pdf", {
  company: "Virel Semiconducteurs",
  monogram: "VS",
  auteur: "Anissa Kerbrat",
  role: "Responsable salle blanche / production",
  paragraphs: [
    "Mon équipe fabrique les plaquettes en salle blanche et les contrôle à plusieurs étapes du process. Je suis le taux de rebut, qui a augmenté ce trimestre sans que je sache précisément à quelle étape il se forme. Quand on doit changer un réglage ou un équipement, je gère ce changement à mon niveau, sans qu'il y ait de règle écrite partagée avec les autres équipes.",
    "C'est justement cette gestion des changements, au cas par cas, que notre client automobile ne veut plus accepter sans preuve écrite."
  ]
});

ficheTemoignage("TEM-VS-4", "virel/TEM-VS-4_Temoignage_Paul_Henri_Ziegler.pdf", {
  company: "Virel Semiconducteurs",
  monogram: "VS",
  auteur: "Paul-Henri Ziegler",
  role: "Responsable R&D et qualification produit",
  paragraphs: [
    "Je conçois les nouveaux composants et je pilote leur qualification avant le lancement en production (ce qu'on appelle le NPI). Une fois les premiers lots fabriqués, mon équipe teste les composants finis pour valider qu'ils répondent au cahier des charges.",
    "Le problème, c'est que cette phase de qualification et la production en continu qui suit se chevauchent souvent dans le planning, sans frontière claire sur qui décide quoi une fois le produit « qualifié »."
  ]
});

ficheTemoignage("TEM-VS-5", "virel/TEM-VS-5_Temoignage_Lena_Castex.pdf", {
  company: "Virel Semiconducteurs",
  monogram: "VS",
  auteur: "Léna Castex",
  role: "Responsable achats composants",
  paragraphs: [
    "J'approvisionne les plaquettes de silicium et les matières nécessaires à la production, en anticipant les délais parfois longs de nos fournisseurs. Je coordonne aussi l'étalonnage des équipements de salle blanche et la formation des nouveaux opérateurs sur ces équipements.",
    "Avec la montée en cadence de ces derniers mois, je commence à avoir du mal à garantir que chaque équipement est étalonné à temps avant qu'un opérateur ne l'utilise."
  ]
});

noteMandat("NM-VS", "virel/NM-VS_Note_Mandat.pdf", {
  company: "Virel Semiconducteurs",
  monogram: "VS",
  cabinet: "Cabinet Meridian",
  contexte: "Aucune cartographie des processus n'a jamais été formalisée chez Virel Semiconducteurs. Un client automobile stratégique exige désormais la preuve d'une gestion maîtrisée des changements de process.",
  perimetre: "Construire la cartographie complète de Virel Semiconducteurs en intégrant un processus de gestion des changements répondant à l'exigence du client automobile, et en distinguant la qualification produit de la production en continu.",
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

ficheTemoignage("TEM-HC-DG", "haranis/TEM-HC-1_Temoignage_Bertrand_Mallet.pdf", {
  company: "Haranis Construction",
  monogram: "HC",
  auteur: "Bertrand Mallet",
  role: "Directeur général",
  paragraphs: [
    "Je porte la réponse aux appels d'offres publics et je valide chaque mois la facturation des situations de travaux sur l'ensemble de nos chantiers. En revue de direction trimestrielle, je passe en revue l'avancement des chantiers en cours avec les conducteurs de travaux.",
    "Depuis l'incident de sécurité du mois dernier, je me rends compte qu'on n'a jamais formalisé qui répond de quoi entre le chiffrage d'un chantier, sa réalisation et sa réception : chacun gère son bout, à sa manière."
  ]
});

ficheTemoignage("TEM-HC-2", "haranis/TEM-HC-2_Temoignage_Oriane_Delcasse.pdf", {
  company: "Haranis Construction",
  monogram: "HC",
  auteur: "Oriane Delcasse",
  role: "Responsable QSE groupe",
  paragraphs: [
    "Je coordonne la sécurité sur les chantiers (SPS) et j'interviens dès qu'un incident de sécurité survient, comme celui du mois dernier impliquant un sous-traitant. Je contrôle aussi la qualité d'exécution des travaux, en complément des conducteurs de travaux.",
    "En reprenant le dossier de l'incident, j'ai découvert que ce sous-traitant n'avait jamais été formellement qualifié avant son intervention : personne n'a identifié que cette étape nous manquait."
  ]
});

ficheTemoignage("TEM-HC-3", "haranis/TEM-HC-3_Temoignage_Yanis_Berger.pdf", {
  company: "Haranis Construction",
  monogram: "HC",
  auteur: "Yanis Berger",
  role: "Conducteur de travaux senior",
  paragraphs: [
    "Je planifie chaque chantier dont j'ai la charge, je pilote la réalisation des travaux sur le terrain, puis je mène la réception du chantier avec le client en fin d'exécution. Après la réception, je m'occupe de lever les réserves identifiées.",
    "Le taux de réserves reste élevé chantier après chantier, et je découvre souvent les problèmes seulement à la réception, parce que rien ne me permet de les détecter plus tôt pendant l'exécution."
  ]
});

ficheTemoignage("TEM-HC-4", "haranis/TEM-HC-4_Temoignage_Sofia_Nardelli.pdf", {
  company: "Haranis Construction",
  monogram: "HC",
  auteur: "Sofia Nardelli",
  role: "Responsable bureau d'études / chiffrage",
  paragraphs: [
    "Je chiffre chaque chantier avant la réponse à l'appel d'offres, à partir des plans et du cahier des charges du client. Une fois le chantier terminé, j'archive le dossier d'ouvrage exécuté qui en garde la trace.",
    "Entre mon chiffrage initial et ce qui se passe vraiment sur le chantier, je n'ai aucune visibilité : je ne sais jamais si mes hypothèses de départ ont tenu la route ou pas."
  ]
});

ficheTemoignage("TEM-HC-5", "haranis/TEM-HC-5_Temoignage_Karl_Dumesnil.pdf", {
  company: "Haranis Construction",
  monogram: "HC",
  auteur: "Karl Dumesnil",
  role: "Responsable achats et sous-traitance",
  paragraphs: [
    "Je sélectionne et je suis censé qualifier les sous-traitants qui interviennent sur nos chantiers, j'approvisionne les matériaux et je gère le parc de matériel et d'engins partagé entre les chantiers. J'organise aussi certaines formations des équipes chantier.",
    "Avec le volume actuel, la qualification des sous-traitants se fait parfois dans l'urgence, juste avant leur intervention — c'est exactement ce qui s'est produit avec le sous-traitant impliqué dans l'incident récent."
  ]
});

noteMandat("NM-HC", "haranis/NM-HC_Note_Mandat.pdf", {
  company: "Haranis Construction",
  monogram: "HC",
  cabinet: "Cabinet Nova",
  contexte: "Aucune cartographie des processus n'a jamais été formalisée chez Haranis Construction. Un incident de sécurité récent impliquait un sous-traitant jamais formellement qualifié.",
  perimetre: "Construire la cartographie complète de Haranis Construction en distinguant le chiffrage, le chantier et la réception, et en formalisant la qualification et la coordination sécurité des sous-traitants.",
  attendus: ["Un processus de qualification des sous-traitants, relié à la coordination sécurité", "Chiffrage, chantier et réception distingués, avec un pilote chacun", "Un indicateur de réserves à la réception, avec cible et plan d'action"],
  vigilance: ["Ne pas minimiser l'incident de sécurité récent dans la restitution", "Tenir compte de la mobilité des équipes terrain, peu disponibles"]
});

console.log("29 documents qseal11-cartographie générés.");
