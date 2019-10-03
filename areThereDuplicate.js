/*
Implement a function named areThereDuplicate which accepts variables number of arguments, and checks whether there are any duplicates among the 
arguments passed.

EXAMPLE
1 2 3 => false
1 2 2 => true
*/

function areThereDuplicate() {

    let argsMap = createMap([...arguments]);

    for(let key in argsMap) {
        if(argsMap[key] > 1) return true;
    }
    return false;

}

function createMap(args) {
    var counter = {};
    for(var char of args) {
        counter[char] = ++counter[char] || 1;
    }
    return counter;
}