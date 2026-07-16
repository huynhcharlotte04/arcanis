# AUDIT.md — Arcanis, état des lieux avant évolution multi-modules

**Sprint 0 du cahier des charges d'évolution.** Aucune ligne de code métier n'a été modifiée pour produire cet audit. Trois commandes en lecture seule ont été exécutées pour vérifier l'état de départ (`pnpm install`, `pnpm typecheck`, `pnpm lint`, `pnpm build`) — toutes passent sans erreur ni warning (voir §3).

---

## 1. Cartographie des fichiers et de leurs responsabilités

### 1.1 Données métier — `data/*.ts`

| Fichier | Contenu | Portée actuelle |
|---|---|---|
| `data/company.ts` | Une constante `company: ClientCompany` (ARCANIS Industries) | Une seule entreprise, en dur |
| `data/mission.ts` | `mandates: Mandate[]` (4 entrées : ISO 13485, IATF 16949, EN 9100, ISO 22000) + `simulation: SimulationData` (lettre de mission, messages génériques, événements pilotables, attentes COMEX, dates clés) | Un seul jeu de mandats, une seule simulation |
| `data/document-library.ts` | `documentLibrary: DocumentLibraryItem[]` — 16 entrées, chacune avec `missions: ["mission-001"]` en dur | Un seul identifiant de mission pour tous les documents |

### 1.2 Logique — `lib/*.ts`

