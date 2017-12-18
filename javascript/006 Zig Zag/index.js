/**
 * @param {string} s
 * @param {number} numRows
 * @return {string}
 */
var convert = function (s, numRows) {
    var crycle = 2 * numRows - 2;
    var str = "";
    if (s.length === 0 || numRows < 2) {
        return s;
    }
    for (var i = 0; i < numRows; i++) {
        for (var j = i; j < s.length; j += crycle) {
            str += s[j];
            if (i > 0 && i < numRows - 1) {
                var t = j + crycle - 2 * i;
                if (t < s.length) {
                    str += s[t];
                }
            }
        }
    }
    return str;
};