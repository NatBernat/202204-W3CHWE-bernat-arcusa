const getPokemon = async (id) => {
  const pokemonApiEndpoint = "https://pokeapi.co/api/v2/pokemon/";
  const apiKeyURL = pokemonApiEndpoint + id;
  const response = await fetch(apiKeyURL);

  const pokemonData = await response.json();
  return pokemonData;
};

export default getPokemon;
