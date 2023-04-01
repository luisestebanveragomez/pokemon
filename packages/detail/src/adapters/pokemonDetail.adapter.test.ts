import { pokemonDetailAdapter } from './pokemonDetail.adapter';

describe("Pokemon Detail Adapter", () => {
  it("Should Return Default Value", () => {
    const adapter = pokemonDetailAdapter({
      name: " test",
      types: null,
      stats: null,
    });
    expect(adapter.stats.length).toEqual(0);
  });

  it("Should Validate Max Percentage", () => {
    const adapter = pokemonDetailAdapter({
      name: " test",
      types: [{ type: { name: "h", url: '' }, slot: 12 }],
      stats: [{base_stat: 122, effort: 34, stat: { name: 'sa', url: ''}}],
    });
    expect(adapter.stats[0].percentage).toEqual(100);
  });

  it("Should Validate default Percentage", () => {
    const adapter = pokemonDetailAdapter({
      name: " test",
      types: [{ type: { name: "h", url: '' }, slot: 12 }],
      stats: [{base_stat: 22, effort: 34, stat: { name: 'sa', url: ''}}],
    });
    expect(adapter.stats[0].percentage).toEqual(22);
  });
});
