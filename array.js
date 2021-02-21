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



//10. splice






