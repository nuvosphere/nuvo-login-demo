import "./styles.css";

class Popup {
  constructor(options) {
    this.title = options.title || "Default Title";
    this.content = options.content || "Default Content";
  }

  async show() {
    const response = await fetch("template.html");
    let template = await response.text();

    const popupContainer = document.createElement("div");
    popupContainer.innerHTML = template;
    document.body.appendChild(popupContainer);

    const closeButton = popupContainer.querySelector(".popup-close");
    closeButton.addEventListener("click", () => {
      document.body.removeChild(popupContainer);
    });
  }
}

export default Popup;
