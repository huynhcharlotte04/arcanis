import type { Mandate, SimulationData } from "@/lib/types";

// Veille réglementaire et normative. Chaque équipe (cabinet) prend un domaine
// de veille différent. Les noms de cabinets sont repris des autres modules pour
// une resolution "cabinet -> mandat" identique. Champs generiques reutilises :
//   sector      = domaine de veille confié
//   referential = cadre de travail (veille réglementaire et normative)
export const mandates: Mandate[] = [
  {
    id: "veille-environnement",
    cabinetName: "Cabinet Horizon",
    title: "Veille réglementaire Environnement",
    sector: "Environnement",
    referential: "Veille réglementaire et normative",
    objective:
      "Structurer la veille réglementaire du domaine environnement, identifier les exigences applicables et évaluer l'impact des évolutions récentes.",
    issues: [
      "Obligations ICPE, déchets et émissions suivies de façon inegale entre les deux sites.",
      "Détection tardive des évolutions réglementaires environnementales applicables.",
      "Absence de tableau de veille reliant exigences, sources et échéances."
    ],
    comexExpectations: [
      "Un tableau de veille du domaine environnement, avec les exigences applicables.",
      "L'analyse d'impact des évolutions récentes sur l'entreprise.",
      "Un plan de mise en conformité priorisé."
    ],
    specificMessages: [
      {
        id: "mandate-env-hse",
        sender: "Julien Faure",
        role: "Responsable HSE",
        subject: "Évolution sur les déchets industriels",
        preview:
          "Une évolution récente sur le tri des déchets nous a pris de court.",
        receivedAt: "10:36",
        body: [
          "Bonjour,",
          "Nous avons appris tardivement une évolution sur la gestion de certains déchets industriels, et nous avons du réagir dans l'urgence.",
          "Il faut structurer la veille environnementale pour ne plus decouvrir ces exigences après coup."
        ]
      }
    ]
  },
  {
    id: "veille-sst",
    cabinetName: "Cabinet Polaris",
    title: "Veille réglementaire Santé-sécurité au travail",
    sector: "Santé-sécurité au travail",
    referential: "Veille réglementaire et normative",
    objective:
      "Structurer la veille du domaine santé-sécurité au travail, identifier les exigences applicables et évaluer l'impact des évolutions récentes.",
    issues: [
      "Obligations du Code du travail et prévention des risques suivies sans dispositif commun.",
      "Difficulte à relier les évolutions réglementaires aux situations de travail réelles.",
      "Preuves de conformité dispersées, peu mobilisables en cas de contrôle."
    ],
    comexExpectations: [
      "Un tableau de veille du domaine santé-sécurité au travail.",
      "L'analyse d'impact des évolutions récentes sur les postes et les sites.",
      "Un plan de mise en conformité priorisé."
    ],
    specificMessages: [
      {
        id: "mandate-sst-prevention",
        sender: "Isabelle Roy",
        role: "Animatrice prévention",
        subject: "Nouvelles obligations sur les postes sensibles",
        preview:
          "Des évolutions sur certains postes sensibles doivent être intégrées.",
        receivedAt: "10:39",
        body: [
          "Bonjour,",
          "Plusieurs évolutions concernant les postes sensibles et la prévention des risques doivent être intégrées dans nos pratiques.",
          "Sans veille structurée, nous risquons de les appliquer trop tard, voire de les manquer."
        ]
      }
    ]
  },
  {
    id: "veille-produit",
    cabinetName: "Cabinet Meridian",
    title: "Veille produit & normes sectorielles",
    sector: "Produit & normes sectorielles",
    referential: "Veille réglementaire et normative",
    objective:
      "Structurer la veille du domaine produit et normes sectorielles, identifier les exigences applicables et évaluer l'impact des évolutions récentes.",
    issues: [
      "Exigences de marquage et normes techniques applicables aux produits peu tracées.",
      "Évolutions normatives sectorielles suivies de façon réactive, au coup par coup.",
      "Risque de mise sur le marché non conforme faute de veille anticipée."
    ],
    comexExpectations: [
      "Un tableau de veille du domaine produit et normes sectorielles.",
      "L'analyse d'impact des évolutions normatives récentes sur les produits.",
      "Un plan de mise en conformité priorisé."
    ],
    specificMessages: [
      {
        id: "mandate-produit-normes",
        sender: "Thomas Girard",
        role: "Responsable bureau d'études",
        subject: "Revision d'une norme technique produit",
        preview:
          "Une norme technique applicable à nos produits vient d'être revisée.",
        receivedAt: "10:42",
        body: [
          "Bonjour,",
          "Une norme technique applicable à une de nos gammes vient d'être revisée, et nous n'avons pas de mécanisme pour le détecter systematiquement.",
          "Il faut une veille produit qui relie chaque exigence normative aux produits concernes."
        ]
      }
    ]
  },
  {
    id: "veille-systeme",
    cabinetName: "Cabinet Nova",
    title: "Veille système & transverse",
    sector: "Système & transverse",
    referential: "Veille réglementaire et normative",
    objective:
      "Structurer la veille du domaine système et transverse, identifier les exigences applicables et évaluer l'impact des évolutions récentes.",
    issues: [
      "Évolutions des référentiels système (ISO 9001) et exigences clients peu anticipées.",
      "Obligations transverses (données, contractuel) suivies sans responsable clair.",
      "Absence de consolidation entre les veilles des différents services."
    ],
    comexExpectations: [
      "Un tableau de veille du domaine système et transverse.",
      "L'analyse d'impact des évolutions récentes sur le système de management.",
      "Un plan de mise en conformité priorisé."
    ],
    specificMessages: [
      {
        id: "mandate-systeme-transverse",
        sender: "Sabrina Lopez",
        role: "Responsable système qualité",
        subject: "Évolutions référentiels et exigences clients",
        preview:
          "Les exigences clients evoluent plus vite que notre système.",
        receivedAt: "10:45",
        body: [
          "Bonjour,",
          "Les évolutions des référentiels et des exigences clients arrivent souvent sans que nous les ayons anticipées au niveau du système.",
          "Une veille transverse permettrait de consolider ce que chaque service détecte de son côté."
        ]
      }
    ]
  }
];

