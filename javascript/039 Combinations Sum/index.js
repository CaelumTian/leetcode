/**
 * @param {number[]} candidates
 * @param {number} target
 * @return {number[][]}
 */
var combinationSum = function (candidates, target) {
    var result = [];
    var temp = [];
    var sum = 0;
    findAll(candidates, target, 0, sum, temp);
    function findAll(candidates, target, index, sum, temp) {
        if (sum > target) {
            return;
        }
        if (sum === target) {
            result.push(temp.slice(0, temp.length));
            return;
        }
        for (var i = index; i < candidates.length; i++) {
            temp.push(candidates[i]);
            sum += candidates[i];
            findAll(candidates, target, i, sum, temp);
            sum -= candidates[i];
            temp.pop();
        }
    }
    return result;
};