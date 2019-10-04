function isSubsequence(strOne, strTwo) {

    let counter = 0;
    let pointer = 0;

    for(let char2 of strTwo) {
        if(char2 === strOne[pointer]) {
            counter++;
            pointer++;
        }
        if(counter === strOne.length) {
            return true;
        }
    }

    return false;
}