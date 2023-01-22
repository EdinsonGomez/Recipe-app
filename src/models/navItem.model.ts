export enum NavigationPaths {
  HOME = "home",
  VEGETARIAN = "vegetarian",
  MEAL = "meal",
  DESSERT = "dessert",
  FAST_FOOD = "fast_food",
  KID_FRIENDLY = "kid_friendly",
  SOUP = "soup"
} 

export type NavigationItem = {
  name: string
  path: NavigationPaths
  icon?: string
  queryParams: {
    tags?: string
    q?: string
  }
}