import React from "react";
import { useNavigate } from "react-router-dom";
import { useTranslation } from "react-i18next";
import { URLS } from "../constants/globals";

const NotFoundPage = () => {
  const { t } = useTranslation();
  const navigate = useNavigate();
  return (
    <section>
      <h2 className="generic__text">{t("notFound.text")}</h2>
      <button
        className="generic__button"
        type="button"
        onClick={() => navigate(URLS.BASE)}
      >
        {t("notFound.back")}
      </button>
    </section>
  );
};
export default NotFoundPage;
