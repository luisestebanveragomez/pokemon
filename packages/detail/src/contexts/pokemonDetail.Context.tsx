import { createContext } from "react";
import { Pokemon } from "../models/pokemonDetail.model";

export interface PokemonDetailProps {
  detail: Pokemon;
  setDetail: React.Dispatch<React.SetStateAction<Pokemon>>;
}

export const PokemonDetailContext = createContext({} as PokemonDetailProps);
