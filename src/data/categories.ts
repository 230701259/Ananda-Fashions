import aari from "@/assets/categories/aari.jpg";
import designer from "@/assets/categories/designer.jpg";
import type { CategoryKey } from "./designs";

const FROCK_2 = "/images/frock/Frock_2.png";
const HALF_SAREE_3 = "/images/half-saree/Half_Saree_3.png";
const PAVADAI_SATTAI_1 = "/images/pavadai-sattai/Pavadai_Sattai_1.png";
const HAND_3 = "/images/hand-design/Hand_3.png";

export interface CategoryCard {
  key: CategoryKey;
  title: string;
  image: string;
}

export const categories: CategoryCard[] = [
  { key: "PavadaiSattai", title: "Pavadai Sattai", image: PAVADAI_SATTAI_1 },
  { key: "HalfSaree", title: "Half Saree", image: HALF_SAREE_3 },
  { key: "Frock", title: "Frock", image: FROCK_2 },
  { key: "AariBlouse", title: "Aari Blouse", image: aari },
  { key: "DesignerBlouse", title: "Designer Blouse", image: designer },
  { key: "HandDesign", title: "Hand Design", image: HAND_3 },
];

