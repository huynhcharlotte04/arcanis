import type { Mandate, SimulationData } from "@/lib/types";

// Cartographie des processus et intégration des parties prenantes (QSEAL11).
// Pour que les 4 équipes traitent des cas réellement distincts, sans
// dupliquer QSEAL13, chaque cabinet reçoit une entreprise cliente
// différente, dans un secteur différent (plutôt qu'une seule entreprise vue
// sous 4 angles) : Keryos Médical (dispositifs médicaux), Arvano Conseil
// (conseil), Virel Semiconducteurs (semi-conducteurs), Haranis Construction
// (BTP). Aucune entreprise n'a de cartographie formalisée : chaque équipe
// doit la CONSTRUIRE entièrement, à partir de documents bruts (organigramme,
// témoignages des équipes), en décortiquant elle-même les activités décrites
// pour en déduire les processus. Les noms de cabinets sont repris des autres
// modules pour une resolution "cabinet -> mandat" identique.
//   sector      = secteur de l'entreprise confiée
//   referential = cadre de travail (cartographie des processus)
export const mandates: Mandate[] = [
  {
    id: "carto-keryos",
    cabinetName: "Cabinet Horizon",
    title: "Cartographie — Keryos Médical (dispositifs médicaux)",
    sector: "Dispositifs médicaux",
    referential: "Cartographie des processus et parties prenantes",
    objective:
      "Construire, pour la première fois, la cartographie complète des processus de Keryos Médical à partir des documents mis à disposition — en intégrant notamment le processus de matériovigilance exigé par le Règlement (UE) 2017/745 — et démontrer la traçabilité des lots jusqu'au patient, avant l'audit de l'organisme notifié.",
    problematique:
      "Votre cabinet saura-t-il construire, à partir de rien, une cartographie de Keryos Médical qui démontre, preuves à l'appui, la maîtrise exigée par le règlement européen sur les dispositifs médicaux — avec un pitch qui convainc la direction de vous confier la suite avant le passage de l'organisme notifié ?",
    issues: [
      "Keryos Médical n'a jamais formalisé de cartographie de ses processus : aucun processus de matériovigilance n'apparaît nulle part, alors que le Règlement (UE) 2017/745 l'exige explicitement.",
      "Les témoignages recueillis décrivent des activités très différentes (réception, fabrication, stérilisation, libération des lots...) sans qu'aucun lien, aucun pilote ni aucune hiérarchie ne soit établi entre elles.",
      "Une alerte de matériovigilance récente a mis 19 jours à remonter jusqu'à la direction qualité, faute de processus clair pour la faire circuler."
    ],
    comexExpectations: [
      "Le processus de matériovigilance positionné sur la carte construite, avec un pilote et un délai de remontée clair.",
      "Une traçabilité lot par lot visible de bout en bout sur la cartographie construite.",
      "Une carte complète, assez solide pour être présentée telle quelle à l'organisme notifié dans 4 mois."
    ],
    specificMessages: [
      {
        id: "keryos-aqr",
        sender: "Sélia Fontaine",
        role: "Responsable assurance qualité et affaires réglementaires",
        subject: "Notre cartographie ne tiendra pas devant l'organisme notifié",
        preview:
          "Aucun processus de matériovigilance sur notre carte, et une alerte récente a mis 19 jours à remonter.",
        receivedAt: "10:35",
        body: [
          "Bonjour,",
          "En préparant l'audit de l'organisme notifié dans 4 mois, je réalise qu'aucune cartographie de nos processus n'a jamais été formalisée chez Keryos Médical, malgré nos certifications successives.",
          "Aucun processus de matériovigilance n'existe nulle part, alors que le Règlement (UE) 2017/745 l'exige. Une alerte récente sur un lot a mis 19 jours à remonter jusqu'à moi, faute de processus clair.",
          "J'ai besoin d'une cartographie construite de zéro, qui tienne vraiment devant l'auditeur."
        ]
      },
      {
        id: "keryos-production",
        sender: "Marc Oriol",
        role: "Responsable de production",
        subject: "On ne sait plus qui pilote quoi",
        preview:
          "Les processus sont nommés par service, pas par activité : impossible de suivre un lot de bout en bout.",
        receivedAt: "11:50",
        body: [
          "Bonjour,",
          "Sur le terrain, chacun a sa propre idée de ce qu'il fait, mais rien n'est écrit nulle part qui montre comment un lot avance vraiment, étape par étape. Du coup, personne ne sait vraiment qui pilote quoi d'un lot à l'autre.",
          "J'aimerais qu'on construise enfin une carte qui montre le vrai parcours, de la réception des matières premières jusqu'à la livraison à l'hôpital."
        ]
      }
    ],
    company: {
      name: "Keryos Médical",
      monogram: "KM",
      presentation:
        "PME française qui conçoit et fabrique des dispositifs médicaux à usage unique (perfusion, injection) pour les hôpitaux européens. Certifiée ISO 13485, elle doit démontrer à chaque audit la maîtrise de ses processus jusqu'au patient.",
      location: "Annecy, Auvergne-Rhône-Alpes, France",
      headquartersVisual: "Site de production et laboratoire de contrôle qualité",
      sector: "Dispositifs médicaux",
      products: [
        "Dispositifs de perfusion à usage unique",
        "Systèmes d'injection pré-remplis",
        "Accessoires de pose stériles"
      ],
      organization: [
        "Direction générale et qualité réglementaire au siège d'Annecy",
        "Un seul site de production, salle blanche classée",
        "Fonction R&D rattachée à la direction technique",
        "Aucune cartographie des processus n'a jamais été formalisée"
      ],
      certifications: [
        "ISO 9001 depuis 2016",
        "ISO 13485:2016 pour les dispositifs médicaux",
        "Marquage CE au titre du Règlement (UE) 2017/745 (RDM)",
        "Organisme notifié : prochain audit de surveillance dans 4 mois"
      ],
      strategicObjectives: [
        "Démontrer la maîtrise des processus et de leurs interactions avant l'audit de l'organisme notifié",
        "Sécuriser la traçabilité des lots jusqu'au patient",
        "Relier la matériovigilance aux processus concernés",
        "Donner à la direction une carte lisible pour arbitrer les investissements qualité"
      ],
      mainContact: {
        name: "Sélia Fontaine",
        role: "Responsable assurance qualité et affaires réglementaires",
        email: "selia.fontaine@keryos-medical.example"
      },
      mandateIssues: [
        "Cartographier une entreprise soumise au Règlement (UE) 2017/745, pas seulement à l'ISO 9001",
        "Relier la matériovigilance et les réclamations aux processus concernés",
        "Préparer une cartographie qui tienne devant l'organisme notifié"
      ],
      currentSituation: [
        "Un audit interne récent a confirmé qu'aucune cartographie des processus n'a jamais été formalisée chez Keryos Médical, malgré ses certifications successives.",
        "Une alerte de matériovigilance sur un lot a mis 19 jours à remonter jusqu'à la direction qualité, faute de processus clair.",
        "L'organisme notifié audite la maîtrise des processus et de leurs interactions dans 4 mois.",
        "La direction veut une cartographie qui serve de preuve, pas seulement un schéma d'audit."
      ],
      constraints: [
        "Exigences du Règlement (UE) 2017/745 en plus de l'ISO 13485",
        "Salle blanche : toute modification de process est elle-même soumise à qualification",
        "Équipe qualité réduite, peu de temps disponible",
        "Traçabilité lot par lot à préserver à chaque étape"
      ],
      risks: [
        "Oublier le processus de matériovigilance dans la cartographie",
        "Confondre traçabilité documentaire et traçabilité réelle du lot",
        "Présenter une carte illisible pour l'organisme notifié",
        "Sous-estimer le temps de qualification d'un changement de process"
      ],
      revenue: "22 M EUR",
      headcount: "95 collaborateurs",
      clients: [
        "Centres hospitaliers publics et privés en France",
        "Distributeurs spécialisés en Europe du Sud",
        "Cliniques privées"
      ]
    }
  },
  {
    id: "carto-arvano",
    cabinetName: "Cabinet Polaris",
    title: "Cartographie — Arvano Conseil (conseil)",
    sector: "Conseil",
    referential: "Cartographie des processus et parties prenantes",
    objective:
      "Construire, pour la première fois, la cartographie complète des processus d'Arvano Conseil en reflétant une activité de service, sécuriser l'interface avant-vente / mission à l'origine des réclamations, et donner à la direction un document présentable avant le renouvellement du contrat-cadre avec son plus gros client.",
    problematique:
      "Votre cabinet saura-t-il construire, à partir de rien, une cartographie d'Arvano Conseil qui reflète vraiment une activité de service — avec un pitch qui rassure la direction avant le renouvellement du contrat-cadre, plutôt que de laisser la suite à une autre équipe ?",
    issues: [
      "Arvano Conseil n'a jamais formalisé de cartographie de ses processus : personne ne sait précisément où se situe la frontière entre l'avant-vente et la mission, ni qui en répond.",
      "Le plus gros client d'Arvano a signalé deux fois ce trimestre un écart entre ce qui a été vendu en avant-vente et ce qui a été livré en mission : l'interface entre les deux n'est tracée nulle part.",
      "Aucun processus ne capitalise les retours d'expérience d'une mission à l'autre : chaque consultant repart de zéro, ce qui nuit à la qualité perçue."
    ],
    comexExpectations: [
      "Une cartographie construite qui reflète une activité de service, avec des processus nommés en conséquence (aucun vocabulaire industriel).",
      "L'interface avant-vente / mission clairement tracée, avec un responsable identifié de chaque côté.",
      "Un processus de capitalisation des retours d'expérience, positionné sur la carte."
    ],
    specificMessages: [
      {
        id: "arvano-qualite",
        sender: "Thibault Varane",
        role: "Directeur qualité et méthodes",
        subject: "On fonctionne à l'instinct depuis toujours",
        preview:
          "Aucune cartographie de nos processus n'a jamais été formalisée chez Arvano.",
        receivedAt: "10:38",
        body: [
          "Bonjour,",
          "Je me rends compte qu'aucune cartographie de nos processus n'a jamais été formalisée chez Arvano : on fonctionne depuis toujours à l'instinct, mission après mission.",
          "Notre plus gros client a signalé deux fois ce trimestre un écart entre ce qu'on lui vend en avant-vente et ce qu'on lui livre en mission. Le renouvellement du contrat-cadre se discute dans 2 mois.",
          "J'ai besoin d'une cartographie qui montre enfin, noir sur blanc, ce qu'on fait vraiment."
        ]
      },
      {
        id: "arvano-avant-vente",
        sender: "Margaux Soubise",
        role: "Responsable avant-vente",
        subject: "On vend des choses que la mission ne peut pas tenir",
        preview:
          "Rien ne trace ce qui se passe entre la signature d'une offre et le démarrage réel de la mission.",
        receivedAt: "11:55",
        body: [
          "Bonjour,",
          "De mon côté avant-vente, je signe des offres sur la base d'hypothèses qui ne remontent pas toujours correctement aux équipes de mission.",
          "Rien n'est écrit nulle part sur ce qui doit se passer entre la signature et le démarrage réel : c'est pourtant là que les écarts se créent."
        ]
      }
    ],
    company: {
      name: "Arvano Conseil",
      monogram: "AC",
      presentation:
        "Cabinet de conseil en transformation digitale, une quarantaine de consultants, qui a triplé ses effectifs en trois ans sans jamais formaliser de cartographie de ses processus.",
      location: "Nantes, Pays de la Loire, France",
      headquartersVisual: "Bureaux et salles de projet, pas de site de production",
      sector: "Conseil",
      products: [
        "Missions d'audit et de cadrage",
        "Accompagnement au changement",
        "Développement d'outils internes pour les clients"
      ],
      organization: [
        "Direction générale et associés fondateurs",
        "Équipes projet constituées mission par mission",
        "Fonction avant-vente distincte des équipes de mission",
        "Aucune cartographie des processus n'a jamais été formalisée, malgré la forte croissance des trois dernières années"
      ],
      certifications: [
        "ISO 9001 depuis 2020 (exigée par plusieurs appels d'offres)",
        "Référencement sur plusieurs accords-cadres publics"
      ],
      strategicObjectives: [
        "Construire une cartographie qui reflète enfin une activité de service",
        "Sécuriser la bascule entre avant-vente et mission",
        "Capitaliser les retours d'expérience d'une mission à l'autre",
        "Rassurer le plus gros client avant le renouvellement du contrat-cadre"
      ],
      mainContact: {
        name: "Thibault Varane",
        role: "Directeur qualité et méthodes",
        email: "thibault.varane@arvano-conseil.example"
      },
      mandateIssues: [
        "Cartographier une activité de service avec les bons mots (pas ceux d'une usine)",
        "Sécuriser l'interface avant-vente / mission, source des réclamations",
        "Donner à la direction une carte qu'elle n'aura pas honte de montrer à son client"
      ],
      currentSituation: [
        "Aucune cartographie des processus n'a jamais été formalisée chez Arvano, malgré une croissance rapide des effectifs ces trois dernières années.",
        "Le plus gros client d'Arvano a signalé deux fois ce trimestre un décalage entre ce qui a été vendu en avant-vente et ce qui a été livré en mission.",
        "Aucun processus ne capitalise les retours d'expérience : chaque consultant repart de zéro.",
        "Le renouvellement du contrat-cadre avec ce client est en discussion dans 2 mois."
      ],
      constraints: [
        "Pas de site de production : toute la cartographie doit être repensée en termes de service",
        "Consultants en mission chez le client, peu disponibles pour la démarche",
        "Avant-vente et mission sont deux équipes qui se parlent peu",
        "Délai serré avant le renouvellement du contrat-cadre"
      ],
      risks: [
        "Décrire la cartographie avec un vocabulaire calqué sur l'industrie, alors qu'Arvano est un pur cabinet de service",
        "Négliger l'interface avant-vente / mission, pourtant la plus citée dans les réclamations",
        "Produire une cartographie qui ne convainc pas le client avant le renouvellement",
        "Oublier la capitalisation comme processus à part entière"
      ],
      revenue: "6,4 M EUR",
      headcount: "42 collaborateurs",
      clients: [
        "Grands groupes industriels (missions de transformation)",
        "Collectivités territoriales (accords-cadres)",
        "ETI en croissance"
      ]
    }
  },
  {
    id: "carto-virel",
    cabinetName: "Cabinet Meridian",
    title: "Cartographie — Virel Semiconducteurs (semi-conducteurs)",
    sector: "Semi-conducteurs",
    referential: "Cartographie des processus et parties prenantes",
    objective:
      "Construire, pour la première fois, la cartographie complète des processus de Virel Semiconducteurs, en intégrant un processus de gestion des changements répondant à l'exigence d'un client automobile, et en distinguant la qualification produit de la production en continu.",
    problematique:
      "Votre cabinet saura-t-il construire, à partir de rien, une cartographie de Virel Semiconducteurs qui démontre au client automobile une vraie maîtrise des changements de process, avec un pitch qui convainc la direction de vous confier la suite plutôt que de gérer ça en interne ?",
    issues: [
      "Virel Semiconducteurs n'a jamais formalisé de cartographie de ses processus : un client automobile stratégique exige désormais la preuve d'une gestion maîtrisée des changements de process, et personne ne sait où la positionner.",
      "Les témoignages recueillis mélangent systématiquement la qualification d'un nouveau produit et la production en continu, alors que leurs exigences et leurs risques sont très différents.",
      "Le taux de rebut en salle blanche a augmenté ce trimestre, sans qu'aucun processus ne permette d'en localiser la cause."
    ],
    comexExpectations: [
      "Un processus de gestion des changements positionné sur la carte construite, avec un pilote et relié à l'exigence du client automobile.",
      "La qualification produit et la production en continu distinguées en deux processus séparés.",
      "Un indicateur relié au taux de rebut, permettant de localiser où il se forme."
    ],
    specificMessages: [
      {
        id: "virel-qualite",
        sender: "Gauthier Pradier",
        role: "Responsable qualité fournisseur et client",
        subject: "Notre client automobile veut une preuve qu'on n'a pas",
        preview:
          "Il exige une gestion maîtrisée des changements de process, absente de notre cartographie.",
        receivedAt: "10:41",
        body: [
          "Bonjour,",
          "Un de nos clients automobiles stratégiques exige, dans un avenant, la preuve d'une gestion maîtrisée des changements de process. Je me rends compte qu'aucune cartographie de nos processus n'a jamais été formalisée chez Virel : impossible de montrer où ce processus devrait se situer.",
          "En plus, dans tout ce qu'on me décrit, la qualification d'un nouveau produit et la production en continu sont systématiquement mélangées : ce sont pourtant deux mondes très différents.",
          "J'ai besoin d'une cartographie construite qui réponde précisément à cette exigence."
        ]
      },
      {
        id: "virel-production",
        sender: "Anissa Kerbrat",
        role: "Responsable salle blanche",
        subject: "Le rebut augmente et je ne sais pas où il se forme",
        preview:
          "Le taux de rebut grimpe ce trimestre, mais notre carte ne permet pas de localiser la cause.",
        receivedAt: "11:58",
        body: [
          "Bonjour,",
          "Le taux de rebut en salle blanche a augmenté ce trimestre. Le problème, c'est que rien n'est écrit nulle part qui distingue assez les étapes pour que je sache où ça se forme réellement.",
          "Une cartographie construite, plus précise, m'aiderait à cibler où agir en priorité."
        ]
      }
    ],
    company: {
      name: "Virel Semiconducteurs",
      monogram: "VS",
      presentation:
        "Fabricant de composants électroniques pour l'automobile et l'industrie, avec une salle blanche et des cycles de qualification produit très longs. Un client automobile vient d'exiger un niveau de traçabilité et de maîtrise des changements que l'entreprise ne peut pas démontrer aujourd'hui, faute de cartographie formalisée.",
      location: "Grenoble, Auvergne-Rhône-Alpes, France",
      headquartersVisual: "Site de fabrication en salle blanche et laboratoire de caractérisation",
      sector: "Semi-conducteurs",
      products: [
        "Composants de puissance pour l'automobile",
        "Capteurs industriels",
        "Circuits intégrés sur mesure"
      ],
      organization: [
        "Direction générale et direction qualité au siège de Grenoble",
        "Salle blanche de fabrication et laboratoire de test",
        "Fonction R&D / qualification produit distincte de la production",
        "Processus de gestion des changements non formalisé à l'échelle de l'entreprise"
      ],
      certifications: [
        "ISO 9001 depuis 2015",
        "Qualification AEC-Q100 sur une partie de la gamme automobile",
        "Client automobile stratégique exigeant un niveau de maîtrise proche de l'IATF 16949"
      ],
      strategicObjectives: [
        "Démontrer la maîtrise des changements de process exigée par le client automobile",
        "Réduire le taux de rebut en salle blanche",
        "Fiabiliser les cycles de qualification produit",
        "Donner à la direction une cartographie qui objective où investir"
      ],
      mainContact: {
        name: "Gauthier Pradier",
        role: "Responsable qualité fournisseur et client",
        email: "gauthier.pradier@virel-semi.example"
      },
      mandateIssues: [
        "Cartographier une entreprise où tout changement de process doit être qualifié avant d'être appliqué",
        "Relier la gestion des changements aux exigences du client automobile",
        "Distinguer la R&D / qualification produit de la production en continu"
      ],
      currentSituation: [
        "Un client automobile stratégique a exigé, dans un avenant contractuel, la preuve d'une gestion maîtrisée des changements de process.",
        "Aucune cartographie des processus n'a jamais été formalisée chez Virel Semiconducteurs : la qualification d'un nouveau produit et la production en continu sont décrites de façon confuse, sans qu'on sache où commence l'une et finit l'autre.",
        "Le taux de rebut en salle blanche a augmenté sur le dernier trimestre, sans que personne ne sache quel processus en est la cause.",
        "Aucun processus de gestion des changements n'est formalisé à l'échelle de l'entreprise."
      ],
      constraints: [
        "Toute modification de process en salle blanche doit être qualifiée avant application",
        "Cycles de qualification produit longs (plusieurs mois)",
        "Deux populations très différentes : ingénieurs R&D et opérateurs de production",
        "Exigences clients automobiles proches de l'IATF 16949 sans certification formelle"
      ],
      risks: [
        "Confondre qualification produit et production en continu dans le même processus",
        "Minimiser l'exigence du client automobile sur la gestion des changements",
        "Produire une cartographie qui n'aide pas à localiser la cause du rebut",
        "Oublier de distinguer les deux populations (R&D et production) dans les interfaces"
      ],
      revenue: "34 M EUR",
      headcount: "210 collaborateurs",
      clients: [
        "Équipementiers automobiles de rang 1",
        "Industriels de l'instrumentation",
        "Intégrateurs électroniques"
      ]
    }
  },
  {
    id: "carto-haranis",
    cabinetName: "Cabinet Nova",
    title: "Cartographie — Haranis Construction (BTP)",
    sector: "BTP",
    referential: "Cartographie des processus et parties prenantes",
    objective:
      "Construire, pour la première fois, la cartographie complète des processus de Haranis Construction, en distinguant le chiffrage, le chantier et la réception, et en formalisant la qualification et la coordination sécurité des sous-traitants, après un incident récent.",
    problematique:
      "Votre cabinet saura-t-il construire, à partir de rien, une cartographie de Haranis Construction qui sécurise la coordination avec les sous-traitants, avec un pitch qui convainc la direction de vous confier la suite après l'incident récent ?",
    issues: [
      "Haranis Construction n'a jamais formalisé de cartographie de ses processus : un incident de sécurité récent impliquait un sous-traitant que personne n'avait formellement qualifié, et aucun processus ne couvre cette étape.",
      "Les témoignages recueillis regroupent systématiquement le chiffrage, le chantier et la réception sous le même terme générique « travaux », alors que leurs risques et leurs responsables sont très différents.",
      "Le taux de réserves à la réception des chantiers reste élevé, sans qu'aucun indicateur ne permette d'en suivre l'évolution."
    ],
    comexExpectations: [
      "Un processus de qualification des sous-traitants positionné sur la carte construite, relié à la coordination sécurité.",
      "Le chiffrage, le chantier et la réception distingués en processus séparés, avec un pilote chacun.",
      "Un indicateur de réserves à la réception, avec une cible et un plan d'action."
    ],
    specificMessages: [
      {
        id: "haranis-qse",
        sender: "Oriane Delcasse",
        role: "Responsable QSE groupe",
        subject: "L'incident sur le chantier révèle un trou dans notre carte",
        preview:
          "Le sous-traitant impliqué n'avait jamais été formellement qualifié : aucun processus ne couvre cette étape.",
        receivedAt: "10:44",
        body: [
          "Bonjour,",
          "Suite à l'incident de sécurité sur le chantier de la semaine dernière, j'ai cherché où était censée se faire la qualification des sous-traitants. Nulle part : aucune cartographie de nos processus n'a jamais été formalisée chez Haranis.",
          "Tout le monde parle de « travaux » pour désigner le chiffrage, le chantier et la réception en même temps : impossible de savoir qui répond de quoi à chaque étape.",
          "J'ai besoin d'une cartographie construite qui évite qu'un tel incident se reproduise."
        ]
      },
      {
        id: "haranis-travaux",
        sender: "Yanis Berger",
        role: "Conducteur de travaux",
        subject: "On découvre les problèmes trop tard, à la réception",
        preview:
          "Le taux de réserves à la réception reste élevé, sans qu'on sache pourquoi d'un chantier à l'autre.",
        receivedAt: "11:52",
        body: [
          "Bonjour,",
          "Sur le terrain, on découvre souvent les problèmes trop tard, au moment de la réception du chantier, avec des réserves qui s'accumulent.",
          "Une cartographie construite qui distingue mieux le chiffrage, le chantier et la réception m'aiderait à anticiper au lieu de subir."
        ]
      }
    ],
    company: {
      name: "Haranis Construction",
      monogram: "HC",
      presentation:
        "Entreprise de construction et de travaux publics, organisée par chantiers, avec un recours important à la sous-traitance. Un incident de sécurité récent sur un chantier a mis en évidence l'absence de cartographie claire entre le chiffrage, le chantier et la réception.",
      location: "Toulouse, Occitanie, France",
      headquartersVisual: "Siège administratif et dépôt de matériel, activité répartie sur plusieurs chantiers",
      sector: "BTP",
      products: [
        "Construction de bâtiments tertiaires",
        "Travaux publics pour collectivités",
        "Rénovation énergétique de bâtiments"
      ],
      organization: [
        "Direction générale et bureau d'études au siège de Toulouse",
        "Conducteurs de travaux affectés chantier par chantier",
        "Recours fréquent à des sous-traitants pour les lots spécialisés",
        "Aucun processus formalisé de coordination sécurité entre chantiers"
      ],
      certifications: [
        "ISO 9001 depuis 2017",
        "Qualibat pour plusieurs qualifications de travaux",
        "Obligations de coordination SPS (sécurité et protection de la santé) sur les chantiers"
      ],
      strategicObjectives: [
        "Cartographier le parcours chiffrage → chantier → réception",
        "Formaliser la coordination sécurité et la qualification des sous-traitants",
        "Réduire les reprises et les réserves à la réception",
        "Donner à la direction une cartographie utilisable chantier après chantier"
      ],
      mainContact: {
        name: "Oriane Delcasse",
        role: "Responsable QSE groupe",
        email: "oriane.delcasse@haranis-construction.example"
      },
      mandateIssues: [
        "Cartographier une activité organisée par chantiers, pas par ligne de production fixe",
        "Formaliser la qualification et la coordination des sous-traitants",
        "Relier la sécurité chantier aux processus concernés, après un incident récent"
      ],
      currentSituation: [
        "Un incident de sécurité est survenu récemment sur un chantier impliquant un sous-traitant non qualifié par Haranis.",
        "Aucune cartographie des processus n'a jamais été formalisée chez Haranis Construction : chiffrage, chantier et réception sont désignés indifféremment sous le même terme « travaux ».",
        "Aucun processus ne qualifie formellement les sous-traitants avant leur intervention.",
        "Le taux de réserves à la réception des chantiers reste élevé depuis plusieurs trimestres."
      ],
      constraints: [
        "Organisation par chantiers, pas par site fixe de production",
        "Sous-traitance importante sur les lots spécialisés",
        "Conducteurs de travaux très mobilisés sur le terrain, peu disponibles",
        "Obligations réglementaires de coordination sécurité (SPS) à respecter"
      ],
      risks: [
        "Minimiser l'incident de sécurité récent dans la restitution",
        "Confondre chiffrage, chantier et réception dans un seul processus illisible",
        "Oublier la qualification des sous-traitants comme processus à part entière",
        "Proposer une cartographie qui ne tient pas compte de la mobilité des équipes terrain"
      ],
      revenue: "28 M EUR",
      headcount: "160 collaborateurs",
      clients: [
        "Collectivités territoriales (marchés publics)",
        "Promoteurs immobiliers tertiaires",
        "Bailleurs sociaux (rénovation énergétique)"
      ]
    }
  }
];

