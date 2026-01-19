/* Challenge 2: Complete the area and perimeter functions below for the rectangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 1.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
function recArea() {
  let length = parseFloat(document.getElementById("Length").value);
  let width = parseFloat(document.getElementById("Width").value);
  let op = document.getElementById("output");
  let A = length * width;
  op.innerHTML = "Area= "+A;
}


function recPerimeter() {
  let length = parseFloat(document.getElementById("Length").value);
  let width = parseFloat(document.getElementById("Width").value);
  let op = document.getElementById("output");
  let perimeter = 2 * (length + width);
  op.innerHTML = "perimeter= "+P;

}





/* Challenge 4: Complete the area and circumference functions below for the circle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you created in Challenge 3.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element
*/
let pi = 3.1415926;


function cirArea(){
  let radius = parseFloat(document.getElementById("cirRadius").value);
  let pi = parseFloat(document.getElementById("cirPerimeter").value);
  let op = document.getElementById("output");
  let area = pi * radius * radius;
  op.innerHTML = "Area= "+A;
}




function cirPerimeter() {
  let radius = parseFloat(document.getElementById("cirRadius").value);
  let pi = parseFloat(document.getElementById("cirPerimeter").value);
  let op = document.getElementById("output");
  let Perimeter = pi * radius * radius;
  op.innerHTML = "Perimeter= "+P;
}



/* Challenge Bonus: Complete the area and perimeter functions below for the triangle.  Guidelines,
      1) Create variables and retrieve the information from the text inputs you.
      2) Perform the necessary calculations
      3) Display the results in the appropriate element

/* Bonus Challenge: Triangle Area & Perimeter */
function triArea() {
  let base = parseFloat(document.getElementById("triBase").value);
  let height = parseFloat(document.getElementById("triHeight").value);
  let op = document.getElementById("output");
  op.innerHTML = "Area= "+A;

  let area = 0.5 * base * height;
}

function triPerimeter() {
  let side1 = parseFloat(document.getElementById("triSide1").value);
  let side2 = parseFloat(document.getElementById("triSide2").value);
  let side3 = parseFloat(document.getElementById("triSide3").value);
  let op = document.getElementById("output");
  op.innerHTML = "Perimeter= "+P

  let perimeter = side1 + side2 + side3;
}
