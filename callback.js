let x = function () {
    console.log('callback function');
}

let y = function (callback) {
    callback();
}

y(x) // callback function body is passed not with () as it's for calling function. 


// example 2

setTimeout(() => { 
    console.log('callback function after 1 sec')
}, 1000)