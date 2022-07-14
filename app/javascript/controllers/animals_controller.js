import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="animals"
export default class extends Controller {
  static targets = ["listAnimal", "favorites"]

  connect() {
    this.#getanimal()
    this.num = 1
  }

  refreshnew (event){
    window.location.reload();
  }

  #getanimal(){
    const url = "https://zoo-animal-api.herokuapp.com/animals/rand/5"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        data.forEach(animal => {
        const myList = `<li class="list-inline-item">
                          <div class="card-category" style="background-image: linear-gradient(rgba(0,0,0,0.3), rgba(0,0,0,0.3)), url(${animal.image_link})">
                          <div class= "favorite"<span id="img-icon" data-animals-target="favorites"  data-action="click->animals#favoriteclick"><i class="fa-solid fa-heart"></i></span></div>
                         </div>
                         <div class="text-bg"><p>Name: ${animal.name}</p> <p>Type: ${animal.animal_type}</p></div>
                        </li>`
        this.listAnimalTarget.insertAdjacentHTML("beforeend",myList )
        });
      })
  }

  favoriteclick(event) {
    this.num ++
    event.currentTarget.classList.add("img-favorites")
    const formparent = event.currentTarget.parentElement
    const myParent = formparent.parentElement
    const beforeParent = myParent.parentElement
    const rightParent = beforeParent.innerHTML
    const myitem = `<li class="list-inline-item">
                      ${rightParent}
                      </li>`
    let local = localStorage.length + 1
    window.localStorage.setItem(`${local}`, myitem);
  }

}
