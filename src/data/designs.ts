const AARI_1 = "/images/aari/Aari_1.png";
const AARI_2 = "/images/aari/Aari_2.png";
const AARI_3 = "/images/aari/Aari_3.png";

const BLOUSE_1 = "/images/blouse/Blouse_1.png";
const BLOUSE_2 = "/images/blouse/Blouse_2.png";
const BLOUSE_3 = "/images/blouse/Blouse_3.png";
const BLOUSE_4 = "/images/blouse/Blouse_4.png";
const BLOUSE_5 = "/images/blouse/Blouse_5.png";
const BLOUSE_6 = "/images/blouse/Blouse_6.png";
const BLOUSE_7 = "/images/blouse/Blouse_7.png";
const BLOUSE_8 = "/images/blouse/Blouse_8.png";
const BLOUSE_9 = "/images/blouse/Blouse_9.png";
const BLOUSE_10 = "/images/blouse/Blouse_10.png";
const BLOUSE_11 = "/images/blouse/Blouse_11.png";
const BLOUSE_12 = "/images/blouse/Blouse_12.png";
const BLOUSE_13 = "/images/blouse/Blouse_13.png";
const BLOUSE_14 = "/images/blouse/Blouse_14.png";
const BLOUSE_15 = "/images/blouse/Blouse_15.png";
const BLOUSE_16 = "/images/blouse/Blouse_16.png";
const BLOUSE_17 = "/images/blouse/Blouse_17.png";
const BLOUSE_18 = "/images/blouse/Blouse_18.png";
const BLOUSE_19 = "/images/blouse/Blouse_19.png";
const BLOUSE_20 = "/images/blouse/Blouse_20.png";
const BLOUSE_21 = "/images/blouse/Blouse_21.png";

const FROCK_1 = "/images/frock/Frock_1.png";
const FROCK_2 = "/images/frock/Frock_2.png";
const FROCK_3 = "/images/frock/Frock_3.png";
const FROCK_4 = "/images/frock/Frock_4.png";

const HAND_1 = "/images/hand-design/Hand_1.png";
const HAND_2 = "/images/hand-design/Hand_2.png";
const HAND_3 = "/images/hand-design/Hand_3.png";
const HAND_4 = "/images/hand-design/Hand_4.png";
const HAND_5 = "/images/hand-design/Hand_5.png";

const HALF_SAREE_1 = "/images/half-saree/Half_Saree_1.png";
const HALF_SAREE_2 = "/images/half-saree/Half_Saree_2.png";
const HALF_SAREE_3 = "/images/half-saree/Half_Saree_3.png";
const HALF_SAREE_4 = "/images/half-saree/Half_Saree_4.png";
const HALF_SAREE_5 = "/images/half-saree/Half_Saree_5.png";
const HALF_SAREE_6 = "/images/half-saree/Half_Saree_6.png";
const HALF_SAREE_7 = "/images/half-saree/Half_Saree_7.png";

const PAVADAI_SATTAI_1 = "/images/pavadai-sattai/Pavadai_Sattai_1.png";
const PAVADAI_SATTAI_2 = "/images/pavadai-sattai/Pavadai_Sattai_2.png";
const PAVADAI_SATTAI_3 = "/images/pavadai-sattai/Pavadai_Sattai_3.png";
const PAVADAI_SATTAI_4 = "/images/pavadai-sattai/Pavadai_Sattai_4.png";

export type CategoryKey =
  | "PavadaiSattai"
  | "HalfSaree"
  | "Frock"
  | "AariBlouse"
  | "DesignerBlouse"
  | "HandDesign";

export interface Design {
  id: string;
  code: string;
  category: CategoryKey;
  categoryLabel: string;
  title: string;
  image: string;
  images: string[];
  description: string;
  featured?: boolean;
}

export const CATEGORY_LABELS: Record<CategoryKey, string> = {
  PavadaiSattai: "Pavadai Sattai",
  HalfSaree: "Half Saree",
  Frock: "Frock",
  AariBlouse: "Aari Blouse",
  DesignerBlouse: "Designer Blouse",
  HandDesign: "Hand Design",
};

export const FILTERS: { key: "All" | CategoryKey; label: string }[] = [
  { key: "All", label: "All" },
  { key: "PavadaiSattai", label: "Pavadai Sattai" },
  { key: "HalfSaree", label: "Half Saree" },
  { key: "Frock", label: "Frock" },
  { key: "AariBlouse", label: "Aari Blouse" },
  { key: "DesignerBlouse", label: "Designer Blouse" },
  { key: "HandDesign", label: "Hand Design" },
];

