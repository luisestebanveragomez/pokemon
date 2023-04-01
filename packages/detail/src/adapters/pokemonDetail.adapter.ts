import { Pokemon, pokemonDetailRespond } from "../models/pokemonDetail.model";

export const pokemonDetailAdapter = ({
  name,
  types,
  stats,
}: pokemonDetailRespond): Pokemon => ({
  name,
  type: (types || [])[0]?.type?.name ?? "",
  stats: (stats || []).map(({ base_stat, effort, stat }) => ({
    base: base_stat,
    stat: stat.name,
    percentage: base_stat > 100 ? 100 : base_stat,
  })),
});
