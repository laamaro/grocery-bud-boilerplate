import { Controller } from "@hotwired/stimulus";

export default class extends Controller {
  static targets = ['list', 'button', 'input', 'item', 'link'];

  connect() {
    console.log("marcola");
  }

  add(event) {
    event.preventDefault();
    console.log("bernado");
    const text = this.inputTarget.value;
    this.listTarget.insertAdjacentHTML('beforeend', `<li data-controller="delete-item" class='me-3'>${text}
    <a data-action='click->delete-item#deleteItem'>X</a></li>`);
    this.inputTarget.value = "";
  }
}
