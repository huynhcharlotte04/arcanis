# ARCANIS - Engineering Rules

## Configuration

Ne jamais modifier les fichiers suivants sauf demande explicite :

- next.config.ts
- package.json
- tsconfig.json
- eslint.config.mjs
- .gitignore

Le fichier next.config.ts doit toujours rester :

```ts
import type { NextConfig } from "next";

const nextConfig: NextConfig = {};

export default nextConfig;
```

Ne jamais ajouter :

- distDir
- output
- export
- configuration Vercel spécifique

Le projet doit rester compatible avec un déploiement Vercel standard.

## Philosophie

Ne jamais modifier :

- le parcours utilisateur
- la navigation
- le design
- la structure métier

sans demande explicite.

Chaque sprint doit uniquement modifier le périmètre demandé.

## Développement

Toujours privilégier :

- composants réutilisables
- TypeScript strict
- code lisible
- simplicité

Ne jamais introduire :

- backend
- authentification
- base de données

sans validation explicite.
