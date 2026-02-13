/* Challenge 2: Create a function to ,
       1) Calculate and display the BMI.  Look up the formula which you should have done in Challenge 1
       2) Display BMI status as per the chart in index.html
       3) Display the corresponding image based on the BMI status.
*/
function calculateBMI() {
    // 2) Get the information from the UI
    let weight = parseFloat(document.getElementById("weight").value);
    let height = parseFloat(document.getElementById("height").value) / 100; // Convert cm to meters

    // 3) Perform the necessary calculation.
    let bmi = weight / (height * height);
    bmi = bmi.toFixed(2); // Round to 2 decimal places

    // 4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
    let status = "";
    let imgFile = "";

    if (bmi < 18.5) {
        status = "Underweight";
        imgFile = "underweight.png";
    } else if (bmi >= 18.5 && bmi < 24.9) {
        status = "Normal weight";
        imgFile = "normal.png";
    } else if (bmi >= 25 && bmi < 29.9) {
        status = "Overweight";
        imgFile = "overweight.png";
    } else {
        status = "Obesity";
        imgFile = "obesity.png";
    }

    // 5) Display the output
    document.getElementById("bmiValue").textContent = bmi;
    document.getElementById("bmiStatus").textContent = status;
    document.getElementById("bmiImage").src = imgFile;
    document.getElementById("results").style.display = "block";
}
/* 
Guideline:
1) Create the function
2) Get the information from the UI
3) Perform the necessary calculation.
4) Make the appropriate decisions.  Store the appropriate BMI status.  Store the appropriate filename for the image.
5) Display the output

Use past examples, classwork and practicals to assist you in completing this practical.
*/

function calculateBMI() {
  // Step 1 & 2: Get the information from the UI
  let weight = parseFloat(document.getElementById("weight").value);
  let height = parseFloat(document.getElementById("height").value);
  
  // Validate input
  if (isNaN(weight) || isNaN(height) || weight <= 0 || height <= 0) {
    alert("Please enter valid weight and height values.");
    return;
  }
  
  // Step 3: Perform the necessary calculation
  let bmi = weight / (height * height);
  
  // Step 4: Make the appropriate decisions
  let status = "";
  let imageFile = "";
  
  if (bmi < 18.5) {
    status = "Underweight";
    imageFile = "underweight.png";
  } else if (bmi >= 18.5 && bmi < 25.0) {
    status = "Healthy Weight";
    imageFile = "healthy.png";
  } else if (bmi >= 25.0 && bmi < 30.0) {
    status = "Overweight";
    imageFile = "overweight.png";
  } else if (bmi >= 30.0) {
    status = "Obesity";
    imageFile = "obesity.png";
  }
  
  // Step 5: Display the output
  document.getElementById("bmiValue").textContent = bmi.toFixed(2);
  document.getElementById("bmiStatus").textContent = status;
  document.getElementById("bmiImage").src = imageFile;
  document.getElementById("results").style.display = "block";
}