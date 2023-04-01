import { FC } from "react";

import "./pokemon.css";
import { Pokemon } from "../../models/pokemonDetail.model";

interface PokemonProps {
  detail: Pokemon;
  id: string;
}

export const SectionPokemon: FC<PokemonProps> = ({ detail, id }) => {
  return (
    <section className="relative">
      <figure className="pokemon">
        <img
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          className="pokemon__img"
          alt=""
        />
        <figcaption>
          <span className="pokemon__category">{detail.type}</span>
          <h2 className="pokemon__name">{detail.name}</h2>
        </figcaption>
      </figure>
      <div className="pokemon__number">#{id}</div>
    </section>
  );
};
