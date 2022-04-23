import AppComponent from "./components/AppComponent.js";
import SimplePokemonCard from "./components/SimplePokemonCard.js";

const bodyContainer = document.querySelector("body");
new AppComponent(bodyContainer);

const mainContainer = bodyContainer.querySelector(".main");

for (let i = 1; i < 21; i++) {
  new SimplePokemonCard(mainContainer, i);
}
