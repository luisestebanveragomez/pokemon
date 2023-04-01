import React, { FC, useEffect } from "react";
import { useTranslation } from "react-i18next";
import { useNavigate } from "react-router-dom";

import "../root.css";
import { usePokemonContext } from "../contexts/Pokemon.Provider";
import { Pokemon } from "../components/Pokemon";
import { setStyleElementHelper } from "../utilities/setStyleElement.helper";
import { URLS } from "../constants/globals";

const HomePage: FC = () => {
  const { t } = useTranslation();
  const { pokemon } = usePokemonContext();
  const navigate = useNavigate();

  useEffect(() => {
    setStyleElementHelper(
      "body",
      "background",
      `linear-gradient(180deg, rgba(255, 255, 255, 0.63) 0%, rgba(0, 0, 0, 0.63) 100%), #ff3f02`
    );
  }, []);

  const redirect = (id: any) => {
    navigate(`${URLS.DETAIL}/${id}`);
  };

  return (
    <section className="wrapperHome">
      <ul className="wrapperHome__ul">
        {pokemon.map(({ name, id }) => (
          <li key={id} className="wrapperHome__ul-list">
            <Pokemon
              id={id}
              name={name}
              textButton={t("pokemon.button")}
              handle={redirect}
            />
          </li>
        ))}
      </ul>
    </section>
  );
};

export default HomePage;
