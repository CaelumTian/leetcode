/**
 * @param {number} n
 * @return {string[]}
 */
var generateParenthesis = function (n) {
    var arr = [];
    joinResult(arr, "", n, n);
    function joinResult(arr, str, left, right) {
        if (left === 0 && right === 0) {
            arr.push(str)
            return;
        }
        if (left > 0) {
            joinResult(arr, str + '(', left - 1, right);
        }
        if (right > 0 && left < right) {
            joinResult(arr, str + ')', left, right - 1);
        }
    }
    return arr;
};