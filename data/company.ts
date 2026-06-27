import type { CompanyProfile } from "@/lib/types";

export const company: CompanyProfile = {
  name: "ARCANIS Industries",
  sector:
    "Conception et fabrication d'equipements industriels pour environnements techniques exigeants",
  headcount: "420 collaborateurs repartis sur deux sites",
  revenue: "86 M EUR",
  clients: [
    "Donneurs d'ordre industriels europeens",
    "Integrateurs de solutions automatisees",
    "Clients sensibles aux delais, a la tracabilite et a la conformite"
  ],
  objectives: [
    "Diversifier l'offre vers des marches a plus forte exigence normative",
    "Renforcer la confiance client avant les prochains appels d'offres",
    "Structurer les pratiques QSE sans alourdir inutilement l'organisation",
    "Donner au comite de direction une trajectoire realiste a douze mois"
  ],
  constraints: [
    "Culture qualite deja fondee sur ISO 9001, mais maturite heterogene selon les sites",
    "Ressources internes limitees pour conduire plusieurs chantiers en parallele",
    "Delais commerciaux courts pour se positionner sur de nouveaux marches",
    "Besoin de preuves documentees sans inflation administrative"
  ],
  risks: [
    "Choisir un referentiel trop ambitieux et perdre l'adhesion operationnelle",
    "Sous-estimer les exigences de tracabilite, de competence ou de gestion des risques",
    "Confondre conformite documentaire et performance reelle",
    "Engager des investissements non prioritaires avant validation strategique"
  ],
  context:
    "La direction generale souhaite evaluer un nouveau referentiel qualite adapte a une diversification progressive. Les consultants doivent produire une recommandation argumentee, utile pour arbitrer entre ambition normative, capacite interne et impact commercial."
};
