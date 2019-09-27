/*
    GIVEN TWO STRINGS, WRITE A FUNCTION TO DETERMINE IF THE SECOND STRING IS AN ANAGRAM
    OF THE FIRST. AN ANAGRAM IS A WORD, PHRASE, OR NAME FORMED BY REARRANGING THE LETTERS OF
    ANOTHER, SUCH AS CINEMA, FORMED FROM ICEMAN
*/

//INPUT TWO STRINGS
//OUTPUT TRUE/FALSE

/*
'', '' = TRUE
AAZ, ZZA = FALSE
ANAGRAM, NAGARAM = TRUE
*/

/*

    CREATE A FUNCTION TO CHECK WHETHER IS AN ANAGRAM, WHICH IS GONNA TAKE TWO STRINGS AS PARAMS
        CREATE A VAR NAMED STRINGONEMAP = FUNCTION TO REMOVE SPACE AND MAKE STRING LOWERCASE
        CREATE A VAR NAMED STRINGTWOMAP = FUNCTION TO REMOVE SPACE AND MAKE STRING LOWERCASE

        IF STRINGONEMAP LENGTH IS DIFFERENT THAN STRINGTWOMAP LENGTH RETURN FALSE
        LOOP STRINGONEMAP
            IF STRINGONEMAP VALUE IS DIFFERENT THAN STRINGTWOMAP VALUE RETURN FALSE

    CREATE A FUNCTION TO REMOVE SPACE AND MAKE STRINGS LOWERCASE (FORMAT STRING) -> RETURN A MAP
        CREATE A VAR OBJECT TO GET CHARS COUNT
        LOOP STRING 
            IF CHAR IS NOT AN SPACE 
                IF OBJECT DOES NOT HAVE CHAR
                    OBJECT KEY IS CHAR AND ITS VALUE IS 1
                ELSE OBJECT KEY + 1
        RETURN OBJECT OF CHARS COUNT
*/

//O(N)
/*function isAnagram(str1, str2) {
    var strMapOne = buildCharMap(str1);
    var strMapTwo = buildCharMap(str2);

    if(Object.keys(strMapOne).length !== Object.keys(strMapTwo).length) return false;
    for(let key in strMapOne) 
        if(strMapOne[key] !== strMapTwo[key]) return false;
    
    return true;
}

function buildCharMap(str) {
    var mapCounter = {};
    for(var char of str) {
        if(char !== ' ') {
            mapCounter[char] = ++mapCounter[char] || 1;
        }
    }
    return mapCounter;
}*/

//O(1)

function isPalindrome(str1, str2) {
    return strClean(str1) === strClean(str2);
}

function strClean(str) {
    return str.replace(/[^W]/g, "").toLowerCase().split("").sort().join("");
}