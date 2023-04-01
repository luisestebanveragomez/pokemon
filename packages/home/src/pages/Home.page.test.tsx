import { render } from "@testing-library/react";
import HomePage from "./Home.page";
import { usePokemonContext } from "../contexts/Pokemon.Provider";

jest.mock("react-router-dom", () => ({
  __esModule: true,
  useNavigate: () => (key: string) => key,
}));

jest.mock("react-i18next", () => ({
  __esModule: true,
  Trans: ({ i18nKey }) => i18nKey,
  useTranslation: () => ({
    t: (key: string) => key,
  }),
}));

jest.mock("../contexts/SectionPokemon.Provider", () => ({
  __esModule: true,
  usePokemonContext: () => ({
    pokemon: [
      {
        name: "test",
        id: "123",
      },
    ],
  }),
}));
describe("Home Page", () => {
  it("Should Render", () => {
    const { container } = render(<HomePage />);
    expect(container).toMatchSnapshot();
  });
});