export const simulation: SimulationData = {
  missionLetter: {
    clientCompany: "Montrel Industries",
    context:
      "À la suite d'un audit ayant révélé une détection trop tardive des évolutions applicables, Montrel Industries structure sa veille réglementaire et normative. Chaque équipe prend en charge un domaine de veille.",
    objective:
      "Identifier les exigences applicables au domaine confié, évaluer l'impact des évolutions récentes, et proposer un dispositif de veille et un plan de mise en conformité.",
    assignedMandate:
      "Le domaine de veille confié à votre équipe constitue le périmètre de votre analyse. Il s'agit d'en couvrir les sources, les exigences applicables et les évolutions récentes.",
    expectedDeliverable:
      "Un tableau de veille réglementaire annoté et un plan de mise en conformité, présentés au comité de conformité.",
    presentationDate: "Aujourd'hui, 16h30"
  },
  messages: [
    {
      id: "dq",
      sender: "Claire Martin",
      role: "Directrice qualité",
      subject: "Structurer la veille après l'audit",
      preview:
        "L'audit a montré que nous detectons trop tard les évolutions applicables.",
      receivedAt: "08:40",
      body: [
        "Bonjour,",
        "Notre dernier audit à pointe une détection tardive de plusieurs évolutions réglementaires et normatives applicables.",
        "Votre équipe prend un domaine de veille précis. J'attends un tableau de veille utile et un plan de mise en conformité priorisé, pas une liste exhaustive inexploitable."
      ]
    },
    {
      id: "responsable-charge",
      sender: "Philippe Marchand",
      role: "Responsable opérationnel",
      subject: "La veille, encore une charge en plus ?",
      preview:
        "Nous n'avons pas le temps de suivre en continu tous les textes.",
      receivedAt: "09:25",
      body: [
        "Bonjour,",
        "Honnetement, suivre en continu l'ensemble des textes applicables represente une charge que mes équipes ne peuvent pas absorber.",
        "Si vous proposez un dispositif, il faudra qu'il soit réaliste et cible, sinon il ne tiendra pas dans le temps."
      ]
    },
    {
      id: "manager-qse",
      sender: "Nadia Cherif",
      role: "Manager QSE",
      subject: "Prioriser l'impact, pas l'exhaustivité",
      preview:
        "Le vrai sujet, c'est d'évaluer l'impact des évolutions, pas de tout lister.",
      receivedAt: "10:05",
      body: [
        "Bonjour,",
        "Attention à ne pas confondre veille et catalogue : l'enjeu est d'évaluer l'impact réel des évolutions et de prioriser la mise en conformité.",
        "Un tableau de veille qui n'aide pas à décider ce qu'il faut traiter en premier ne servira à personne."
      ]
    },
    {
      id: "client",
      sender: "Service achats client",
      role: "Client stratégique",
      subject: "Preuves de conformité demandées",
      preview:
        "Nous demanderons des preuves de conformité réglementaire à jour.",
      receivedAt: "11:15",
      body: [
        "Madame, Monsieur,",
        "Notre prochain cycle de qualification integrera une demande de preuves de conformité réglementaire à jour sur plusieurs domaines.",
        "Les fournisseurs capables de demontrer une veille structurée seront privilegies."
      ]
    },
    {
      id: "dg",
      sender: "Claire Montreuil",
      role: "Directrice générale",
      subject: "Attendu du comité de conformité",
      preview:
        "Je veux un dispositif qui tienne dans le temps, pas un tableau ponctuel.",
      receivedAt: "12:05",
      body: [
        "Bonjour,",
        "Le comité de conformité attend une vision claire des exigences applicables et un plan de mise en conformité priorisé.",
        "Je serai attentive à la pérennité du dispositif : responsabilités, sources et fréquence de veille doivent être tenables."
      ]
    }
  ],
  preparedEvents: [
    {
      id: "dq-cadrage-domaine",
      triggerTitle: "Mail Directrice Qualité - Cadrage du domaine",
      sender: "Claire Martin",
      role: "Directrice qualité",
      simulatedTime: "13:05",
      summary:
        "La direction qualité confirme le domaine de veille confié et le niveau d'analyse attendu.",
      subject: "Cadrage du domaine de veille",
      body: [
        "Bonjour,",
        "Je vous confirme le domaine de veille confié à votre équipe. Concentrez-vous sur les exigences réellement applicables à Montrel Industries.",
        "Pour chaque exigence, je veux une source identifiée, une évaluation d'impact et un statut de conformité."
      ]
    },
    {
      id: "nouvelle-reglementation",
      triggerTitle: "Mail Veille - Nouvelle réglementation parue",
      sender: "Service documentation",
      role: "Veille documentaire",
      simulatedTime: "13:40",
      summary:
        "Une évolution réglementaire vient de paraître et pourrait concerner le domaine confié.",
      subject: "Nouvelle évolution réglementaire parue",
      body: [
        "Bonjour,",
        "Une évolution réglementaire vient de paraître et pourrait concerner votre domaine de veille.",
        "Merci d'évaluer si elle est applicable à Montrel Industries, et le cas echeant son impact et son échéance de mise en conformité."
      ]
    },
    {
      id: "audit-constat",
      triggerTitle: "Mail Audit - Constat de détection tardive",
      sender: "Auditeur interne",
      role: "Audit interne",
      simulatedTime: "14:15",
      summary:
        "L'audit interne précise le constat de détection tardive à l'origine de la mission.",
      subject: "Précisions sur le constat d'audit",
      body: [
        "Bonjour,",
        "Le constat d'audit portait sur plusieurs évolutions détectées après leur entrée en vigueur, faute de veille structurée.",
        "Votre plan de mise en conformité devra montrer comment ce type de situation sera evite à l'avenir."
      ]
    },
    {
      id: "qse-impact",
      triggerTitle: "Mail Manager QSE - Évaluation d'impact",
      sender: "Nadia Cherif",
      role: "Manager QSE",
      simulatedTime: "14:45",
      summary:
        "Le manager QSE rappelle d'évaluer l'impact et de prioriser plutot que de tout lister.",
      subject: "Évaluez l'impact avant de lister",
      body: [
        "Bonjour,",
        "Pour chaque exigence, precisez l'impact sur l'organisation et le niveau de priorité de la mise en conformité.",
        "Un tableau de veille sans analyse d'impact ne permet pas de décider, il ne fait que documenter."
      ]
    },
    {
      id: "operationnel-faisabilite",
      triggerTitle: "Mail Responsable opérationnel - Faisabilité du dispositif",
      sender: "Philippe Marchand",
      role: "Responsable opérationnel",
      simulatedTime: "15:10",
      summary:
        "Les opérations alertent sur la charge d'un dispositif de veille trop ambitieux.",
      subject: "Un dispositif tenable dans le temps",
      body: [
        "Bonjour,",
        "Je veux bien soutenir la démarche, mais le dispositif de veille doit rester tenable pour les équipes.",
        "Precisez qui fait quoi, à quelle fréquence et sur quelles sources, sinon la veille retombera vite."
      ]
    },
    {
      id: "comité-attentes-restitution",
      triggerTitle: "Mail Comité de conformité - Attentes de restitution",
      sender: "Secrétariat du comité de conformité",
      role: "Comité de conformité",
      simulatedTime: "15:35",
      summary:
        "Le comité de conformité précise les attendus de la restitution finale.",
      subject: "Attentes pour la restitution de 16h30",
      body: [
        "Bonjour,",
        "Pour la restitution, le comité attend un tableau de veille annoté, l'analyse d'impact des évolutions, un plan de mise en conformité priorisé et un dispositif de veille pérenne.",
        "Evitez une restitution descriptive : nous attendons des priorités de mise en conformité defendables."
      ]
    }
  ],
  comexExpectations: [
    {
      title: "Un tableau de veille annoté",
      detail:
        "Le comité de conformité attend un tableau reliant exigences applicables, sources et statut de conformité pour le domaine confié."
    },
    {
      title: "Les exigences applicables",
      detail:
        "Les exigences retenues doivent être réellement applicables à Montrel Industries, pas une liste générique."
    },
    {
      title: "L'analyse d'impact des évolutions",
      detail:
        "Chaque évolution récente doit être évaluée au regard de son impact sur l'organisation et les activités."
    },
    {
      title: "Un plan de mise en conformité",
      detail:
        "Un plan priorisé, reliant chaque écart à une action, un responsable et une échéance."
    },
    {
      title: "Un dispositif de veille pérenne",
      detail:
        "Des sources, une fréquence et des responsabilités claires pour que la veille tienne dans le temps."
    },
    {
      title: "Une lecture orientée priorités",
      detail:
        "La restitution doit aider à décider ce qui doit être traite en premier, pas seulement à documenter."
    }
  ],
  keyDates: [
    "09h00 - Lancement de la veille réglementaire",
    "11h30 - Signalement d'une évolution réglementaire",
    "14h00 - Préparation de l'équipe",
    "16h30 - Restitution au comité de conformité"
  ]
};
