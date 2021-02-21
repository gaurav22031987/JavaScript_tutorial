/*
The Object.entries() method returns an array of a given object's own enumerable string-keyed property
[key, value] pairs, in the same order as that provided by a for...in loop. (The only important difference
     is that a for...in loop enumerates properties in the prototype chain as well).
*/

const object1 = {
    a: 'somestring',
    b: 42
};

for (const [key, value] of Object.entries(object1)) {
    console.log(`${key}: ${value}`);
}

  // expected output:
  // "a: somestring"
  // "b: 42"
  // order is not guaranteed