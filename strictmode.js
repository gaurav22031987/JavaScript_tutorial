"use strict";
a = 10;
console.log(a);


function add(a, b, b) {
    return a + b + b;

}
add(10, 20, 50) // return 110 as b is 50 and with strict mode throw error duplicate parameter

var x = { a: 10, a: 20 }// error defining properties more than one


var obj = {};
obj.defineProperty(obj, 'x', { value: 0, writeable: false });
obj.x = 20; // not allowed to write in read only property