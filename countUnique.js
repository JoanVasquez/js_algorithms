/*
Write a function called countUniqueValues which accepts an array, and count the uniquire values in the array.
There can be negative numbers in the array, but it will always be sorted.
*/

// INPUTS AN ARRAY OF SORTED NUMBERS
// OUT PUT AN INT

/*
EXAMPLE
[1,1,1,1,1,2] => 2
[] => 0
[-2,-1,-1,0,1] => 4
*/

/*
CREATE A FUNCTION NAMED countUniqueValues WHICH TAKES AN ARRAY AS PARAMETER
    CREATE AN ARRAY NAMED RESULT
    LOOP OVER THE ARRAY
        IF ARRAY RESULT DOES NOT INCLUDES THE ACTUAL ELEMENT
            ADD THE ACTUAL ELEMENT INTO RESULT ARRAY

    RETURN RESULT LENGTH
*/

/*function countUniqueValues(arr) {
    var result = [];
    for(var num of arr) 
        if(!result.includes(num)) result.push(num);
    
    return result.length;
}*/

function countUniqueValues(arr) {
    if(arr.length === 0) return 0;
    var i = 0;
    for(var j = 1; j < arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]
        }
    }
    return i + 1;
}