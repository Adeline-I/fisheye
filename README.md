# FishEye

Prototype du site FishEye, une plateforme de photographes freelances.

## Prérequis

- Node.js 24
- pnpm

## Installation

1. Cloner le projet et installer les dépendances :

```bash
   git clone https://github.com/Adeline-I/fisheye.git
   cd fisheye
   pnpm install
```

2. Créer le fichier `.env` à partir du modèle :

```bash
   cp .env.example .env
```

Sous Windows (PowerShell) : `Copy-Item .env.example .env`

3. Créer et remplir la base de données :

```bash
   pnpm db:setup
```

Cette commande peut être relancée à tout moment pour remettre la base dans son état d'origine.
Arrêter le serveur de développement avant de la relancer.

## Lancement

```bash
pnpm dev
```

Le site est ensuite accessible sur http://localhost:3000.

## Commandes utiles

| Commande        | Rôle                                    |
| --------------- | --------------------------------------- |
| `pnpm dev`      | Lance le site en développement          |
| `pnpm build`    | Prépare la version de production        |
| `pnpm start`    | Lance la version de production          |
| `pnpm lint`     | Vérifie la qualité du code              |
| `pnpm db:setup` | Crée ou remet à zéro la base de données |

## En cas de problème

Si `pnpm install` signale des paquets bloqués (« Ignored build scripts »), lancer `pnpm approve-builds` et les autoriser.
