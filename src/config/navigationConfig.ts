import { NavigationItem, NavigationPaths } from "../models/navItem.model";

export const navigationConfig: ReadonlyArray<NavigationItem> = [
  {
    name: "Home",
    path: NavigationPaths.HOME,
    queryParams: {
      tags: "",
      q: ""
    }
  },
  {
    name: "Vegetarianos",
    path: NavigationPaths.VEGETARIAN,
    icon: "../assets/icons/ic_vegetarian.svg",
    queryParams: {
      tags: "vegetarian"
    }
  },
  {
    name: "Platos principales",
    path: NavigationPaths.MEAL,
    icon: "../assets/icons/ic_main.svg",
    queryParams: {
      tags: "one_top_app_meat"
    }
  },
  {
    name: "Tortas",
    path: NavigationPaths.DESSERT,
    icon: "../assets/icons/ic_cake.svg",
    queryParams: {
      tags: "desserts"
    }
  },
  {
    name: "Comida Rapida",
    path: NavigationPaths.FAST_FOOD,
    icon: "../assets/icons/ic_fast-food.svg",
    queryParams: {
      q: "fast food"
    }
  },
  {
    name: "Menu de niños",
    path: NavigationPaths.KID_FRIENDLY,
    icon: "../assets/icons/ic_kids.svg",
    queryParams: {
      tags: "kid_friendly"
    }
  },
  {
    name: "Sopas",
    path: NavigationPaths.SOUP,
    icon: "../assets/icons/ic_soup.svg",
    queryParams: {
      q: "soup"
    }
  }
];
