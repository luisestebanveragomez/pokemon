import { FC } from "react";

import "./stats.css";
import { Pokemon } from "../../models/pokemonDetail.model";
import { Stat } from "../Stat/Stat";

interface StatsProps {
  detail: Pokemon;
  title: string;
  refStat: string;
  t: (key: string) => string;
}

export const Stats: FC<StatsProps> = ({ detail, t, refStat, title }) => {
  return (
    <>
      <h3 className="stats__title">{t(title)}</h3>
      {detail.stats.map(({ base, stat, percentage }) => (
        <Stat
          key={stat}
          base={base}
          percentage={percentage}
          name={t(`${refStat}${stat}`)}
        />
      ))}
    </>
  );
};
