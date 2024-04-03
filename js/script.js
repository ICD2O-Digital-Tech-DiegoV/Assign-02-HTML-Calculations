function doMathClicked() {
  // this function does basic math: Mph to Kph
  let Mph = document.getElementById("Mph").value;
  let answer = Mph * 1.60;

  // Make sure not negative
  if (answer < 0) {
    answer = 0;
    document.getElementById("Kp").innerHTML = "Invalid input. Ensure value is a positive number.";
  }
  else {
    document.getElementById("Kph").innerHTML = "Kph = " + answer.toFixed(2);
  }
}
function kphToMetersPH() {
  let kph = document.getElementById("Kph").value;
  let calculation = kph * 1000;

  // Make sure not negative
  if (calculation <= 0) {
    calculation = 0;
    document.getElementById("metersperhour").innerHTML = "Invalid input. Ensure value is a positive number.";
  }
  else {
    document.getElementById("metersperhour").innerHTML = "Meters per hour is = " + calculation.toFixed(2);

  }
}
