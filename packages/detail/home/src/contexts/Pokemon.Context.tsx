import { createContext } from "react";
import { Pokemon } from "../models/pokemon.model";

export interface PokemonProps {
  pokemon: Pokemon[];
}

export const PokemonContext = createContext({} as PokemonProps);
