import { FC } from "react";

import "./pokemon.css";

interface PokemonProps {
  name: string;
  id: number | string;
  textButton: string;
  handle: (id: string | number) => void;
}

export const Pokemon: FC<PokemonProps> = ({ name, id, textButton, handle }) => {
  return (
    <article className="relative contFigure">
      <figure className="relative figure__pokemon">
        <img
          className="figure__pokemon-img"
          src={`https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/dream-world/${id}.svg`}
          alt={`pokemon ${name}`}
          loading="lazy"
          title={name}
        />
        <figcaption className="figure__pokemon-figcaption">
          <h2 className="figure__pokemon-name">{name}</h2>
          <button
            className="generic__button"
            type="button"
            onClick={() => handle(id)}
          >
            {textButton}
          </button>
        </figcaption>
      </figure>
      <div className="figure__pokemon-number absolute">#{id}</div>
    </article>
  );
};
