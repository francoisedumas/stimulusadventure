import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="uploadzone"
export default class extends Controller {
  static targets = ["form", "label", "input"]

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

  dragover(e) {
    e.preventDefault();
    this.labelTarget.classList.add('bg-green-100');
  }

  dragleave(e) {
    e.preventDefault();
    this.labelTarget.classList.remove('bg-green-100');
  }

  submit() {
    this.formTarget.requestSubmit()
  }
}
