import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="favorites"
export default class extends Controller {
  static targets = ["myFavorite"]
  connect() {
    console.log(localStorage.length)
    const arr = []
    for (let i = 0; i < localStorage.length; i++) {
      const key = localStorage.key(i);
      arr.push(localStorage.getItem(key));
    }
    arr.forEach((list) => {
      this.myFavoriteTarget.insertAdjacentHTML("beforeend",list)
    })
  }
}
