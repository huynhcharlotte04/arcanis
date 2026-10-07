import type { Mandate, SimulationData } from "@/lib/types";

// Veille réglementaire et normative. Chaque équipe (cabinet) prend un domaine
// de veille différent. Les noms de cabinets sont repris des autres modules pour
// une resolution "cabinet -> mandat" identique. Champs generiques reutilises :
//   sector      = domaine de veille confié
//   referential = cadre de travail (veille réglementaire et normative)
//
// Chaque domaine porte un scénario distinct et actuel (ICPE/REACH,
// réforme santé au travail, transition Directive -> Règlement Machines,
// NIS2), pour que les 4 équipes travaillent sur des problématiques
// réellement différentes plutôt que des variations d'un même cas.
export const mandates: Mandate[] = [
  {
    id: "veille-environnement",
    cabinetName: "Cabinet Horizon",
    title: "Veille réglementaire Environnement",
    sector: "Environnement",
    referential: "Veille réglementaire et normative",
    objective:
      "Déterminer si Montrel Industries est en situation régulière au regard de la réglementation ICPE et anticiper la restriction européenne REACH applicable à la NMP (N-méthylpyrrolidone), un solvant clé de la nouvelle ligne.",
    problematique:
      "Votre cabinet saura-t-il clarifier à temps le risque ICPE et la restriction REACH sur la NMP, avec une restitution assez solide pour que Montrel Industries vous confie la suite du dossier environnemental ?",
    issues: [
      "Une nouvelle ligne de traitement de surface, ajoutée il y a 8 mois sur le site secondaire, a fait grimper le volume de solvants stockés au-delà d'un seuil ICPE, sans qu'aucune vérification de régime n'ait été refaite.",
      "Si le seuil est confirmé dépassé, l'installation pourrait relever d'un régime ICPE plus contraignant que celui déclaré actuellement, ce qui exposerait l'entreprise à une exploitation non conforme depuis 8 mois.",
      "Un fournisseur a notifié la restriction européenne (REACH, annexe XVII, entrée 71) applicable à la NMP (N-méthylpyrrolidone), un des solvants utilisés sur cette ligne : son usage n'est permis que si l'exposition des opérateurs reste sous un seuil réglementaire précis, à démontrer sans délai."
    ],
    comexExpectations: [
      "Une qualification claire du régime ICPE réellement applicable à la ligne de traitement de surface.",
      "Une évaluation du risque lié à une éventuelle non-conformité déjà en cours.",
      "Un plan de mise en conformité priorisé intégrant l'échéance REACH sur la NMP."
    ],
    specificMessages: [
      {
        id: "mandate-env-hse",
        sender: "Julien Faure",
        role: "Responsable HSE",
        subject: "Un problème que je n'ai découvert qu'en préparant votre dossier",
        preview:
          "La nouvelle ligne de traitement de surface a fait grimper nos volumes de solvants sans que personne ne revérifie notre classement ICPE.",
        receivedAt: "10:36",
        body: [
          "Bonjour,",
          "En préparant les éléments pour votre équipe, je me suis rendu compte d'un point qui m'inquiète : depuis l'ajout de la ligne de traitement de surface sur le site secondaire il y a 8 mois, notre volume de solvants stockés a clairement augmenté. Personne n'a revérifié si cela change notre classement ICPE.",
          "En parallèle, notre fournisseur de solvants nous a prévenus que la NMP (N-méthylpyrrolidone), un des produits que nous utilisons sur cette ligne, est soumise à une restriction européenne REACH : son usage n'est autorisé que si l'exposition de nos opérateurs reste sous un seuil précis, que je n'ai jamais fait mesurer. Je n'ai pas encore eu le temps d'évaluer ce que ça implique concrètement pour nous.",
          "J'ai besoin que votre équipe m'aide à y voir clair avant que ça ne devienne un vrai problème."
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
      "Traiter un droit d'alerte du CSE sur un poste du site secondaire tout en structurant la veille sur les obligations récentes de conservation et de dépôt du DUERP.",
    problematique:
      "Votre cabinet saura-t-il désamorcer le droit d'alerte du CSE et rattraper le retard sur le DUERP, avec une restitution qui convaincra Montrel Industries de vous garder sur ce dossier plutôt que de le reprendre en interne ?",
    issues: [
      "Un opérateur a exercé son droit de retrait sur la presse d'assemblage n°3 après un incident évité de peu ; le CSE a formalisé un droit d'alerte pour danger grave et imminent.",
      "L'inspection du travail a été informée par le CSE et pourrait se présenter sans préavis.",
      "Le DUERP du site secondaire n'a pas été mis à jour depuis 14 mois malgré l'arrivée de cette presse, alors que la réforme santé au travail impose désormais sa conservation 40 ans et, à terme, son dépôt dématérialisé."
    ],
    comexExpectations: [
      "Un traitement documenté du droit d'alerte, distinct de la simple mise à jour du DUERP.",
      "Une analyse d'impact des obligations récentes de conservation et de dépôt du DUERP.",
      "Un plan de mise en conformité qui distingue l'urgence du poste n°3 et le chantier de fond sur le DUERP."
    ],
    specificMessages: [
      {
        id: "mandate-sst-prevention",
        sender: "Isabelle Roy",
        role: "Animatrice prévention",
        subject: "Le CSE a formalisé un droit d'alerte, j'ai besoin de vous vite",
        preview:
          "Un quasi-accident sur la presse n°3 a déclenché un droit de retrait puis un droit d'alerte du CSE.",
        receivedAt: "10:39",
        body: [
          "Bonjour,",
          "Un opérateur a actionné son droit de retrait hier sur la presse d'assemblage n°3, après un incident évité de peu. Le CSE a formalisé un droit d'alerte pour danger grave et imminent, et je crains qu'un contrôle de l'inspection du travail ne suive.",
          "En creusant le dossier, j'ai réalisé que le DUERP du site secondaire n'avait pas été mis à jour depuis l'arrivée de cette presse, il y a 14 mois. Et je sais qu'il y a de nouvelles règles sur la durée de conservation du DUERP, mais je ne les maîtrise pas.",
          "Sans veille structurée, nous risquons de traiter l'urgence sans jamais régler le fond."
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
      "Anticiper la bascule de la Directive Machines vers le nouveau Règlement Machines européen, en particulier ses nouvelles exigences de cybersécurité, avant l'échéance de janvier 2027.",
    problematique:
      "Votre cabinet saura-t-il sécuriser la réponse à l'appel d'offres malgré la bascule vers le nouveau Règlement Machines, avec une restitution qui donnera au comité de conformité confiance pour vous reconduire ?",
    issues: [
      "Le Règlement Machines (UE) 2023/1230 remplace progressivement la Directive Machines 2006/42/CE, avec une application générale prévue en janvier 2027 — dans quelques mois.",
      "Ce règlement introduit, pour la première fois, des exigences de cybersécurité pour les machines connectées, ce qui concerne directement les modules de pilotage à supervision à distance vendus par Montrel.",
      "Un client stratégique a demandé, dans un appel d'offres en cours, une attestation de conformité au nouveau règlement, alors que le marquage CE actuel de Montrel repose encore sur l'ancienne directive."
    ],
    comexExpectations: [
      "Une explication claire de ce qui change entre l'ancienne directive et le nouveau règlement, en particulier sur la cybersécurité.",
      "Une évaluation de l'écart entre le dossier technique actuel de Montrel et les nouvelles exigences.",
      "Une trajectoire de mise en conformité crédible avant l'échéance de janvier 2027, utilisable pour répondre à l'appel d'offres."
    ],
    specificMessages: [
      {
        id: "mandate-produit-normes",
        sender: "Thomas Girard",
        role: "Responsable bureau d'études",
        subject: "Un appel d'offres nous demande une conformité qu'on n'a pas encore",
        preview:
          "Un client demande une attestation de conformité au nouveau règlement européen sur les machines, cybersécurité incluse.",
        receivedAt: "10:42",
        body: [
          "Bonjour,",
          "Un client stratégique nous demande, dans le cadre d'un appel d'offres, une attestation de conformité au nouveau Règlement Machines européen — celui qui remplace la Directive Machines et qui devient pleinement applicable début 2027.",
          "Le problème, c'est que ce règlement introduit des exigences de cybersécurité pour les machines connectées, et nos modules de pilotage à supervision à distance n'ont jamais été évalués sous cet angle. Notre dossier technique actuel repose entièrement sur l'ancienne directive.",
          "J'ai besoin de comprendre précisément ce qui change et ce qu'il nous reste à faire, sans perdre ce client."
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
      "Qualifier une exigence de cybersécurité insérée par un client stratégique dans un avenant contractuel, non couverte par le système ISO 9001 actuel, et arbitrer un engagement déjà pris par le commercial.",
    problematique:
      "Votre cabinet saura-t-il qualifier l'exigence NIS2 déjà promise au client stratégique, et convaincre, en restitution, que vous êtes le bon partenaire pour sécuriser cet engagement à 18 % du chiffre d'affaires ?",
    issues: [
      "Un donneur d'ordre représentant environ 18 % du chiffre d'affaires exige, dans un avenant contractuel, la démonstration d'un dispositif de sécurité de l'information pour les fonctions de télémaintenance de Montrel — en écho à la directive européenne NIS2, qui s'applique à ce client.",
      "Montrel n'a aucun système de management de la sécurité de l'information formalisé ; l'ISO 9001 actuel ne couvre pas ce sujet.",
      "Le service commercial a déjà répondu favorablement à cette clause pour ne pas risquer de perdre le client, sans consulter la direction qualité."
    ],
    comexExpectations: [
      "Une qualification précise de l'exigence client et de son ancrage réglementaire (NIS2).",
      "Une évaluation honnête de l'écart entre l'engagement commercial déjà pris et la capacité réelle de Montrel.",
      "Un plan de mise en conformité qui rende l'engagement tenable, ou une position claire à faire remonter au COMEX si ce n'est pas le cas."
    ],
    specificMessages: [
      {
        id: "mandate-systeme-transverse",
        sender: "Sabrina Lopez",
        role: "Responsable système qualité",
        subject: "Le commercial a promis quelque chose qu'on ne sait pas encore tenir",
        preview:
          "Un client stratégique impose une clause de cybersécurité liée à NIS2 ; le commercial a déjà dit oui.",
        receivedAt: "10:45",
        body: [
          "Bonjour,",
          "Je viens d'apprendre qu'un de nos clients stratégiques — environ 18 % de notre chiffre d'affaires — a inséré une clause dans son avenant contractuel exigeant que nous démontrions un dispositif de sécurité de l'information sur nos fonctions de télémaintenance. Cela fait écho à la directive européenne NIS2, qui s'applique à ce client.",
          "Le souci, c'est que notre service commercial a déjà répondu favorablement pour ne pas risquer de perdre le contrat, sans nous consulter. Or nous n'avons rien de formalisé sur ce sujet, notre ISO 9001 ne le couvre pas.",
          "J'ai besoin de savoir si cet engagement est tenable, et sinon, ce qu'on peut proposer de réaliste."
        ]
      }
    ]
  }
];

export const simulation: SimulationData = {
  missionLetter: {
    clientCompany: "Montrel Industries",
    context:
      "À la suite d'un audit ayant révélé une détection trop tardive des évolutions applicables, Montrel Industries structure sa veille réglementaire et normative. Chaque équipe prend en charge un domaine de veille, avec une problématique distincte déjà en cours.",
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
      sender: "Camille Ferrand",
      role: "Responsable qualité groupe",
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
    },
    {
      id: "dq-cadrage-domaine",
      sender: "Camille Ferrand",
      role: "Responsable qualité groupe",
      subject: "Cadrage du domaine de veille",
      preview:
        "La direction qualité confirme le domaine de veille confié et le niveau d'analyse attendu.",
      receivedAt: "13:05",
      body: [
        "Bonjour,",
        "Je vous confirme le domaine de veille confié à votre équipe. Concentrez-vous sur les exigences réellement applicables à Montrel Industries.",
        "Pour chaque exigence, je veux une source identifiée, une évaluation d'impact et un statut de conformité."
      ]
    },
    {
      id: "nouvelle-reglementation",
      sender: "Service documentation",
      role: "Veille documentaire",
      subject: "Nouvelle évolution réglementaire parue",
      preview:
        "Une évolution réglementaire vient de paraître et pourrait concerner le domaine confié.",
      receivedAt: "13:40",
      body: [
        "Bonjour,",
        "Une évolution réglementaire vient de paraître et pourrait concerner votre domaine de veille.",
        "Merci d'évaluer si elle est applicable à Montrel Industries, et le cas echeant son impact et son échéance de mise en conformité."
      ]
    },
    {
      id: "audit-constat",
      sender: "Auditeur interne",
      role: "Audit interne",
      subject: "Précisions sur le constat d'audit",
      preview:
        "L'audit interne précise le constat de détection tardive à l'origine de la mission.",
      receivedAt: "14:15",
      body: [
        "Bonjour,",
        "Le constat d'audit portait sur plusieurs évolutions détectées après leur entrée en vigueur, faute de veille structurée.",
        "Votre plan de mise en conformité devra montrer comment ce type de situation sera evite à l'avenir."
      ]
    },
    {
      id: "qse-impact",
      sender: "Nadia Cherif",
      role: "Manager QSE",
      subject: "Évaluez l'impact avant de lister",
      preview:
        "Le manager QSE rappelle d'évaluer l'impact et de prioriser plutot que de tout lister.",
      receivedAt: "14:45",
      body: [
        "Bonjour,",
        "Pour chaque exigence, precisez l'impact sur l'organisation et le niveau de priorité de la mise en conformité.",
        "Un tableau de veille sans analyse d'impact ne permet pas de décider, il ne fait que documenter."
      ]
    },
    {
      id: "operationnel-faisabilite",
      sender: "Philippe Marchand",
      role: "Responsable opérationnel",
      subject: "Un dispositif tenable dans le temps",
      preview:
        "Les opérations alertent sur la charge d'un dispositif de veille trop ambitieux.",
      receivedAt: "15:10",
      body: [
        "Bonjour,",
        "Je veux bien soutenir la démarche, mais le dispositif de veille doit rester tenable pour les équipes.",
        "Precisez qui fait quoi, à quelle fréquence et sur quelles sources, sinon la veille retombera vite."
      ]
    },
    {
      id: "comité-attentes-restitution",
      sender: "Secrétariat du comité de conformité",
      role: "Comité de conformité",
      subject: "Attentes pour la restitution de 16h30",
      preview:
        "Le comité de conformité précise les attendus de la restitution finale.",
      receivedAt: "15:35",
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
