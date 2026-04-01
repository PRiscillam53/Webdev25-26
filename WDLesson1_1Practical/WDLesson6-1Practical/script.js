/*
Challenge 1: Add the appropriate images to each array below from the list of images provided.
 "beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg", "clams.jpg", "crabs.jpg", "lobster.png", "scallops.jpg", "shrimp.jpg","tuna.jpg", "flan.jpg", "passionberry.jpeg", "oreocup.jpg"
*/

//Challenge 2: Add appropriate prices for each food in their corresponding array. (Any reasonable price works) 
//Challenge 3: Add appropriate titles for each food in their corresponding array. Use the image names as a hint for the food title.

let meat_images = ["beeftips.jpg", "brisket.jpg", "ribeye.jpg", "steak.jpg"];
let meat_prices = [9.99, 9.99, 9.99];
let meat_titles = ["Beeftips", "Brisket", "Ribeye", "Steak"];

let seafood_images = ["clams.jpg", "crabs.jpg", "lobster.jpg", "scallops.jpg", "shrimp.jpg", "tuna.jpg"];
let seafood_prices = [15.99, 15.99, 19.99, 10.99, 10.99, 15.99];
let seafood_titles = ["Clams", "Crabs", "Lobster", "Scallops", "Shrimp", "Tuna"];

let dessert_images = ["flan.jpg", "oreocup.jpg", "passionberry.jpeg"];
let dessert_prices = [8.99, 8.99, 8.99];
let dessert_titles = ["Flan", "Oreocup", "Passionberry"];

function init() {
  //Each food has its own output container
  let m = document.getElementById("meats");
  let s = document.getElementById("seafoods");
  let d = document.getElementById("desserts");
  let build = ``;

  /* Notes for Challenges 4 through 6 below:
      1) Each challenge requires its own for loop to build the output.
      2) You can reuse the build variable as long as you set it back to `` before each loop.
      3) Create a basic card with a title, image and price.
  */

  //Challenge 4:  Build cards for the meats. Place the build in the meat container. 
  build = "";
  for (let i = 0; i < Meat_images.length; i++) {
    build += `<div class="card">
        <h3>images/${Meat_titles[i]}</h3>
        <img src ="images${Meat_images[i]}>
      <h4>${Meat_prices[i]}</h4>
    </div>`;

  }
  m.innerHTML = build;
  //Challenge 5:  Build cards for the seafoods. Place the build in the seafood container.
  build = "";
  for (let i = 0; i < Seafood_images.length; i++) {
    build += `<div class="card">
        <h3>images/${Seafood_titles[i]}</h3>
        <img src ="images${Seafood_images[i]}>
      <h4>${Seafood_prices[i]}</h4>
    </div>`;

  }
  s.innerHTML = build;
  //Challenge 6:  Build cards for the desserts. Place the build in the dessert container.
  for (let i = 0; i < Dessert_images.length; i++) {
    build += `<div class="card">
        <h3>images/${Dessert_titles[i]}</h3>
        <img src ="images${Dessert_images[i]}>
      <h4>${Dessert_prices[i]}</h4>
    </div>`;

  }
  d.innerHTML = build;
}