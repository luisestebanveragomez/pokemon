import { FC, useEffect, useState } from "react";

import "./stat.css";

interface StatProps {
  name: string;
  percentage: number;
  base: number;
}

export const Stat: FC<StatProps> = ({ name, percentage, base }) => {
  const [styles, setStyles] = useState({});

  useEffect(() => {
    setTimeout(
      () =>
        setStyles({
          width: `${percentage}%`,
        }),
      700
    );
  }, [percentage]);

  return (
    <section className="stat__table">
      <div className="stat__table-name">{name}</div>
      <div className="stat__table-bar">
        <div style={styles}></div>
      </div>
      <div className="stat__table-base">{base}</div>
    </section>
  );
};
