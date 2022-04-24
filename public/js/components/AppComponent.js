import Component from "./Component.js";

class AppComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "div", "container");

    this.render();
  }

  render() {
    this.element.innerHTML = `
    <header class="header">
      <h1 title="Pokémon">
        <img src="images/logo.svg" alt="Pokémon logo" />
      </h1>
      <nav class="header__navigation-buttons">
        <button title="Pokémon list"><a href="index.html">Pokémon list</a></button>
        <button title="My catched Pokémon"><a href="myPokemon.html">My Catched Pokémon</a></button>
      </nav>
    </header>                
    <main class="main">
    </main>
    `;
  }
}

export default AppComponent;
