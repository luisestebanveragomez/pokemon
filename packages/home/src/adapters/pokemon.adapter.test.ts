import { PokemonAdapter } from './pokemon.adapter';

describe('SectionPokemon Adapter', () => {
  it('Should Validate Empty Array', () => {
    const pokemon = PokemonAdapter()
    expect(pokemon.length).toEqual(0)
  })

  it('Should Return New Array', () => {
    const pokemon = PokemonAdapter([{name: 'test', url: 'test/hola/12/' }])
    expect(pokemon[0].id).toEqual('12')
  })
})