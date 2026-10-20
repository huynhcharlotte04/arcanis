import type { Mandate, SimulationData } from "@/lib/types";

// Cartographie des processus et intégration des parties prenantes (QSEAL11).
// Contrairement à QSEAL13 (qui scinde la chaîne commande -> livraison en 4
// processus), QSEAL11 porte sur UNE seule cartographie globale de Montrel,
// déjà esquissée mais pleine de défauts ("version 0"). Pour que les 4 équipes
// aient un périmètre distinct sans dupliquer QSEAL13, chaque cabinet reprend
// cette même cartographie à travers le prisme d'une famille de parties
// prenantes (cf. cours : « la valeur pour qui ? » - clients, collaborateurs,
// actionnaires, autorités et société). Les noms de cabinets sont repris des
// autres modules pour une resolution "cabinet -> mandat" identique.
//   sector      = prisme partie prenante confié
//   referential = cadre de travail (cartographie des processus)
export const mandates: Mandate[] = [
  {
    id: "carto-clients",
    cabinetName: "Cabinet Horizon",
    title: "Cartographie — Prisme Clients",
    sector: "Clients",
    referential: "Cartographie des processus et parties prenantes",
    objective:
      "Vérifier que la cartographie « version 0 » de Montrel rend visible, de bout en bout, le parcours qui crée de la valeur pour le client, et corriger les écarts qui expliquent la hausse de 18 % des réclamations en 12 mois.",
    problematique:
      "Votre cabinet saura-t-il remettre le client au cœur de la cartographie de Montrel, avec un pitch assez convaincant pour que la direction vous confie la suite du chantier plutôt qu'une autre équipe ?",
    issues: [
      "La cartographie « version 0 » ne montre le client qu'à une seule extrémité de la carte : rien n'indique comment ses exigences (produit conforme, délai tenu, réponse rapide) sont reprises par les processus eux-mêmes (ISO 9001:2015, art. 4.2 et 4.4.1 b).",
      "Le bloc « Production » de la carte actuelle est un processus fourre-tout qui absorbe la conception, la fabrication et le contrôle : impossible d'identifier à quelle étape se perdent les engagements pris auprès du client.",
      "Le traitement des réclamations n'a aucune boucle de retour tracée vers les processus amont (vente, conception, achats) : les causes ne remontent jamais jusqu'à la source."
    ],
    comexExpectations: [
      "Le client visible et nommé à chaque étape du parcours, pas seulement en entrée et en sortie de la carte macro.",
      "Le bloc « Production » découpé en processus nommés par un verbe d'action et un résultat, selon la règle de nommage vue en cours.",
      "Un indicateur de résultat, pas seulement d'activité, relié à l'attente client la plus citée dans les réclamations."
    ],
    specificMessages: [
      {
        id: "mandate-clients-commercial",
        sender: "Karim Belkacem",
        role: "Directeur commercial",
        subject: "Nos clients ne se retrouvent pas dans notre carte",
        preview:
          "Un client a demandé à voir notre cartographie des processus : impossible de lui montrer où se joue son dossier.",
        receivedAt: "10:37",
        body: [
          "Bonjour,",
          "Un de nos clients a demandé, dans le cadre d'un audit fournisseur, à voir comment nous maîtrisons le parcours de sa commande. J'ai sorti notre cartographie « version 0 » et j'ai été incapable de lui montrer où ses exigences étaient reprises.",
          "Le bloc « Production » englobe tout, du dessin du produit à l'expédition : je ne sais pas lui dire précisément où se perdent les délais ou la qualité.",
          "J'ai besoin que votre équipe m'aide à remettre le client au centre de cette carte avant le prochain audit fournisseur."
        ]
      }
    ]
  },
  {
    id: "carto-collaborateurs",
    cabinetName: "Cabinet Polaris",
    title: "Cartographie — Prisme Collaborateurs",
    sector: "Collaborateurs",
    referential: "Cartographie des processus et parties prenantes",
    objective:
      "Vérifier que la cartographie « version 0 » de Montrel intègre les exigences des collaborateurs (sécurité, compétences) et corriger l'absence de processus dédiés à la santé-sécurité et à l'environnement.",
    problematique:
      "Votre cabinet saura-t-il donner aux collaborateurs une vraie place dans la cartographie de Montrel, avec un pitch qui convainc la direction de ne pas réduire ça à une case de plus ?",
    issues: [
      "La cartographie « version 0 » ne comporte aucun processus de sécurité ni d'environnement : les démarches ISO 45001 et ISO 14001 engagées sur le site secondaire n'apparaissent nulle part sur la carte.",
      "Aucun pilote n'est désigné sur les 34 cases de la carte actuelle : personne ne répond formellement des engagements pris envers les équipes (formation, conditions de travail).",
      "Les représentants du personnel, partie prenante interne à part entière (ISO 9001:2015, art. 4.2), ne sont identifiés nulle part dans la cartographie existante."
    ],
    comexExpectations: [
      "Une décision claire, argumentée et pas improvisée : processus santé-sécurité et environnement dédiés, ou exigences intégrées à chaque processus concerné.",
      "Au moins un pilote désigné, avec lettre de mission, sur les processus les plus critiques du point de vue des collaborateurs.",
      "Un indicateur de sécurité ou de compétences relié à une attente concrète des équipes, pas à ce qui est simplement facile à mesurer."
    ],
    specificMessages: [
      {
        id: "mandate-collaborateurs-rh",
        sender: "Nadia Saïdi",
        role: "Responsable ressources humaines",
        subject: "Les équipes ne se reconnaissent pas dans la cartographie",
        preview:
          "Ni la sécurité, ni les représentants du personnel n'apparaissent dans notre cartographie des processus.",
        receivedAt: "10:40",
        body: [
          "Bonjour,",
          "En préparant un point avec le CSE, je me suis aperçue que notre cartographie « version 0 » ne fait apparaître ni la sécurité, ni l'environnement, ni les représentants du personnel.",
          "Nos démarches ISO 45001 et ISO 14001 sur le site secondaire avancent de leur côté, sans lien visible avec le reste de la carte. Et aucun processus n'a de pilote désigné : difficile de dire qui répond de quoi envers les équipes.",
          "J'ai besoin que votre équipe m'aide à donner une vraie place aux collaborateurs dans cette cartographie."
        ]
      }
    ]
  },
  {
    id: "carto-autorites",
    cabinetName: "Cabinet Meridian",
    title: "Cartographie — Prisme Autorités & société",
    sector: "Autorités & société",
    referential: "Cartographie des processus et parties prenantes",
    objective:
      "Vérifier que la cartographie « version 0 » de Montrel couvre la veille réglementaire et le référentiel sectoriel attendu par un client export, avant l'audit client prévu dans 6 mois.",
    problematique:
      "Votre cabinet saura-t-il préparer la cartographie de Montrel à l'audit client dans 6 mois, avec un pitch qui démontre une vraie maîtrise réglementaire et sectorielle ?",
    issues: [
      "La cartographie « version 0 » ne fait apparaître aucun processus de veille réglementaire, alors que Montrel détient déjà quatre référentiels (ISO 9001, 14001, 45001, exigences clients) qui évoluent chacun de leur côté.",
      "Un client export a évoqué, lors d'un appel d'offres, une exigence de conformité à un référentiel sectoriel (par exemple IATF 16949 en automobile ou ISO 13485 pour les dispositifs médicaux, selon le secteur du client) que la cartographie actuelle ne couvre pas.",
      "L'audit client annoncé dans 6 mois porte précisément sur la maîtrise des processus et de leurs interactions (ISO 9001:2015, art. 4.4) : la cartographie « version 0 », avec ses 34 cases sans pilote ni interaction tracée, ne permet pas de le démontrer."
    ],
    comexExpectations: [
      "Le processus de veille réglementaire et normative positionné sur la carte, avec un pilote identifié.",
      "Une lecture claire de ce qu'ajoute le référentiel sectoriel identifié, et des processus qu'il impacte.",
      "Une cartographie assez solide pour servir de preuve face à l'audit client annoncé dans 6 mois."
    ],
    specificMessages: [
      {
        id: "mandate-autorites-export",
        sender: "Agathe Fournier",
        role: "Responsable qualité export",
        subject: "Un client export nous demande un référentiel qu'on ne trace pas",
        preview:
          "Un client a conditionné un appel d'offres à un référentiel sectoriel absent de notre cartographie.",
        receivedAt: "10:43",
        body: [
          "Bonjour,",
          "Un client export nous a indiqué, dans un appel d'offres en cours, qu'il attend une conformité à un référentiel sectoriel que je ne retrouve nulle part sur notre cartographie « version 0 ».",
          "En creusant, je me suis rendu compte qu'aucun processus de veille réglementaire n'apparaît sur la carte : nos quatre référentiels (ISO 9001, 14001, 45001, exigences clients) avancent chacun dans leur coin.",
          "Avec l'audit client annoncé dans 6 mois, j'ai besoin que votre équipe m'aide à montrer qu'on maîtrise vraiment ce sujet."
        ]
      }
    ]
  },
  {
    id: "carto-direction",
    cabinetName: "Cabinet Nova",
    title: "Cartographie — Prisme Direction & performance",
    sector: "Direction & performance",
    referential: "Cartographie des processus et parties prenantes",
    objective:
      "Sélectionner, à partir de la cartographie « version 0 » de Montrel, les processus réellement clés pour la direction (grille d'impact AFNOR FD X 50-176), et construire le pitch qui justifie d'y concentrer les moyens.",
    problematique:
      "Votre cabinet saura-t-il trier l'essentiel dans la cartographie de Montrel et convaincre la direction, en un pitch, de miser dessus plutôt que de confier la suite à une autre équipe ?",
    issues: [
      "La cartographie « version 0 » aligne 34 processus au même niveau, sans hiérarchie ni lien avec la stratégie ou les objectifs de l'entreprise.",
      "Aucun processus de management (stratégie, pilotage, amélioration) n'apparaît sur la carte actuelle : rien ne montre comment la direction pilote l'ensemble.",
      "Face à la hausse de 18 % des réclamations en 12 mois, la direction n'a aujourd'hui aucun moyen objectif de choisir où concentrer ses efforts en premier."
    ],
    comexExpectations: [
      "Une hiérarchie claire de la carte : 10 à 16 processus au niveau 1, avec la famille management explicitée.",
      "Une sélection de 4 à 6 processus clés, justifiée par une matrice d'impact (objectifs stratégiques, résultats, parties prenantes, performance durable, risques).",
      "Un pitch qui porte une décision précise pour la direction, pas un simple constat."
    ],
    specificMessages: [
      {
        id: "mandate-direction-daf",
        sender: "Antoine Mercier",
        role: "Directeur financier",
        subject: "On ne sait pas où concentrer nos efforts",
        preview:
          "34 processus au même niveau, aucun classé par importance : impossible d'arbitrer où investir.",
        receivedAt: "10:46",
        body: [
          "Bonjour,",
          "Je dois proposer un budget d'amélioration à la direction générale, mais notre cartographie « version 0 » aligne 34 processus au même niveau, sans aucune hiérarchie.",
          "Je ne sais pas quels processus sont vraiment critiques pour nos résultats et notre stratégie, ni où concentrer les moyens en priorité face à la hausse des réclamations.",
          "J'ai besoin que votre équipe m'aide à objectiver ce choix avant que je ne présente un budget à l'aveugle."
        ]
      }
    ]
  }
];

