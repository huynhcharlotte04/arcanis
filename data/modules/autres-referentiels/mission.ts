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
        sender: "Sophie Langlois",
        role: "Directrice de production",
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
      "Pression forte sur les délais, la preuve de capabilité et la performance série.",
      "Risque d'écart entre le niveau ISO 9001 actuel et les exigences client automobile."
    ],
    comexExpectations: [
      "Identifier les prérequis avant de viser des donneurs d'ordre automobile.",
      "Évaluer les impacts sur production, méthodes, achats et pilotage performance.",
      "Définir les risques d'une entrée trop rapide sur ce marché."
    ],
    specificMessages: [
      {
        id: "mandate-iatf16949-industrie",
        sender: "Sophie Langlois",
        role: "Directrice de production",
        subject: "Exigences série et pression automobile",
        preview:
          "Le niveau d'exigence automobile pourrait transformer nos routines industrielles.",
        receivedAt: "10:32",
        body: [
          "Bonjour,",
          "L'automobile suppose un niveau de discipline opérationnelle très supérieur à notre fonctionnement actuel sur certaines lignes.",
          "Merci d'intégrer les impacts sur la capabilité, la validation process, la gestion des modifications et les fournisseurs critiques."
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
        sender: "Sophie Langlois",
        role: "Directrice de production",
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
      "Nouveaux contrôles sur hygiène, contamination, nettoyage et maîtrise des dangers.",
      "Besoin de clarifier les conditions de faisabilité entre opportunité commerciale et transformation opérationnelle."
    ],
    comexExpectations: [
      "Expliquer les exigences nouvelles par rapport au socle ISO 9001.",
      "Identifier les transformations nécessaires sur sites, fournisseurs et contrôles.",
      "Proposer une trajectoire réaliste pour éviter un engagement prématuré."
    ],
    specificMessages: [
      {
        id: "mandate-iso22000-industrie",
        sender: "Sophie Langlois",
        role: "Directrice de production",
        subject: "Contraintes hygiène et flux agroalimentaires",
        preview:
          "Nos ateliers n'ont pas été conçus pour des exigences alimentaires.",
        receivedAt: "10:32",
        body: [
          "Bonjour,",
          "L'agroalimentaire peut ouvrir un marché intéressant, mais nos ateliers n'ont pas été pensés autour de contraintes hygiène aussi fortes.",
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
      "Le COMEX a retenu plusieurs axes de diversification à instruire. Chaque cabinet reçoit un mandat ferme et doit évaluer la faisabilité de la trajectoire confiée.",
    objective:
      "Éclairer la décision du COMEX en identifiant les écarts avec ISO 9001, les impacts organisationnels, les risques et les conditions de mise en œuvre.",
    assignedMandate:
      "Votre cabinet doit analyser le mandat confié par le COMEX. Le référentiel associé au mandat est une contrainte de départ, pas une variable d'arbitrage.",
    expectedDeliverable:
      "Une recommandation de mise en œuvre devant le COMEX (15 minutes de présentation suivies de 10 minutes de questions), appuyée par un support de 15 diapositives maximum et une note de synthèse d'une page, préparés hors plateforme.",
    presentationDate: "Aujourd'hui, 16h30"
  },
  messages: [
    {
      id: "dg-ouverture",
      sender: "Claire Montreuil",
      role: "Directrice générale",
      subject: "Votre mission chez Montrel Industries",
      preview:
        "Les documents utiles sont en pièce jointe ; rendez-vous au COMEX pour votre restitution.",
      receivedAt: "08:42",
      body: [
        "Bonjour,",
        "Merci d'avoir accepté cette mission. Comme évoqué dans la lettre de mandat, nous attendons votre éclairage sur l'orientation à donner à notre projet de diversification.",
        "Vous trouverez les documents utiles en pièce jointe : politique qualité, plan stratégique, organigramme, dernier rapport d'audit, catalogue produits / marchés et certificat ISO 9001. N'hésitez pas à revenir vers l'équipe qualité si besoin de précisions.",
        "Rendez-vous au COMEX pour votre restitution."
      ]
    },
    {
      id: "qualite-contexte",
      sender: "Camille Ferrand",
      role: "Responsable qualité groupe",
      subject: "Éléments de contexte sur notre système qualité",
      preview:
        "Le rapport d'audit AUD-001 pointe des écarts entre sites et une analyse des risques non systématisée.",
      receivedAt: "09:20",
      body: [
        "Bonjour,",
        "Pour compléter les documents déjà à votre disposition, je vous invite à consulter attentivement notre dernier rapport d'audit de suivi (AUD-001). Vous y trouverez notamment deux constats utiles pour votre analyse : des écarts de pratiques entre nos deux sites, et une analyse des risques qui n'est pas encore systématisée par processus.",
        "Concernant le poste qualité du site secondaire mentionné dans le rapport, un recrutement est en cours ; nous espérons le finaliser prochainement.",
        "N'hésitez pas à revenir vers moi pour toute question complémentaire."
      ]
    }
  ],
  preparedEvents: [
    {
      id: "commercial-signal-clients",
      triggerTitle: "Mail Directeur Commercial — Signal côté clients",
      sender: "Karim Belkacem",
      role: "Directeur commercial",
      simulatedTime: "13:35",
      summary:
        "Un signal client renforce l'intérêt d'une trajectoire vers des marchés plus réglementés.",
      subject: "Un signal côté clients qui va dans votre sens",
      body: [
        "Bonjour,",
        "Je voulais partager un élément utile pour votre réflexion : plusieurs de nos clients nous interrogent régulièrement sur notre capacité à investir des marchés plus réglementés que les nôtres aujourd'hui. C'est un vrai signal de confiance, et je pense que cela peut jouer en notre faveur si nous allons dans cette direction.",
        "Je reste à votre disposition si vous souhaitez échanger sur la vision commerciale."
      ]
    },
    {
      id: "finance-cadrage-budgetaire",
      triggerTitle: "Mail Directeur Financier — Cadrage budgétaire",
      sender: "Antoine Mercier",
      role: "Directeur financier",
      simulatedTime: "14:30",
      summary:
        "Le directeur financier communique un ordre de grandeur : environ 800 000 € sur 24 mois, non encore arbitré.",
      subject: "Cadrage budgétaire indicatif",
      body: [
        "Bonjour,",
        "Pour cadrer votre recommandation, voici un ordre de grandeur : une enveloppe d'environ 800 000 € sur 24 mois pourrait être mobilisée pour ce projet, tous postes confondus (équipements, certification, formation). Ce montant a été évoqué en COMEX mais n'a pas encore été formellement arbitré à ce stade.",
        "Toute recommandation nécessitant un dépassement significatif de cet ordre de grandeur devra être accompagnée d'une justification solide du retour attendu.",
        "Je serai présent au COMEX jusqu'à 15h ; n'hésitez pas à aborder les questions budgétaires en priorité si vous passez en première partie de séance."
      ]
    },
    {
      id: "assistante-infos-comex",
      triggerTitle: "Mail Assistante de direction — Informations pratiques COMEX",
      sender: "Assistante de direction",
      role: "Direction générale",
      simulatedTime: "15:45",
      summary:
        "Le format de la restitution est précisé : 15 minutes, 10 minutes de questions, 15 diapositives et une note d'une page.",
      subject: "Informations pratiques — COMEX",
      body: [
        "Bonjour,",
        "Un rappel pratique avant votre passage devant le COMEX : la séance se tiendra en salle de Direction, au siège de Lyon. Vous disposerez de 15 minutes de présentation suivies de 10 minutes de questions.",
        "Merci de nous faire parvenir votre support (15 diapositives maximum) ainsi que votre note de synthèse d'une page avant le début de la séance, afin que nous puissions les préparer pour les membres du COMEX."
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
        "Les coûts, délais et ressources nécessaires doivent être assumés et compatibles avec les contraintes du client."
    }
  ],
  keyDates: [
    "09h00 - Ouverture de mission",
    "11h30 - Informations complémentaires",
    "14h00 - Préparation cabinet",
    "16h30 - Présentation devant le COMEX"
  ]
};
