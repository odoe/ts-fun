// a -> a
export const identity = (x) => x;
// a -> a
export const identityf = (x) => () => x;
// (a -> a) -> (a -> a)
export const liftf = (f) => (x) => (i) => f(x, i);
// Number -> Number
export const addf = liftf((x, i) => x + i);
// (a -> b) -> (a -> b)
//export const curry = (f, x) => liftf(f)(x);
export const curry = (f, ...x) => (...i) => f(...x, ...i);
// Number -> Number
export const inc = addf(1);
