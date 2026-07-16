import type { Mandate, SimulationData } from "@/lib/types";

// QSEAL13 — approche BPM. Chaque equipe (cabinet) prend un processus different
// de la chaine commande -> livraison. Les noms de cabinets sont repris de
// l'autre module pour que la resolution "nom de cabinet -> mandat" soit
// identique. Les champs generiques du type Mandate sont reutilises :
//   sector      = perimetre du processus confie
//   referential = cadre de travail (management par les processus)
export const mandates: Mandate[] = [
  {
    id: "processus-commande",
    cabinetName: "Cabinet Horizon",
    title: "Cartographie du processus Prise de commande",
    sector: "Prise de commande / Commercial",
    referential: "Management par les processus",
    objective:
      "Cartographier le processus de prise de commande, de la demande client a la commande confirmee, et identifier les ruptures a l'origine des reclamations.",
    issues: [
      "Delais et fiabilite des confirmations de commande adressees au client.",
      "Qualite des donnees transmises a l'aval (achats, production) au moment de la commande.",
      "Interfaces mal maitrisees entre le commercial, l'administration des ventes et la planification."
    ],
    comexExpectations: [
      "Une cartographie lisible du processus reel, pas du processus theorique.",
      "Les points de rupture relies aux reclamations sur le traitement des commandes.",
      "Des indicateurs de pilotage utiles au responsable du processus."
    ],
    specificMessages: [
      {
        id: "mandate-commande-adv",
        sender: "Sophie Renaud",
        role: "Responsable administration des ventes",
        subject: "Commandes incompletes en entree",
        preview:
          "Trop de commandes partent en production avec des donnees incompletes.",
        receivedAt: "10:38",
        body: [
          "Bonjour,",
          "Une part des reclamations vient de commandes confirmees trop vite, avec des specifications incompletes ou ambigues.",
          "Il faudrait cartographier ce qui se passe reellement entre la prise de commande et la transmission a l'aval, et voir ou l'information se perd."
        ]
      }
    ]
  },
  {
    id: "processus-achats",
    cabinetName: "Cabinet Polaris",
    title: "Cartographie du processus Achats / Approvisionnement",
    sector: "Achats / Approvisionnement",
    referential: "Management par les processus",
    objective:
      "Cartographier le processus achats et approvisionnement, et identifier les ruptures qui pesent sur les delais de traitement des commandes.",
    issues: [
      "Delais fournisseurs sur composants critiques et impact sur les commandes clients.",
      "Manque de visibilite partagee entre achats, production et administration des ventes.",
      "Traitement des alea (retards, non-conformites fournisseurs) peu formalise."
    ],
    comexExpectations: [
      "Une cartographie du processus achats et de ses interfaces amont/aval.",
      "Les ruptures qui se repercutent sur les reclamations clients.",
      "Des indicateurs de pilotage fournisseur et approvisionnement."
    ],
    specificMessages: [
      {
        id: "mandate-achats-approv",
        sender: "Karim Belkacem",
        role: "Responsable approvisionnement",
        subject: "Ruptures composants et effet domino",
        preview:
          "Nos ruptures composants se transforment vite en retards clients.",
        receivedAt: "10:41",
        body: [
          "Bonjour,",
          "Quand un composant critique manque, l'information circule mal jusqu'au client, et la reclamation arrive avant que nous ayons prevenu.",
          "Cartographier le processus achats devrait montrer ou nous pourrions anticiper et mieux communiquer avec l'aval."
        ]
      }
    ]
  },
  {
    id: "processus-production",
    cabinetName: "Cabinet Meridian",
    title: "Cartographie du processus Production / Realisation",
    sector: "Production / Realisation",
    referential: "Management par les processus",
    objective:
      "Cartographier le processus de production, de l'ordre de fabrication a la mise a disposition, et identifier les ruptures generant des reclamations.",
    issues: [
      "Reprises et retouches liees a des specifications incompletes en entree.",
      "Priorisation des ordres de fabrication peu lisible entre les deux sites.",
      "Traçabilite des aleas de production insuffisante pour piloter."
    ],
    comexExpectations: [
      "Une cartographie du processus production et de ses interfaces.",
      "Les ruptures internes qui degradent le delai et la conformite.",
      "Des indicateurs de pilotage de la performance de realisation."
    ],
    specificMessages: [
      {
        id: "mandate-production-atelier",
        sender: "Antoine Ferreira",
        role: "Responsable de production",
        subject: "Reprises evitables en atelier",
        preview:
          "Beaucoup de reprises viennent d'infos incompletes en amont.",
        receivedAt: "10:44",
        body: [
          "Bonjour,",
          "En atelier, une partie des retards vient de reprises que nous pourrions eviter si les donnees de commande arrivaient completes.",
          "Votre cartographie devrait aider a montrer que le probleme n'est pas seulement en production, mais dans la chaine de bout en bout."
        ]
      }
    ]
  },
  {
    id: "processus-livraison",
    cabinetName: "Cabinet Nova",
    title: "Cartographie du processus Livraison & traitement des reclamations",
    sector: "Livraison / SAV",
    referential: "Management par les processus",
    objective:
      "Cartographier le processus de livraison et de traitement des reclamations, et identifier les ruptures qui degradent la satisfaction client.",
    issues: [
      "Delais et fiabilite des expeditions vers les clients europeens.",
      "Traitement des reclamations peu structure, sans boucle de retour vers l'amont.",
      "Absence de vision consolidee des causes de reclamation."
    ],
    comexExpectations: [
      "Une cartographie du processus livraison et traitement des reclamations.",
      "Les causes recurrentes de reclamation et leurs origines amont.",
      "Des indicateurs de satisfaction et de traitement des reclamations."
    ],
    specificMessages: [
      {
        id: "mandate-livraison-sav",
        sender: "Elodie Nguyen",
        role: "Responsable service client",
        subject: "Reclamations sans boucle de retour",
        preview:
          "Nous traitons les reclamations, mais rien ne remonte vers l'amont.",
        receivedAt: "10:47",
        body: [
          "Bonjour,",
          "Nous absorbons les reclamations au service client, mais les causes ne remontent pas vers la commande, les achats ou la production.",
          "Cartographier notre processus devrait rendre visibles ces boucles de retour qui n'existent pas encore."
        ]
      }
    ]
  }
];

