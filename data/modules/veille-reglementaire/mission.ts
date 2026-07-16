import type { Mandate, SimulationData } from "@/lib/types";

// Veille reglementaire et normative. Chaque equipe (cabinet) prend un domaine
// de veille different. Les noms de cabinets sont repris des autres modules pour
// une resolution "cabinet -> mandat" identique. Champs generiques reutilises :
//   sector      = domaine de veille confie
//   referential = cadre de travail (veille reglementaire et normative)
export const mandates: Mandate[] = [
  {
    id: "veille-environnement",
    cabinetName: "Cabinet Horizon",
    title: "Veille reglementaire Environnement",
    sector: "Environnement",
    referential: "Veille reglementaire et normative",
    objective:
      "Structurer la veille reglementaire du domaine environnement, identifier les exigences applicables et evaluer l'impact des evolutions recentes.",
    issues: [
      "Obligations ICPE, dechets et emissions suivies de facon inegale entre les deux sites.",
      "Detection tardive des evolutions reglementaires environnementales applicables.",
      "Absence de tableau de veille reliant exigences, sources et echeances."
    ],
    comexExpectations: [
      "Un tableau de veille du domaine environnement, avec les exigences applicables.",
      "L'analyse d'impact des evolutions recentes sur l'entreprise.",
      "Un plan de mise en conformite priorise."
    ],
    specificMessages: [
      {
        id: "mandate-env-hse",
        sender: "Julien Faure",
        role: "Responsable HSE",
        subject: "Evolution sur les dechets industriels",
        preview:
          "Une evolution recente sur le tri des dechets nous a pris de court.",
        receivedAt: "10:36",
        body: [
          "Bonjour,",
          "Nous avons appris tardivement une evolution sur la gestion de certains dechets industriels, et nous avons du reagir dans l'urgence.",
          "Il faut structurer la veille environnementale pour ne plus decouvrir ces exigences apres coup."
        ]
      }
    ]
  },
  {
    id: "veille-sst",
    cabinetName: "Cabinet Polaris",
    title: "Veille reglementaire Sante-securite au travail",
    sector: "Sante-securite au travail",
    referential: "Veille reglementaire et normative",
    objective:
      "Structurer la veille du domaine sante-securite au travail, identifier les exigences applicables et evaluer l'impact des evolutions recentes.",
    issues: [
      "Obligations du Code du travail et prevention des risques suivies sans dispositif commun.",
      "Difficulte a relier les evolutions reglementaires aux situations de travail reelles.",
      "Preuves de conformite dispersees, peu mobilisables en cas de controle."
    ],
    comexExpectations: [
      "Un tableau de veille du domaine sante-securite au travail.",
      "L'analyse d'impact des evolutions recentes sur les postes et les sites.",
      "Un plan de mise en conformite priorise."
    ],
    specificMessages: [
      {
        id: "mandate-sst-prevention",
        sender: "Isabelle Roy",
        role: "Animatrice prevention",
        subject: "Nouvelles obligations sur les postes sensibles",
        preview:
          "Des evolutions sur certains postes sensibles doivent etre integrees.",
        receivedAt: "10:39",
        body: [
          "Bonjour,",
          "Plusieurs evolutions concernant les postes sensibles et la prevention des risques doivent etre integrees dans nos pratiques.",
          "Sans veille structuree, nous risquons de les appliquer trop tard, voire de les manquer."
        ]
      }
    ]
  },
  {
    id: "veille-produit",
    cabinetName: "Cabinet Meridian",
    title: "Veille produit & normes sectorielles",
    sector: "Produit & normes sectorielles",
    referential: "Veille reglementaire et normative",
    objective:
      "Structurer la veille du domaine produit et normes sectorielles, identifier les exigences applicables et evaluer l'impact des evolutions recentes.",
    issues: [
      "Exigences de marquage et normes techniques applicables aux produits peu tracees.",
      "Evolutions normatives sectorielles suivies de facon reactive, au coup par coup.",
      "Risque de mise sur le marche non conforme faute de veille anticipee."
    ],
    comexExpectations: [
      "Un tableau de veille du domaine produit et normes sectorielles.",
      "L'analyse d'impact des evolutions normatives recentes sur les produits.",
      "Un plan de mise en conformite priorise."
    ],
    specificMessages: [
      {
        id: "mandate-produit-normes",
        sender: "Thomas Girard",
        role: "Responsable bureau d'etudes",
        subject: "Revision d'une norme technique produit",
        preview:
          "Une norme technique applicable a nos produits vient d'etre revisee.",
        receivedAt: "10:42",
        body: [
          "Bonjour,",
          "Une norme technique applicable a une de nos gammes vient d'etre revisee, et nous n'avons pas de mecanisme pour le detecter systematiquement.",
          "Il faut une veille produit qui relie chaque exigence normative aux produits concernes."
        ]
      }
    ]
  },
  {
    id: "veille-systeme",
    cabinetName: "Cabinet Nova",
    title: "Veille systeme & transverse",
    sector: "Systeme & transverse",
    referential: "Veille reglementaire et normative",
    objective:
      "Structurer la veille du domaine systeme et transverse, identifier les exigences applicables et evaluer l'impact des evolutions recentes.",
    issues: [
      "Evolutions des referentiels systeme (ISO 9001) et exigences clients peu anticipees.",
      "Obligations transverses (donnees, contractuel) suivies sans responsable clair.",
      "Absence de consolidation entre les veilles des differents services."
    ],
    comexExpectations: [
      "Un tableau de veille du domaine systeme et transverse.",
      "L'analyse d'impact des evolutions recentes sur le systeme de management.",
      "Un plan de mise en conformite priorise."
    ],
    specificMessages: [
      {
        id: "mandate-systeme-transverse",
        sender: "Sabrina Lopez",
        role: "Responsable systeme qualite",
        subject: "Evolutions referentiels et exigences clients",
        preview:
          "Les exigences clients evoluent plus vite que notre systeme.",
        receivedAt: "10:45",
        body: [
          "Bonjour,",
          "Les evolutions des referentiels et des exigences clients arrivent souvent sans que nous les ayons anticipees au niveau du systeme.",
          "Une veille transverse permettrait de consolider ce que chaque service detecte de son cote."
        ]
      }
    ]
  }
];

