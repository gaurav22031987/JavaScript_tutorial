/*
The Object.freeze() method freezes an object. This is actually the most strict way of making objects immutable. It does the following things:
1. Prevents adding new properties
2. Doesn’t allow remove existing properties
3. Doesn't allow to change immediate properties of object
4. Attributes of child objects can be modified.
*/

var obj = {
    firstname: 'test',
    add: {
        city: 'mumbai'
    }
}
Object.freeze(obj);

obj.firstname = 'xyz';
delete obj.firstname; // return false
obj.lastname = 'babu'; // not add lastname
obj.add.city = 'delhi'; // will allow modify city bcz child object can be modified

Object.isFrozen(obj); // true