export const designs: Design[] = [
  {
    id: "PS001",
    code: "PS001",
    category: "PavadaiSattai",
    categoryLabel: CATEGORY_LABELS.PavadaiSattai,
    title: "Green Border Pavadai Sattai",
    image: PAVADAI_SATTAI_1,
    images: [PAVADAI_SATTAI_1],
    description:
      "A rich green pavadai sattai with contrast purple woven borders, puff sleeves, and festive traditional finishing for elegant kidswear.",
    featured: true,
  },
  {
    id: "PS002",
    code: "PS002",
    category: "PavadaiSattai",
    categoryLabel: CATEGORY_LABELS.PavadaiSattai,
    title: "Temple Green Pavadai Sattai",
    image: PAVADAI_SATTAI_2,
    images: [PAVADAI_SATTAI_2],
    description:
      "A bright green pavadai sattai with yellow neckline detailing and broad gold zari border, tailored for festive and function wear.",
    featured: true,
  },
  {
    id: "PS003",
    code: "PS003",
    category: "PavadaiSattai",
    categoryLabel: CATEGORY_LABELS.PavadaiSattai,
    title: "Sky Blue Pavadai Sattai",
    image: PAVADAI_SATTAI_3,
    images: [PAVADAI_SATTAI_3],
    description:
      "A sky blue pavadai sattai with royal blue panel work, gathered neckline styling, and rich woven skirt border for standout traditional charm.",
  },
  {
    id: "PS004",
    code: "PS004",
    category: "PavadaiSattai",
    categoryLabel: CATEGORY_LABELS.PavadaiSattai,
    title: "Royal Purple Pavadai Sattai",
    image: PAVADAI_SATTAI_4,
    images: [PAVADAI_SATTAI_4],
    description:
      "A regal purple pavadai sattai with yellow yoke styling, puff sleeves, and ornate gold border work crafted for festive celebrations.",
  },
  {
    id: "HS001",
    code: "HS001",
    category: "HalfSaree",
    categoryLabel: CATEGORY_LABELS.HalfSaree,
    title: "Pink Wedding Half Saree",
    image: HALF_SAREE_1,
    images: [HALF_SAREE_1],
    description:
      "A graceful pink half saree with rich gold zari borders and classic festive drape, styled for wedding and family function wear.",
    featured: true,
  },
  {
    id: "HS002",
    code: "HS002",
    category: "HalfSaree",
    categoryLabel: CATEGORY_LABELS.HalfSaree,
    title: "Teal Purple Half Saree",
    image: HALF_SAREE_2,
    images: [HALF_SAREE_2],
    description:
      "A vibrant teal and purple half saree with shimmering gold border detailing, tailored for a bold traditional occasion look.",
    featured: true,
  },
  {
    id: "HS003",
    code: "HS003",
    category: "HalfSaree",
    categoryLabel: CATEGORY_LABELS.HalfSaree,
    title: "Sky Blue Contrast Half Saree",
    image: HALF_SAREE_3,
    images: [HALF_SAREE_3],
    description:
      "A sky blue half saree paired with a magenta drape and wide zari border, giving a bright festive finish for special events.",
  },
  {
    id: "HS004",
    code: "HS004",
    category: "HalfSaree",
    categoryLabel: CATEGORY_LABELS.HalfSaree,
    title: "Ivory Green Half Saree",
    image: HALF_SAREE_4,
    images: [HALF_SAREE_4],
    description:
      "An ivory and deep green half saree with elegant motifs, tassel accents, and a rich border for timeless traditional styling.",
  },
  {
    id: "HS005",
    code: "HS005",
    category: "HalfSaree",
    categoryLabel: CATEGORY_LABELS.HalfSaree,
    title: "Black Silver Half Saree",
    image: HALF_SAREE_5,
    images: [HALF_SAREE_5],
    description:
      "A striking black and silver half saree with copper-toned woven borders, crafted for a modern yet festive statement look.",
  },
  {
    id: "HS006",
    code: "HS006",
    category: "HalfSaree",
    categoryLabel: CATEGORY_LABELS.HalfSaree,
    title: "Green Mustard Half Saree",
    image: HALF_SAREE_6,
    images: [HALF_SAREE_6],
    description:
      "A classic green and mustard half saree with gold border detailing and a graceful festive drape for traditional celebrations.",
  },
  {
    id: "HS007",
    code: "HS007",
    category: "HalfSaree",
    categoryLabel: CATEGORY_LABELS.HalfSaree,
    title: "Royal Blue Checked Half Saree",
    image: HALF_SAREE_7,
    images: [HALF_SAREE_7],
    description:
      "A royal blue half saree styled with an orange checked skirt and zari borders, tailored for vibrant occasion wear.",
  },
  {
    id: "FR001",
    code: "FR001",
    category: "Frock",
    categoryLabel: CATEGORY_LABELS.Frock,
    title: "Emerald Traditional Frock",
    image: FROCK_1,
    images: [FROCK_1],
    description:
      "A deep emerald frock with copper-toned woven borders and fitted bodice styling, tailored for elegant festive occasions.",
    featured: true,
  },
  {
    id: "FR002",
    code: "FR002",
    category: "Frock",
    categoryLabel: CATEGORY_LABELS.Frock,
    title: "Pink Floral Party Frock",
    image: FROCK_2,
    images: [FROCK_2],
    description:
      "A flowing pink party frock with floral motifs and graceful flare, designed for standout celebrations and photo-ready looks.",
    featured: true,
  },
  {
    id: "FR003",
    code: "FR003",
    category: "Frock",
    categoryLabel: CATEGORY_LABELS.Frock,
    title: "Cream Heritage Frock",
    image: FROCK_3,
    images: [FROCK_3],
    description:
      "A cream heritage-style frock with maroon brocade accents, pleated volume, and tasseled detailing for a timeless traditional finish.",
  },
  {
    id: "FR004",
    code: "FR004",
    category: "Frock",
    categoryLabel: CATEGORY_LABELS.Frock,
    title: "Rose Garden Frock",
    image: FROCK_4,
    images: [FROCK_4],
    description:
      "A soft cream frock with coral rose prints, matching sleeve accents, and a graceful gathered flare for elegant festive wear.",
  },
  {
    id: "AB001",
    code: "AB001",
    category: "AariBlouse",
    categoryLabel: CATEGORY_LABELS.AariBlouse,
    title: "Leaf Border Aari Blouse",
    image: AARI_1,
    images: [AARI_1],
    description:
      "A rich green aari blouse with a broad leaf-pattern embroidered neckline, crafted for elegant festive styling and custom blouse orders.",
    featured: true,
  },
  {
    id: "AB002",
    code: "AB002",
    category: "AariBlouse",
    categoryLabel: CATEGORY_LABELS.AariBlouse,
    title: "Peacock Aari Blouse",
    image: AARI_2,
    images: [AARI_2],
    description:
      "A statement purple aari blouse featuring colorful peacock embroidery and detailed sleeve work, designed for standout occasion wear.",
    featured: true,
  },
  {
    id: "AB003",
    code: "AB003",
    category: "AariBlouse",
    categoryLabel: CATEGORY_LABELS.AariBlouse,
    title: "Classic Tie-Back Aari Blouse",
    image: AARI_3,
    images: [AARI_3],
    description:
      "A classic green blouse with refined aari-style border work and a deep tie-back cut, tailored for graceful traditional looks.",
  },
  {
    id: "DB001",
    code: "DB001",
    category: "DesignerBlouse",
    categoryLabel: CATEGORY_LABELS.DesignerBlouse,
    title: "Pink Frill Designer Blouse",
    image: BLOUSE_1,
    images: [BLOUSE_1, BLOUSE_2],
    description:
      "A vibrant pink designer blouse with scalloped frill detailing around the back neckline and elegant contrast accents for festive styling.",
    featured: true,
  },
  {
    id: "DB002",
    code: "DB002",
    category: "DesignerBlouse",
    categoryLabel: CATEGORY_LABELS.DesignerBlouse,
    title: "Floral Bow Designer Blouse",
    image: BLOUSE_3,
    images: [BLOUSE_3, BLOUSE_19],
    description:
      "A deep rose designer blouse finished with pleated back detailing and a central floral bow, now paired with a second green frill-back blouse view.",
    featured: true,
  },
  {
    id: "DB003",
    code: "DB003",
    category: "DesignerBlouse",
    categoryLabel: CATEGORY_LABELS.DesignerBlouse,
    title: "Circular Cutwork Designer Blouse",
    image: BLOUSE_4,
    images: [BLOUSE_4],
    description:
      "A bold magenta designer blouse with circular back cutwork, gold edging, and tassel ties that bring a dramatic custom-finish touch.",
  },
  {
    id: "DB004",
    code: "DB004",
    category: "DesignerBlouse",
    categoryLabel: CATEGORY_LABELS.DesignerBlouse,
    title: "Purple Panel Designer Blouse",
    image: BLOUSE_5,
    images: [BLOUSE_5],
    description:
      "A green and purple panel designer blouse with structured back shaping and contrast detailing, tailored for polished festive wear.",
  },
  {
    id: "DB005",
    code: "DB005",
    category: "DesignerBlouse",
    categoryLabel: CATEGORY_LABELS.DesignerBlouse,
    title: "Violet Tassel Designer Blouse",
    image: BLOUSE_6,
    images: [BLOUSE_6],
    description:
      "A violet designer blouse with textured border folds and hanging tassels, combining simplicity with standout handcrafted detail.",
  },
  {
    id: "DB006",
    code: "DB006",
    category: "DesignerBlouse",
    categoryLabel: CATEGORY_LABELS.DesignerBlouse,
    title: "Maroon Border Designer Blouse",
    image: BLOUSE_7,
    images: [BLOUSE_7],
    description:
      "A dark green designer blouse highlighted by a maroon pleated border and sleeve accents, made for elegant traditional pairing.",
  },
  {
    id: "DB007",
    code: "DB007",
    category: "DesignerBlouse",
    categoryLabel: CATEGORY_LABELS.DesignerBlouse,
    title: "Pearl Drop Designer Blouse",
    image: BLOUSE_8,
    images: [BLOUSE_8],
    description:
      "A refined ivory designer blouse with a slim keyhole back, button detailing, and bead-trimmed sleeves for elegant custom blouse styling.",
  },
  {
    id: "DB008",
    code: "DB008",
    category: "DesignerBlouse",
    categoryLabel: CATEGORY_LABELS.DesignerBlouse,
    title: "Royal Blue Trim Designer Blouse",
    image: BLOUSE_9,
    images: [BLOUSE_9],
    description:
      "A vibrant magenta designer blouse finished with royal blue folded trim and woven sleeve borders, crafted for bold festive looks.",
  },
  {
    id: "DB009",
    code: "DB009",
    category: "DesignerBlouse",
    categoryLabel: CATEGORY_LABELS.DesignerBlouse,
    title: "Asymmetric Panel Designer Blouse",
    image: BLOUSE_10,
    images: [BLOUSE_10],
    description:
      "A striking green and purple designer blouse with asymmetric piping, fabric buttons, and bow-inspired detailing across the back.",
  },
  {
    id: "DB010",
    code: "DB010",
    category: "DesignerBlouse",
    categoryLabel: CATEGORY_LABELS.DesignerBlouse,
    title: "Triangle Tie Designer Blouse",
    image: BLOUSE_11,
    images: [BLOUSE_11],
    description:
      "A deep green designer blouse with a low round back and a geometric tie accent, tailored for graceful traditional pairing.",
  },
  {
    id: "DB011",
    code: "DB011",
    category: "DesignerBlouse",
    categoryLabel: CATEGORY_LABELS.DesignerBlouse,
    title: "Blue Bow Detail Designer Blouse",
    image: BLOUSE_12,
    images: [BLOUSE_12],
    description:
      "A maroon designer blouse with broad blue contrast borders and a centered bow motif, offering a polished custom-finish look.",
  },
  {
    id: "DB012",
    code: "DB012",
    category: "DesignerBlouse",
    categoryLabel: CATEGORY_LABELS.DesignerBlouse,
    title: "Pastel Puff Sleeve Designer Blouse",
    image: BLOUSE_13,
    images: [BLOUSE_13],
    description:
      "A soft pink designer blouse with statement puff sleeves and a delicate peter pan collar, blending playful charm with boutique tailoring.",
  },
  {
    id: "DB013",
    code: "DB013",
    category: "DesignerBlouse",
    categoryLabel: CATEGORY_LABELS.DesignerBlouse,
    title: "Floral Accent Designer Blouse",
    image: BLOUSE_14,
    images: [BLOUSE_14],
    description:
      "A festive brocade designer blouse with layered back panels and a handcrafted floral accent, created for special-occasion saree styling.",
  },
  {
    id: "DB014",
    code: "DB014",
    category: "DesignerBlouse",
    categoryLabel: CATEGORY_LABELS.DesignerBlouse,
    title: "Pink Frill Tie-Back Designer Blouse",
    image: BLOUSE_15,
    images: [BLOUSE_15],
    description:
      "A royal blue designer blouse with a dramatic oval tie-back and pink frill edging, made for standout festive and bridal wear.",
  },
  {
    id: "DB015",
    code: "DB015",
    category: "DesignerBlouse",
    categoryLabel: CATEGORY_LABELS.DesignerBlouse,
    title: "Circular Cutout Designer Blouse",
    image: BLOUSE_16,
    images: [BLOUSE_16],
    description:
      "A vivid teal designer blouse with a circular cutout back, layered contrast panels, and gathered pink trim for a statement finish.",
  },
  {
    id: "DB016",
    code: "DB016",
    category: "DesignerBlouse",
    categoryLabel: CATEGORY_LABELS.DesignerBlouse,
    title: "Tassel Tie Designer Blouse",
    image: BLOUSE_17,
    images: [BLOUSE_17],
    description:
      "A bright yellow designer blouse with mint contrast piping and hanging tassels, bringing a festive handcrafted touch to classic tailoring.",
  },
  {
    id: "DB017",
    code: "DB017",
    category: "DesignerBlouse",
    categoryLabel: CATEGORY_LABELS.DesignerBlouse,
    title: "Grid Frill Designer Blouse",
    image: BLOUSE_18,
    images: [BLOUSE_18],
    description:
      "A royal blue checked designer blouse with turquoise frill edging, gold trim sleeves, and side lattice detail for a striking custom finish.",
  },
  {
    id: "DB018",
    code: "DB018",
    category: "DesignerBlouse",
    categoryLabel: CATEGORY_LABELS.DesignerBlouse,
    title: "Triangle Border Designer Blouse",
    image: BLOUSE_20,
    images: [BLOUSE_20],
    description:
      "A mustard designer blouse with ivory inset neckline and triangle border embellishment, tailored for clean festive elegance.",
  },
  {
    id: "DB019",
    code: "DB019",
    category: "DesignerBlouse",
    categoryLabel: CATEGORY_LABELS.DesignerBlouse,
    title: "Gem Panel Designer Blouse",
    image: BLOUSE_21,
    images: [BLOUSE_21],
    description:
      "A magenta and navy designer blouse with a shaped back panel, stone accents, and tie-back strings for standout occasion styling.",
  },
  {
    id: "HD001",
    code: "HD001",
    category: "HandDesign",
    categoryLabel: CATEGORY_LABELS.HandDesign,
    title: "Cutwork Sleeve Hand Design",
    image: HAND_1,
    images: [HAND_1],
    description:
      "A blouse sleeve hand design featuring elegant oval cutwork, contrast fabric inset, bead detailing, and rich gold trim.",
    featured: true,
  },
  {
    id: "HD002",
    code: "HD002",
    category: "HandDesign",
    categoryLabel: CATEGORY_LABELS.HandDesign,
    title: "Pleated Bead Hand Design",
    image: HAND_2,
    images: [HAND_2],
    description:
      "A striking hand design with pleated fabric detailing, bead line accents, and ornate zari edging for a bold custom sleeve finish.",
    featured: true,
  },
  {
    id: "HD003",
    code: "HD003",
    category: "HandDesign",
    categoryLabel: CATEGORY_LABELS.HandDesign,
    title: "Pearl Line Hand Design",
    image: HAND_3,
    images: [HAND_3],
    description:
      "A graceful blouse hand design with diagonal pintucks, pearl embellishments, and delicate border trim for refined festive styling.",
  },
  {
    id: "HD004",
    code: "HD004",
    category: "HandDesign",
    categoryLabel: CATEGORY_LABELS.HandDesign,
    title: "Puff Sleeve Hand Design",
    image: HAND_4,
    images: [HAND_4],
    description:
      "A traditional hand design blouse with puff sleeves, zari sleeve border, deep square back, and tie-up tassels for elegant saree pairing.",
  },
  {
    id: "HD005",
    code: "HD005",
    category: "HandDesign",
    categoryLabel: CATEGORY_LABELS.HandDesign,
    title: "Pastel Collar Hand Design",
    image: HAND_5,
    images: [HAND_5],
    description:
      "A pastel hand design blouse featuring gathered mint sleeves, a soft collar neckline, and clean boutique finishing for elegant blouse styling.",
  },
];

export function getDesignById(id: string): Design | undefined {
  return designs.find((d) => d.id === id || d.code === id);
}

export function getFeaturedDesigns(limit = 8): Design[] {
  const featured = designs.filter((d) => d.featured);
  return (featured.length >= limit ? featured : designs).slice(0, limit);
}

export function getRelatedDesigns(design: Design, limit = 4): Design[] {
  return designs
    .filter((d) => d.category === design.category && d.id !== design.id)
    .concat(designs.filter((d) => d.category !== design.category))
    .slice(0, limit);
}
