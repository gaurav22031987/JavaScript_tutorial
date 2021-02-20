let i = 1;
const f = () => {
    console.log(i);
}
f();
// will print 1 as i in script scope



/******** local scope *******/




var f;

if (true) {

    let i = 1;
    f = () => {
        console.log(i);
    }
}
cconsole.dir(f);
// show [[scope]] as block for i


//block scope 
{
    var a = 10; // put debugger and see scope in dev scope will show b and c as block and a as global scope
    let b = 20;
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);

}

console.log(a);
console.log(b);// error b is not defined
console.log(c);





var a = 100;
let b = 200;
{
    var a = 10; // put debugger and see scope in dev scope will show b and c as block and a as global scope
    let b = 20; // put debugger b has two scope one block and one script scope(200).
    const c = 30;
    console.log(a);
    console.log(b);
    console.log(c);

}

console.log(a); // 10 // called shadowing because both a are global scope as one single a global variable 
console.log(b) // 200



//Array common, distinct and difference
var a = [1, 2, 3];
var b = [2, 3];
a.filter(x => b.includes(x)); // common 
a.filter(x => !b.includes(x)); // difference 
[...a, ...b]; //union


