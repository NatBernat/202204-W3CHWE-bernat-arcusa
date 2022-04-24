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
        <a href="index.html"><button title="Pokémon list">Pokémon list</button></a>
        <a href="myCatchedPokemon.html"><button title="My catched Pokémon">My Catched Pokémon</button></a>
      </nav>
    </header>                
    <main class="main">
    </main>
    <footer class="footer">©2022 Pokémon. ©1995 - 2022 Nintendo/Creatures Inc./GAME FREAK inc. TM, ®Nintendo.</footer>
    `;
  }
}

export default AppComponent;
