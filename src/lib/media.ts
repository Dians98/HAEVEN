// Photos de l'accueil (Unsplash, voir docs/credits-photos.md). Une entrée vide laisse l'aplat de bleu.
export interface Photo {
  src: string;
  width: number;
  height: number;
  position: string;
}

const p = (file: string, width: number, height: number, position: string): Photo => ({
  src: `/images/photos/${file}`,
  width,
  height,
  position,
});

export const homeMedia: {
  terrasse: Photo;
  shop?: Photo;
  universe?: Photo;
  projects: (Photo | undefined)[];
  vignettes: (Photo | undefined)[];
} = {
  terrasse: { src: "/images/terrasse-3d.jpg", width: 1125, height: 900, position: "50% 60%" },
  shop: p("boutique-ceramiques.jpg", 1400, 2100, "50% 70%"),
  universe: p("univers-lagon.jpg", 1400, 1867, "50% 50%"),
  projects: [
    p("projet-salon-lumineux.jpg", 1200, 977, "50% 50%"),
    p("projet-veranda-rotin.jpg", 1200, 1800, "50% 60%"),
    p("projet-chambre-voilage.jpg", 1200, 1600, "50% 55%"),
    p("projet-cuisine-vue.jpg", 1600, 982, "35% 50%"),
  ],
  vignettes: [
    p("univers-photo-plage.jpg", 1200, 1800, "50% 45%"),
    p("univers-chanson-guitare.jpg", 1200, 788, "60% 50%"),
    p("univers-texte-carnet.jpg", 1200, 1600, "50% 40%"),
  ],
};
