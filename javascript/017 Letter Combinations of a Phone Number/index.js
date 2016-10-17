/**
 * @param {string} digits
 * @return {string[]}
 */
var letterCombinations = function(digits) {
    var result = [];
    var keys = {
        "1": ["*"],
        "2": ["a", "b", "c"],
        "3": ["d", "e", "f"],
        "4": ["g", "h", "i"],
        "5": ["j", "k", "l"],
        "6": ["m", "n", "o"],
        "7": ["p", "q", "r", "s"],
        "8": ["t", "u", "v"],
        "9": ["w", "x", "y", "z"],
        "0": [" "]
    }
    for(var i = 0; i < digits.length; i++) {
        result = makeCar(result, keys[digits[i]])
    }
    return result;
};
function makeCar(arr1, arr2) {
    var result = [];
    if(arr1.length === 0) {
        return arr2;
    }
    if(arr2.length === 0) {
        return arr1;
    }
    for(var i = 0; i < arr1.length; i++) {
        for(var j = 0; j < arr2.length; j++) {
            result.push(arr1[i]+arr2[j]);
        }
    }
    return result;
}