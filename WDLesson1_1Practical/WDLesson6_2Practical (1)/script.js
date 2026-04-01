function BHS(){
  let school = {
    "name":"Bayside High School",
    "image":"https://live.staticflickr.com/7811/40010634273_301b63ddde_h.jpg",
    "address": "32-24 Corporal Kennedy Street, Bayside NY 11361"
  };
  let output = document.getElementById("output");

  //Challenge 1: Create and display a card of the information contained in the JSON variable school
let build = "";
  build += `<div class = "card">
    <h3>"${school.name}"</h3>
    <img src="${school.name}"></img>
    <h3>"${school.address}"</h3>
  </div>`
output.innerHTML = build;
}
function artist(){
  //Challenge 2: Fill the JSON below with the specified information for your favorite artist
  let artist = {
    "name":"Mora",
    "image":"https://musicreviewworld.com/wp-content/uploads/2023/09/Estrella.png",
    "album":"Tuyo",
    "url":"https://genius.com/artists/Mora"
  };
  let output = document.getElementById("output");

  //Challenge 3: Build a card for the information in the JSON. Make the image a hyperlink to the url provided.
let build = "";
  build += `
    <div class="card">
      <h3>${artist.name}</h3>
      <a href="${artist.url}">
        <img src="${artist.image}">
      <p>${artist.album}</p>
    </div>`;

  output.innerHTML = build;
}






