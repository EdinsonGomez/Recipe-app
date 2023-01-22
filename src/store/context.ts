import React from "react";
import { AppState } from "../models/app.model";
import { AppActions } from "../models/actions.model";
import { initialAppState } from "./state";

export const AppContext = React.createContext<{
  state: AppState,
  dispatch: React.Dispatch<AppActions>
}>({
  state: initialAppState,
  dispatch: () => undefined
});
