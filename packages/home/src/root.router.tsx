import React from "react";
import { createBrowserRouter } from "react-router-dom";

import { PokemonProvider } from "./contexts/Pokemon.Provider";
import HomePage from "./pages/Home.page";
import { URLS } from "./constants/globals";

const NotFound = React.lazy(() => import("./pages/NotFound.page"));

export const router = createBrowserRouter(
  [
    {
      path: "/",
      element: (
        <PokemonProvider>
          <HomePage />
        </PokemonProvider>
      ),
    },
    {
      path: "/detail",
      element: "",
    },
    {
      path: "*",
      element: (
        <React.Suspense fallback={<>...</>}>
          <NotFound />
        </React.Suspense>
      ),
    },
  ],
  { basename: URLS.BASE }
);
