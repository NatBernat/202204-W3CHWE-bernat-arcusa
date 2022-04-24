import AppComponent from "./components/AppComponent.js";
import AllPokemonComponent from "./components/AllPokemonComponent.js";
import SimplePokemonCard from "./components/SimplePokemonCard.js";
import ButtonComponent from "./components/ButtonComponent.js";
import Component from "./components/Component.js";

const bodyContainer = document.querySelector("body");
new AppComponent(bodyContainer);

const mainContainer = bodyContainer.querySelector(".main");
new AllPokemonComponent(mainContainer);

const listContainer = mainContainer.querySelector(".main__list");

const counter = 26;
for (let i = 1; i < counter; i++) {
  new SimplePokemonCard(listContainer, i);
}

new Component(mainContainer, "div", "navigation-button-container");
const navButtonContainer = document.querySelector(
  ".navigation-button-container"
);
new ButtonComponent(navButtonContainer, "previous-button", "-");
new ButtonComponent(
  navButtonContainer,
  "count-button",
  `${counter - 1} of 908`
);
new ButtonComponent(navButtonContainer, "next-button", "+");
