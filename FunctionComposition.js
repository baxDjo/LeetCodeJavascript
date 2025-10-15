/**
 * @param {Function[]} functions
 * @return {Function}
 */
var compose = function(functions) {
    return function(x) {
        return functions.reduceRight(function(acc,fn) {
            return fn(acc);
        }, x);
    };
};


const fn = compose([x => x + 1, x => 2 * x])
console.log(fn(4)); // 9


var test = [2,5,20];

var result = test.reduce((init, x) => {
    return init + x;
}, 2);

console.log('result ', result);