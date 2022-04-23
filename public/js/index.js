import AppComponent from "./components/AppComponent.js";
import SimplePokemonCard from "./components/SimplePokemonCard.js";

const bodyContainer = document.querySelector("body");
new AppComponent(bodyContainer);

const mainContainer = bodyContainer.querySelector(".main");

for (let i = 0; i < 10; i++) {
  new SimplePokemonCard(mainContainer, i);
}
/* new SimplePokemonCard(mainContainer, 6);
new SimplePokemonCard(mainContainer, 9); */
