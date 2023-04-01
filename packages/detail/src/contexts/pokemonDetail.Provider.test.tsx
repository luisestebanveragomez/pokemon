import { render } from '@testing-library/react';
import { PokemonDetailProvider, usePokemonDetailContext } from './pokemonDetail.Provider';

const TestingComponent = () => {
  const data = usePokemonDetailContext();
  return (
    <>
      <p></p>
    </>
  );
};

describe("SectionPokemon Detail Provider", () => {
  it("Should Render", () => {
    const { container } = render(
      <PokemonDetailProvider>
        <TestingComponent />
      </PokemonDetailProvider>
    );
    expect(container).toMatchSnapshot()
  });
});
