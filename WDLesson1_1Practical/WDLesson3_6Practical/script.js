// Challenge 2:  Create the function for the Average program.  Refer to the resource link in the HTML for assistance.
<input type="text" id="g1" placeholder="Grade 1">
<input type="text" id="g2" placeholder="Grade 2">
<input type="text" id="g3" placeholder="Grade 3">
<button onclick="calcAverage()">Calculate</button>
<p id="avgResult"></p>

// Challenge 4:  Create the function for the Slope program.  Refer to the resource link in the HTML for assistance.
function calcSlope() {
  let x1 = parseFloat(document.getElementById("x1").value);
  let y1 = parseFloat(document.getElementById("y1").value);
  let x2 = parseFloat(document.getElementById("x2").value);
  let y2 = parseFloat(document.getElementById("y2").value);
  let slope = (y2 - y1) / (x2 - x1);
  document.getElementById("slopeResult").innerHTML = "Slope: " + slope.toFixed(2);
}


// Challenge 6:  Create the function for the BMI program.  Refer to the resource link in the HTML for assistance.
function calcBMI() {
  let w = parseFloat(document.getElementById("weight").value);
  let h = parseFloat(document.getElementById("height").value);
  // Formula: 703 * (weight / height^2)
  let bmi = 703 * (w / (h * h));
  document.getElementById("bmiResult").innerHTML = "BMI: " + bmi.toFixed(2);
}
