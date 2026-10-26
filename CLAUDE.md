# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Projet

**HAEVEN** : site d'un studio créatif (design d'intérieur d'abord ; graphisme, UI/UX, mode et événementiel à venir). Un seul site, **bilingue anglais / français**, organisé en trois univers : **Services**, **Boutique (Shop)**, **Univers** (photo, chansons, écriture). Interlocuteur : Diano. Réponses et commentaires de code en français.

**État actuel** : le projet Next.js n'est pas encore créé. Le dossier ne contient que les références de design ci-dessous et la configuration Claude (`.claude/`). Ce n'est pas un dépôt git.

## Sources de vérité

1. **`HAEVEN-site.md`** : structure du site, textes EN / FR, identité visuelle, choix du client, liste « À compléter ». Il l'emporte en cas de désaccord.
2. **Maquettes exportées** `Home-html/Main.dc.html` et `Services-html/Services.dc.html` : ce sont des références, pas du code à reprendre.
   - Les valeurs exactes (couleurs, tailles en `clamp()`, espacements, largeur max 1280 px, cibles de 44 px) sont dans les `style="…"` en ligne et le bloc `<helmet><style>`.
   - Les **textes réels bilingues** sont dans l'objet `D.en` / `D.fr` du `<script type="text/x-dc">` en bas de fichier : à reprendre tels quels dans les dictionnaires.
   - `support.js` et `vendor/` ne servent qu'à afficher la maquette : à ignorer.
   - Pour les voir : `python -m http.server` dans le dossier, puis ouvrir le `.dc.html` (bloqué en `file://`).
   - La proposition peut être améliorée (mise en page, animations), mais le contenu est réel.
3. **Assets** (`*/assets/`) :
   - `430a3b941f6ddb4546d2be35dced51a9.png` est le **logo**, blanc sur fond transparent, utilisé comme masque CSS (`mask` + `background-color: currentColor`) pour le teindre en bleu poudré ou en ivoire.
   - `5a3c577cfde49395183a46fdddcfe7ce.jpg` est le rendu 3D de la terrasse (1125 px de large ; demander la version de 2400 px ou plus).

Écarts connus entre maquettes et document :
- `Services.dc.html` contient encore des clés `s2*` pour une offre « E-design » qui n'est plus affichée. Le client a décidé de ne pas montrer « e-design » dans le texte visible (le terme est permis dans les métadonnées SEO).
- `heroTitle` (Home) n'est pas utilisé.

## Stack prévue

Next.js (App Router, Server Actions), Tailwind CSS 4, shadcn/ui, **Motion** (`motion/react`) pour les animations, **pnpm**. Une fois le projet créé, les commandes seront celles de `package.json` (`pnpm dev`, `pnpm build`, `pnpm lint`) ; `pnpm dlx shadcn@latest add <composant>` pour ajouter un composant. Il n'y a pas encore de tests.

## Architecture visée

- **Bilingue par l'URL** : routes `src/app/[lang]/…` (`en`, `fr`). `proxy.ts` (ou `middleware.ts` selon la version de Next) redirige `/` selon le cookie de langue puis `Accept-Language`. Tous les textes viennent des dictionnaires, jamais écrits en dur. Le sélecteur EN / FR garde la même page, contrairement à la maquette où la langue se réinitialise.
- **Charte en tokens** dans `src/app/globals.css` (bleu poudré `#7CA2B5`, bleu-gris profond `#3A5665`, ivoire `#F5F3EF`, anthracite `#1D1F1E`…, voir `HAEVEN-site.md` §1). Pas de couleur en dur dans les composants. Polices Cormorant Garamond (titres) et DM Sans (texte) via `next/font`.
- **Server Components par défaut**. Les animations vivent dans de petits composants client.
- **Contenus** (projets, univers, services à venir) en données typées côté serveur, bilingues.
- **Formulaire « Start a project »** : Server Action validée par zod, avec anti-spam. Service d'envoi et adresse de destination pas encore choisis.
- **Boutique** : elle deviendra un **vrai e-commerce**. Plateforme, paiement, base de données et comptes clients seront définis le moment venu. D'ici là, aucune base ni authentification. La structure doit permettre d'ajouter la boutique sans refaire le reste du site, de la même façon qu'un nouveau service s'ajoute comme une page sous Services.

## Direction : animé et interactif, pas futuriste

Esprit maison de décoration haut de gamme : mouvements lents et fluides (0,4 à 0,9 s, ease-out doux, déplacements de 24 px au plus).
- **Autorisé** : apparitions au défilement, révélation des titres, zoom lent sur les images au survol, parallaxe légère, en-tête qui se réduit au défilement, ligne qui relie les étapes « How it works ».
- **Moment fort de l'accueil** : le bandeau « Welcome to HAEVEN », avec ses 8 étoiles `twinkle` et le reflet `shine` sur *HAEVEN* (valeurs dans `Main.dc.html`).
- **Interdits** : néon, 3D, particules, curseur personnalisé, rebond, glitch, scroll-jacking.
- `prefers-reduced-motion` coupe tout, et le contenu reste visible sans JavaScript.

## Règles du client

- Un seul bouton principal par zone : « Start a project / Démarrer un projet ».
- Logo en bleu poudré sur fond clair, en ivoire sur fond bleu poudré.
- Aucun tarif, délai, coordonnée ou avis inventé. Les textes entre crochets (`[PROJECT NAME]`, `[LIEU]`…) restent visibles jusqu'à leur remplacement. Les images manquantes sont des aplats de bleu clair aux bonnes proportions.
- « With people as our top priority, we do things with care, love and passion. » est réservé à la page À propos.

## Agents et skill du projet (`.claude/`)

Enchaînement habituel :
1. `planner` découpe la tâche.
2. `backend-builder` (mode Construire) prépare le serveur.
3. `frontend-builder` fait l'écran.
4. `backend-builder` (mode Relire) vérifie le branchement.
5. `security-reviewer` audite avant la mise en ligne (local uniquement, il ne corrige rien).

Le skill **impeccable** (`.claude/skills/impeccable/`, sous Windows `scripts/impeccable.cmd`) est la méthode de design. Son `reference/craft-floor.md` interdit les petits titres au-dessus d'un titre et la numérotation 01 / 02 / 03. **Décision de Diano : on les garde, mais embellis**. Ils font partie de l'identité HAEVEN : ce n'est pas une habitude par défaut à retirer.

## Pièges

- Écrire les fichiers avec Write / Edit, jamais PowerShell `Set-Content` : il ajoute un BOM UTF-8 qui casse la compilation CSS.
- Aucune commande git qui modifie l'historique sans demande de Diano.
