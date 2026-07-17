import type { Mandate, SimulationData } from "@/lib/types";

export const mandates: Mandate[] = [
  {
    id: "iso13485",
    cabinetName: "Cabinet Horizon",
    title: "Diversification Dispositifs médicaux",
    sector: "Dispositifs médicaux",
    referential: "ISO 13485",
    objective:
      "Évaluer la faisabilité d'une entrée sur le marché des dispositifs médicaux avec le référentiel ISO 13485 imposé par le mandat.",
    issues: [
      "Maîtrise documentaire et preuves attendues plus strictes que dans le système ISO 9001 actuel.",
      "Exigences renforcées sur la gestion des risques, la traçabilité et les fournisseurs critiques.",
      "Crédibilité à construire face à des clients très sensibles à la conformité réglementaire."
    ],
    comexExpectations: [
      "Clarifier les écarts majeurs entre ISO 9001 et ISO 13485.",
      "Identifier les impacts sur conception, achats, production et contrôle.",
      "Proposer une trajectoire soutenable avant engagement commercial."
    ],
    specificMessages: [
      {
        id: "mandate-iso13485-industrie",
        sender: "Laurent Vasseur",
        role: "Directeur industriel",
        subject: "Capacité de traçabilité pour le médical",
        preview:
          "Nos lignes actuelles n'ont pas toutes le même niveau de preuve documentaire.",
        receivedAt: "10:32",
        body: [
          "Bonjour,",
          "Sur le médical, la question centrale sera notre capacité à produire des preuves robustes et homogènes sur plusieurs sites.",
          "Merci d'évaluer l'impact réel d'ISO 13485 sur les dossiers de lot, la maîtrise fournisseur et le contrôle des changements."
        ]
      }
    ]
  },
  {
    id: "iatf16949",
    cabinetName: "Cabinet Polaris",
    title: "Diversification Automobile",
    sector: "Automobile",
    referential: "IATF 16949",
    objective:
      "Évaluer la faisabilité d'une entrée sur le marché automobile avec le référentiel IATF 16949 imposé par le mandat.",
    issues: [
      "Attentes élevées sur la robustesse processus, l'APQP, la maîtrise des changements et les fournisseurs.",
      "Pression forte sur les délais, la preuve de capabilite et la performance série.",
      "Risque d'écart entre le niveau ISO 9001 actuel et les exigences client automobile."
    ],
    comexExpectations: [
      "Identifier les prerequis avant de viser des donneurs d'ordre automobile.",
      "Évaluer les impacts sur production, methodes, achats et pilotage performance.",
      "Définir les risques d'une entrée trop rapide sur ce marché."
    ],
    specificMessages: [
      {
        id: "mandate-iatf16949-industrie",
        sender: "Laurent Vasseur",
        role: "Directeur industriel",
        subject: "Exigences série et pression automobile",
        preview:
          "Le niveau d'exigence automobile pourrait transformer nos routines industrielles.",
        receivedAt: "10:32",
        body: [
          "Bonjour,",
          "L'automobile suppose un niveau de discipline opérationnelle très superieur à notre fonctionnement actuel sur certaines lignes.",
          "Merci d'intégrer les impacts sur la capabilite, la validation process, la gestion des modifications et les fournisseurs critiques."
        ]
      }
    ]
  },
  {
    id: "en9100",
    cabinetName: "Cabinet Meridian",
    title: "Diversification Aéronautique",
    sector: "Aéronautique",
    referential: "EN 9100",
    objective:
      "Évaluer la faisabilité d'une entrée sur le marché aéronautique avec le référentiel EN 9100 imposé par le mandat.",
    issues: [
      "Exigences renforcées sur la gestion des risques, la configuration et la maîtrise des fournisseurs.",
      "Besoin de preuves fiables dans un environnement où la sécurité et la conformité sont décisives.",
      "Transformation culturelle nécessaire pour passer d'un référentiel généraliste à un cadre sectoriel exigeant."
    ],
    comexExpectations: [
      "Montrer ce que l'EN 9100 apporte au-delà d'ISO 9001.",
      "Prioriser les impacts sur l'organisation et la gouvernance qualité.",
      "Estimer les risques de crédibilité face aux donneurs d'ordre."
    ],
    specificMessages: [
      {
        id: "mandate-en9100-industrie",
        sender: "Laurent Vasseur",
        role: "Directeur industriel",
        subject: "Maîtrise configuration et aéronautique",
        preview:
          "La gestion de configuration n'est pas encore structurée au niveau attendu.",
        receivedAt: "10:32",
        body: [
          "Bonjour,",
          "Pour l'aéronautique, notre point faible probable sera la gestion de configuration et la formalisation des preuves de conformité.",
          "Merci d'évaluer l'effort de structuration nécessaire si le COMEX engage la trajectoire EN 9100."
        ]
      }
    ]
  },
  {
    id: "iso22000",
    cabinetName: "Cabinet Nova",
    title: "Diversification Agroalimentaire",
    sector: "Agroalimentaire",
    referential: "ISO 22000",
    objective:
      "Évaluer la faisabilité d'une entrée sur le marché agroalimentaire avec le référentiel ISO 22000 imposé par le mandat.",
    issues: [
      "Intégration de la sécurité des denrées, des PRP et de l'approche HACCP dans un système industriel existant.",
      "Nouveaux contrôles sur hygiene, contamination, nettoyage et maîtrise des dangers.",
      "Besoin de clarifier les conditions de faisabilité entre opportunite commerciale et transformation opérationnelle."
    ],
    comexExpectations: [
      "Expliquer les exigences nouvelles par rapport au socle ISO 9001.",
      "Identifier les transformations nécessaires sur sites, fournisseurs et contrôles.",
      "Proposer une trajectoire réaliste pour éviter un engagement prématuré."
    ],
    specificMessages: [
      {
        id: "mandate-iso22000-industrie",
        sender: "Laurent Vasseur",
        role: "Directeur industriel",
        subject: "Contraintes hygiene et flux agroalimentaires",
        preview:
          "Nos ateliers n'ont pas ete concus pour des exigences alimentaires.",
        receivedAt: "10:32",
        body: [
          "Bonjour,",
          "L'agroalimentaire peut ouvrir un marché intéressant, mais nos ateliers n'ont pas ete penses autour de contraintes hygiene aussi fortes.",
          "Merci d'évaluer les impacts sur les flux, le nettoyage, la prévention des contaminations et la compétence des équipes."
        ]
      }
    ]
  }
];

