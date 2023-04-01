import React, { FC, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useTranslation } from "react-i18next";

import { usePokemonDetailContext } from "../contexts/pokemonDetail.Provider";
import { getDetailPokemon } from "../services/pokemon-detail.service";
import { pokemonDetailAdapter } from "../adapters/pokemonDetail.adapter";
import { pokemonDetailRespond } from "../models/pokemonDetail.model";
import { BreadCrumbs } from "../componets/BreadCrumbs";
import { SectionPokemon } from "../componets/Pokemon";
import { Stats } from "../componets/Stats";
import { setStyleElementHelper } from "../utilities/setStyleElement.helper";
import { URLS } from "../constants/globals";

const DetailPage: FC = () => {
  const navigate = useNavigate();
  const { id } = useParams();
  const { t } = useTranslation();

  const { detail, setDetail } = usePokemonDetailContext();

  useEffect(() => {
    (async () => {
      // @ts-ignore
      const data = await getDetailPokemon(+id);
      setDetail(pokemonDetailAdapter(data as pokemonDetailRespond));
    })();
  }, [id]);

  useEffect(() => {
    detail &&
      setStyleElementHelper(
        "body",
        "background",
        `linear-gradient(180deg, rgba(255, 255, 255, 0.63) 0%, rgba(0, 0, 0, 0.63) 100%), var(--${detail.type})`
      );
  }, [detail]);

  const redirect = () => navigate(URLS.BASE);

  return (
    <section>
      <section>
        <BreadCrumbs name={t("back")} handle={redirect} />
      </section>
      {detail && (
        <>
          <SectionPokemon id={id} detail={detail} />
          <section className="mt-4">
            <Stats
              detail={detail}
              title="pokemon.title"
              refStat="pokemon.stats."
              t={t}
            />
          </section>
        </>
      )}
    </section>
  );
};

export default DetailPage;
