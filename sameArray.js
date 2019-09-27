/*
WRITE A FUNCTION CALLED SAME, WHICH ACCEPT TWO ARRAYS. THE FUNCTION SHOULD RETURN TRUE
IF EVERY VALUE IN THE ARRAY HAS ITS CORRESPONDING VALUE SQUARED IN THE SECOND ARRAY.
THE FRECUENCY OF VALUES MUST BE THE SAME
*/

// INPUTS: TWO ARRAY
// OUTPUT TRUE OR FALSE

// CHECK WHETHER THEY ARE SAME LENGTH, RETURN FALSE IF NOT
 // CREATE A MAP CONTAININ THE VALUE OF ARRAY ONE AS KEY AND ITS SQUARED AS VALUE
// LOOP OBJECT
// CHECK WHETHER ARRAY TWO CONTAININS OBJECT[KEY] VALUE
    // IF FALSE RETURN FALSE
    // REMOVE ELEMENT NUM^2 IN ARRAY TWO 
// RETURN TRUE
/*

//O(N^2)
function same(array1, array2) {
    if(array1.length !== array2.length) return false;
    for(var num of array1) {
        var squared = num ** 2;
        var num2Index = array2.indexOf(squared);
        if(num2Index === -1) return false;
        array2.splice(num2Index, 1);
    }
    return true;
}*/

//O(N)
function same(array1, array2) {
    if(array1.length !== array2.length) return false;
    let frecuencyOne = {};
    let frecuencyTwo = {};
    for(let num of array1)
        frecuencyOne[num] = ++frecuencyOne[num] || 1;

    for(let num of array2)
        frecuencyTwo[num] = ++frecuencyTwo[num] || 1;
        
    for(let key in frecuencyOne) {
        if(!(key ** 2 in frecuencyTwo)) return false;
        if(frecuencyOne[key] !== frecuencyTwo[key ** 2]) return false;
    }

    return true;
}