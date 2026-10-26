# HAEVEN — Site web (maquette)

Document de référence du site HAEVEN, tiré de la maquette : structure, textes bilingues (anglais / français) et identité visuelle. Deux pages sont conçues pour l'instant : **Accueil** et **Services**.

---

## 1. Identité visuelle

### Couleurs

| Rôle | Nom | Code |
|---|---|---|
| Couleur signature | Bleu poudré | `#7CA2B5` |
| Accent profond | Bleu-gris profond | `#3A5665` |
| Fond de page, logo sur fond bleu | Ivoire chaud | `#F5F3EF` |
| Texte principal | Anthracite | `#1D1F1E` |
| Texte secondaire | Gris foncé | `#3A3D3B` |
| Étiquettes, menu | Gris moyen | `#5A5D5B` |
| Teintes de bleu (aplats, images provisoires) | Bleus clairs | `#B3CBD8`, `#C9DAE3`, `#DCE7ED`, `#9DBBCB` |
| Variante sur fond bleu-gris | Bleu-gris moyen | `#4A6677` |
| Survol des boutons | Bleu poudré foncé / bleu-gris foncé | `#6B94A8` / `#2C4350` |
| Filets et bordures | Beige clair | `#DDD9D1`, `#DCDCD7` |

Règle du logo : **bleu poudré** sur fond clair, **ivoire chaud** sur fond bleu poudré.

### Typographie

- **Titres** : Cormorant Garamond (serif), graisse 400, souvent avec un mot en *italique* dans la couleur d'accent. Noms de projets et sous-titres en graisse 500.
- **Texte courant, menus, boutons** : DM Sans (sans-serif), 17 px, interligne 1,6.
- **Mot « HAEVEN »** à côté du logo : Cormorant Garamond 500, capitales très espacées.
- **Petits titres de section** : DM Sans 13 px, capitales, espacement large, couleur `#3A5665`.

### Logo

Deux courbes fluides en forme de H stylisé. Utilisé en en-tête (avec le mot HAEVEN), en pied de page et sur le bandeau bleu poudré final (en ivoire).

### Style général

Épuré, beaucoup d'espace blanc, grille simple, peu d'ornements. Un seul bouton principal par zone : « Start a project / Démarrer un projet ».

### Effet spécial

Le bandeau « Welcome to HAEVEN » de l'accueil (fond bleu-gris profond, cadre fin) scintille : huit petites étoiles qui apparaissent et disparaissent doucement, et un reflet lumineux qui traverse le mot *HAEVEN*. Les animations sont désactivées pour les visiteurs qui ont réglé leur appareil sur « réduire les animations ».

---

## 2. Structure du site

```
HAEVEN
├── Accueil            (conçue)
├── Services           (conçue)
│     ├── Interior design        (service principal)
│     └── À venir : Graphic design, UI/UX design, Fashion design, Event design
├── Shop / Boutique    (à concevoir)
├── Portfolio          (à concevoir)
├── Universe / Univers (à concevoir : photographie, chansons, écriture)
├── About / À propos   (à concevoir)
└── Contact            (ancre en bas des pages)
```

**Principe** : un seul site organisé en trois univers (Services, Boutique, Univers). Un nouveau service s'ajoute en créant une page sous Services, sans refaire le reste. La photographie reste dans Univers tant qu'elle n'est pas proposée en prestation.

---

## 3. Éléments communs à toutes les pages

### En-tête

Logo + HAEVEN à gauche. À droite : menu, bouton « Start a project », sélecteur de langue **EN / FR**.

| Élément | EN | FR |
|---|---|---|
| Menu 1 | Services | Services |
| Menu 2 | Shop | Boutique |
| Menu 3 | Portfolio | Portfolio |
| Menu 4 | Universe | Univers |
| Menu 5 | About | À propos |
| Menu 6 | Contact | Contact |
| Bouton | Start a project | Démarrer un projet |

### Pied de page

Logo + HAEVEN, liens (Services, Shop / Boutique, Universe / Univers, Contact), « © 2026 HAEVEN ».

### Bandeau final (bleu poudré)

Présent en bas des pages : logo ivoire, titre, une phrase, bouton foncé « Start a project ».

---

## 4. Page d'accueil

### 4.1 Entrée

