/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number[]}
 */
var twoSum = function(nums, target) {
    var obj = {};
    for(var i = 0, len = nums.length; i < len; i++) {
        obj[nums[i]] = i;
    }
    for(var i = 0, len = nums.length; i < len; i++) {
        var aim = target - nums[i];
        if(obj[aim] && obj[aim] !== i) {
            return [i, obj[aim]]
        }
    }
};