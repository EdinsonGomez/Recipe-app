import { NavigationItem } from "../models/navItem.model";

export const navigationConfig: ReadonlyArray<NavigationItem> = [
  {
    name: "Home",
    path: "home"
  },
  {
    name: "Vegetarianos",
    path: "vegetarian",
    icon: "../assets/icons/ic_vegetarian.svg",
  },
  {
    name: "Platos principales",
    path: "meal",
    icon: "../assets/icons/ic_main.svg",
  },
  {
    name: "Tortas",
    path: "dessert",
    icon: "../assets/icons/ic_cake.svg"
  },
  {
    name: "Comida Rapida",
    path: "fast_food",
    icon: "../assets/icons/ic_fast-food.svg",
  },
  {
    name: "Menu de niños",
    path: "kid_friendly",
    icon: "../assets/icons/ic_kids.svg",
  },
  {
    name: "Sopas",
    path: "soup",
    icon: "../assets/icons/ic_soup.svg"
  }
];
