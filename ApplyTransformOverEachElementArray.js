/**
 * @param {number[]} arr
 * @param {Function} fn
 * @return {number[]}
 */
var map = function(arr, fn) {
    var result = [];
    for(let i = 0; i < arr.length; i++){
        var value= fn(arr[i], i);
        result.push(value);
    }
    return result;
};