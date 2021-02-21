// object.defineproperty//
// The static method Object.defineProperty() defines a new property directly on an object, or modifies an existing property on an object, and returns the object.

// example 1
let o = {
    name: 'test',
    age: 21
}

let p = Object.assign({}, o);
Object.defineProperty(o, 'school', {
    value: 'MIT',
    writable: false
});
p.school = 'MIT';
console.log(Object.keys(0));
console.log(Object.keys(p));

o.school = 'Harvard';
p.school = 'Harvard';

console.log(o.school);
console.log(o.school);

//output
{ 'name', 'age' } // not show school as property because defined through defineProperty
{ 'name', 'age', 'school' }

'MIT',
    'Harvard'



// example 2
function Student() {
    this.title = 'Mr.';
    this.name = "Sams"
}

var student = new Student();
Object.defineProperty(student, 'fullName', {
    get: function () {
        return this.title + ' ' + this.name
    },

    set: function (fullname) {
        this.title = this.fullname.split(' ')[0];
        this.name = this.fullname.split(' ')[1];
    }
});

student.fullname = 'Mr. John';
