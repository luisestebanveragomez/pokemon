export interface pokemonDetailRespond {
  name: string;
  stats: Stat[];
  types: Type[];
}

interface Stat {
  base_stat: number;
  effort: number;
  stat: Stat2;
}

interface Stat2 {
  name: string;
  url: string;
}

interface Type {
  slot: number;
  type: Type2;
}

export interface Type2 {
  name: string;
  url: string;
}

export interface Pokemon {
  name: string;
  type: string;
  stats: PokemonStat[];
}

export interface PokemonStat {
  base: number;
  stat: string;
  percentage: number;
}
