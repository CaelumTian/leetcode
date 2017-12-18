/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum2 = function (candidates, target) {
    var result = [];
    var temp = [];
    var sum = 0;
    candidates.sort(function (a, b) {
        return a - b;
    })
    findAll(candidates, target, 0, sum, temp);
    function findAll(candidates, target, index, sum, temp) {
        if (sum > target) {
            return;
        }
        if (sum === target) {
            for (var i = 0; i < result.length; i++) {
                if (result[i].join('-') === temp.join('-')) {
                    return;
                }
            }
            result.push(temp.slice(0, temp.length));
            return;
        }
        for (var i = index; i < candidates.length; i++) {
            temp.push(candidates[i]);
            sum += candidates[i];
            findAll(candidates, target, i + 1, sum, temp);
            sum -= candidates[i];
            temp.pop();
        }
    }
    return result;
};