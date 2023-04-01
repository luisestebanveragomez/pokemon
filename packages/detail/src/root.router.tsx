import React from "react";

import { createBrowserRouter } from "react-router-dom";
import { PokemonDetailProvider } from "./contexts/pokemonDetail.Provider";
import { URLS } from "./constants/globals";

const Detail = React.lazy(() => import("./pages/Detail.page"));

export const router = createBrowserRouter(
  [
    {
      path: "/:id",
      element: (
        <React.Suspense fallback={<>...</>}>
          <PokemonDetailProvider>
            <Detail />
          </PokemonDetailProvider>
        </React.Suspense>
      ),
    },
  ],
  { basename: URLS.DETAIL }
);
