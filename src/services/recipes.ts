import { createaRequest } from "../utils/request";
import { AxiosError } from "axios";
import { RecipeResponseApi } from "../models/recipeRequest.model";

interface RequestParams {
  tags?: string,
  q?: string
}

interface RequestResponse {
  count: number,
  results: RecipeResponseApi[]
}

export const getRecipes = (params: RequestParams): Promise<RequestResponse>  => {
  return createaRequest()
    .get("recipes/list", {
      params: { ...params, from: 0, size: 4 }
    })
    .then((res) => res.data)
    .catch((error) => console.log("error", error as AxiosError))
};
