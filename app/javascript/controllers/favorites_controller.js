import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="favorites"
export default class extends Controller {
  static targets = ["myFavorite"]
  connect() {
    const arr = []
    if (localStorage.length > 1) {
      for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        arr.push(localStorage.getItem(key));
      }
      arr.forEach((list) => {
        this.myFavoriteTarget.insertAdjacentHTML("beforeend",list)
      })
    }
    else {
      const noList = "<h2>Go back and add your favorite animal</h2>"
      this.myFavoriteTarget.insertAdjacentHTML("beforeend",noList)
    }
  }

}
