/*
WRITE A FUNCTION WHICH IS GONNA TAKE TWO ARGUMENTS, ONE ARRAY AND ONE INTEGER.
FIND THE MAX SUM IN A CONTINUE BLOCK ACCORDING TO THE INTEGER.

EXAMPLE
[5, 6, 8, 7], 2 => 8 + 7 = 15
[2, 9, 4, 3], 3 => 9 + 4 + 3 = 16
*/

/*
INPUTS: ARRAY OF NUMBERS, AN INTEGER
O(N^2)

[5, 6, 8, 7], 2
5 + 6 = 11, 6 + 8 = 14, 8 + 7 = 15, RETURN 15

STEPS
CREATE A VAR NAME MAX =Infinity (take negative numbers in consideration)
loop arr from 0 to < arr length - n + 1
    create a temp var = 0
    loop from 0 to < n
        temp = array[i + j]
    if temp is greater than max
        max equal to temp

return max;
*/

/*function maxSum(arr, n) {
    var max = - Infinity;
    for(var i = 0; i < arr.length - n + 1; i++) {
        var temp = 0;
        for(var j = 0; j < n; j++) temp += arr[i + j];
        if(temp > max) max = temp;
    }
    return max;
}*/

//O(N)
function maxSum(arr, n) {
    let maxSum = 0;
    let tempSum = 0;
    if(arr.length < n) return null;
    for(let i = 0; i < n; i++) maxSum += arr[i];
    tempSum = maxSum;
    for(let i = n; i < arr.length; i++) {
        tempSum = tempSum - arr[i - n] + arr[i];
        maxSum = Math.max(maxSum, tempSum);
    }

    return maxSum;
}