export const simulation: SimulationData = {
  missionLetter: {
    clientCompany: "ARCANIS Industries",
    context:
      "A la suite d'un audit ayant revele une detection trop tardive des evolutions applicables, ARCANIS Industries structure sa veille reglementaire et normative. Chaque equipe prend en charge un domaine de veille.",
    objective:
      "Identifier les exigences applicables au domaine confie, evaluer l'impact des evolutions recentes, et proposer un dispositif de veille et un plan de mise en conformite.",
    assignedMandate:
      "Le domaine de veille confie a votre equipe constitue le perimetre de votre analyse. Il s'agit d'en couvrir les sources, les exigences applicables et les evolutions recentes.",
    expectedDeliverable:
      "Un tableau de veille reglementaire annote et un plan de mise en conformite, presentes au comite de conformite.",
    presentationDate: "Aujourd'hui, 16h30"
  },
  messages: [
    {
      id: "dq",
      sender: "Claire Martin",
      role: "Directrice qualite",
      subject: "Structurer la veille apres l'audit",
      preview:
        "L'audit a montre que nous detectons trop tard les evolutions applicables.",
      receivedAt: "08:40",
      body: [
        "Bonjour,",
        "Notre dernier audit a pointe une detection tardive de plusieurs evolutions reglementaires et normatives applicables.",
        "Votre equipe prend un domaine de veille precis. J'attends un tableau de veille utile et un plan de mise en conformite priorise, pas une liste exhaustive inexploitable."
      ]
    },
    {
      id: "responsable-charge",
      sender: "Philippe Marchand",
      role: "Responsable operationnel",
      subject: "La veille, encore une charge en plus ?",
      preview:
        "Nous n'avons pas le temps de suivre en continu tous les textes.",
      receivedAt: "09:25",
      body: [
        "Bonjour,",
        "Honnetement, suivre en continu l'ensemble des textes applicables represente une charge que mes equipes ne peuvent pas absorber.",
        "Si vous proposez un dispositif, il faudra qu'il soit realiste et cible, sinon il ne tiendra pas dans le temps."
      ]
    },
    {
      id: "manager-qse",
      sender: "Nadia Cherif",
      role: "Manager QSE",
      subject: "Prioriser l'impact, pas l'exhaustivite",
      preview:
        "Le vrai sujet, c'est d'evaluer l'impact des evolutions, pas de tout lister.",
      receivedAt: "10:05",
      body: [
        "Bonjour,",
        "Attention a ne pas confondre veille et catalogue : l'enjeu est d'evaluer l'impact reel des evolutions et de prioriser la mise en conformite.",
        "Un tableau de veille qui n'aide pas a decider ce qu'il faut traiter en premier ne servira a personne."
      ]
    },
    {
      id: "client",
      sender: "Service achats client",
      role: "Client strategique",
      subject: "Preuves de conformite demandees",
      preview:
        "Nous demanderons des preuves de conformite reglementaire a jour.",
      receivedAt: "11:15",
      body: [
        "Madame, Monsieur,",
        "Notre prochain cycle de qualification integrera une demande de preuves de conformite reglementaire a jour sur plusieurs domaines.",
        "Les fournisseurs capables de demontrer une veille structuree seront privilegies."
      ]
    },
    {
      id: "dg",
      sender: "Claire Montreuil",
      role: "Directrice generale",
      subject: "Attendu du comite de conformite",
      preview:
        "Je veux un dispositif qui tienne dans le temps, pas un tableau ponctuel.",
      receivedAt: "12:05",
      body: [
        "Bonjour,",
        "Le comite de conformite attend une vision claire des exigences applicables et un plan de mise en conformite priorise.",
        "Je serai attentive a la perennite du dispositif : responsabilites, sources et frequence de veille doivent etre tenables."
      ]
    }
  ],
  preparedEvents: [
    {
      id: "dq-cadrage-domaine",
      triggerTitle: "Mail Directrice Qualite - Cadrage du domaine",
      sender: "Claire Martin",
      role: "Directrice qualite",
      simulatedTime: "13:05",
      summary:
        "La direction qualite confirme le domaine de veille confie et le niveau d'analyse attendu.",
      subject: "Cadrage du domaine de veille",
      body: [
        "Bonjour,",
        "Je vous confirme le domaine de veille confie a votre equipe. Concentrez-vous sur les exigences reellement applicables a ARCANIS Industries.",
        "Pour chaque exigence, je veux une source identifiee, une evaluation d'impact et un statut de conformite."
      ]
    },
    {
      id: "nouvelle-reglementation",
      triggerTitle: "Mail Veille - Nouvelle reglementation parue",
      sender: "Service documentation",
      role: "Veille documentaire",
      simulatedTime: "13:40",
      summary:
        "Une evolution reglementaire vient de paraitre et pourrait concerner le domaine confie.",
      subject: "Nouvelle evolution reglementaire parue",
      body: [
        "Bonjour,",
        "Une evolution reglementaire vient de paraitre et pourrait concerner votre domaine de veille.",
        "Merci d'evaluer si elle est applicable a ARCANIS Industries, et le cas echeant son impact et son echeance de mise en conformite."
      ]
    },
    {
      id: "audit-constat",
      triggerTitle: "Mail Audit - Constat de detection tardive",
      sender: "Auditeur interne",
      role: "Audit interne",
      simulatedTime: "14:15",
      summary:
        "L'audit interne precise le constat de detection tardive a l'origine de la mission.",
      subject: "Precisions sur le constat d'audit",
      body: [
        "Bonjour,",
        "Le constat d'audit portait sur plusieurs evolutions detectees apres leur entree en vigueur, faute de veille structuree.",
        "Votre plan de mise en conformite devra montrer comment ce type de situation sera evite a l'avenir."
      ]
    },
    {
      id: "qse-impact",
      triggerTitle: "Mail Manager QSE - Evaluation d'impact",
      sender: "Nadia Cherif",
      role: "Manager QSE",
      simulatedTime: "14:45",
      summary:
        "Le manager QSE rappelle d'evaluer l'impact et de prioriser plutot que de tout lister.",
      subject: "Evaluez l'impact avant de lister",
      body: [
        "Bonjour,",
        "Pour chaque exigence, precisez l'impact sur l'organisation et le niveau de priorite de la mise en conformite.",
        "Un tableau de veille sans analyse d'impact ne permet pas de decider, il ne fait que documenter."
      ]
    },
    {
      id: "operationnel-faisabilite",
      triggerTitle: "Mail Responsable operationnel - Faisabilite du dispositif",
      sender: "Philippe Marchand",
      role: "Responsable operationnel",
      simulatedTime: "15:10",
      summary:
        "Les operations alertent sur la charge d'un dispositif de veille trop ambitieux.",
      subject: "Un dispositif tenable dans le temps",
      body: [
        "Bonjour,",
        "Je veux bien soutenir la demarche, mais le dispositif de veille doit rester tenable pour les equipes.",
        "Precisez qui fait quoi, a quelle frequence et sur quelles sources, sinon la veille retombera vite."
      ]
    },
    {
      id: "comite-attentes-restitution",
      triggerTitle: "Mail Comite de conformite - Attentes de restitution",
      sender: "Secretariat du comite de conformite",
      role: "Comite de conformite",
      simulatedTime: "15:35",
      summary:
        "Le comite de conformite precise les attendus de la restitution finale.",
      subject: "Attentes pour la restitution de 16h30",
      body: [
        "Bonjour,",
        "Pour la restitution, le comite attend un tableau de veille annote, l'analyse d'impact des evolutions, un plan de mise en conformite priorise et un dispositif de veille perenne.",
        "Evitez une restitution descriptive : nous attendons des priorites de mise en conformite defendables."
      ]
    }
  ],
  comexExpectations: [
    {
      title: "Un tableau de veille annote",
      detail:
        "Le comite de conformite attend un tableau reliant exigences applicables, sources et statut de conformite pour le domaine confie."
    },
    {
      title: "Les exigences applicables",
      detail:
        "Les exigences retenues doivent etre reellement applicables a ARCANIS Industries, pas une liste generique."
    },
    {
      title: "L'analyse d'impact des evolutions",
      detail:
        "Chaque evolution recente doit etre evaluee au regard de son impact sur l'organisation et les activites."
    },
    {
      title: "Un plan de mise en conformite",
      detail:
        "Un plan priorise, reliant chaque ecart a une action, un responsable et une echeance."
    },
    {
      title: "Un dispositif de veille perenne",
      detail:
        "Des sources, une frequence et des responsabilites claires pour que la veille tienne dans le temps."
    },
    {
      title: "Une lecture orientee priorites",
      detail:
        "La restitution doit aider a decider ce qui doit etre traite en premier, pas seulement a documenter."
    }
  ],
  keyDates: [
    "09h00 - Lancement de la veille reglementaire",
    "11h30 - Signalement d'une evolution reglementaire",
    "14h00 - Preparation de l'equipe",
    "16h30 - Restitution au comite de conformite"
  ]
};
