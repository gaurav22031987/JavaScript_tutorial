/*
Primitive Data
A primitive data value is a single simple data value with no additional properties and methods.

The typeof operator can return one of these primitive types:

string
number
boolean
undefined
*/

typeof "John"              // Returns "string"
typeof 3.14                // Returns "number"
typeof true                // Returns "boolean"
typeof false               // Returns "boolean"
typeof x



/*
Complex Data
The typeof operator can return one of two complex types:

function
object
The typeof operator returns "object" for objects, arrays, and null.

The typeof operator does not return "object" for functions.
*/
typeof { name: 'John', age: 34 } // Returns "object"
typeof [1, 2, 3, 4]             // Returns "object" (not "array", see note below)
typeof null                  // Returns "object"
typeof function myFunc() { }   // Returns "function";

console.log('test');