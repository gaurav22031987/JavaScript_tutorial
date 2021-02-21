/*
A Generator function returns us an iterator, which can be used to stop the function in the middle, 
do something, and then resume it whenever. A normal function starts executing and returns 
when the function completes, but a Generator function can be stopped any number of times and resumed later.
*/


function* generatorExample() {
    yield 8;
    yield 9;
    return 11;
    yield 12;

}

const generatorExam = generatorExample();
generatorExam.next();
generatorExam.next();


for(const n of generatorExample()){
    console.log(n); // will return 8,9 only will not return 11 and 12
}


// example 2
function* naturalNumbers() {
    let number=1;
    while (true)
        yield number++;
}

var naturalNumberIterator = naturalNumbers();

console.log(naturalNumberIterator.next().value);
console.log(naturalNumberIterator.next().value);
console.log(naturalNumberIterator.next().value);
console.log(naturalNumberIterator.next().value);