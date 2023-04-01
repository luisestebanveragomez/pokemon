import { act } from 'react-dom/test-utils';
import { render } from '@testing-library/react';

import { PokemonProvider, usePokemonContext } from './Pokemon.Provider';


const TestingComponent = () => {
  const { pokemon} = usePokemonContext();
  return (
    <>
      <p>test</p>
      {pokemon.map(({name}) => <p key={name}>{name}</p>)}
    </>
  );
}


jest.mock("../services/pokemon.service", () => ({
  __esModule: true,
  getPokemon: function () {
    return new Promise(resolve => resolve({ results: [{name: 'test', url: '/test/123/'}] }))
  }
}));

describe("Pokemon Home Provider", () => {
  it("Should Render", async () => {
    await act( async () => {
      const { container } = render(<PokemonProvider><TestingComponent /></PokemonProvider>)
      expect(container).toMatchSnapshot()
    });
  })

  it("Should Be Validate Value", async () => {
    await act( async () => {
      const { container } = render(<PokemonProvider><TestingComponent /></PokemonProvider>)
      const p = container.querySelector('p')
      expect(p.innerHTML).toEqual('test')
    });
  })
})