export const simulation: SimulationData = {
  missionLetter: {
    clientCompany: "ARCANIS Industries",
    context:
      "Face a la hausse des reclamations sur le traitement des commandes, la direction d'ARCANIS Industries engage la structuration de son management par les processus (approche BPM). Chaque equipe cartographie un processus de la chaine commande -> livraison.",
    objective:
      "Rendre visible le fonctionnement reel du processus confie, identifier ses points de rupture au regard des reclamations clients, et proposer un plan d'indicateurs de pilotage.",
    assignedMandate:
      "Le processus confie a votre equipe constitue le perimetre de votre analyse. Il s'agit de le cartographier tel qu'il fonctionne reellement, avant d'en proposer le pilotage.",
    expectedDeliverable:
      "Une cartographie de processus annotee et un plan d'indicateurs, presentes en revue de direction.",
    presentationDate: "Aujourd'hui, 16h30"
  },
  messages: [
    {
      id: "dq",
      sender: "Claire Martin",
      role: "Directrice qualite",
      subject: "Lancement de la demarche processus",
      preview:
        "La direction attend une cartographie utile au pilotage, pas un schema de plus.",
      receivedAt: "08:40",
      body: [
        "Bonjour,",
        "Nous engageons la structuration de notre management par les processus a la suite de la hausse des reclamations sur le traitement des commandes.",
        "Votre equipe cartographie un processus precis. J'attends une vision du reel et des points de rupture, pas une cartographie theorique."
      ]
    },
    {
      id: "pilote-reticent",
      sender: "Gerard Lemoine",
      role: "Pilote de processus (production)",
      subject: "Encore une demarche qualite ?",
      preview:
        "Nos processus fonctionnent, je ne vois pas ce qu'une cartographie va changer.",
      receivedAt: "09:20",
      body: [
        "Bonjour,",
        "Franchement, cela fait des annees que nous produisons sans avoir besoin de tout redessiner. Nos equipes savent ce qu'elles ont a faire.",
        "Je veux bien vous recevoir, mais je n'ai pas de temps a perdre avec un enieme schema qui finira dans un classeur."
      ]
    },
    {
      id: "manager-qse",
      sender: "Nadia Cherif",
      role: "Manager QSE",
      subject: "Tensions autour des interfaces",
      preview:
        "Le vrai sujet, ce sont les interfaces entre pilotes, pas les processus pris isolement.",
      receivedAt: "10:05",
      body: [
        "Bonjour,",
        "Attention : chaque pilote defend son perimetre, et les problemes se logent souvent entre deux processus.",
        "Si vous cartographiez sans regarder les interfaces avec l'amont et l'aval, vous passerez a cote de l'essentiel. Il faudra aussi menager les susceptibilites."
      ]
    },
    {
      id: "client",
      sender: "Service achats client",
      role: "Client strategique",
      subject: "Reclamations repetees sur les delais",
      preview:
        "Nous constatons des retards et des confirmations de commande peu fiables.",
      receivedAt: "11:15",
      body: [
        "Madame, Monsieur,",
        "Nous rencontrons des retards recurrents et des confirmations de commande qui ne sont pas toujours tenues.",
        "Nous attendons de votre part une maitrise plus solide du traitement de nos commandes, faute de quoi notre volume d'affaires sera reexamine."
      ]
    },
    {
      id: "dg",
      sender: "Claire Montreuil",
      role: "Directrice generale",
      subject: "Attendu de la revue de direction",
      preview:
        "Je veux une demarche qui embarque les equipes, pas qui les braque.",
      receivedAt: "12:05",
      body: [
        "Bonjour,",
        "La revue de direction attend une lecture claire de nos processus et des leviers concrets pour reduire les reclamations.",
        "Je serai attentive a la maniere dont vous proposez d'embarquer les pilotes : une bonne cartographie mal accueillie ne produira aucun effet."
      ]
    }
  ],
  preparedEvents: [
    {
      id: "dq-cadrage-processus",
      triggerTitle: "Mail Directrice Qualite - Cadrage du processus",
      sender: "Claire Martin",
      role: "Directrice qualite",
      simulatedTime: "13:05",
      summary:
        "La direction qualite confirme le perimetre du processus confie et le niveau de detail attendu.",
      subject: "Cadrage du processus a cartographier",
      body: [
        "Bonjour,",
        "Je vous confirme le perimetre du processus confie a votre equipe. Restez sur ce perimetre, mais regardez toujours ses interfaces amont et aval.",
        "Le bon niveau de detail est celui qui rend les points de rupture visibles et pilotables, ni trop macro, ni noye dans le detail."
      ]
    },
    {
      id: "reclamations-synthese",
      triggerTitle: "Mail Service Client - Synthese des reclamations",
      sender: "Elodie Nguyen",
      role: "Responsable service client",
      simulatedTime: "13:40",
      summary:
        "Le service client transmet une synthese des reclamations recentes sur le traitement des commandes.",
      subject: "Synthese des reclamations du trimestre",
      body: [
        "Bonjour,",
        "Vous trouverez les grandes familles de reclamations : delais non tenus, confirmations erronees, informations produits incompletes.",
        "Ces reclamations pointent presque toujours une rupture d'information entre deux processus. A relier a votre cartographie."
      ]
    },
    {
      id: "pilote-ouverture",
      triggerTitle: "Mail Pilote reticent - Ouverture prudente",
      sender: "Gerard Lemoine",
      role: "Pilote de processus (production)",
      simulatedTime: "14:15",
      summary:
        "Le pilote reticent accepte d'echanger, a condition que la demarche reste concrete et utile au terrain.",
      subject: "D'accord pour echanger, mais du concret",
      body: [
        "Bonjour,",
        "Je veux bien vous consacrer un moment. Mais montrez-moi que votre cartographie sert a resoudre des problemes reels, pas a nous surveiller.",
        "Si vous partez du terrain et de ce qui coince vraiment, vous aurez mon aide. Sinon, cela restera lettre morte."
      ]
    },
    {
      id: "qse-interfaces",
      triggerTitle: "Mail Manager QSE - Interfaces critiques",
      sender: "Nadia Cherif",
      role: "Manager QSE",
      simulatedTime: "14:45",
      summary:
        "Le manager QSE insiste sur les interfaces entre processus comme source principale de reclamations.",
      subject: "Ne negligez pas les interfaces",
      body: [
        "Bonjour,",
        "Nos analyses montrent que la majorite des reclamations naissent aux interfaces entre processus, pas au coeur d'un seul service.",
        "Votre plan d'indicateurs devrait rendre ces interfaces mesurables, sinon les pilotes continueront a se renvoyer la responsabilite."
      ]
    },
    {
      id: "dg-mobilisation",
      triggerTitle: "Mail Directrice Generale - Mobilisation des pilotes",
      sender: "Claire Montreuil",
      role: "Directrice generale",
      simulatedTime: "15:10",
      summary:
        "La direction rappelle que la reussite depend de l'adhesion des pilotes de processus.",
      subject: "La mobilisation des pilotes est decisive",
      body: [
        "Bonjour,",
        "Je compte sur vous pour proposer des leviers de mobilisation concrets. Une cartographie n'a de valeur que si les pilotes se l'approprient.",
        "Anticipez les resistances et montrez comment vous transformez un pilote sceptique en allie de la demarche."
      ]
    },
    {
      id: "copil-attentes-restitution",
      triggerTitle: "Mail Revue de direction - Attentes de restitution",
      sender: "Secretariat de direction",
      role: "Revue de direction",
      simulatedTime: "15:35",
      summary:
        "La revue de direction precise les attendus de la restitution finale.",
      subject: "Attentes pour la restitution de 16h30",
      body: [
        "Bonjour,",
        "Pour la restitution, la revue de direction attend une cartographie de processus annotee, les points de rupture, un plan d'indicateurs et des leviers de mobilisation.",
        "Evitez une restitution descriptive : nous attendons une lecture qui eclaire des decisions de pilotage."
      ]
    }
  ],
  comexExpectations: [
    {
      title: "Une cartographie de processus annotee",
      detail:
        "La revue de direction attend une representation du processus reel, annotee des points de rupture et des interfaces sensibles."
    },
    {
      title: "Les points de rupture",
      detail:
        "Les dysfonctionnements doivent etre relies aux reclamations clients sur le traitement des commandes."
    },
    {
      title: "Les interfaces amont / aval",
      detail:
        "Le processus doit etre situe dans la chaine de bout en bout, en montrant ses interfaces avec les autres processus."
    },
    {
      title: "Un plan d'indicateurs",
      detail:
        "Des indicateurs utiles au pilotage du processus, pas seulement au reporting, avec leur logique de mesure."
    },
    {
      title: "Des leviers de mobilisation",
      detail:
        "Des leviers concrets pour embarquer les pilotes de processus, y compris les plus reticents au changement."
    },
    {
      title: "Une lecture orientee decision",
      detail:
        "La restitution doit eclairer des decisions de pilotage, pas se limiter a decrire le processus."
    }
  ],
  keyDates: [
    "09h00 - Lancement de la demarche processus",
    "11h30 - Synthese des reclamations clients",
    "14h00 - Preparation de l'equipe",
    "16h30 - Restitution en revue de direction"
  ]
};
