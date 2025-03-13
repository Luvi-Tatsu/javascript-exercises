
const convertToCelsius = function(fahrenheit) {
  let ratioSize = 5/9;
  let celsius = (fahrenheit - 32) * ratioSize;
  return Math.round(celsius *10) /10;    

};

const convertToFahrenheit = function(celsius) {
  let ratioSize = 9/5;
  let fahrenheit = 32+ celsius * ratioSize ;
  return Math.round(fahrenheit *10) /10;
};

// Do not edit below this line
module.exports = {
  convertToCelsius,
  convertToFahrenheit
};
