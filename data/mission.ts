import type { Mandate, SimulationData } from "@/lib/types";

export const mandates: Mandate[] = [
  {
    id: "iso13485",
    cabinetName: "Cabinet Horizon",
    title: "Diversification Dispositifs medicaux",
    sector: "Dispositifs medicaux",
    referential: "ISO 13485",
    objective:
      "Evaluer la faisabilite d'une entree sur le marche des dispositifs medicaux avec le referentiel ISO 13485 impose par le mandat.",
    issues: [
      "Maitrise documentaire et preuves attendues plus strictes que dans le systeme ISO 9001 actuel.",
      "Exigences renforcees sur la gestion des risques, la tracabilite et les fournisseurs critiques.",
      "Credibilite a construire face a des clients tres sensibles a la conformite reglementaire."
    ],
    comexExpectations: [
      "Clarifier les ecarts majeurs entre ISO 9001 et ISO 13485.",
      "Identifier les impacts sur conception, achats, production et controle.",
      "Proposer une trajectoire soutenable avant engagement commercial."
    ],
    documentFolders: [
      {
        name: "Mission 001 / ISO13485",
        documents: [
          {
            name: "Note mandat ISO13485.pdf",
            owner: "Direction",
            type: "PDF",
            date: "20/06/2026",
            classification: "Interne",
            href: "/documents/mission-001/ISO13485/Note-Mandat-ISO13485.pdf"
          },
          {
            name: "Qualification fournisseurs medicaux.pdf",
            owner: "Qualite",
            type: "PDF",
            date: "21/06/2026",
            classification: "Interne",
            href: "/documents/mission-001/ISO13485/Qualification-Fournisseurs-Medicaux.pdf"
          }
        ]
      }
    ],
    specificMessages: [
      {
        id: "mandate-iso13485-industrie",
        sender: "Laurent Vasseur",
        role: "Directeur industriel",
        subject: "Capacite de tracabilite pour le medical",
        preview:
          "Nos lignes actuelles n'ont pas toutes le meme niveau de preuve documentaire.",
        receivedAt: "10:32",
        body: [
          "Bonjour,",
          "Sur le medical, la question centrale sera notre capacite a produire des preuves robustes et homogenes sur plusieurs sites.",
          "Merci d'evaluer l'impact reel d'ISO 13485 sur les dossiers de lot, la maitrise fournisseur et le controle des changements."
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
      "Evaluer la faisabilite d'une entree sur le marche automobile avec le referentiel IATF 16949 impose par le mandat.",
    issues: [
      "Attentes elevees sur la robustesse processus, l'APQP, la maitrise des changements et les fournisseurs.",
      "Pression forte sur les delais, la preuve de capabilite et la performance serie.",
      "Risque d'ecart entre le niveau ISO 9001 actuel et les exigences client automobile."
    ],
    comexExpectations: [
      "Identifier les prerequis avant de viser des donneurs d'ordre automobile.",
      "Evaluer les impacts sur production, methodes, achats et pilotage performance.",
      "Definir les risques d'une entree trop rapide sur ce marche."
    ],
    documentFolders: [
      {
        name: "Mission 001 / IATF16949",
        documents: [
          {
            name: "Note mandat IATF16949.pdf",
            owner: "Direction Commerciale",
            type: "PDF",
            date: "20/06/2026",
            classification: "Interne",
            href: "/documents/mission-001/IATF16949/Note-Mandat-IATF16949.pdf"
          },
          {
            name: "Cartographie capacite production automobile.pdf",
            owner: "Operations",
            type: "PDF",
            date: "21/06/2026",
            classification: "Interne",
            href: "/documents/mission-001/IATF16949/Capacite-Production-Automobile.pdf"
          }
        ]
      }
    ],
    specificMessages: [
      {
        id: "mandate-iatf16949-industrie",
        sender: "Laurent Vasseur",
        role: "Directeur industriel",
        subject: "Exigences serie et pression automobile",
        preview:
          "Le niveau d'exigence automobile pourrait transformer nos routines industrielles.",
        receivedAt: "10:32",
        body: [
          "Bonjour,",
          "L'automobile suppose un niveau de discipline operationnelle tres superieur a notre fonctionnement actuel sur certaines lignes.",
          "Merci d'integrer les impacts sur la capabilite, la validation process, la gestion des modifications et les fournisseurs critiques."
        ]
      }
    ]
  },
  {
    id: "en9100",
    cabinetName: "Cabinet Meridian",
    title: "Diversification Aeronautique",
    sector: "Aeronautique",
    referential: "EN 9100",
    objective:
      "Evaluer la faisabilite d'une entree sur le marche aeronautique avec le referentiel EN 9100 impose par le mandat.",
    issues: [
      "Exigences renforcees sur la gestion des risques, la configuration et la maitrise des fournisseurs.",
      "Besoin de preuves fiables dans un environnement ou la securite et la conformite sont decisives.",
      "Transformation culturelle necessaire pour passer d'un referentiel generaliste a un cadre sectoriel exigeant."
    ],
    comexExpectations: [
      "Montrer ce que l'EN 9100 apporte au-dela d'ISO 9001.",
      "Prioriser les impacts sur l'organisation et la gouvernance qualite.",
      "Estimer les risques de credibilite face aux donneurs d'ordre."
    ],
    documentFolders: [
      {
        name: "Mission 001 / EN9100",
        documents: [
          {
            name: "Note mandat EN9100.pdf",
            owner: "Direction",
            type: "PDF",
            date: "20/06/2026",
            classification: "Interne",
            href: "/documents/mission-001/EN9100/Note-Mandat-EN9100.pdf"
          },
          {
            name: "Analyse exigences aeronautiques.pdf",
            owner: "Qualite",
            type: "PDF",
            date: "21/06/2026",
            classification: "Interne",
            href: "/documents/mission-001/EN9100/Analyse-Exigences-Aeronautiques.pdf"
          }
        ]
      }
    ],
    specificMessages: [
      {
        id: "mandate-en9100-industrie",
        sender: "Laurent Vasseur",
        role: "Directeur industriel",
        subject: "Maitrise configuration et aeronautique",
        preview:
          "La gestion de configuration n'est pas encore structuree au niveau attendu.",
        receivedAt: "10:32",
        body: [
          "Bonjour,",
          "Pour l'aeronautique, notre point faible probable sera la gestion de configuration et la formalisation des preuves de conformite.",
          "Merci d'evaluer l'effort de structuration necessaire si le COMEX engage la trajectoire EN 9100."
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
      "Evaluer la faisabilite d'une entree sur le marche agroalimentaire avec le referentiel ISO 22000 impose par le mandat.",
    issues: [
      "Integration de la securite des denrees, des PRP et de l'approche HACCP dans un systeme industriel existant.",
      "Nouveaux controles sur hygiene, contamination, nettoyage et maitrise des dangers.",
      "Besoin de clarifier les conditions de faisabilite entre opportunite commerciale et transformation operationnelle."
    ],
    comexExpectations: [
      "Expliquer les exigences nouvelles par rapport au socle ISO 9001.",
      "Identifier les transformations necessaires sur sites, fournisseurs et controles.",
      "Proposer une trajectoire realiste pour eviter un engagement premature."
    ],
    documentFolders: [
      {
        name: "Mission 001 / ISO22000",
        documents: [
          {
            name: "Note mandat ISO22000.pdf",
            owner: "Direction Commerciale",
            type: "PDF",
            date: "20/06/2026",
            classification: "Interne",
            href: "/documents/mission-001/ISO22000/Note-Mandat-ISO22000.pdf"
          },
          {
            name: "Diagnostic hygiene et flux.pdf",
            owner: "Operations",
            type: "PDF",
            date: "21/06/2026",
            classification: "Interne",
            href: "/documents/mission-001/ISO22000/Diagnostic-Hygiene-Flux.pdf"
          }
        ]
      }
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
          "L'agroalimentaire peut ouvrir un marche interessant, mais nos ateliers n'ont pas ete penses autour de contraintes hygiene aussi fortes.",
          "Merci d'evaluer les impacts sur les flux, le nettoyage, la prevention des contaminations et la competence des equipes."
        ]
      }
    ]
  }
];

export const simulation: SimulationData = {
  missionLetter: {
    clientCompany: "ARCANIS Industries",
    context:
      "Le COMEX a retenu plusieurs axes de diversification a instruire. Chaque cabinet recoit un mandat ferme et doit evaluer la faisabilite de la trajectoire confiee.",
    objective:
      "Eclairer la decision du COMEX en identifiant les ecarts avec ISO 9001, les impacts organisationnels, les risques et les conditions de mise en oeuvre.",
    assignedMandate:
      "Votre cabinet doit analyser le mandat confie par le COMEX. Le referentiel associe au mandat est une contrainte de depart, pas une variable d'arbitrage.",
    expectedDeliverable:
      "Une recommandation de mise en oeuvre devant le COMEX, appuyee par un support prepare hors plateforme.",
    presentationDate: "Aujourd'hui, 16h30"
  },
  documentFolders: [
    {
      name: "Direction",
      documents: [
        {
          name: "Plan strategique 2030.pdf",
          owner: "Direction",
          type: "PDF",
          date: "12/05/2026",
          classification: "Interne",
          href: "/documents/mission-001/Plan-Strategique-2030.pdf"
        }
      ]
    },
    {
      name: "Qualite",
      documents: [
        {
          name: "Politique Qualite.pdf",
          owner: "Qualite",
          type: "PDF",
          date: "04/02/2026",
          classification: "Interne",
          href: "/documents/mission-001/Politique-Qualite.pdf"
        },
        {
          name: "Manuel Qualite.pdf",
          owner: "Qualite",
          type: "PDF",
          date: "18/03/2026",
          classification: "Interne",
          href: "/documents/mission-001/Manuel-Qualite.pdf"
        },
        {
          name: "Cartographie des processus.pdf",
          owner: "Qualite",
          type: "PDF",
          date: "21/03/2026",
          classification: "Interne",
          href: "/documents/mission-001/Cartographie-Processus.pdf"
        },
        {
          name: "Rapport audit ISO9001.pdf",
          owner: "Qualite",
          type: "PDF",
          date: "09/04/2026",
          classification: "Interne",
          href: "/documents/mission-001/Rapport-Audit-ISO9001.pdf"
        }
      ]
    },
    {
      name: "Ressources Humaines",
      documents: [
        {
          name: "Organigramme.pdf",
          owner: "Ressources Humaines",
          type: "PDF",
          date: "15/01/2026",
          classification: "Interne",
          href: "/documents/mission-001/Organigramme.pdf"
        }
      ]
    },
    {
      name: "Commercial",
      documents: [
        {
          name: "Catalogue produits.pdf",
          owner: "Commercial",
          type: "PDF",
          date: "02/05/2026",
          classification: "Interne",
          href: "/documents/mission-001/Catalogue-Produits.pdf"
        }
      ]
    },
    {
      name: "Certifications",
      documents: [
        {
          name: "Certificat ISO9001.pdf",
          owner: "Certifications",
          type: "PDF",
          date: "30/11/2025",
          classification: "Interne",
          href: "/documents/mission-001/Certificat-ISO9001.pdf"
        }
      ]
    }
  ],
  messages: [
    {
      id: "dg",
      sender: "Claire Montreuil",
      role: "Directrice generale",
      subject: "Clarification attendue avant le COMEX",
      preview:
        "Le COMEX attend une position claire sur la faisabilite du mandat confie.",
      receivedAt: "08:42",
      body: [
        "Bonjour,",
        "Nous avons besoin d'une recommandation ferme sur la faisabilite du mandat confie a votre cabinet.",
        "Votre position devra tenir compte de notre maturite actuelle et du calendrier commercial."
      ]
    },
    {
      id: "commerce",
      sender: "Nadia Khelifi",
      role: "Directrice commerciale",
      subject: "Pression sur les prochains appels d'offres",
      preview:
        "Deux prospects demandent des garanties plus fortes sur la maitrise des risques.",
      receivedAt: "09:15",
      body: [
        "Bonjour,",
        "Nous sommes en discussion avec deux grands comptes europeens. Ils ne demandent pas seulement un certificat, ils veulent etre rassures sur notre capacite a tenir les exigences dans la duree.",
        "Une trajectoire trop lente pourrait fragiliser notre position commerciale."
      ]
    },
    {
      id: "qualite",
      sender: "Marc Bellanger",
      role: "Responsable qualite",
      subject: "Maturite ISO 9001",
      preview:
        "Le socle ISO 9001 existe, mais les pratiques ne sont pas homogenes entre sites.",
      receivedAt: "10:05",
      body: [
        "Bonjour,",
        "Notre systeme ISO 9001 est solide sur le papier. En revanche, certaines pratiques restent tres dependantes des responsables locaux.",
        "Si le nouveau referentiel impose davantage de preuves ou de pilotage transversal, il faudra prevoir un accompagnement serieux."
      ]
    },
    {
      id: "client",
      sender: "Service achats client",
      role: "Client strategique",
      subject: "Exigences de qualification fournisseur",
      preview:
        "Notre grille fournisseur evoluera lors du prochain cycle de selection.",
      receivedAt: "11:20",
      body: [
        "Madame, Monsieur,",
        "Notre prochain cycle de selection integrera des exigences renforcees en matiere de maitrise operationnelle, gestion des risques et preuves de conformite.",
        "Les fournisseurs capables de demontrer une trajectoire structuree seront privilegies."
      ]
    },
    {
      id: "fournisseur",
      sender: "Partenaire composants",
      role: "Fournisseur critique",
      subject: "Delais sur composants sensibles",
      preview:
        "Les tensions d'approvisionnement pourraient peser sur la trajectoire de transformation.",
      receivedAt: "12:10",
      body: [
        "Bonjour,",
        "Nous anticipons des tensions ponctuelles sur plusieurs composants critiques au prochain trimestre.",
        "Toute evolution de referentiel qui augmenterait les exigences de tracabilite devra etre anticipee avec nos equipes."
      ]
    }
  ],
  preparedEvents: [
    {
      id: "dg-confirmation-mandat",
      triggerTitle: "Mail DG - Confirmation du mandat",
      sender: "Claire Montreuil",
      role: "Directrice generale",
      simulatedTime: "13:05",
      summary:
        "La direction confirme qu'elle attend une evaluation de faisabilite assumee et directement exploitable.",
      subject: "Confirmation du mandat attendu par le COMEX",
      body: [
        "Bonjour,",
        "Je vous confirme que le COMEX attend une position claire sur la faisabilite du mandat confie a votre cabinet.",
        "Votre recommandation devra montrer comment cette trajectoire peut etre mise en oeuvre par ARCANIS Industries, au regard de notre strategie de diversification et de notre maturite actuelle.",
        "Nous serons attentifs a la solidite de votre analyse, pas seulement a la description du referentiel associe."
      ]
    },
    {
      id: "commercial-nouveau-marche",
      triggerTitle: "Mail Directeur Commercial - Nouveau marche prioritaire",
      sender: "Nadia Khelifi",
      role: "Directrice commerciale",
      simulatedTime: "13:35",
      summary:
        "Un marche cible renforce la pression sur la credibilite de la trajectoire confiee.",
      subject: "Nouveau marche prioritaire a integrer",
      body: [
        "Bonjour,",
        "Nous venons de recevoir un signal fort d'un prospect prioritaire. Il recherche un fournisseur capable de demontrer une maitrise plus robuste des exigences qualite, des risques et de la tracabilite.",
        "Votre proposition devra nous aider a comprendre si la trajectoire confiee renforce vraiment notre position commerciale.",
        "Merci aussi d'identifier les ecarts avec ISO 9001 que le COMEX devra anticiper."
      ]
    },
    {
      id: "qualite-limites-iso9001",
      triggerTitle: "Mail Responsable Qualite - Limites du systeme ISO9001 actuel",
      sender: "Marc Bellanger",
      role: "Responsable qualite",
      simulatedTime: "14:10",
      summary:
        "Le systeme ISO 9001 actuel est utile mais insuffisant pour certains marches cibles.",
      subject: "Limites du systeme ISO 9001 actuel",
      body: [
        "Bonjour,",
        "Notre systeme ISO 9001 donne un cadre solide, mais il ne couvre pas toutes les exigences sectorielles que nous rencontrons dans les nouveaux appels d'offres.",
        "Les principaux points sensibles sont la profondeur des preuves, la gestion des competences, la maitrise fournisseur et la formalisation des risques.",
        "Votre analyse devra expliquer ce que le nouveau referentiel ajoute vraiment, et ce que cela implique pour l'organisation."
      ]
    },
    {
      id: "qualite-confirmation-perimetre",
      triggerTitle: "Mail Directrice Qualite - Confirmation du perimetre",
      sender: "Claire Martin",
      role: "Directrice qualite",
      simulatedTime: "14:25",
      summary:
        "La direction qualite confirme que l'analyse doit rester centree sur le referentiel associe au mandat.",
      subject: "Confirmation du perimetre de votre analyse",
      body: [
        "Bonjour,",
        "Je vous confirme que votre cabinet travaille bien sur le referentiel associe a son mandat. Ce perimetre a ete fixe par le COMEX afin d'evaluer une trajectoire precise de diversification.",
        "Une analyse fondee sur un autre referentiel ne repondrait pas au besoin exprime par la direction.",
        "Merci de concentrer votre recommandation sur la faisabilite, les ecarts avec ISO 9001, les impacts organisationnels et les conditions de transition."
      ]
    },
    {
      id: "industrie-contraintes-ressources",
      triggerTitle: "Mail Directeur Industriel - Contraintes de ressources",
      sender: "Laurent Vasseur",
      role: "Directeur industriel",
      simulatedTime: "14:45",
      summary:
        "Les operations alertent sur la capacite reelle a absorber une transformation trop lourde.",
      subject: "Contraintes de ressources operationnelles",
      body: [
        "Bonjour,",
        "Je souhaite attirer votre attention sur notre capacite de deploiement. Les sites sont deja mobilises sur plusieurs chantiers de production et de livraison.",
        "Une trajectoire ambitieuse peut etre pertinente, mais elle doit rester soutenable pour les operations.",
        "Le COMEX aura besoin d'un plan de transition credible, avec des priorites, des jalons et des risques clairement assumes."
      ]
    },
    {
      id: "comex-attentes-restitution",
      triggerTitle: "Mail COMEX - Attentes de restitution",
      sender: "Secretariat COMEX",
      role: "COMEX",
      simulatedTime: "15:30",
      summary:
        "Le COMEX precise les attendus de la restitution orale finale.",
      subject: "Attentes pour la restitution de 16h30",
      body: [
        "Bonjour,",
        "Pour la restitution, le COMEX attend une evaluation de faisabilite, les ecarts majeurs avec ISO 9001, les impacts organisationnels, les risques majeurs et un plan de transition.",
        "La presentation devra permettre une decision. Evitez une restitution descriptive : nous attendons une evaluation de faisabilite et une trajectoire defendable.",
        "Merci de preparer une conclusion claire sur les conditions de reussite."
      ]
    }
  ],
  comexExpectations: [
    {
      title: "Une evaluation de faisabilite",
      detail:
        "Le COMEX attend une position claire sur la capacite d'ARCANIS Industries a engager le mandat confie."
    },
    {
      title: "Les ecarts majeurs avec ISO 9001",
      detail:
        "Les ecarts doivent etre relies au referentiel associe au mandat et au niveau de maturite actuel."
    },
    {
      title: "Les impacts organisationnels",
      detail:
        "La direction veut comprendre les consequences sur les processus, roles, competences et preuves attendues."
    },
    {
      title: "Les risques",
      detail:
        "La recommandation doit integrer les risques de deploiement, d'adhesion et de credibilite marche."
    },
    {
      title: "La trajectoire de transition",
      detail:
        "Le COMEX attend une trajectoire realiste, lisible et defendable devant les operations."
    },
    {
      title: "Une proposition realiste",
      detail:
        "Les couts, delais et ressources necessaires doivent etre assumes et compatibles avec les contraintes du client."
    }
  ],
  keyDates: [
    "09h00 - Ouverture de mission",
    "11h30 - Informations complementaires",
    "14h00 - Preparation cabinet",
    "16h30 - Presentation devant le COMEX"
  ]
};
