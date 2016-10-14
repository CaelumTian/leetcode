/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number}
 */
var findMedianSortedArrays = function(nums1, nums2) {
    var arr = nums1.concat(nums2).sort(function(a, b) {
        return a - b;
    });
    var len = arr.length;
    if(len % 2 === 1) {
        var key = parseInt(arr.length / 2);
        return arr[key];
    }else {
        var key = arr.length / 2 - 1;
        return (arr[key] + arr[key + 1]) / 2;
    }
};