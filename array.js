let arr = ["I", "go", "home"];


//concat //
var hege = ["Cecilie", "Lone"];
var stale = ["Emil", "Tobias", "Linus"];
var children = hege.concat(stale);


//2 copywithin

var fruits = ["Banana", "Orange", "Apple", "Mango", "Kiwi", "Papaya"];
fruits.copyWithin(2, 0, 2);
["Banana", "Orange", "Banana", "Orange", "Kiwi", "Papaya"]

//target	Required. The index position to copy the elements to
//start	Optional. The index position to start copying elements from  (default is 0)
//end	Optional. The index position to stop copying elements from (default is array.length)

fruits.copyWithin(2);
["Banana", "Orange", "Banana", "Orange", "Apple", "Mango"]


// 3. entities//
//The entries() method returns an Array Iterator object with key/value pairs.

var fruits = ["Banana", "Orange", "Apple", "Mango"];
var f = fruits.entries();

for (x of f) {
    console.log(x);
}


//4.every //
//The every() method checks if all elements in an array pass a test (provided as a function).
var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}
ages.every(checkAdult);

//5.filter//
var ages = [32, 33, 16, 40];

function checkAdult(age) {
    return age >= 18;
}

ages.filter(checkAdult);

// 6. find //
var ages = [3, 10, 18, 20];

function checkAdult(age) {
    return age >= 18;
}

ages.find(checkAdult);


//7. map//
var ages = [32, 33, 16, 40];
ages.map(function(x){
return x*2
})

var ages = [32, 33, 16, 40];
ages.map(x=> x*2);

//8. join

var fruits = ["Banana", "Orange", "Apple", "Mango"];
 fruits.join(" and ");

 

//9. slice
// The slice() method returns the selected elements in an array, as a new array object.

// The slice() method selects the elements starting at the given start argument, and ends at, but does not include, the given end argument.

var fruits = ["Banana", "Orange", "Lemon", "Apple", "Mango"];
var citrus = fruits.slice(1, 3); //start index start from 0 so 1 means start from 1st index

// start	Optional. An integer that specifies where to start the selection (The first element has an index of 0). Use negative numbers to select from the end of an array. If omitted, it acts like "0"
// end	Optional. An integer that specifies where to end the selection. If omitted, all elements from the start position and to the end of the array will be selected. Use negative numbers to select from the end of an array





//10. splice
// The splice() method adds/removes items to/from an array, and returns the removed item(s).

//array.splice(index, howmany, item1, ....., itemX)

// index	Required. An integer that specifies at what position to add/remove items, Use negative values to specify the position from the end of the array
// howmany	Optional. The number of items to be removed. If set to 0, no items will be removed
// item1, ..., itemX	Optional. The new item(s) to be added to the array// Note: This method changes the original array.
var fruits = ["Banana", "Orange", "Apple", "Mango"];
fruits.splice(2, 0, "Lemon", "Kiwi");

//output -> Banana,Orange,Lemon,Kiwi,Apple,Mango






//find unique values
let intersection = arrA.filter(x => arrB.includes(x));

//different values
let difference = arrA.filter(x => !arrB.includes(x));


// union 
let union = [...arrA, ...arrB];