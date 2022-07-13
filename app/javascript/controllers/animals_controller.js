import { Controller } from "@hotwired/stimulus"

// Connects to data-controller="animals"
export default class extends Controller {
  static targets = ["listAnimal"]
  connect() {
    console.log(this.listAnimalTarget)
    const url = "https://zoo-animal-api.herokuapp.com/animals/rand/5"
    fetch(url)
      .then(response => response.json())
      .then(data => {
        data.forEach(animal => {
        const myList = `<li class="list-inline-item">
                          <img src="${animal.image_link}" width="600" height="400" alt="${animal.animal_type} Picture" />
                          <p>Name: ${animal.name}  Type: ${animal.animal_type}  Habitat: ${animal.habitat}</p>
                        </li>`
        this.listAnimalTarget.insertAdjacentHTML("beforeend",myList )
        });
      })

  }
}