export const simulation: SimulationData = {
  missionLetter: {
    clientCompany: "Montrel Industries",
    context:
      "Le COMEX à retenu plusieurs axes de diversification à instruire. Chaque cabinet recoit un mandat ferme et doit évaluer la faisabilité de la trajectoire confiée.",
    objective:
      "Éclairer la décision du COMEX en identifiant les écarts avec ISO 9001, les impacts organisationnels, les risques et les conditions de mise en œuvre.",
    assignedMandate:
      "Votre cabinet doit analyser le mandat confié par le COMEX. Le référentiel associé au mandat est une contrainte de départ, pas une variable d'arbitrage.",
    expectedDeliverable:
      "Une recommandation de mise en œuvre devant le COMEX, appuyée par un support préparé hors plateforme.",
    presentationDate: "Aujourd'hui, 16h30"
  },
  messages: [
    {
      id: "dg",
      sender: "Claire Montreuil",
      role: "Directrice générale",
      subject: "Clarification attendue avant le COMEX",
      preview:
        "Le COMEX attend une position claire sur la faisabilité du mandat confié.",
      receivedAt: "08:42",
      body: [
        "Bonjour,",
        "Nous avons besoin d'une recommandation ferme sur la faisabilité du mandat confié à votre cabinet.",
        "Votre position devra tenir compte de notre maturité actuelle et du calendrier commercial."
      ]
    },
    {
      id: "commerce",
      sender: "Nadia Khelifi",
      role: "Directrice commerciale",
      subject: "Pression sur les prochains appels d'offres",
      preview:
        "Deux prospects demandent des garanties plus fortes sur la maîtrise des risques.",
      receivedAt: "09:15",
      body: [
        "Bonjour,",
        "Nous sommes en discussion avec deux grands comptes européens. Ils ne demandent pas seulement un certificat, ils veulent être rassures sur notre capacité à tenir les exigences dans la durée.",
        "Une trajectoire trop lente pourrait fragiliser notre position commerciale."
      ]
    },
    {
      id: "qualité",
      sender: "Marc Bellanger",
      role: "Responsable qualité",
      subject: "Maturité ISO 9001",
      preview:
        "Le socle ISO 9001 existe, mais les pratiques ne sont pas homogènes entre sites.",
      receivedAt: "10:05",
      body: [
        "Bonjour,",
        "Notre système ISO 9001 est solide sur le papier. En revanche, certaines pratiques restent très dependantes des responsables locaux.",
        "Si le nouveau référentiel impose davantage de preuves ou de pilotage transversal, il faudra prévoir un accompagnement sérieux."
      ]
    },
    {
      id: "client",
      sender: "Service achats client",
      role: "Client stratégique",
      subject: "Exigences de qualification fournisseur",
      preview:
        "Notre grille fournisseur evoluera lors du prochain cycle de sélection.",
      receivedAt: "11:20",
      body: [
        "Madame, Monsieur,",
        "Notre prochain cycle de sélection integrera des exigences renforcées en matière de maîtrise opérationnelle, gestion des risques et preuves de conformité.",
        "Les fournisseurs capables de demontrer une trajectoire structurée seront privilegies."
      ]
    },
    {
      id: "fournisseur",
      sender: "Partenaire composants",
      role: "Fournisseur critique",
      subject: "Délais sur composants sensibles",
      preview:
        "Les tensions d'approvisionnement pourraient peser sur la trajectoire de transformation.",
      receivedAt: "12:10",
      body: [
        "Bonjour,",
        "Nous anticipons des tensions ponctuelles sur plusieurs composants critiques au prochain trimestre.",
        "Toute évolution de référentiel qui augmenterait les exigences de traçabilité devra être anticipée avec nos équipes."
      ]
    }
  ],
  preparedEvents: [
    {
      id: "dg-confirmation-mandat",
      triggerTitle: "Mail DG - Confirmation du mandat",
      sender: "Claire Montreuil",
      role: "Directrice générale",
      simulatedTime: "13:05",
      summary:
        "La direction confirme qu'elle attend une évaluation de faisabilité assumée et directement exploitable.",
      subject: "Confirmation du mandat attendu par le COMEX",
      body: [
        "Bonjour,",
        "Je vous confirme que le COMEX attend une position claire sur la faisabilité du mandat confié à votre cabinet.",
        "Votre recommandation devra montrer comment cette trajectoire peut être mise en œuvre par Montrel Industries, au regard de notre stratégie de diversification et de notre maturité actuelle.",
        "Nous serons attentifs à la solidite de votre analyse, pas seulement à la description du référentiel associé."
      ]
    },
    {
      id: "commercial-nouveau-marche",
      triggerTitle: "Mail Directeur Commercial - Nouveau marché prioritaire",
      sender: "Nadia Khelifi",
      role: "Directrice commerciale",
      simulatedTime: "13:35",
      summary:
        "Un marché cible renforce la pression sur la crédibilité de la trajectoire confiée.",
      subject: "Nouveau marché prioritaire à intégrer",
      body: [
        "Bonjour,",
        "Nous venons de recevoir un signal fort d'un prospect prioritaire. Il recherche un fournisseur capable de demontrer une maîtrise plus robuste des exigences qualité, des risques et de la traçabilité.",
        "Votre proposition devra nous aider à comprendre si la trajectoire confiée renforce vraiment notre position commerciale.",
        "Merci aussi d'identifier les écarts avec ISO 9001 que le COMEX devra anticiper."
      ]
    },
    {
      id: "qualite-limites-iso9001",
      triggerTitle: "Mail Responsable Qualité - Limites du système ISO9001 actuel",
      sender: "Marc Bellanger",
      role: "Responsable qualité",
      simulatedTime: "14:10",
      summary:
        "Le système ISO 9001 actuel est utile mais insuffisant pour certains marchés cibles.",
      subject: "Limites du système ISO 9001 actuel",
      body: [
        "Bonjour,",
        "Notre système ISO 9001 donne un cadre solide, mais il ne couvre pas toutes les exigences sectorielles que nous rencontrons dans les nouveaux appels d'offres.",
        "Les principaux points sensibles sont la profondeur des preuves, la gestion des compétences, la maîtrise fournisseur et la formalisation des risques.",
        "Votre analyse devra expliquer ce que le nouveau référentiel ajoute vraiment, et ce que cela implique pour l'organisation."
      ]
    },
    {
      id: "qualite-confirmation-perimetre",
      triggerTitle: "Mail Directrice Qualité - Confirmation du périmètre",
      sender: "Claire Martin",
      role: "Directrice qualité",
      simulatedTime: "14:25",
      summary:
        "La direction qualité confirme que l'analyse doit rester centrée sur le référentiel associé au mandat.",
      subject: "Confirmation du périmètre de votre analyse",
      body: [
        "Bonjour,",
        "Je vous confirme que votre cabinet travaille bien sur le référentiel associé à son mandat. Ce périmètre a été fixe par le COMEX afin d'évaluer une trajectoire précise de diversification.",
        "Une analyse fondée sur un autre référentiel ne repondrait pas au besoin exprime par la direction.",
        "Merci de concentrer votre recommandation sur la faisabilité, les écarts avec ISO 9001, les impacts organisationnels et les conditions de transition."
      ]
    },
    {
      id: "industrie-contraintes-ressources",
      triggerTitle: "Mail Directeur Industriel - Contraintes de ressources",
      sender: "Laurent Vasseur",
      role: "Directeur industriel",
      simulatedTime: "14:45",
      summary:
        "Les opérations alertent sur la capacité réelle à absorber une transformation trop lourde.",
      subject: "Contraintes de ressources opérationnelles",
      body: [
        "Bonjour,",
        "Je souhaite attirer votre attention sur notre capacité de déploiement. Les sites sont déjà mobilises sur plusieurs chantiers de production et de livraison.",
        "Une trajectoire ambitieuse peut être pertinente, mais elle doit rester soutenable pour les opérations.",
        "Le COMEX aura besoin d'un plan de transition crédible, avec des priorités, des jalons et des risques clairement assumes."
      ]
    },
    {
      id: "comex-attentes-restitution",
      triggerTitle: "Mail COMEX - Attentes de restitution",
      sender: "Secrétariat COMEX",
      role: "COMEX",
      simulatedTime: "15:30",
      summary:
        "Le COMEX précise les attendus de la restitution orale finale.",
      subject: "Attentes pour la restitution de 16h30",
      body: [
        "Bonjour,",
        "Pour la restitution, le COMEX attend une évaluation de faisabilité, les écarts majeurs avec ISO 9001, les impacts organisationnels, les risques majeurs et un plan de transition.",
        "La présentation devra permettre une décision. Evitez une restitution descriptive : nous attendons une évaluation de faisabilité et une trajectoire défendable.",
        "Merci de préparer une conclusion claire sur les conditions de réussite."
      ]
    }
  ],
  comexExpectations: [
    {
      title: "Une évaluation de faisabilité",
      detail:
        "Le COMEX attend une position claire sur la capacité de Montrel Industries à engager le mandat confié."
    },
    {
      title: "Les écarts majeurs avec ISO 9001",
      detail:
        "Les écarts doivent être reliés au référentiel associé au mandat et au niveau de maturité actuel."
    },
    {
      title: "Les impacts organisationnels",
      detail:
        "La direction veut comprendre les conséquences sur les processus, roles, compétences et preuves attendues."
    },
    {
      title: "Les risques",
      detail:
        "La recommandation doit intégrer les risques de déploiement, d'adhésion et de crédibilité marché."
    },
    {
      title: "La trajectoire de transition",
      detail:
        "Le COMEX attend une trajectoire réaliste, lisible et défendable devant les opérations."
    },
    {
      title: "Une proposition réaliste",
      detail:
        "Les coûts, délais et ressources nécessaires doivent être assumes et compatibles avec les contraintes du client."
    }
  ],
  keyDates: [
    "09h00 - Ouverture de mission",
    "11h30 - Informations complémentaires",
    "14h00 - Préparation cabinet",
    "16h30 - Présentation devant le COMEX"
  ]
};
