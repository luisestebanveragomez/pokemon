import { FC, useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

import "./header.css";
import Pokemon from "../../assets/logo.png";
import { Select } from "../Select/Select";
import { Languages, languageStorage } from "../../constants/languages";
import { sendEventHelper } from "../../utils/helppers/sendEvent.helper";

export const Header: FC = () => {
  const navigate = useNavigate();
  const [showSelect, setShowSelect] = useState<boolean>(false);
  const [languageActive, setLanguageActive] = useState<string>(
    localStorage.getItem(languageStorage)
  );

  useEffect(() => {
    sendEventHelper(languageStorage, { language: languageActive });
    localStorage.setItem(languageStorage, languageActive);
  }, [languageActive]);

  const handleChangeLanguage = (el: string) => {
    setLanguageActive(el);
    handleShowSelect();
  };
  const handleShowSelect = () => setShowSelect((val) => !val);

  return (
    <header className="header">
      <section>
        <h1>
          <button
            className="header__sectionImg-button"
            onClick={() => navigate("/")}
          >
            <img
              src={Pokemon}
              className="header__sectionImg-img"
              alt="Pokémon"
              title="Logo Pokémon"
            />
          </button>
        </h1>
      </section>
      <aside className="relative">
        <button
          className="header__changeLanguage-button"
          onClick={handleShowSelect}
          aria-label="Change Language"
        >
          <i className="icon-translate"></i>
          <i
            className={`icon-arrow-down header__changeLanguage-arrow ${
              showSelect ? "active" : ""
            }`}
          ></i>
        </button>
        <div
          className={`absolute header__containerSelect ${
            showSelect ? "active" : ""
          }`}
        >
          <Select
            languages={Languages}
            active={languageActive}
            handle={handleChangeLanguage}
          />
        </div>
      </aside>
    </header>
  );
};
