// General Guideline
/*
function name(){
  // Step 1: Create variables for the information from the text inputs and the output element
  
  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions

  // Step 3: Display the output

}
*/

/* Challenge 2:  Create the function for Challenge 1 scenario */
function area(){
  // Step 1: Create variables for the information from the text inputs and the output element
  var length = parseFloat(document.getElementById('length').value);
  var width = parseFloat(document.getElementById('width').value);
  var output = document.getElementById('output');

  // Step 2: Complete the process
  //    a) Perform any calculations necessary
  //    b) Perform necessary decisions
  if (length <= 0 || width <= 0) {
    output.innerHTML = "Inappropriate measurement";
  } else {
    var areaValue = length * width;
    // Step 3: Display the output
    output.innerHTML = "Area: " + areaValue;
  }
}



/* Challenge 3:  Complete the function for Pets Challenge on pets.html.  
1) Review the HTML for the UI.  Remember dropdown boxes are just input.
2) You will need to write HTML as part of the output.  
   For example, output.innerHTML = `<input src="pic.png">` would place the image in the <div>*/
function pet(){
  // Step 1: Create variables for the information from the text inputs and the output element
  var animal = document.getElementById('animal').value;
  var emotion = document.getElementById('emotion').value;
  var output = document.getElementById('output');

  // Step 2: Complete the process
  //    a) Perform any calculations necessary - none
  //    b) Perform necessary decisions - construct image src
  var imageSrc = animal.toLowerCase() + "_" + emotion.toLowerCase() + ".jpg";

  // Step 3: Display the output
  output.innerHTML = `<img src="${imageSrc}" alt="${animal} ${emotion}">`;
}