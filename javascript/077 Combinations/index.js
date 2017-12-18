/**
 * @param {number} n
 * @param {number} k
 * @return {number[][]}
 */
var combine = function (n, k) {
    var result = [];
    var arr = [];
    findAll(n, k, 1, result, arr)

    function findAll(n, k, index, result, arr) {
        if (arr.length === k) {
            result.push(arr.slice(0, k));
        }
        for (var i = index; i <= n; i++) {
            arr.push(i);
            findAll(n, k, i + 1, result, arr);
            arr.pop();
        }
    }
    return result;
};