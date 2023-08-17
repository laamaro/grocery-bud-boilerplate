import { Application } from "@hotwired/stimulus";

import AddItemsController from "./controllers/add_items_controller.js";

window.Stimulus = Application.start();
window.Stimulus.register("add-items", AddItemsController);
