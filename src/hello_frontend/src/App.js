import { html, render } from "lit-html";
import { hello_backend } from "declarations/hello_backend";
import logo from "./logo2.svg";

class App {
  greeting = "";

  constructor() {
    this.#render();
  }

  #handleSubmit = async (e) => {
    e.preventDefault();
    const name = document.getElementById("name").value;
    this.greeting = await hello_backend.greet(name);
    this.#render();
  };

  #render() {
    let body = html`
      <main>
        <img src="${logo}" alt="DFINITY logo" />
        <br />
        <br />
        <form action="#">
          <label for="name">Enter your name: &nbsp;</label>
          <input id="name" alt="Name" type="text" />
          <button type="submit">Click Me now!</button>
        </form>
        <section id="greeting">${this.greeting}</section>
      </main>
    `;
    render(body, document.getElementById("root"));
    document
      .querySelector("form")
      .addEventListener("submit", this.#handleSubmit);
  }
}

export default App;
