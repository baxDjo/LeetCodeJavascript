/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var filter = function (arr, fn) {
    var result = [];
    for (let i = 0; i < arr.length; i++) {
        var value = fn(arr[i], i);
        if (value) {
            result.push(arr[i]);
        }
    }
    return result
};