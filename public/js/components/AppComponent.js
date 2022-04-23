import Component from "./Component.js";

class AppComponent extends Component {
  constructor(parentElement) {
    super(parentElement, "div", "container");

    this.render();
  }

  render() {
    this.element.innerHTML = `
    <header class="header">
    <header>
      <h1 title="Pokémon">
        <img src="images/logo.svg" alt="Pokémon logo" />
      </h1>
    </header>                
      </section>
      <main class="main">
        <img class="patata">
      </main>
      `;
  }
}

export default AppComponent;
