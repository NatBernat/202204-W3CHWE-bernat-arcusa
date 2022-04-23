import Component from "./Component.js";

const getPokemon = async (id) => {
  const pokemonApiEndpoint = "https://pokeapi.co/api/v2/pokemon/";
  const apiKeyURL = pokemonApiEndpoint + id;
  const response = await fetch(apiKeyURL);

  const pokemonData = await response.json();
  return pokemonData;
};

/* (async () => {
  const spriteTest = await getPokemon();
  const testImage = document.querySelector(".img");
  testImage.src = spriteTest.sprites.front_default;
})(); */

class SimplePokemonCard extends Component {
  constructor(parentElement, id) {
    super(parentElement, "li", "pokemonCard");
    this.id = id;

    this.render();
  }

  async render() {
    const pokemon = await getPokemon(this.id);
    const pokemonName = pokemon.name;
    const pokemonImage = pokemon.sprites.front_default;
    const pokemonType = pokemon.types;

    this.element.innerHTML = `
      <img src=${pokemonImage} alt="${pokemonName} picture">
      <ul class="pokemonCard__basic-data>
        <li>${this.id}</li>
        <li>${pokemonName}</li>
        <li>${pokemonType}</li>
      </ul>
    `;
  }
}

export default SimplePokemonCard;
