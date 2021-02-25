//lexical
//global 
//local


var global = 'global';

function print() {
    var local = 'local';
    function childfn() {
        var child = 'child';
        console.log(global, local, child);
    }
    //console.log(global, local, child);

    childfn();
}

print();



