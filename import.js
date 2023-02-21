//Import NO.1
import { fahrenheit as fahr, celcius as clcs, formula} 
from './export.js';

console.log(`F = ${fahr}`);
console.log(`C = ${clcs}`);
console.log(`${fahr} Fahrenheit = ${formula(fahr).toFixed(2)} Celcius`);

//Import NO.2
import bmi from './bmi.js';