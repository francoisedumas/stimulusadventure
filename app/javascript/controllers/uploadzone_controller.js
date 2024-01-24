import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="uploadzone"
export default class extends Controller {
  static targets = ["form", "label", "input", "overlay"]

  connect() {
    this.element.addEventListener("dragover", this.preventDragDefaults);
    this.element.addEventListener("dragenter", this.preventDragDefaults);
  }

  disconnect() {
    this.element.removeEventListener("dragover", this.preventDragDefaults);
    this.element.removeEventListener("dragenter", this.preventDragDefaults);
  }

  preventDragDefaults(e) {
    e.preventDefault();
    e.stopPropagation();
  }

  acceptFiles(event) {
    event.preventDefault();
    const files = event.dataTransfer.files
    this.inputTarget.files = files
    this.submit();
  }

  show(e) {
    e.preventDefault();
    this.overlayTarget.classList.remove("invisible");
  }

  hide(e) {
    e.preventDefault();
    if (!this.element.contains(e.relatedTarget)) {
      this.overlayTarget.classList.add("invisible");
    }
  }

  submit() {
    this.formTarget.requestSubmit()
  }
}
