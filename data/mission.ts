import type { Mandate, SimulationData } from "@/lib/types";

export const mandates: Mandate[] = [
  { cabinetName: "Cabinet Horizon", referential: "ISO 13485" },
  { cabinetName: "Cabinet Polaris", referential: "IATF 16949" },
  { cabinetName: "Cabinet Meridian", referential: "EN 9100" },
  { cabinetName: "Cabinet Nova", referential: "ISO 22000" }
];

export const simulation: SimulationData = {
  missionLetter: {
    clientCompany: "ARCANIS Industries",
    context:
      "Le COMEX souhaite diversifier le groupe vers des marches plus exigeants. Plusieurs options de referentiels sont envisagees, mais aucune trajectoire n'a encore ete arbitree.",
    objective:
      "Eclairer la decision du COMEX en identifiant le referentiel le plus coherent avec la strategie, la maturite actuelle et les contraintes de transformation.",
    assignedMandate:
      "Votre cabinet doit defendre une strategie de diversification fondee sur un referentiel cible. La recommandation devra etre credible, argumentee et directement exploitable par la direction.",
    expectedDeliverable:
      "Une prise de position orale devant le COMEX, appuyee par un support prepare hors plateforme.",
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
        "Le COMEX attend une position claire, pas une liste d'options equivalentes.",
      receivedAt: "08:42",
      body: [
        "Bonjour,",
        "Nous avons besoin d'une recommandation ferme. Le COMEX ne souhaite pas comparer tous les referentiels possibles, mais comprendre quelle trajectoire vous jugez la plus coherente pour ARCANIS Industries.",
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
        "La direction confirme qu'elle attend une recommandation assumee et directement exploitable.",
      subject: "Confirmation du mandat attendu par le COMEX",
      body: [
        "Bonjour,",
        "Je vous confirme que le COMEX attend une position claire sur le referentiel a engager en priorite.",
        "Votre recommandation devra montrer pourquoi cette trajectoire est pertinente pour ARCANIS Industries, au regard de notre strategie de diversification et de notre maturite actuelle.",
        "Nous serons attentifs a la solidite de votre arbitrage, pas seulement a la description du referentiel."
      ]
    },
    {
      id: "commercial-nouveau-marche",
      triggerTitle: "Mail Directeur Commercial - Nouveau marche prioritaire",
      sender: "Nadia Khelifi",
      role: "Directrice commerciale",
      simulatedTime: "13:35",
      summary:
        "Un marche cible renforce la pression sur la credibilite du referentiel propose.",
      subject: "Nouveau marche prioritaire a integrer",
      body: [
        "Bonjour,",
        "Nous venons de recevoir un signal fort d'un prospect prioritaire. Il recherche un fournisseur capable de demontrer une maitrise plus robuste des exigences qualite, des risques et de la tracabilite.",
        "Votre proposition devra nous aider a comprendre si le referentiel recommande renforce vraiment notre position commerciale.",
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
        "Pour la restitution, le COMEX attend une recommandation argumentee, le referentiel propose, les impacts organisationnels, les risques majeurs et un plan de transition.",
        "La presentation devra permettre une decision. Evitez une restitution descriptive : nous attendons un arbitrage et une trajectoire defendable.",
        "Merci de preparer une conclusion claire sur les conditions de reussite."
      ]
    }
  ],
  comexExpectations: [
    {
      title: "Une recommandation argumentee",
      detail:
        "Le COMEX attend une position assumee, pas une exploration neutre de toutes les options."
    },
    {
      title: "Le referentiel propose",
      detail:
        "Le choix doit etre relie a la strategie de diversification et au niveau de maturite actuel."
    },
    {
      title: "Les impacts",
      detail:
        "La direction veut comprendre les consequences sur les processus, roles, competences et preuves attendues."
    },
    {
      title: "Les risques",
      detail:
        "La recommandation doit integrer les risques de deploiement, d'adhesion et de credibilite marche."
    },
    {
      title: "Le plan de transition",
      detail:
        "Le COMEX attend une trajectoire realiste, lisible et defendable devant les operations."
    }
  ],
  keyDates: [
    "09h00 - Ouverture de mission",
    "11h30 - Informations complementaires",
    "14h00 - Preparation cabinet",
    "16h30 - Presentation devant le COMEX"
  ]
};
