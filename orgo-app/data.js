const reactions = [
  {
    name: "Oxymercuration–Demercuration",
    chapter: "12",
    regio: "Markovnikov",
    stereo: "Anti",
    reagents: "1) Hg(OAc)2, H2O  2) NaBH4",
    product: "OH & H",
    productType: ["OH", "H"],
    image: "images/oxymercuration.png"
  },
  {
    name: "Hydroboration–Oxidation",
    chapter: "12",
    regio: "Anti-Markovnikov",
    stereo: "Syn",
    reagents: "1) BH3, THF  2) H2O2, NaOH",
    product: "OH & H",
    productType: ["OH", "H"],
    image: "images/hydroboration.png"
  },
  {
    name: "Catalytic Hydrogenation",
    chapter: "12",
    regio: "None",
    stereo: "Syn",
    reagents: "H2 + Pd (or Pt, Ni)",
    product: "H & H",
    productType: ["H"],
    image: "images/hydrogenation.png"
  },
  {
    name: "Vicinal Dihalogenation",
    chapter: "12",
    regio: "None",
    stereo: "Anti",
    reagents: "X2",
    product: "X & X",
    productType: ["X"],
    image: "images/vicinalDihalogenation.png"
  },
  {
    name: "Hydrohalogenation",
    chapter: "12",
    regio: "Markovnikov",
    stereo: "Both",
    reagents: "HX (HBr, HCl, etc)",
    product: "X & H",
    productType: ["H", "X"],
    image: "images/hydrohalogenation.png"
  },
  {
    name: "Acid-Catalyzed Hydration of Alkenes",
    chapter: "12",
    regio: "Markovnikov",
    stereo: "Both",
    reagents: "H3O+, H2O",
    product: "OH & H",
    productType: ["OH", "H"],
    image: "images/acidHydration.png"
  },
  {
    name: "Haloalcohol Formation from Alkenes",
    chapter: "12",
    regio: "Markovnikov",
    stereo: "Anti",
    reagents: "X2 + H2O",
    product: "OH & X",
    productType: ["OH", "X"],
    image: "images/haloalcohol.png"
  },
  {
    name: "Haloether Formation from Alkenes",
    chapter: "12",
    regio: "Markovnikov",
    stereo: "Anti",
    reagents: "X2 + ROH",
    product: "OR & X",
    productType: ["OR", "X"],
    image: "images/haloether.png"
  },
  {
    name: "Epoxide Synthesis",
    chapter: "12",
    regio: "None",
    stereo: "Syn",
    reagents: "mCPBA (or peroxyacid) + CH2Cl2",
    product: "Epoxide",
    productType: ["O"],
    image: "images/epoxideSynthesis.png"
  },
  {
    name: "Anti-Hydroxylation of Alkenes",
    chapter: "12",
    regio: "Anti-Markovnikov",
    stereo: "Syn",
    reagents: "1) mCPBA (or peroxyacid) + CH2Cl2  2) H3O+",
    product: "OH & OH",
    productType: ["OH"],
    image: "images/antiHydroxylation.png"
  },
  {
    name: "Syn Hydroxylation of Alkenes",
    chapter: "12",
    regio: "None",
    stereo: "Syn",
    reagents: "1) OsO4  2) H2S (aq) [Reductive workup]",
    product: "OH & OH",
    productType: ["OH"],
    image: "images/synHydroxylation.png"
  },
  {
    name: "Ozonolysis",
    chapter: "12",
    regio: "None",
    stereo: "None",
    reagents: "1) O3  2) Zn + H2O [Reductive workup]",
    product: "Aldehydes and/or Ketones",
    productType: ["CLEAVAGE"],
    image: "images/ozonolysis.png"
  },
];