| | EN | FR |
|---|---|---|
| Accroche (petites capitales) | All about art, design and creativity. | Tout sur l'art, le design et la créativité. |
| Titre | In Haeven, we are *designers at heart.* | Chez Haeven, nous sommes *designers dans l'âme.* |
| Texte | We feel most alive when we design, transform and bring spaces and ideas to life. | Nous nous sentons le plus vivants lorsque nous concevons, transformons et donnons vie à des espaces et à des idées. |

### 4.2 Bandeau d'accueil (fond bleu-gris profond, effet étincelant)

| EN | FR |
|---|---|
| Welcome to *HAEVEN* | Bienvenue chez *HAEVEN* |

Sous le bandeau, centrés :

| | EN | FR |
|---|---|---|
| Bouton | Start a project | Démarrer un projet |
| Lien | Explore our world | Découvrir notre univers |

### 4.3 Notre monde — trois cartes

| | EN | FR |
|---|---|---|
| Petit titre | Our world | Notre monde |
| Titre | Three ways to come in. | Trois façons d'entrer. |

| Carte | EN | FR |
|---|---|---|
| 01 | **Services** — Creative services, in person or online. Starting with interior design, with more on the way. Lien : *Discover services* | **Services** — Des services créatifs, en personne ou en ligne. À commencer par le design d'intérieur, d'autres arrivent. Lien : *Découvrir les services* |
| 02 | **Shop** — Our creations and pieces, made with love and ready to live in your space. Lien : *Visit the shop* | **Boutique** — Nos créations et nos pièces, faites avec amour, prêtes à habiter votre espace. Lien : *Visiter la boutique* |
| 03 | **Universe** — Photography, songs and writing. The personal side of Haeven. Lien : *Step inside* | **Univers** — Photographie, chansons et écriture. Le côté personnel de Haeven. Lien : *Entrer* |

### 4.4 Réalisations

| | EN | FR |
|---|---|---|
| Petit titre | Selected work | Réalisations |
| Titre | Interior design | Design d'intérieur |
| Lien | View the full portfolio | Voir tout le portfolio |

Quatre projets, chacun avec une image (format 4:5), un nom `[PROJECT NAME]` / `[NOM DU PROJET]` et la mention « Interior design · [LOCATION] » / « Design d'intérieur · [LIEU] ».

### 4.5 Univers (section à fond bleu-gris profond, texte ivoire)

| | EN | FR |
|---|---|---|
| Petit titre | Universe | Univers |
| Titre | Art, songs and words. | L'art, les chansons et les mots. |
| Texte | Photography, songs and writing from the personal side of Haeven. | Photographie, chansons et écriture, le côté personnel de Haeven. |
| Lien | Step inside | Entrer |

Trois vignettes provisoires : `[PHOTO SERIES]` / `[SÉRIE PHOTO]`, `[SONG TITLE]` / `[TITRE DE CHANSON]`, `[TEXT TITLE]` / `[TITRE DU TEXTE]`.

### 4.6 Bandeau final (bleu poudré)

| | EN | FR |
|---|---|---|
| Titre | Have an idea to transform? | Une idée à transformer ? |
| Texte | Tell us about your space or your project, and let's create it together. | Parlez-nous de votre espace ou de votre projet, et créons-le ensemble. |
| Bouton | Start a project | Démarrer un projet |

---

## 5. Page Services

### 5.1 Entrée

| | EN | FR |
|---|---|---|
| Petit titre | Services | Services |
| Titre | Interior design, *in person or online.* | Du design d'intérieur, *en personne ou en ligne.* |
| Texte | Everything can be done remotely, from the first idea to the final detail. | Tout peut se faire à distance, de la première idée au dernier détail. |
| Bouton | Start a project | Démarrer un projet |
| Lien | See how it works | Voir comment ça marche |

### 5.2 Service principal : Interior design

