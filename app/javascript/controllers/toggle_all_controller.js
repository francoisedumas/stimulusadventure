import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle-all"
export default class extends Controller {
  static outlets = [ "toggle", "reveal" ]

  // outlet with own stimulus
  toggleAll() {
    this.toggleOutlets.forEach(element => element.toggle())
  }

  // outlet with imported stimulus library
  revealAll() {
    this.revealOutlets.forEach(element => element.toggle())
  }
}
