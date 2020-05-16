/* Write a function to find the longest common prefix string amongst an array of strings.

If there is no common prefix, return an empty string "".

Example 1:

Input: ["flower","flow","flight"]
Output: "fl"
Example 2:

Input: ["dog","racecar","car"]
Output: ""
Explanation: There is no common prefix among the input strings. */

var longestCommonPrefix = function (strs) {
    if (strs.length == 0) return ''
    let prefix = strs[0]
    strs.forEach(str => {
        let strLen = Math.min(prefix.length, str.length)
        let currStr = str.slice(0, strLen)

        function helper(pre, strtoCheck) {
            if ((pre[0] != strtoCheck[0]) || !pre) return '';
            // if(!pre ) return ''
            let preStr = '';

            if (pre[0] == strtoCheck[0]) {
                preStr += pre[0] + helper(pre.slice(1), strtoCheck.slice(1))
            }
            return preStr
        }

        prefix = helper(prefix, currStr)
        if (!prefix) return ''
    })
    return prefix

};
