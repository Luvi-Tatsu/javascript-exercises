
const convertToCelsius = function(valCelsius) {
  let ratioSize = 5/9;
  let celsius = (valCelsius - 32) * ratioSize;
  return Math.round(celsius *10) /10;    

};

const convertToFahrenheit = function(valFahrenheit) {
  let ratioSize = 9/5;
  let fahrenheit = 32+ valFahrenheit * ratioSize ;
  return Math.round(fahrenheit *10) /10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
