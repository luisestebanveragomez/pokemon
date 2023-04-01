import { render } from "@testing-library/react";

import DetailPage from "./Detail.page";
import { getDetailPokemon } from "../services/pokemon-detail.service";
import { usePokemonDetailContext } from "../contexts/pokemonDetail.Provider";

jest.mock("react-router-dom", () => ({
  __esModule: true,
  useNavigate: () => (key: string) => key,
  useParams: () => ({
    id: 12,
  }),
}));

jest.mock("../services/pokemon-detail.service", () => ({
  __esModule: true,
  getDetailPokemon: function (id: string) {
    return new Promise((resolve) => resolve({}));
  },
}));

jest.mock("../services/pokemon-detail.service", () => ({
  __esModule: true,
  getDetailPokemon: function (id: string) {
    return new Promise((resolve) => resolve({}));
  },
}));

jest.mock("react-i18next", () => ({
  __esModule: true,
  Trans: ({ i18nKey }) => i18nKey,
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

jest.mock("../contexts/pokemonDetail.Provider", () => ({
  __esModule: true,
  usePokemonDetailContext: () => ({
    detail: {
      name: "test",
      type: "",
      stats: [],
    },
    setDetail: () => {},
  }),
}));

describe("Detail Page", () => {
  it("Should Render", () => {
    const { container } = render(<DetailPage />);
    expect(container).toMatchSnapshot();
  });
});
