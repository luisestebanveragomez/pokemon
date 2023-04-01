export async function getPokemon<T>(min: number, max: number): Promise<T> {
  try {
    const respond = await fetch(
      `https://pokeapi.co/api/v2/pokemon?offset=${min}&limit=${max}`
    );
    return await respond.json();
  } catch (error) {
    throw new Error(error.statusText);
  }
}
