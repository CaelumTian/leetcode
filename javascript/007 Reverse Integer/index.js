/**
 * @param {number} x
 * @return {number}
 */
var reverse = function(x) {
    if(Math.abs(x) > 2147483647) {
        return 0;
    }
    if(x >= 0) {
        return Number(String(x).split("").reverse().join(""));
    }else {
        return Number(-1 * String(x * -1).split("").reverse().join(""));
    }
};
