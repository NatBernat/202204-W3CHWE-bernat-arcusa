/* eslint-disable no-new */
import AppComponent from "./components/AppComponent.js";

const bodyContainer = document.querySelector("body");
new AppComponent(bodyContainer);

const testTag = "pokemon/9";
const pokemonApiEndpoint = "https://pokeapi.co/api/v2/";
const apiKeyURL = pokemonApiEndpoint + testTag;

const getPokemon = async () => {
  const response = await fetch(apiKeyURL);

  const pokemonData = await response.json();
  return pokemonData;
};

(async () => {
  const spriteTest = await getPokemon();
  const testImage = document.querySelector(".patata");
  testImage.src = spriteTest.sprites.front_default;
})();
