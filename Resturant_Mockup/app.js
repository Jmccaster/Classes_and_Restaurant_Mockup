// Restaurant

let menu = {
  brunch: ["Pancakes", "Omelet", "French Toast", "Bacon", "Waffles", "Oatmeal"],
  lunch: [
    "Club House Sandwich",
    "Soup",
    "Salad",
    "Tacos",
    "Cheeseburger",
    "Coneys",
  ],
  dinner: ["Fish and Chips", "Steak", "Pasta", "Lobster", "Salmon", "BBQ Ribs"],
  dessert: [
    "Cheesecake",
    "Ice Cream",
    "Brownies",
    "Cookies",
    "Frozen Yogurt",
    "Peach Cobbler",
  ],
  Beverages: [
    "Sweet Tea",
    "Pepsi",
    "Dr. Pepper",
    "Chocolate Milk",
    "Ginger Beer",
    "Coffee",
  ],
  Appetizers: [
    "Chips and Queso",
    "Fried Pickles",
    "Buffalo Chicken Dip",
    "Mozzarella Sticks",
    "Parmesan Fries",
    "Potato Skins",
  ],
};

const doSomething = () => {
  let target = documents.querySelector(".hungry");

  target.innerHTML = menu.breakfast[0];
};
