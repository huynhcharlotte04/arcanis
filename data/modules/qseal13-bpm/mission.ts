import type { Mandate, SimulationData } from "@/lib/types";

// QSEAL13 — approche BPM. Chaque équipe (cabinet) prend un processus différent
// de la chaîne commande -> livraison. Les noms de cabinets sont repris de
// l'autre module pour que la resolution "nom de cabinet -> mandat" soit
// identique. Les champs generiques du type Mandate sont reutilises :
//   sector      = périmètre du processus confié
//   referential = cadre de travail (management par les processus)
export const mandates: Mandate[] = [
  {
    id: "processus-commande",
    cabinetName: "Cabinet Horizon",
    title: "Cartographie du processus Prise de commande",
    sector: "Prise de commande / Commercial",
    referential: "Management par les processus",
    objective:
      "Cartographier le processus de prise de commande, de la demande client à la commande confirmée, et identifier les ruptures à l'origine des réclamations.",
    issues: [
      "Délais et fiabilité des confirmations de commande adressées au client.",
      "Qualité des données transmises à l'aval (achats, production) au moment de la commande.",
      "Interfaces mal maîtrisées entre le commercial, l'administration des ventes et la planification."
    ],
    comexExpectations: [
      "Une cartographie lisible du processus réel, pas du processus théorique.",
      "Les points de rupture reliés aux réclamations sur le traitement des commandes.",
      "Des indicateurs de pilotage utiles au responsable du processus."
    ],
    specificMessages: [
      {
        id: "mandate-commande-adv",
        sender: "Sophie Renaud",
        role: "Responsable administration des ventes",
        subject: "Commandes incomplètes en entrée",
        preview:
          "Trop de commandes partent en production avec des données incomplètes.",
        receivedAt: "10:38",
        body: [
          "Bonjour,",
          "Une part des réclamations vient de commandes confirmées trop vite, avec des spécifications incomplètes ou ambiguës.",
          "Il faudrait cartographier ce qui se passe réellement entre la prise de commande et la transmission à l'aval, et voir où l'information se perd."
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
      "Cartographier le processus achats et approvisionnement, et identifier les ruptures qui pesent sur les délais de traitement des commandes.",
    issues: [
      "Délais fournisseurs sur composants critiques et impact sur les commandes clients.",
      "Manque de visibilité partagée entre achats, production et administration des ventes.",
      "Traitement des aléa (retards, non-conformités fournisseurs) peu formalisé."
    ],
    comexExpectations: [
      "Une cartographie du processus achats et de ses interfaces amont/aval.",
      "Les ruptures qui se répercutent sur les réclamations clients.",
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
          "Quand un composant critique manque, l'information circule mal jusqu'au client, et la réclamation arrive avant que nous ayons prévenu.",
          "Cartographier le processus achats devrait montrer où nous pourrions anticiper et mieux communiquer avec l'aval."
        ]
      }
    ]
  },
  {
    id: "processus-production",
    cabinetName: "Cabinet Meridian",
    title: "Cartographie du processus Production / Réalisation",
    sector: "Production / Réalisation",
    referential: "Management par les processus",
    objective:
      "Cartographier le processus de production, de l'ordre de fabrication à la mise à disposition, et identifier les ruptures générant des réclamations.",
    issues: [
      "Reprises et retouches liées à des spécifications incomplètes en entrée.",
      "Priorisation des ordres de fabrication peu lisible entre les deux sites.",
      "Traçabilité des aléas de production insuffisante pour piloter."
    ],
    comexExpectations: [
      "Une cartographie du processus production et de ses interfaces.",
      "Les ruptures internes qui dégradent le délai et la conformité.",
      "Des indicateurs de pilotage de la performance de réalisation."
    ],
    specificMessages: [
      {
        id: "mandate-production-atelier",
        sender: "Antoine Ferreira",
        role: "Responsable de production",
        subject: "Reprises évitables en atelier",
        preview:
          "Beaucoup de reprises viennent d'infos incomplètes en amont.",
        receivedAt: "10:44",
        body: [
          "Bonjour,",
          "En atelier, une partie des retards vient de reprises que nous pourrions éviter si les données de commande arrivaient complètes.",
          "Votre cartographie devrait aider à montrer que le problème n'est pas seulement en production, mais dans la chaîne de bout en bout."
        ]
      }
    ]
  },
  {
    id: "processus-livraison",
    cabinetName: "Cabinet Nova",
    title: "Cartographie du processus Livraison & traitement des réclamations",
    sector: "Livraison / SAV",
    referential: "Management par les processus",
    objective:
      "Cartographier le processus de livraison et de traitement des réclamations, et identifier les ruptures qui dégradent la satisfaction client.",
    issues: [
      "Délais et fiabilité des expéditions vers les clients européens.",
      "Traitement des réclamations peu structure, sans boucle de retour vers l'amont.",
      "Absence de vision consolidée des causes de réclamation."
    ],
    comexExpectations: [
      "Une cartographie du processus livraison et traitement des réclamations.",
      "Les causes récurrentes de réclamation et leurs origines amont.",
      "Des indicateurs de satisfaction et de traitement des réclamations."
    ],
    specificMessages: [
      {
        id: "mandate-livraison-sav",
        sender: "Elodie Nguyen",
        role: "Responsable service client",
        subject: "Réclamations sans boucle de retour",
        preview:
          "Nous traitons les réclamations, mais rien ne remonte vers l'amont.",
        receivedAt: "10:47",
        body: [
          "Bonjour,",
          "Nous absorbons les réclamations au service client, mais les causes ne remontent pas vers la commande, les achats ou la production.",
          "Cartographier notre processus devrait rendre visibles ces boucles de retour qui n'existent pas encore."
        ]
      }
    ]
  }
];

export const simulation: SimulationData = {
  missionLetter: {
    clientCompany: "Montrel Industries",
    context:
      "Face à la hausse des réclamations sur le traitement des commandes, la direction de Montrel Industries engage la structuration de son management par les processus (approche BPM). Chaque équipe cartographie un processus de la chaîne commande -> livraison.",
    objective:
      "Rendre visible le fonctionnement réel du processus confié, identifier ses points de rupture au regard des réclamations clients, et proposer un plan d'indicateurs de pilotage.",
    assignedMandate:
      "Le processus confié à votre équipe constitue le périmètre de votre analyse. Il s'agit de le cartographier tel qu'il fonctionne réellement, avant d'en proposer le pilotage.",
    expectedDeliverable:
      "Une cartographie de processus annotée et un plan d'indicateurs, présentés en revue de direction.",
    presentationDate: "Aujourd'hui, 16h30"
  },
  messages: [
    {
      id: "dq",
      sender: "Claire Martin",
      role: "Directrice qualité",
      subject: "Lancement de la démarche processus",
      preview:
        "La direction attend une cartographie utile au pilotage, pas un schéma de plus.",
      receivedAt: "08:40",
      body: [
        "Bonjour,",
        "Nous engageons la structuration de notre management par les processus à la suite de la hausse des réclamations sur le traitement des commandes.",
        "Votre équipe cartographie un processus précis. J'attends une vision du réel et des points de rupture, pas une cartographie théorique."
      ]
    },
    {
      id: "pilote-reticent",
      sender: "Gerard Lemoine",
      role: "Pilote de processus (production)",
      subject: "Encore une démarche qualité ?",
      preview:
        "Nos processus fonctionnent, je ne vois pas ce qu'une cartographie va changer.",
      receivedAt: "09:20",
      body: [
        "Bonjour,",
        "Franchement, cela fait des années que nous produisons sans avoir besoin de tout redessiner. Nos équipes savent ce qu'elles ont à faire.",
        "Je veux bien vous recevoir, mais je n'ai pas de temps à perdre avec un enieme schéma qui finira dans un classeur."
      ]
    },
    {
      id: "manager-qse",
      sender: "Nadia Cherif",
      role: "Manager QSE",
      subject: "Tensions autour des interfaces",
      preview:
        "Le vrai sujet, ce sont les interfaces entre pilotes, pas les processus pris isolément.",
      receivedAt: "10:05",
      body: [
        "Bonjour,",
        "Attention : chaque pilote defend son périmètre, et les problèmes se logent souvent entre deux processus.",
        "Si vous cartographiez sans regarder les interfaces avec l'amont et l'aval, vous passerez à côté de l'essentiel. Il faudra aussi ménager les susceptibilités."
      ]
    },
    {
      id: "client",
      sender: "Service achats client",
      role: "Client stratégique",
      subject: "Réclamations répétées sur les délais",
      preview:
        "Nous constatons des retards et des confirmations de commande peu fiables.",
      receivedAt: "11:15",
      body: [
        "Madame, Monsieur,",
        "Nous rencontrons des retards récurrents et des confirmations de commande qui ne sont pas toujours tenues.",
        "Nous attendons de votre part une maîtrise plus solide du traitement de nos commandes, faute de quoi notre volume d'affaires sera reexamine."
      ]
    },
    {
      id: "dg",
      sender: "Claire Montreuil",
      role: "Directrice générale",
      subject: "Attendu de la revue de direction",
      preview:
        "Je veux une démarche qui embarque les équipes, pas qui les braque.",
      receivedAt: "12:05",
      body: [
        "Bonjour,",
        "La revue de direction attend une lecture claire de nos processus et des leviers concrets pour réduire les réclamations.",
        "Je serai attentive à la manière dont vous proposez d'embarquer les pilotes : une bonne cartographie mal accueillie ne produira aucun effet."
      ]
    }
  ],
  preparedEvents: [
    {
      id: "dq-cadrage-processus",
      triggerTitle: "Mail Directrice Qualité - Cadrage du processus",
      sender: "Claire Martin",
      role: "Directrice qualité",
      simulatedTime: "13:05",
      summary:
        "La direction qualité confirme le périmètre du processus confié et le niveau de détail attendu.",
      subject: "Cadrage du processus à cartographier",
      body: [
        "Bonjour,",
        "Je vous confirme le périmètre du processus confié à votre équipe. Restez sur ce périmètre, mais regardez toujours ses interfaces amont et aval.",
        "Le bon niveau de détail est celui qui rend les points de rupture visibles et pilotables, ni trop macro, ni noye dans le detail."
      ]
    },
    {
      id: "reclamations-synthese",
      triggerTitle: "Mail Service Client - Synthèse des réclamations",
      sender: "Elodie Nguyen",
      role: "Responsable service client",
      simulatedTime: "13:40",
      summary:
        "Le service client transmet une synthèse des réclamations récentes sur le traitement des commandes.",
      subject: "Synthèse des réclamations du trimestre",
      body: [
        "Bonjour,",
        "Vous trouverez les grandes familles de réclamations : délais non tenus, confirmations erronées, informations produits incomplètes.",
        "Ces réclamations pointent presque toujours une rupture d'information entre deux processus. A relier à votre cartographie."
      ]
    },
    {
      id: "pilote-ouverture",
      triggerTitle: "Mail Pilote réticent - Ouverture prudente",
      sender: "Gerard Lemoine",
      role: "Pilote de processus (production)",
      simulatedTime: "14:15",
      summary:
        "Le pilote réticent accepte d'échanger, à condition que la démarche reste concrète et utile au terrain.",
      subject: "D'accord pour échanger, mais du concret",
      body: [
        "Bonjour,",
        "Je veux bien vous consacrer un moment. Mais montrez-moi que votre cartographie sert à resoudre des problèmes réels, pas à nous surveiller.",
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
        "Le manager QSE insiste sur les interfaces entre processus comme source principale de réclamations.",
      subject: "Ne negligez pas les interfaces",
      body: [
        "Bonjour,",
        "Nos analyses montrent que la majorite des réclamations naissent aux interfaces entre processus, pas au cœur d'un seul service.",
        "Votre plan d'indicateurs devrait rendre ces interfaces mesurables, sinon les pilotes continueront à se renvoyer la responsabilité."
      ]
    },
    {
      id: "dg-mobilisation",
      triggerTitle: "Mail Directrice Générale - Mobilisation des pilotes",
      sender: "Claire Montreuil",
      role: "Directrice générale",
      simulatedTime: "15:10",
      summary:
        "La direction rappelle que la réussite depend de l'adhésion des pilotes de processus.",
      subject: "La mobilisation des pilotes est décisive",
      body: [
        "Bonjour,",
        "Je compte sur vous pour proposer des leviers de mobilisation concrets. Une cartographie n'a de valeur que si les pilotes se l'approprient.",
        "Anticipez les résistances et montrez comment vous transformez un pilote sceptique en allie de la démarche."
      ]
    },
    {
      id: "copil-attentes-restitution",
      triggerTitle: "Mail Revue de direction - Attentes de restitution",
      sender: "Secrétariat de direction",
      role: "Revue de direction",
      simulatedTime: "15:35",
      summary:
        "La revue de direction précise les attendus de la restitution finale.",
      subject: "Attentes pour la restitution de 16h30",
      body: [
        "Bonjour,",
        "Pour la restitution, la revue de direction attend une cartographie de processus annotée, les points de rupture, un plan d'indicateurs et des leviers de mobilisation.",
        "Evitez une restitution descriptive : nous attendons une lecture qui eclaire des décisions de pilotage."
      ]
    }
  ],
  comexExpectations: [
    {
      title: "Une cartographie de processus annotée",
      detail:
        "La revue de direction attend une representation du processus réel, annotée des points de rupture et des interfaces sensibles."
    },
    {
      title: "Les points de rupture",
      detail:
        "Les dysfonctionnements doivent être reliés aux réclamations clients sur le traitement des commandes."
    },
    {
      title: "Les interfaces amont / aval",
      detail:
        "Le processus doit être situé dans la chaîne de bout en bout, en montrant ses interfaces avec les autres processus."
    },
    {
      title: "Un plan d'indicateurs",
      detail:
        "Des indicateurs utiles au pilotage du processus, pas seulement au reporting, avec leur logique de mesure."
    },
    {
      title: "Des leviers de mobilisation",
      detail:
        "Des leviers concrets pour embarquer les pilotes de processus, y compris les plus réticents au changement."
    },
    {
      title: "Une lecture orientée décision",
      detail:
        "La restitution doit éclairer des décisions de pilotage, pas se limiter à decrire le processus."
    }
  ],
  keyDates: [
    "09h00 - Lancement de la démarche processus",
    "11h30 - Synthèse des réclamations clients",
    "14h00 - Préparation de l'équipe",
    "16h30 - Restitution en revue de direction"
  ]
};
