/*
With sealing, the situation is a little bit different, The Object.seal() method seals an object, preventing new properties from being added to the object. It does the following things:
1.Allows changing existed properties of an object
2. Prevents adding new properties
3. Don’t allow remove existing properties
*/
let obj = {
    name: 'test'
}

Object.seal(obj);
Object.isSealed(obj); // true

obj.lastname='xyz'; // will not add new property.
delete obj.name // false 
obj.name='abc' // will alow