| Fichier | Rôle | Couplage mono-entreprise |
|---|---|---|
| `lib/types.ts` | Tous les types (`Mandate`, `ClientCompany`, `SimulationData`, `ConsultantSession`, `TrainerSession`, `DocumentLibraryItem`, etc.) | Types déjà assez génériques dans leur forme ; le couplage est dans les *données*, pas dans les types |
| `lib/mandates.ts` | `getDefaultMandate`, `getMandateById`, `getMandateByCabinetName`, `hasKnownCabinetName` | Importe `mandates` directement depuis `@/data/mission` (ligne 1) — aucune notion de module |
| `lib/storage.ts` | Lecture/écriture `localStorage` pour la session consultant, la session formateur, les événements déclenchés | Clés `arcanis:v1:*` globales, sans segmentation par module (§2) ; `defaultTrainerSession.moduleName` vaut `"Autres referentiels"` en dur (ligne 18) |
| `lib/access.ts` | `hasMissionAccess` : vérifie que `sessionCode`, `cabinetName`, `mandateId` sont non vides | Contrôle purement déclaratif côté client, aucune validation serveur (cohérent avec l'absence de backend, mais à documenter comme tel) |
| `lib/documents.ts` | `getDocumentsForMission`, `groupDocumentsByCategory` | La fonction accepte déjà un `missionId` en paramètre (donc générique dans sa signature), mais tous les appelants et toutes les données passent la valeur unique `"mission-001"` |

### 1.3 UI — `components/*.tsx`

| Composant | Rôle | Import direct de données mono-module |
|---|---|---|
| `AppShell.tsx` | Layout commun (header + nav + garde d'accès) | Non (délègue) |
| `BrandHeader.tsx` | Logo/nom "ARCANIS" (marque de la plateforme, pas de l'entreprise fictive) | Non — texte de marque, pas de donnée métier |
| `SectionHeader.tsx` | Titre de section générique | Non |
| `SimulationNav.tsx` | Fil d'Ariane des 6 étapes de mission | Non (utilise seulement `hasMissionAccess`) |
| `JoinMissionPanel.tsx` | Formulaire code de session + nom de cabinet | Importe `getMandateByCabinetName`, `hasKnownCabinetName` de `lib/mandates` (ligne 5) — associe cabinet → mandat sans notion de module ; le champ "code de session" est un texte libre, jamais parsé |
| `MissionAccessGuard.tsx` | Redirige vers `/rejoindre` si pas de session valide | Non couplé aux données, mais logique de garde à reproduire pour tout futur module |
| `MissionLetterDocument.tsx` | Affiche la lettre de mission | Importe `simulation` de `@/data/mission` (ligne 4) ; en-tête JSX **en dur** `"ARCANIS Industries - COMEX"` (ligne 35, jamais lié à `company.name`) ; `closedMissionContext` (ligne 17) mentionne `"ISO 9001"` en dur dans le texte généré |
| `ClientDossier.tsx` | Fiche entreprise cliente | Importe `company` de `@/data/company` **et** `mandates` de `@/data/mission` directement (lignes 4-5) ; deux libellés en dur non dérivés des données : `"Certification actuelle: ISO 9001"` et `"Objectif strategique: Diversification vers de nouveaux marches"` (lignes 95-99) |
| `DocumentCenter.tsx` | Liste les documents du mandat actif | `missionId: "mission-001"` **en dur** dans l'appel à `getDocumentsForMission` (ligne 19-22) |
| `MailInbox.tsx` | Messagerie (messages génériques + spécifiques au mandat + événements déclenchés) | Importe `simulation` de `@/data/mission` directement (ligne 4) |
| `RestitutionPrep.tsx` | Attentes COMEX + encart restitution | Importe `simulation` de `@/data/mission` directement (ligne 1) ; aucune notion de `deliverableType` (le cahier des charges §4 en introduit une pour QSEAL13) |
| `TrainerDashboard.tsx` | Création de session formateur, attribution des mandats, console de déclenchement d'événements | Importe `mandates` et `simulation` de `@/data/mission` directement (ligne 4) ; `generateSessionCode()` (lignes 15-17) génère des codes `AR-XXXX` **sans préfixe de module** ; le champ `moduleName` est un texte libre, pas un sélecteur |

### 1.4 Pages — `app/**/*.tsx`

Toutes les pages sont de fins wrappers `AppShell` + composant + `SectionHeader`, sauf :
- `app/page.tsx` (accueil) : hardcode dans le JSX `"ARCANIS Industries"` (ligne 59), `"Equipements industriels"` (ligne 64) et le badge `"QSE"` (ligne 53) — texte statique jamais lié à `data/company.ts`.
- `app/entreprise-cliente/page.tsx` et `app/centre-documentaire/page.tsx` : le texte du `SectionHeader` mentionne `"ARCANIS Industries"` en dur dans la description.
- `app/centre-documentaire/[slug]/page.tsx` : page "à venir" générique, aucune donnée.

### 1.5 Documents statiques — `public/documents/mission-001/**`

Arborescence entièrement câblée sur l'identifiant `mission-001` : dossiers `direction/`, `qualite/`, `rh/`, `commercial/`, `certification/`, plus un sous-dossier par référentiel (`ISO13485/`, `IATF16949/`, `EN9100/`, `ISO22000/`). Chaque `href` dans `data/document-library.ts` pointe vers ce chemin en dur.

---

## 2. Tous les points du code qui supposent une seule entreprise / un seul jeu de mandats

Les points identifiés dans le cahier des charges sont confirmés. La liste ci-dessous les reprend et y ajoute ceux trouvés pendant l'audit.

**Confirmés (cahier des charges) :**
1. `data/company.ts` — une constante `company` unique.
2. `data/mission.ts` — une constante `mandates` (4 entrées) et une constante `simulation` unique.
3. `lib/mandates.ts` — fonctions qui cherchent dans `mandates` importé directement (couplage fort).
4. `lib/storage.ts` — clés `arcanis:v1:*` en dur, aucune segmentation par module.
5. `components/JoinMissionPanel.tsx` — associe un nom de cabinet à un mandat via `getMandateByCabinetName`, sans notion de module.
6. `components/MissionAccessGuard.tsx` — contrôle d'accès non sécurisé (champs non vides en `localStorage`, rien côté serveur).
7. `public/documents/mission-001/**` — arborescence câblée sur un seul identifiant de mission.
8. `TrainerSession` par défaut dans `lib/storage.ts` — `moduleName: "Autres referentiels"` en dur.

**Trouvés en complément pendant l'audit :**
9. `components/ClientDossier.tsx` (lignes 4-5) — importe `company` et `mandates` directement, même schéma de couplage que `lib/mandates.ts`.
10. `components/MailInbox.tsx` (ligne 4) et `components/RestitutionPrep.tsx` (ligne 1) — importent `simulation` directement depuis `@/data/mission`.
11. `components/TrainerDashboard.tsx` (ligne 4) — importe `mandates` et `simulation` directement ; `generateSessionCode()` ne préfixe pas par module, ce qui **entre en conflit direct** avec le mécanisme de code de session décrit en §2.3 du cahier des charges (préfixe = id de module).
12. `components/DocumentCenter.tsx` (ligne 20) — `missionId: "mission-001"` en dur, alors que `lib/documents.ts` accepte déjà ce paramètre de façon générique : la généricité existe au niveau du code mais pas au niveau des données/appels.
13. Textes JSX statiques non dérivés des données, à traiter séparément lors de la généralisation car ils ne suivront pas automatiquement un changement de module :
    - `app/page.tsx` : `"ARCANIS Industries"`, `"Equipements industriels"`, badge `"QSE"`.
    - `components/MissionLetterDocument.tsx` : en-tête `"ARCANIS Industries - COMEX"`, mention `"ISO 9001"` dans `closedMissionContext`.
    - `components/ClientDossier.tsx` : `"Certification actuelle: ISO 9001"`, `"Objectif strategique: Diversification vers de nouveaux marches"`.
    - `app/entreprise-cliente/page.tsx`, `app/centre-documentaire/page.tsx` : mentions `"ARCANIS Industries"` dans les descriptions de `SectionHeader`.
14. `lib/types.ts` — `TrainerSession.moduleName` (ligne 20) est une chaîne libre, pas un identifiant lié à un futur `modules-registry.ts` ; c'est ce type qui explique pourquoi `TrainerDashboard` expose aujourd'hui un champ texte plutôt qu'un sélecteur.

---

## 3. Confirmation : aucun backend, aucune base de données, aucune authentification réelle

- `package.json` (racine) : dépendances = `next`, `react`, `react-dom` uniquement. Aucun client de base de données, aucune librairie d'authentification, aucun SDK serveur.
- Aucun dossier `app/api/**`, aucune route serveur, aucun fichier `.env` consommé par du code métier.
- `lib/access.ts` et `lib/storage.ts` opèrent exclusivement sur `window.localStorage`, avec garde `typeof window === "undefined"` — 100 % client.
- `CODEX_RULES.md` interdit explicitement d'introduire backend, authentification ou base de données sans validation explicite : cohérent avec l'état constaté.
- Vérification de non-régression exécutée sur l'état actuel (avant toute modification) :
  - `pnpm install` → OK (350 paquets résolus, aucune erreur).
  - `pnpm typecheck` (`tsc --noEmit -p tsconfig.check.json`) → OK, aucune erreur.
  - `pnpm lint` (`eslint .`) → OK, aucun warning.
  - `pnpm build` (`next build`) → OK, 11 routes générées (9 statiques + 1 dynamique `[slug]` + `/_not-found`), aucune erreur.

Cet état constitue la **référence de non-régression** pour tous les sprints suivants : toute modification devra reproduire un `typecheck`/`lint`/`build` identique en sortie (mêmes routes, aucune nouvelle erreur).

---

## 4. Inventaire des risques de régression

| Risque | Où | Conséquence si mal géré |
|---|---|---|
| Déplacement de `data/company.ts` / `data/mission.ts` vers `data/modules/autres-referentiels/` | 6 composants + `lib/mandates.ts` importent ces fichiers par chemin direct | Si les chemins d'import ne sont pas tous mis à jour dans le même commit (ou si un registre ne réexporte pas les mêmes valeurs), le build casse immédiatement — erreur bruyante, facile à détecter via `pnpm build` |
| Généralisation de `lib/mandates.ts` pour dépendre d'un module actif plutôt que de `data/mission.ts` en dur | `JoinMissionPanel.tsx`, `ClientDossier.tsx`, `DocumentCenter.tsx`, `MissionLetterDocument.tsx`, `MailInbox.tsx` | Si le contexte de module n'est pas correctement propagé, un cabinet pourrait se voir attribuer un mandat du mauvais module — régression silencieuse (pas d'erreur, mauvais contenu affiché) |
| Clés `localStorage` globales (`arcanis:v1:*`) | `lib/storage.ts`, utilisé par `JoinMissionPanel`, `TrainerDashboard`, `ClientDossier`, `DocumentCenter`, `MailInbox`, `MissionLetterDocument`, `SimulationNav`, `MissionAccessGuard` | Sans segmentation par module, une session ouverte sur le module QSEAL13 dans un onglet peut être écrasée par une session "Autres référentiels" ouverte dans un autre onglet du même navigateur — régression silencieuse, difficile à diagnostiquer sans test manuel multi-onglets |
| `missionId: "mission-001"` en dur dans `DocumentCenter.tsx` vs. `documentBasePath` par module (cahier des charges §2.4) | `DocumentCenter.tsx`, `data/document-library.ts` | Si seul un des deux côtés est généralisé, le centre documentaire affiche une liste **vide** plutôt qu'une erreur — régression silencieuse la plus dangereuse du lot, à tester explicitement |
| Préfixe de module dans le code de session (cahier des charges §2.3) vs. `generateSessionCode()` actuel (`AR-XXXX`, sans préfixe) | `TrainerDashboard.tsx`, futur parseur dans `JoinMissionPanel.tsx` | Un code déjà communiqué à des étudiants (`AR-1234`, sans préfixe reconnu) doit impérativement continuer à résoudre vers `autres-referentiels` par défaut ; à tester explicitement avec un ancien-style code |
| Textes JSX statiques (§2, point 13) non liés aux données | `app/page.tsx`, `MissionLetterDocument.tsx`, `ClientDossier.tsx`, 2 pages `SectionHeader` | Même après généralisation complète de la couche de données, ces textes resteront figés sur "ARCANIS Industries" / "ISO 9001" pour tous les modules tant qu'ils ne sont pas explicitement reliés à `company`/`mandate` — à traiter dans le sprint qui construit le contenu QSEAL13 (Sprint 3), pas oublié dans le sprint de généralisation |

### Protocole de test manuel (module « Autres référentiels », à rejouer après chaque sprint)

1. `pnpm install && pnpm dev`, ouvrir `/`. Vérifier le titre "ARCANIS", les deux CTA ("Démarrer une mission", "Pilotage formateur"), et le panneau "Mandat actif" (ARCANIS Industries / Équipements industriels / QSE).
2. Aller sur `/pilotage`. Renseigner promotion/module/entreprise, cliquer "Créer la mission" → un code `AR-XXXX` apparaît. Vérifier que le tableau "Attribution des mandats" liste les 4 cabinets (Horizon / Polaris / Meridian / Nova) avec leurs référentiels respectifs. Déclencher un événement (ex. "Mail DG - Confirmation du mandat") → badge "Déclenché" apparaît.
3. Ouvrir `/rejoindre` sans session existante. Vérifier que le bouton "Rejoindre la mission" reste désactivé tant que code + cabinet ne sont pas remplis. Saisir un nom de cabinet connu (ex. "Cabinet Meridian") → aucun avertissement, mandat EN 9100 déduit. Essayer un nom de cabinet inconnu → le message "Cabinet non reconnu…" doit apparaître et un mandat par défaut doit être attribué.
4. Sans repasser par `/rejoindre`, tenter d'accéder directement à `/lettre-mission` (ou toute étape protégée) dans un nouvel onglet sans session → doit rediriger vers `/rejoindre?access=required` avec le bandeau d'avertissement affiché.
5. Depuis une session valide, ouvrir `/lettre-mission` → vérifier que tous les champs (entreprise, contexte, objectif, mandat attribué, périmètre imposé, enjeux, attentes COMEX, livrable, date) correspondent bien au mandat déduit du cabinet saisi.
6. `/entreprise-cliente` → vérifier la fiche ARCANIS Industries (localisation, secteur, effectif, CA) et que la section "Mandat confié à votre cabinet" reflète le même mandat que la lettre de mission.
7. `/centre-documentaire` → vérifier l'en-tête "Mission 001 / <RÉFÉRENTIEL>", la présence des dossiers par catégorie, et que chaque bouton "Ouvrir" pointe vers un PDF existant sous `public/documents/mission-001/…` sans 404.
8. `/messagerie` → vérifier la présence des 5 messages génériques, du message spécifique au mandat actif, et de l'événement déclenché à l'étape 2 (avec badge "Nouveau").
9. `/restitution` → vérifier les 6 attentes COMEX et l'encart "Préparation hors plateforme".
10. Retour sur `/pilotage`, cliquer "Réinitialiser la simulation locale" → après rafraîchissement de `/messagerie`, l'événement déclenché doit avoir disparu.
11. Ouvrir les DevTools → `localStorage` : vérifier la présence des clés `arcanis:v1:consultant-session`, `arcanis:v1:trainer-session`, `arcanis:v1:triggered-events` avec un contenu JSON cohérent.
12. Relancer `pnpm typecheck`, `pnpm lint`, `pnpm build` → doivent rester verts, avec la même liste de routes qu'en §3.

---

## 5. Conclusion

L'architecture actuelle est saine, 100 % statique, sans backend — conforme à `CODEX_RULES.md`. Le couplage mono-entreprise/mono-mandat est réel mais localisé : il tient essentiellement à des imports directs de `data/company.ts` et `data/mission.ts` dans 8 composants et 1 module `lib`, plus quelques textes JSX statiques à traiter séparément. Aucun de ces points n'est bloquant pour la trajectoire décrite dans le cahier des charges (types `SimulationModule`, `data/modules/*`, `modules-registry.ts`, code de session préfixé).

**Conformément au cahier des charges (§1), ce fichier doit être validé par Charlotte avant tout passage au Sprint 1 (généralisation non régressive).** Aucune modification de code n'a été effectuée à ce stade.
