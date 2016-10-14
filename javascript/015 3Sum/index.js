/**
 * @param {number[]} nums
 * @return {number[][]}
 */
var threeSum = function(nums) {
    nums = nums.sort();
    var hashmap = {},
        len = nums.length,
        result = [];
    for(var i = 0; i < len; i++) {
        hashmap[i] = i;
    }
    for(var i = 0; i < len; i++) {
        var targetNum = nums[i] * -1;
        for(var j = i + 1; j < len; j++) {
            var firstNum = nums[j];
            var lastNum = targetNum - firstNum;
            if(hashmap[lastNum] !== undefined && hashmap[lastNum] > j) {
                result.push([nums[i]], firstNum, lastNum);
            }
        }
    }
    return result;
};