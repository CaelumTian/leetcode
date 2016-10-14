/**
 * @param {string} s
 * @return {number}
 */
var lengthOfLongestSubstring = function(s) {
    var len = s.length;
	var pHead = 0;
	var maxLen = 0;
	var map = {};
	for(var pFoot = 0; pFoot < len; pFoot++) {
		var val = s[pFoot];  //当前值
		if(map[val] === undefined) {
			map[val] = pFoot;
		}else {
			maxLen = Math.max(maxLen, pFoot - pHead);
			while(s[pHead] !== val) {
				map[s[pHead]] = undefined;
				pHead++;
			}
			pHead++;
		}
	}
	maxLen = Math.max(maxLen, pFoot - pHead);
	return maxLen;
}