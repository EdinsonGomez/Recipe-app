export type Tag = {
  display_name: string
  name: string
  type: string
}

export type UserRating = {
  score: number
}

export interface RecipeResponseApi {
  id: number
  name: string
  num_servings?: number
  thumbnail_url?: string
  total_time_minutes?: number
  tags?: Tag[] | null
  user_rating?: UserRating | null
  recipes: RecipeResponseApi[]
}