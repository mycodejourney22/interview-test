import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="navbar"
export default class extends Controller {
  connect() {
  }

  updateNavbar () {
    if (window.scrollY >= 50) {
      this.element.classList.remove("bg-light")
      this.element.classList.add("navbar-item")
    } else {
      this.element.classList.add("bg-light")
      this.element.classList.remove("navbar-item")
    }
  }
}