export const simulation: SimulationData = {
  missionLetter: {
    clientCompany: "Entreprise confiée à votre cabinet",
    context:
      "Chaque cabinet reçoit une entreprise cliente différente, dans un secteur différent, dont la cartographie des processus n'a jamais été formalisée.",
    objective:
      "Identifier les exigences de l'entreprise confiée, construire sa cartographie des processus à partir de rien, et proposer une sélection de processus clés.",
    assignedMandate:
      "L'entreprise confiée à votre équipe constitue le périmètre de votre analyse. Il s'agit de construire, à partir des documents fournis, une cartographie qui serve vraiment ses parties prenantes, à chaque niveau de la carte.",
    expectedDeliverable:
      "Une cartographie de processus complète, construite par votre équipe et intégrant les parties prenantes, et une sélection de processus clés justifiée, présentées en pitch devant le comité de direction de votre entreprise cliente.",
    presentationDate: "Aujourd'hui, 16h30"
  },
  messages: [
    {
      id: "coord-lancement",
      sender: "Secrétariat de la simulation",
      role: "Direction de la simulation",
      subject: "Lancement de l'exercice de cartographie",
      preview:
        "Chaque cabinet reçoit une entreprise différente : consultez votre lettre de mission pour découvrir la vôtre.",
      receivedAt: "08:40",
      body: [
        "Bonjour,",
        "Cette session confie à chaque cabinet une entreprise cliente différente, dans un secteur différent. Vous trouverez le détail de la vôtre dans votre lettre de mission et votre dossier client.",
        "Le principe reste le même pour tous : aucune cartographie des processus n'existe chez votre client. Votre travail est de la construire entièrement, à partir des documents mis à votre disposition (organigramme, témoignages des équipes)."
      ]
    },
    {
      id: "coord-parties-prenantes",
      sender: "Secrétariat de la simulation",
      role: "Direction de la simulation",
      subject: "Les parties prenantes, à tous les niveaux",
      preview:
        "Quelle que soit votre entreprise, vérifiez que ses parties prenantes apparaissent à chaque niveau de la carte.",
      receivedAt: "10:10",
      body: [
        "Bonjour,",
        "Rappel valable pour toutes les entreprises de cet exercice : les parties prenantes doivent se retrouver à chaque niveau de la cartographie (carte macro, processus, fiches d'identité, indicateurs), pas seulement en façade.",
        "Une carte qui les oublie à un seul niveau laissera une exigence sans réponse."
      ]
    },
    {
      id: "coord-restitution",
      sender: "Secrétariat de la simulation",
      role: "Direction de la simulation",
      subject: "Attentes pour le pitch de 16h30",
      preview:
        "Le comité de direction de votre entreprise cliente attend une cartographie complète et une décision précise.",
      receivedAt: "15:35",
      body: [
        "Bonjour,",
        "Pour le pitch de 16h30, le comité de direction de votre entreprise cliente attend : la cartographie complète que vous avez construite, les processus clés sélectionnés et justifiés, et une décision précise à faire trancher.",
        "Évitez un pitch descriptif : nous attendons une valeur argumentée et une décision à prendre, pas un rappel de ce qui existe déjà."
      ]
    }
  ],
  comexExpectations: [
    {
      title: "Une cartographie complète construite sur l'entreprise confiée",
      detail:
        "Le comité de direction attend une cartographie entièrement construite par votre équipe, puisqu'aucune n'existait avant votre intervention."
    },
    {
      title: "Les parties prenantes à tous les niveaux",
      detail:
        "Les parties prenantes de l'entreprise doivent apparaître à la carte macro, dans les processus, les fiches d'identité et les indicateurs."
    },
    {
      title: "Des processus nommés et hiérarchisés",
      detail:
        "Chaque processus doit porter un verbe d'action et un objet, et s'inscrire dans une hiérarchie lisible (10 à 16 processus au niveau 1)."
    },
    {
      title: "Des processus clés sélectionnés et justifiés",
      detail:
        "La sélection des processus clés doit reposer sur des critères explicites (objectifs stratégiques, résultats, parties prenantes, performance durable, risques), pas sur l'habitude."
    },
    {
      title: "Des pilotes désignés",
      detail:
        "Au moins les processus critiques de l'entreprise confiée doivent avoir un pilote identifié, avec une autorité claire."
    },
    {
      title: "Un pitch orienté décision",
      detail:
        "La restitution doit déboucher sur une décision précise pour la direction, pas se limiter à décrire la cartographie."
    }
  ],
  keyDates: [
    "09h00 - Lancement de l'exercice, découverte de l'entreprise confiée",
    "11h30 - Rappel sur l'intégration des parties prenantes",
    "14h00 - Préparation de l'équipe",
    "16h30 - Pitch devant le comité de direction de l'entreprise cliente"
  ]
};
