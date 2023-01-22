import React, { useReducer } from 'react';
import Home from "./views/Home";
import Navigation from "./components/Navigation";

import { AppContext } from "./store/context";
import { reducer } from "./store/reducer";
import { initialAppState } from "./store/state";

const App = () => {
  const [state, dispatch] = useReducer(reducer, initialAppState);
  return (
    <AppContext.Provider value={{ state, dispatch }}>
      <Navigation />
      <Home />
    </AppContext.Provider>
  );
}

export default App;
