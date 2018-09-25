/**
 * @param {number} n
 * @return {string[][]}
 */
var solveNQueens = function (n) {
    let result = [];
    let solution = [];
    let row = 0;
    findAll(result, n, row, solution);
    return result;
};
function findAll(result, n, row, solution) {
    if (row === n) {
        result.push(solution.slice(0, solution.length));
    }
    for (let i = 0; i < n; i++) {
        let str = '.'.repeat(n);
        str = str.slice(0, i) + 'Q' + str.slice(i + 1, str.length);
        solution.push(str);
        if (isValid(solution, row, i)) {
            findAll(result, n, row + 1, solution);
        }
        solution.pop();
    }
}

function isValid(str, row, col) {
    // 列检查  
    let count = 0;
    for (let i = 0; i <= row; i++) {
        if (str[i][col] === 'Q') {
            count++;
        }
        if (count > 1) {
            return false;
        }
    }
    count = 0;
    // 右对角线
    for (let i = row, j = col; i >= 0 && j >= 0; i-- , j--) {
        if (str[i][j] === 'Q') {
            count++
        }
        if (count > 1) {
            return false;
        }
    }
    count = 0;
    // 左对角线
    for (let i = row, j = col; i >= 0 && j < str[0].length; i-- , j++) {
        if (str[i][j] == 'Q')
            count++;
        if (count > 1) return false;
    }
    return true;
}