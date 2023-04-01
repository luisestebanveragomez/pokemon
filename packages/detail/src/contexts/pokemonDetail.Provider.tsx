import { FC, useContext, useState } from "react";
import { PokemonDetailContext } from "./pokemonDetail.Context";
import { Pokemon } from "../models/pokemonDetail.model";

type Props = {
  children: React.ReactElement;
};

export const PokemonDetailProvider: FC<Props> = ({ children }) => {
  const [detail, setDetail] = useState<Pokemon>();

  return (
    <PokemonDetailContext.Provider value={{ detail, setDetail }}>
      {children}
    </PokemonDetailContext.Provider>
  );
};

export const usePokemonDetailContext = () => useContext(PokemonDetailContext);
