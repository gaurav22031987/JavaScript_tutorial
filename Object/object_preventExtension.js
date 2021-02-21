/*
The Object.preventExtensions() method prevents new properties from ever being added to an object (i.e. prevents future extensions to the object). It does the following things:
1. Allows changing existed properties of an object
2. Prevents adding new properties
3. will allow to remove property
*/
var obj = {
    name: 'test'
}

Object.preventExtensions(obj);
Object.isExtensible(obj); //false

obj.name='abc'; //allow
obj.lastname='babu'; // not allowed
delete obj.name // true because can delete any proprty
