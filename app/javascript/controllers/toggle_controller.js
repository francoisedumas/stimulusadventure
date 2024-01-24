import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="toggle"
export default class extends Controller {
  static targets = ["toggleable"];
  static values = {
    class: { type: String, default: 'hidden' }
  }

  toggle() {
    this.toggleableTargets.forEach( (element) => element.classList.toggle(this.classValue) )
  }
}
