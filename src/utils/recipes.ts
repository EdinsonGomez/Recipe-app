import { RecipeResponseApi } from "../models/recipeRequest.model";
import { Recipe } from "../models/recipe.model";
import { Tag, UserRating } from "../models/recipeRequest.model";

export const mapFromApiToRecipes = (list: RecipeResponseApi[]): Recipe[] => {
  let res: Recipe[] = [];

  list.forEach((recipeFromApi) => {
    if (res.length >= 4) return;

    if (recipeFromApi.recipes?.length) {
      const recipes = mapFromApiToRecipes(recipeFromApi.recipes);
      res.push(...recipes);

      if (res.length >= 4) {
        res = res.slice(0, 4);
        return
      }

    } else {
      res.push({
        id: recipeFromApi.id,
        name: recipeFromApi.name,
        imgUrl: recipeFromApi.thumbnail_url,
        servings: recipeFromApi.num_servings,
        preparationTime: parsePreparationTime(recipeFromApi.total_time_minutes),
        difificulty: getDifficulty(recipeFromApi.tags),
        usersRating: parseUserRating(recipeFromApi.user_ratings),
      })
    }

  });

  return res;
}

const parsePreparationTime = (minutes: number | undefined): string => `${minutes ?? "--"}`;

const parseUserRating = (userRatings: UserRating | null | undefined): number => {
  let rating = 0;

  if (userRatings?.score) {
    rating = userRatings.score * 5;
  }

  return rating;
}

const getDifficulty = (tags: Tag[] | undefined | null): string => {
  let difificulty = "";

  if (tags?.length) {
    const difificultyTag = tags.find((tag) => tag.type === "difficulty");

    if (difificultyTag && difificultyTag.display_name) {
      difificulty = difificultyTag.display_name;
    }
  }

  return difificulty;
}