Image à gauche (rendu 3D d'une terrasse couverte avec canapés en teck, palmier et piscine), texte à droite.

| | EN | FR |
|---|---|---|
| Étiquette | Available worldwide | Disponible dans le monde entier |
| Titre | Interior design | Design d'intérieur |
| Texte | Whatever the space, we design it with you, in person or entirely online, from the first concept to the final touches. | Quel que soit l'espace, nous le concevons avec vous, en personne ou entièrement en ligne, du premier concept aux dernières touches. |
| Point 1 | Concept and space planning | Concept et aménagement de l'espace |
| Point 2 | 3D visualisation | Visualisation 3D |
| Point 3 | Materials and furniture | Matériaux et mobilier |
| Point 4 | Styling and finishing touches | Stylisme et finitions |
| Lien | Ask for a quote | Demander un devis |

> Choix de positionnement : le local et l'international ne sont pas séparés en deux offres. Le terme « e-design » n'est pas affiché ; il pourra être utilisé dans les textes invisibles pour le référencement.

### 5.3 Comment ça marche

| | EN | FR |
|---|---|---|
| Petit titre | Our process | Notre méthode |
| Titre | How it works | Comment ça marche |

| Étape | EN | FR |
|---|---|---|
| 01 | **Talk** — We listen to your space, your needs and your taste, in person or by video call. | **Échanger** — Nous écoutons votre espace, vos besoins et vos goûts, en personne ou en visioconférence. |
| 02 | **Design** — We create the concept, the layouts and the materials. | **Concevoir** — Nous créons le concept, les plans et les matériaux. |
| 03 | **Visualise** — You see your space in 3D before anything is built or bought. | **Visualiser** — Vous voyez votre espace en 3D avant que rien ne soit construit ou acheté. |
| 04 | **Deliver** — We guide the final details, from sourcing to styling. | **Réaliser** — Nous vous guidons dans les derniers détails, de la sélection au stylisme. |

### 5.4 Et bien plus (services à venir)

| | EN | FR |
|---|---|---|
| Petit titre | And more | Et bien plus |
| Titre | Growing with every project. | Nous grandissons à chaque projet. |
| Texte | Our practice keeps expanding. These services are on their way. | Notre activité continue de s'étendre. Ces services arrivent bientôt. |
| Lien | Tell us what you need | Dites-nous ce qu'il vous faut |

| Service | EN | FR | Mention |
|---|---|---|---|
| 1 | Graphic design | Design graphique | Coming soon / Bientôt |
| 2 | UI/UX design | Design UI/UX | Coming soon / Bientôt |
| 3 | Fashion design | Design de mode | Coming soon / Bientôt |
| 4 | Event design | Design événementiel | Coming soon / Bientôt |

### 5.5 Projets récents

| | EN | FR |
|---|---|---|
| Petit titre | Selected work | Réalisations |
| Titre | Recent projects | Projets récents |
| Lien | View the full portfolio | Voir tout le portfolio |

Trois projets : le premier avec le rendu 3D de la terrasse (« Interior design · 3D visualisation » / « Design d'intérieur · visualisation 3D »), les deux autres avec images provisoires (« Interior design · [LOCATION] » / « Design d'intérieur · [LIEU] »).

### 5.6 Bandeau final (bleu poudré)

| | EN | FR |
|---|---|---|
| Titre | Let's design your space. | Concevons votre espace. |
| Texte | Tell us about your project and we will get back to you. | Parlez-nous de votre projet et nous reviendrons vers vous. |
| Bouton | Start a project | Démarrer un projet |

---

## 6. À compléter

- **Images** : les visuels des cartes, des réalisations et de la section Univers sont des aplats de couleur provisoires. Seul le rendu 3D de la terrasse est une vraie image (résolution d'environ 1125 px de large : prévoir la version d'origine en 2400 px ou plus).
- **Textes provisoires** : tout ce qui est entre crochets (`[PROJECT NAME]`, `[LOCATION]`, `[SONG TITLE]`…) est à remplacer.
- **Pages à concevoir** : Boutique, Portfolio, Univers, À propos. La phrase « With people as our top priority, we do things with care, love and passion. » est réservée à la page À propos.
- **Liens** : seuls le lien « Services » du menu et la carte Services de l'accueil mènent à une autre page. Les autres liens sont des emplacements.
- **Contact** : le bouton « Start a project » mène pour l'instant à l'ancre du bandeau final. Il faudra y associer un formulaire ou une adresse.
- **Langue** : le sélecteur EN / FR fonctionne dans la maquette, mais il se réinitialise d'une page à l'autre ; sur le vrai site, le choix sera conservé.
- **Contenu non vérifié** : aucun tarif, délai ni coordonnée n'a été inventé ; tout reste à fournir.
