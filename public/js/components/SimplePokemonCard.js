import Component from "./Component.js";
import getPokemon from "../getPokemonFunction.js";

class SimplePokemonCard extends Component {
  constructor(parentElement, id) {
    super(parentElement, "li", "pokemonCard");
    this.id = id;

    this.render();
  }

  async render() {
    const pokemon = await getPokemon(this.id);
    const pokemonName = pokemon.name;
    const pokemonNameCapitalised = (string) =>
      string.charAt(0).toUpperCase() + string.slice(1);
    const capitalisedName = pokemonNameCapitalised(pokemonName);
    const pokemonImage = pokemon.sprites.front_default;
    const pokemonType = pokemon.types[0].type.name;

    this.element.innerHTML = `
      <img class="pokemonCard" src=${pokemonImage}>
        <ul>
          <li>ID: ${this.id}</li>
          <li>Name: ${capitalisedName}</li>
          <li>Type: ${pokemonType}</li>
        </ul>
      `;
  }
}

export default SimplePokemonCard;
