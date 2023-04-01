import { FC, useContext, useEffect, useState } from "react";

import { PokemonContext } from "./Pokemon.Context";
import { getPokemon } from "../services/pokemon.service";
import { randomNumberHelper } from "../utilities/randomNumber.helper";
import { Pokemon } from "../models/pokemon.model";
import { PokemonAdapter } from "../adapters/pokemon.adapter";
import { useFetch } from '../hooks/useFetch';

type Props = {
  children: React.ReactElement;
};
export const PokemonProvider: FC<Props> = ({ children }) => {
  const [pokemon, setPokemon] = useState<Pokemon[]>([]);

  const min = randomNumberHelper(1, 40);
  const max = randomNumberHelper(40, 80);
  const request = async () => {
    // @ts-ignore
    const { results } = await getPokemon(min, max)
    setPokemon(PokemonAdapter(results || []));
  };

  useEffect(() => {
    request();
  }, []);

  return (
    <PokemonContext.Provider value={{ pokemon }}>
      {children}
    </PokemonContext.Provider>
  );
};

export const usePokemonContext = () => useContext(PokemonContext);
