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
  documentCategories: [
    {
      title: "Historique",
      description:
        "Repères sur la croissance, les sites industriels et les decisions structurantes du groupe.",
      status: "Dossier en preparation"
    },
    {
      title: "Organigramme",
      description:
        "Lecture des responsabilites, lignes de decision et interfaces entre directions.",
      status: "Dossier en preparation"
    },
    {
      title: "Rapports",
      description:
        "Syntheses d'audits, analyses internes et indicateurs utiles a la mission.",
      status: "Dossier en preparation"
    },
    {
      title: "Procedures",
      description:
        "Elements du systeme de management actuel et pratiques operationnelles.",
      status: "Dossier en preparation"
    },
    {
      title: "Certifications",
      description:
        "Statut des certifications existantes et pistes de referentiels envisageables.",
      status: "Dossier en preparation"
    },
    {
      title: "Actualites",
      description:
        "Signaux de marche, contraintes client et informations recentes autour du mandat.",
      status: "Dossier en preparation"
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
