/* Challenge 2: Create the function that will calculate the balance in an account using compound 
interest after t number of years.

Notes:
1) Don't let the formula scare you.  Simply translate it into JS
2) Create a for loop where the loop variable is t and the condition ends at the number of years 
the user specifies in the text input.
3) Use a build variable to create an output that looks like this
Year 1: $1050.00
Year 2: $1102.50
Year 3: $1157.63
...
Year N: $1157.63
*/
function calculateBalance() {
  let P = Number(document.getElementById("principal").value);   // starting money
  let r = Number(document.getElementById("rate").value);        // interest rate
  let years = Number(document.getElementById("years").value);   // number of years

  let output = "";

  for (let t = 1; t <= years; t++) {
    let A = P * Math.pow((1 + r), t); // compound interest formula
    output += "Year " + t + ": $" + A.toFixed(2) + "<br>";
  }

  document.getElementById("result").innerHTML = output;
}