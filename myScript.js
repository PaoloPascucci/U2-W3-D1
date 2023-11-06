class User {
    constructor(firstName, lastName, age, location) {
      this.firstName = firstName;
      this.lastName = lastName;
      this.age = age;
      this.location = location;
    }
  
    compareAgeWith(otherUser) {
      if (this.age > otherUser.age) {
        return `${this.firstName} è più vecchio di ${otherUser.firstName}`;
      } else if (this.age < otherUser.age) {
        return `${this.firstName} è più giovane di ${otherUser.firstName}`;
      } else {
        return `${this.firstName} ha la stessa età di ${otherUser.firstName}`;
      }
    }
  }
  
  const x = new User("Lillo", "Nello", 25, "Austria");
  const y = new User("Ciccio", "Pasticcio", 52, "Islanda");
  
  const comparisonResult = x.compareAgeWith(y);
  console.log(x);
  console.log(y);
  console.log(comparisonResult);

const pets = [];

class Pet {
  constructor(petName, ownerName, species, breed) {
    this.petName = petName;
    this.ownerName = ownerName;
    this.species = species;
    this.breed = breed;
  }

  hasSameOwnerAs(anotherPet) {
    return this.ownerName === anotherPet.ownerName;
  }
}

function createPet() {
  const petName = document.getElementById("petName").value;
  const ownerName = document.getElementById("ownerName").value;
  const species = document.getElementById("species").value;
  const breed = document.getElementById("breed").value;

  const newPet = new Pet(petName, ownerName, species, breed);

  // Controllo se ci sono animali con lo stesso proprietario
  const hasSameOwner = pets.some((pet) => pet.hasSameOwnerAs(newPet));

  if (hasSameOwner) {
    console.log(ownerName + " ha più animali");
  }
  pets.push(newPet);
  // Clear the form fields
  document.getElementById("petForm").reset();
  // Update the list of pets
  displayPets();
}
function displayPets() {
  const petList = document.getElementById("petList");
  petList.innerHTML = "";

  for (const pet of pets) {
    const listItem = document.createElement("li");
    listItem.textContent = `Nome Animale: ${pet.petName}, Di: ${pet.ownerName}, E' un: ${pet.species} ${pet.breed}`;
    petList.appendChild(listItem);
  }
}
