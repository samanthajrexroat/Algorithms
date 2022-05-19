// temperature in Kelvin.
const kelvin = 0;
// temp converted to Celsius.
const celsius = kelvin - 273;
//temp converted from Celsius to Fahrenheit.
let fahrenheit = celsius * (9/5) + 32;
//Rounding fahrenheit to whole number
fahrenheit = Math.floor(fahrenheit);

console.log('The temperature is ' + fahrenheit + ' degrees Fahrenheit.')