function convertTemperature() {
  var temp = document.getElementById("temp").value;
  var scale = document.getElementById("scale").value;
  var result;

  if (scale == "C") {
    result = (temp * 9) / 5 + 32;
    document.getElementById("result").innerHTML =
      temp +
      " Celsius is equal to " +
      result.toFixed(2) +
      " Fahrenheit and " +
      (parseFloat(temp) + 273.15).toFixed(2) +
      " Kelvin";
  } else if (scale == "F") {
    result = ((temp - 32) * 5) / 9;
    document.getElementById("result").innerHTML =
      temp +
      " Fahrenheit is equal to " +
      result.toFixed(2) +
      " Celsius and " +
      (((parseFloat(temp) + 459.67) * 5) / 9).toFixed(2) +
      " Kelvin";
  } else if (scale == "K") {
    result = temp - 273.15;
    document.getElementById("result").innerHTML =
      temp +
      " Kelvin is equal to " +
      result.toFixed(2) +
      " Celsius and " +
      ((parseFloat(temp) * 9) / 5 - 459.67).toFixed(2) +
      " Fahrenheit";
  }
}
