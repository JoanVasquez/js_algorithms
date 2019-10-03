/*
WRITE A FUNCTION SAMEFRECUENCY. GIVEN TWO POSITIVE INTEGERS, FIND OUT IF THE TWO NUMBERS HAVE SAME FRECUENCY OF DIGITS.

EXAMPLE:
182, 281 => TRUE 182 -> (1:1, 8:1, 2:1), 281 -> (1:1, 8:1, 2:1)
22, 222 => FALSE 22 -> (2: 2), 222 -> (2: 3)
*/

/*
    INPUTS: TWO POSITIVE INTEGERS
*/

/*
WRITE A FUNCTION NAMED SAMEFRECUENCY
    IF INTEGERS LENGTH AIN'T SAME RETURN FALSE
    CREATE AN OBJECT NAMED COUNTERONE, COUNTERTWO

    LOOP FIRST INTEGER 
        IF COUNTERONE DOES NOT CONTAIN DIGIT 
            ADD DIGIT WITH VALUE 1
        ELSE INTECREMENT COUNTERONE AT POSITION DIGIT

     LOOP SECOND INTEGER 
        IF COUNTERTWO DOES NOT CONTAIN DIGIT 
            ADD DIGIT WITH VALUE 1
        ELSE INTECREMENT COUNTERTWO AT POSITION DIGIT

    LOOP COUNTERONE
        IF COUNTERONE AT KEY IS DIFFERENT TO COUNTERTWO AT KEY
            RETURN FALSE


    RETURN TRUE

*/

function sameFrequency(num1, num2){
    if(num1.toString().length !== num2.toString().length) return false;

    var counterOne = createMap(num1);
    var counterTwo = createMap(num2);

    for(var key in counterOne)
        if(counterOne[key] !== counterTwo[key]) return false;

    return true;

}

function createMap(num) {
    var counter = {};
    for(var digit of num.toString()) {
        counter[digit] = ++counter[digit] || 1;
    }
    return counter;
}