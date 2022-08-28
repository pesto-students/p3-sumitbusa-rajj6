// Implement Fibonacci Series with Iterators

FibonacciSeries = function (size = 10) {
    this.size = size;
    return {
        [Symbol.iterator]() {
            let i = 0;
            let secondLast = 0;
            let last = 1;
            return {
                next() {
                    let value = 0;
                    if (i === 0 || i === 1) {
                        value = i;
                    } else {
                        value = last + secondLast;
                        secondLast = last;
                        last = value;
                    }
                    return {
                        value: value,
                        done: ++i > size
                    };
                }
            };
        },
    }
}

console.log('The Fibonacci Series is:')
const itr = FibonacciSeries(7)[Symbol.iterator]();
let next = itr.next();
while(!next.done) {
    console.log(next.value);
    next = itr.next();
}