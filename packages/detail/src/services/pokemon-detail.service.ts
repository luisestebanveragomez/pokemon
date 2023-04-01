export async function getDetailPokemon<T>(id: number): Promise<T> {
  try {
    const respond = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`);
    return await respond.json();
  } catch (error) {
    throw new Error(error.statusText);
  }
}
