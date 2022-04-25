import Component from "../Component.js";

class ButtonComponent extends Component {
  constructor(parentElement, className, text, action) {
    super(parentElement, "button", className);
    this.element.textContent = text;
    this.action = action;

    this.eventListener();
  }

  eventListener() {
    this.element.addEventListener("click", this.action);
  }
}

export default ButtonComponent;
