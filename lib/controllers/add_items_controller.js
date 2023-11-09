import { Controller } from "@hotwired/stimulus"

export default class extends Controller {
  static targets = ["list", "input"]

  connect() {
    console.log("controller conectado");
  }

  add(event){
    event.preventDefault();
    // this.inputTarget.value
    console.log(this.inputTarget.value);
    this.listTarget.insertAdjacentHTML('beforeend', `<li class='list-group-item'>${this.inputTarget.value}</li>`)
    this.inputTarget.value = "";
  }
}
