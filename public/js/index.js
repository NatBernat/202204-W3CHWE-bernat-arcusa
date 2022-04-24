import AppComponent from "./components/AppComponent.js";
import AllPokemonComponent from "./components/AllPokemonComponent.js";
import SimplePokemonCard from "./components/SimplePokemonCard.js";

const bodyContainer = document.querySelector("body");
new AppComponent(bodyContainer);

const mainContainer = bodyContainer.querySelector(".main");
new AllPokemonComponent(mainContainer);

const listContainer = mainContainer.querySelector(".main__list");

for (let i = 1; i < 31; i++) {
  new SimplePokemonCard(listContainer, i);
}
