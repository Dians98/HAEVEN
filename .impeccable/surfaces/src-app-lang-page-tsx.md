---
version: 1
slug: "src-app-lang-page-tsx"
primary_target: "src/app/[lang]/page.tsx"
related_targets: []
---

# Accueil (`/[lang]`)

## Mode
Persuade : le visiteur doit sentir le goût du studio, comprendre qu'il fait du design d'intérieur (sur place ou à distance), puis cliquer « Start a project ».

## Composition validée
**« Bienvenue d'abord »**, choisie par Diano le 2026-10-26.
- Maquette : `.impeccable/mocks/decision/structure-welcome.html`
- Captures : `structure-welcome.png`, `structure-welcome-desktop-full.png`, `structure-welcome-mobile.png`

Ordre des sections :
1. **Accueil plein écran** : fond bleu-gris profond sur toute la hauteur, cadre fin ivoire en retrait, en-tête transparent en ivoire par-dessus. Huit étoiles qui scintillent, petit titre « All about art, design and creativity. », « Welcome to *HAEVEN* » géant avec le reflet sur *HAEVEN*, boutons « Start a project » et « Explore our world », indicateur de défilement discret en bas. C'est **le moment fort** de la page.
2. **Phrase d'accroche** (`h1`) : « In Haeven, we are *designers at heart.* » en très grand à gauche, révélée mot par mot. À droite : la phrase d'introduction et un lien « Start a project ».
3. **Trois façons d'entrer** : trois panneaux côte à côte (Services avec le rendu de la terrasse, Boutique en bleu clair, Univers en bleu-gris). Le panneau survolé s'élargit et dévoile son texte et son lien ; sans survol, Services est ouvert. Sur mobile, les panneaux sont empilés, tous ouverts.
4. **Réalisations** : rangée de projets 4:5 qu'on fait défiler horizontalement (accrochage par carte), alignée sur la grille à gauche.
5. **Univers** : section bleu-gris, trois vignettes 4:3.
6. **Bandeau final** bleu poudré, logo ivoire, « Have an idea to transform? ».
7. **Pied de page**.

## À ne pas prendre au pied de la lettre
- Les aplats de bleu sont des emplacements d'images, pas un choix graphique.
- Les captures sont prises avec « réduire les animations » : en vrai, tout apparaît en mouvement.
- Le dégradé sombre sur la photo de Services ne sert qu'à la lisibilité du texte ; à ajuster selon les vraies images.

## Mouvement
- Le bandeau plein écran est le seul moment fort : le scintillement et le reflet ne se répètent pas ailleurs.
- Ailleurs : apparitions douces au défilement (fondu + 20 px), révélation des mots du `h1`, filet du petit titre qui se dessine, panneaux qui s'ouvrent, zoom lent des images au survol.
- Courbe `cubic-bezier(0.22, 1, 0.36, 1)`, de 0,6 à 1,2 s. Avec « réduire les animations », tout est visible immédiatement et le scintillement s'arrête.

## Points ouverts
- Images réelles de Boutique, Univers et des projets à fournir.
- Le premier écran ne dit pas encore « design d'intérieur » : le compenser par le titre de la page et la description (SEO), et par la phrase d'accroche juste en dessous.
