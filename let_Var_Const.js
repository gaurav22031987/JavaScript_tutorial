function start() {
    for (let i = 0; i < 4; i++) {
        console.log(i);
    }
    console.log(i); // i is not defined but in case of var will print 4 because var is funcction level scope.
}
start();


//

var a = 10; // window.a wil print 
let b = 20; // window.b is error because block scope
const c = 30; // window.c is error bcz block scope