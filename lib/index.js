import { Application } from "@hotwired/stimulus";
import GroceriesListController from "./controllers/groceries_list_controller.js";
import DeleteItemController from "./controllers/delete_item_controller.js";

window.Stimulus = Application.start();
Stimulus.register("groceries-list", GroceriesListController);
Stimulus.register("delete-item", DeleteItemController);
