/**
 * @param {string} s
 * @return {boolean}
 */
var isValid = function(s) {
    var stack = [];
    for(var i = 0; i < s.length; i++) {
        if(s[i] === "{" || s[i] === "(" || s[i] === "[") {
            stack.push(s[i]);
        }
        if(s[i] === "}" || s[i] === ")" || s[i] === "]") {
            var curr = s[i];
            var pre = stack[stack.length - 1];
            switch(curr) {
                case "}":
                    if(pre === "{") {
                        stack.pop();
                    }else {
                        return false;
                    }
                    break;
                case ")":
                    if(pre === "(") {
                        stack.pop();
                    }else {
                        return false;
                    }
                    break;
                case "]":
                    if(pre === "[") {
                        stack.pop();
                    }else {
                        return false;
                    }
                    break;
            }
        }
    }
    if(stack.length === 0) {
        return true;
    }else {
        return false;
    }
};