export const simulation: SimulationData = {
  missionLetter: {
    clientCompany: "Montrel Industries",
    context:
      "Face à la hausse de 18 % des réclamations en 12 mois et à un audit client annoncé dans 6 mois, Montrel Industries reprend sa cartographie des processus. Chaque équipe reprend cette cartographie « version 0 » à travers le prisme d'une famille de parties prenantes.",
    objective:
      "Identifier les exigences de la partie prenante confiée, corriger les défauts de la cartographie existante sur ce prisme, et proposer une sélection de processus clés.",
    assignedMandate:
      "Le prisme confié à votre équipe constitue le périmètre de votre analyse. Il s'agit de vérifier, à ce prisme, que la cartographie sert vraiment cette partie prenante, à chaque niveau de la carte.",
    expectedDeliverable:
      "Une cartographie de processus annotée, intégrant les parties prenantes, et une sélection de processus clés justifiée, présentées en pitch devant le comité de direction.",
    presentationDate: "Aujourd'hui, 16h30"
  },
  messages: [
    {
      id: "dq",
      sender: "Camille Ferrand",
      role: "Responsable qualité groupe",
      subject: "Reprendre notre cartographie des processus",
      preview:
        "Notre cartographie existe depuis deux ans, mais elle n'a jamais été revue : la direction veut un outil de pilotage, pas un décor.",
      receivedAt: "08:40",
      body: [
        "Bonjour,",
        "Notre cartographie des processus « version 0 » existe depuis deux ans, mais elle n'a jamais été revue ni validée par la direction. Les réclamations ont augmenté de 18 % en douze mois.",
        "Votre équipe reprend cette cartographie à travers un prisme précis. J'attends une carte qui serve vraiment à piloter l'entreprise, pas un schéma de plus pour l'audit."
      ]
    },
    {
      id: "responsable-charge",
      sender: "Philippe Marchand",
      role: "Responsable opérationnel",
      subject: "Encore une cartographie ?",
      preview:
        "Nos équipes savent ce qu'elles font : je ne vois pas ce qu'une nouvelle carte va changer sur le terrain.",
      receivedAt: "09:25",
      body: [
        "Bonjour,",
        "Honnêtement, nos équipes produisent depuis des années sans avoir eu besoin d'une carte sur le mur. Je crains que cette démarche ne reste qu'un exercice pour l'audit.",
        "Si votre travail doit changer quelque chose, il faudra que ce soit concret et utile au terrain, pas juste présentable en revue de direction."
      ]
    },
    {
      id: "manager-qse",
      sender: "Nadia Cherif",
      role: "Manager QSE",
      subject: "Les parties prenantes à tous les niveaux",
      preview:
        "Le vrai sujet, c'est d'intégrer les parties prenantes à chaque niveau de la carte, pas seulement aux deux extrémités.",
      receivedAt: "10:05",
      body: [
        "Bonjour,",
        "Attention à ne pas réduire les parties prenantes à une case d'entrée et une case de sortie sur la carte macro : elles doivent se retrouver à chaque niveau, jusqu'aux fiches de processus.",
        "Un prisme partie prenante qui ne descend pas jusqu'au détail ne servira à rien devant la direction."
      ]
    },
    {
      id: "client",
      sender: "Service achats client",
      role: "Client stratégique",
      subject: "Audit fournisseur à venir",
      preview:
        "Nous auditerons votre maîtrise des processus dans le cadre de notre prochain cycle de qualification.",
      receivedAt: "11:15",
      body: [
        "Madame, Monsieur,",
        "Notre prochain cycle de qualification fournisseurs intégrera une vérification de votre maîtrise des processus et de leurs interactions.",
        "Les fournisseurs capables de démontrer une cartographie à jour, pilotée et intégrant leurs parties prenantes seront privilégiés."
      ]
    },
    {
      id: "dg",
      sender: "Claire Montreuil",
      role: "Directrice générale",
      subject: "Attendu du comité de direction",
      preview:
        "Je veux une cartographie qui serve à décider, pas un constat de plus.",
      receivedAt: "12:05",
      body: [
        "Bonjour,",
        "Le comité de direction attend une cartographie claire, intégrant nos parties prenantes, et une sélection de processus clés que je puisse défendre face à notre actionnaire.",
        "Je serai attentive à la capacité de votre pitch à déboucher sur une décision concrète, pas seulement à décrire ce qui existe déjà."
      ]
    },
    {
      id: "dq-cadrage-prisme",
      sender: "Camille Ferrand",
      role: "Responsable qualité groupe",
      subject: "Cadrage du prisme confié",
      preview:
        "La direction qualité confirme le prisme partie prenante confié à votre équipe et le niveau d'analyse attendu.",
      receivedAt: "13:05",
      body: [
        "Bonjour,",
        "Je vous confirme le prisme partie prenante confié à votre équipe. Restez sur ce prisme, mais regardez-le à tous les niveaux de la carte : macro, processus, fiches, indicateurs.",
        "Le bon niveau de détail est celui qui rend les attentes de cette partie prenante vérifiables, ni trop macro, ni noyé dans le détail."
      ]
    },
    {
      id: "synthese-reclamations",
      sender: "Service documentation",
      role: "Veille documentaire",
      subject: "Synthèse des réclamations du trimestre",
      preview:
        "Les grandes familles de réclamations pointent presque toujours une rupture d'information entre deux processus.",
      receivedAt: "13:40",
      body: [
        "Bonjour,",
        "Vous trouverez les grandes familles de réclamations : délais non tenus, confirmations erronées, informations produit incomplètes.",
        "Ces réclamations pointent presque toujours une rupture d'information entre deux processus, ou une partie prenante dont l'attente n'est portée par aucun processus. À relier à votre prisme."
      ]
    },
    {
      id: "audit-constat",
      sender: "Auditeur interne",
      role: "Audit interne",
      subject: "Précisions sur le constat d'audit",
      preview:
        "L'audit interne précise les neuf défauts constatés sur la cartographie « version 0 ».",
      receivedAt: "14:15",
      body: [
        "Bonjour,",
        "L'audit interne a relevé neuf défauts sur la cartographie « version 0 » : vous en trouverez le détail dans le rapport d'audit du centre documentaire.",
        "Votre travail devra montrer comment ces défauts sont corrigés sur le prisme qui vous est confié, pas seulement les constater à nouveau."
      ]
    },
    {
      id: "qse-niveaux",
      sender: "Nadia Cherif",
      role: "Manager QSE",
      subject: "Vérifiez à tous les niveaux",
      preview:
        "Le manager QSE rappelle de vérifier l'intégration des parties prenantes à chaque niveau, pas seulement sur la carte macro.",
      receivedAt: "14:45",
      body: [
        "Bonjour,",
        "Pour votre prisme, vérifiez que la partie prenante concernée apparaît à la carte macro, dans les processus, dans les fiches d'identité et jusque dans les indicateurs.",
        "Une carte qui l'oublie à un seul niveau laissera une exigence sans réponse, ce qui sera visible lors de l'audit client."
      ]
    },
    {
      id: "operationnel-faisabilite",
      sender: "Philippe Marchand",
      role: "Responsable opérationnel",
      subject: "Restez réalistes sur le terrain",
      preview:
        "Les opérations alertent sur le risque d'une cartographie trop théorique, déconnectée de ce qui se passe réellement.",
      receivedAt: "15:10",
      body: [
        "Bonjour,",
        "Je veux bien soutenir la démarche, mais votre proposition doit rester réaliste pour les équipes de terrain.",
        "Précisez qui pilote quoi et avec quels moyens, sinon votre cartographie restera, comme la précédente, un schéma sans suite."
      ]
    },
    {
      id: "comite-attentes-restitution",
      sender: "Secrétariat du comité de direction",
      role: "Comité de direction",
      subject: "Attentes pour le pitch de 16h30",
      preview:
        "Le comité de direction précise les attendus du pitch final.",
      receivedAt: "15:35",
      body: [
        "Bonjour,",
        "Pour le pitch, le comité de direction attend la cartographie corrigée sur votre prisme, les processus clés sélectionnés et justifiés, et une décision précise à faire trancher.",
        "Évitez un pitch descriptif : nous attendons une valeur argumentée et une décision à prendre, pas un rappel de ce qui existe déjà."
      ]
    }
  ],
  comexExpectations: [
    {
      title: "Une cartographie corrigée sur le prisme confié",
      detail:
        "Le comité de direction attend une cartographie qui corrige, sur le prisme confié, les défauts constatés sur la « version 0 »."
    },
    {
      title: "Les parties prenantes à tous les niveaux",
      detail:
        "La partie prenante confiée doit apparaître à la carte macro, dans les processus, les fiches d'identité et les indicateurs."
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
        "Au moins les processus critiques du prisme confié doivent avoir un pilote identifié, avec une autorité claire."
    },
    {
      title: "Un pitch orienté décision",
      detail:
        "La restitution doit déboucher sur une décision précise pour la direction, pas se limiter à décrire la cartographie."
    }
  ],
  keyDates: [
    "09h00 - Lancement de la refonte de la cartographie",
    "11h30 - Alerte du client sur l'audit fournisseur à venir",
    "14h00 - Préparation de l'équipe",
    "16h30 - Pitch devant le comité de direction"
  ]
};
