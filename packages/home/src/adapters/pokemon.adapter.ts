import { Pokemon, PokemonRespond } from "../models/pokemon.model";

export const PokemonAdapter = (pokemon: PokemonRespond[]): Pokemon[] => {
  return pokemon.map(({ name, url }) => {
    const params = url.split("/");
    return {
      name,
      id: params[params.length - 2],
    };
  });
};
