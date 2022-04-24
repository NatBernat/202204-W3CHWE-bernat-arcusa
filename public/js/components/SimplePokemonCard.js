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
    const pokemonType =
      typeof pokemon.types[1] !== "undefined"
        ? `${pokemon.types[0].type.name} / ${pokemon.types[1].type.name}`
        : pokemon.types[0].type.name;

    this.element.innerHTML = `
      <p>#${this.id}</p>
      <img class="pokemonCard__image" src=${pokemonImage} alt="${capitalisedName} picture" title=${capitalisedName}>
        <ul class = "pokemoncard__info">
          <li>${capitalisedName}</li>
          <li>${pokemonType}</li>
        </ul>
        <button class="pokemonCard__button">Catch it!</button>
      `;
  }
}

export default SimplePokemonCard;
