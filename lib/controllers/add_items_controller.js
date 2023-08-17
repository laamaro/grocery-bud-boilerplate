import { Controller } from "@hotwired/stimulus"

export default class extends Controller {

  static targets = ["input", "list"]

  connect() {
    console.log("pipoca");
  }

  add(event) {
    event.preventDefault();

    const inputList = this.inputTarget.value;
    // console.log("pipoca");

    this.listTarget.insertAdjacentHTML("beforeend", `<li>${inputList}</li>`);

    this.inputTarget.value = "";

  }
}
