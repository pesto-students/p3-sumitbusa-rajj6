function fib(n) {
    if(n < 2) {
        return n;
    }
    return fib(n-1) + fib(n-2);
}

function time(fn) {
    console.time();
    fn();
    console.timeEnd();
}

function memoize(fn) {
    const cache = new Map();
    return function(...args) {
        const key = args.toString();
        if(cache.has(key)) {
           return cache.get(key);
        }
        cache.set(key, fn(...args));
        return cache.get(key);
    }
}

const fibM = memoize(fib);

time(() => fibM(20));
time(() => fibM(20));
time(() => fibM(21));
time(() => fibM(22));
time(() => fibM(21));
