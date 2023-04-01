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

describe("Pokemon Detail Provider", () => {
  it("Should Render", () => {
    render(
      <PokemonDetailProvider>
        <TestingComponent />
      </PokemonDetailProvider>
    );
  });
});
