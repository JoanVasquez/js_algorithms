//WRITE A FUNCTION WHICH COUNT THE CHARS IN A STRING
//hello

/*
{
    h: 1,
    e: 1,
    l: 2,
    o: 1
}
*/


function charCount(str) {
    //create an object containing the result to be returned
    // loop the for every char of the string
        //if result object contain char, increment
        //else result object add char as key and value 1
    // return result

    var result = {};

    for(var char of str) {
        if(/[a-z0-9]/.test(char)) {
            char = char.toLowerCase();
            result[char] = ++result[char] || 1;
        }
    }

    return result;
}

