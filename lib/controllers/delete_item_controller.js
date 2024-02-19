import { Controller } from "@hotwired/stimulus";

export default class extends Controller {

  deleteItem() {
    this.element.remove();
  }
}
