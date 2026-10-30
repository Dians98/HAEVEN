# Product

<!-- impeccable:product-schema 1 -->

## Platform

web

## Stack

Next.js (App Router), Tailwind CSS 4, shadcn/ui, Motion pour les animations, pnpm. Choisi par Diano.

Hébergement : OVH (cPanel), déploiement par FTP. Comme on ne sait pas si l'offre fait tourner Node.js, le site est un **export statique** (`output: "export"`) : le formulaire de contact passe par un service externe. Passer plus tard à un hébergement Node.js reste possible sans refaire les pages.

## Users

- **Particuliers et propriétaires** qui veulent aménager ou transformer un intérieur (maison, terrasse, pièce de vie), sur place ou à distance. Ils cherchent quelqu'un de confiance, au goût sûr, qui les accompagne de l'idée au dernier détail.
- **Clients à l'étranger** qui ne peuvent pas recevoir le studio chez eux : tout le projet peut se faire en ligne, de la visioconférence à la visualisation 3D.
- **Curieux et public de l'Univers**, qui viennent pour la photographie, les chansons et les textes du studio.
- **Futurs acheteurs** des créations et pièces de la Boutique.

Ils découvrent le site sur téléphone comme sur ordinateur, en anglais ou en français.

## Product Purpose

Faire connaître HAEVEN, un petit studio créatif « designer dans l'âme », et transformer l'envie d'un visiteur en demande de projet (« Start a project / Démarrer un projet »). Le site réunit trois portes d'entrée : **Services** (design d'intérieur aujourd'hui ; graphisme, UI/UX, mode et événementiel à venir), **Boutique** (créations du studio) et **Univers** (le côté personnel). Réussir, c'est qu'un visiteur comprenne en quelques secondes ce que fait le studio, ait confiance dans son goût, et prenne contact.

## Positioning

- Un studio qui conçoit **avec** le client, en personne ou entièrement en ligne, sans faire de l'international une offre à part.
- Le client **voit son espace en 3D avant que rien ne soit construit ou acheté**.
- Un studio qui a aussi une vie artistique (photo, chansons, écriture) et qui la montre : on n'achète pas seulement un service, on entre dans un univers.

## Operating Context

- Studio basé entre **l'île Maurice et l'Estonie**. Clients sur place, et partout ailleurs à distance.
- Déroulé d'un projet : échanger (en personne ou en visio), concevoir (concept, plans, matériaux), visualiser en 3D, réaliser (sélection, stylisme).
- Site bilingue anglais / français, langue choisie conservée d'une page à l'autre.

## Capabilities and Constraints

- Pages conçues : Accueil et Services. Pages à concevoir : Boutique, Portfolio, Univers, À propos.
- Un nouveau service s'ajoute comme une page sous Services, sans refaire le reste.
- **La Boutique deviendra un vrai e-commerce**. Plateforme, paiement, base de données et comptes clients restent à définir le moment venu. D'ici là, ni base de données ni authentification.
- Formulaire « Start a project » prévu. Le service d'envoi et l'adresse de destination ne sont pas encore choisis.
- Le terme « e-design » n'apparaît pas dans le texte visible (il est permis dans les métadonnées).
- La photographie reste dans Univers tant qu'elle n'est pas proposée en prestation.

## Brand Commitments

- Nom : **HAEVEN**, écrit en capitales très espacées à côté du logo.
- Logo : deux courbes fluides en forme de H. Bleu poudré sur fond clair, ivoire sur fond bleu poudré.
- Voix : chaleureuse, simple, sincère, à la première personne du pluriel (« we feel most alive when we design… »). Pas de jargon ni de superlatifs commerciaux.
- Identité visuelle fixée par `HAEVEN-site.md` et les maquettes `Home-html/Main.dc.html` et `Services-html/Services.dc.html` : à embellir, pas à remplacer.
- Les petits titres de section et la numérotation des cartes font partie de l'identité. Décision de Diano : les garder et les embellir.
- Animations voulues vivantes et interactives, mais **jamais futuristes**.
- Un seul bouton principal par zone : « Start a project / Démarrer un projet ».
- La phrase « With people as our top priority, we do things with care, love and passion. » est réservée à la page À propos.

## Evidence on Hand

- Textes EN / FR réels de l'Accueil et de Services : `HAEVEN-site.md` et les dictionnaires `D.en` / `D.fr` des maquettes.
- Logo : `Home-html/assets/430a3b941f6ddb4546d2be35dced51a9.png`, blanc sur transparent, à utiliser comme masque CSS.
- Rendu 3D d'une terrasse couverte : `Services-html/assets/5a3c577cfde49395183a46fdddcfe7ce.jpg`, 1125 px de large (version de 2400 px ou plus à demander).
- **À venir, fournis par le client** : photos et rendus de projets, coordonnées de contact, contenus Univers (photos, chansons, textes).
- **Absents, à ne jamais inventer** : avis ou témoignages de clients, tarifs, délais, chiffres, références de clients, noms de projets et lieux (les textes entre crochets restent des emplacements).

## Product Principles

1. **Le goût se prouve par le soin.** Chaque détail du site montre la qualité qu'un client peut attendre pour son intérieur.
2. **La distance n'est pas un obstacle.** Partout, le site rappelle que tout peut se faire en ligne, sans en faire une offre au rabais.
3. **Une seule invitation claire.** Toute page mène à « Start a project » sans multiplier les appels à l'action.
4. **Grandir sans tout refaire.** Nouveaux services, boutique et univers s'ajoutent comme des pièces d'une même maison.
5. **Vrai ou provisoire, jamais inventé.** Le contenu manquant reste visiblement provisoire.

## Accessibility & Inclusion

WCAG 2.2 AA. Toutes les animations respectent `prefers-reduced-motion`. Cibles tactiles de 44 px. Contraste à surveiller : le bleu poudré sur ivoire est réservé aux grands éléments.
