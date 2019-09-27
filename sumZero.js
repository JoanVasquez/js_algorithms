/*
WRITE A FUNCTION WHICH TAKES IN AN ARRAY AS ARGUMENT AND FIND THE FIRST PAIR WHICH SUM RESULTS INTO ZERO
*/

// INPUT ARRAY
// OUTPUT ARRAY WITH NUMS THAT SUM RESULTS INTO ZERO

/*
CREATE A FUNCTION NAMED sumZero WITH AN ARRAY AS ARGUMENT.
IF ARRAY LENGHT > 1
    CREATE A VAR LEFT = 0
    CREATE A VAR RIGHT = ARRAY LENGHT - 1
    WHILE LEFT < RIGHT
        VAR SUM = ARRAY[LEFT] + ARRAY[RIGHT]
        IF SUM IS EQUAL TO ZERO RETURN [ARRAY[LEFT], ARRAY[RIGHT]]
        ELSE IF (SUM > 0) RIGHT = RIGHT - 1
        ELSE LEFT = LEFT + 1
*/

function sumZero(arr) {
    if(arr.length > 1) {
        var left = 0;
        var right = arr.length - 1;
        while(left < right) {
            var sum = arr[left] + arr[right];
            if(sum === 0) return [arr[left], arr[right]];
            else if(sum > 0) right--;
            else left++;
        }
    }
}