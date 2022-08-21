// Class (Cat)
class Cat {
  constructor(firstName, favoriteFood, bestFriend) {
    this.firstName = firstName;
    this.favoriteFood = favoriteFood;
    this.bestFriend = bestFriend;
  }
  greet() {
    console.log(`Hi! My name is ${this.firstName}.`);
  }
  favoriteMeal() {
    console.log(`My favorite food is ${this.favoriteFood}.`);
  }
  bestPal() {
    console.log(`My best friend is ${this.bestFriend}.`);
  }
}

const happyCat = new Cat("Happy", "fish", "Natsu");
console.log(happyCat);
happyCat.greet();
happyCat.favoriteMeal();
happyCat.bestPal();

const garfieldCat = new Cat("Garfield", "lasagna", "Odie");
console.log(garfieldCat);
garfieldCat.greet();
garfieldCat.favoriteMeal();
garfieldCat.bestPal();

// Constructor (Pirates)
class SpacePirates {
  constructor(firstName, lastName, bestSkill, weaponOfChoice) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.bestSkill = bestSkill;
    this.weaponOfChoice = weaponOfChoice;
  }
  intro() {
    return `Hi, my name is ${this.firstName} ${this.lastName}.`;
  }
  skill() {
    return `My best skill is ${this.bestSkill}.`;
  }
  weapon() {
    return `My weapon of choice is ${this.weaponOfChoice}`;
  }
}

const Bebop = [
  new SpacePirates("Spike", "Spiegel", "hand-to-hand combat", "these hands"),
  new SpacePirates("Jet", "Black", "flying", "Walter P99"),
  new SpacePirates("Faye", "Valentine", "marksmanship", "Glock 30"),
];

console.log(Bebop);
console.log(Bebop[0].intro());
console.log(Bebop[0].skill());
console.log(Bebop[0].weapon());

const Benatar = [
  new SpacePirates("Peter", "Quill", "tactician", "Quad Blasters"),
  new SpacePirates("Rocket", "Racoon", "marksmaship", "Ion Cannon"),
  new SpacePirates("I am Groot", "I am Groot", "I am Groot", "I am Groot"),
];

// console.log(Benatar);

for (let i = 0; i < Bebop.length; i++) {
  console.log(Bebop[i].firstName);
  console.log(Bebop[i].lastName);
  console.log(Bebop[i].bestSkill);
  console.log(Bebop[i].weaponOfChoice);
}
