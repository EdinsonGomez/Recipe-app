import { NavigationItem } from "../models/navItem.model";

export const navigationConfig: ReadonlyArray<NavigationItem> = [
  { name: "Home", path: "home" },
  { name: "Vegetarianos", path: "vegetarian" },
  { name: "Platos principales", path: "meal" },
  { name: "Tortas", path: "dessert" },
  { name: "Comida Rapida", path: "fast_food" },
  { name: "Menu de niños", path: "kid_friendly" }
]