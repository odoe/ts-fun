// a -> a
exports.identity = function (x) { return x; };
// a -> a
exports.identityf = function (x) { return function () { return x; }; };
// (a -> a) -> (a -> a)
exports.liftf = function (f) { return function (x) { return function (i) { return f(x, i); }; }; };
// Number -> Number
exports.addf = exports.liftf(function (x, i) { return x + i; });
// (a -> b) -> (a -> b)
//export const curry = (f, x) => liftf(f)(x);
exports.curry = function (f) {
    var x = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        x[_i - 1] = arguments[_i];
    }
    return function () {
        var i = [];
        for (var _i = 0; _i < arguments.length; _i++) {
            i[_i - 0] = arguments[_i];
        }
        return f.apply(void 0, x.concat(i));
    };
};
// Number -> Number
exports.inc = exports.addf(1);
