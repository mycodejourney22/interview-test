import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="button"
export default class extends Controller {
  static targets = ["firstbutton", "secondbutton"]
  connect() {
  }

  mouseaction() {
    this.firstbuttonTarget.classList.add("d-none")
    this.secondbuttonTarget.classList.remove("d-none")
  }

  mouseinaction(){
    this.firstbuttonTarget.classList.remove("d-none")
    this.secondbuttonTarget.classList.add("d-none")
  }
}
