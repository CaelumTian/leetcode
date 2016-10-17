/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
    if(height.length < 2) {
        return 0;
    }
    var result = 0;
    var lp = 0;
    var rp = height.length - 1;
    while(lp < rp) {
        var curr = (rp - lp) * Math.min(height[lp], height[rp]);
        if(curr > result) {
            result = curr;
        }
        if(height[lp] < height[rp]) {
            lp++
        }else {
            rp--;
        }
    }
    return result;
};
