// .bind example
function sum(a, b) {
    return this.a+this.b;
}

console.log(sum(5,6)); //  NaN
const sumB = sum.bind({a:1, b:2}); 
console.log(sumB());                    // 3
console.log(sum.bind({a:2, b:3})())     // 5

var module = {
    x : 42,
    getX: function() {
        return this.x;
    }
}

var fn1 = module.getX;                  // fn1 is non binded method
var fn2 = module.getX.bind(module);     // fn2 is binded method
console.log(fn1()); // undefined
console.log(fn2()); // 42


// .call example
function greet() {
    var reply = [
        this.animal,
        'typically sleep for ',
        this.sleepDuration
    ].join(' ');

    console.log(reply);
}

var cats = {
    animal : 'Cat',
    sleepDuration : '3 Hours'
}

console.log(greet.call(cats))

function greet(name) {
    var reply = [
        name,
        this.animal,
        'typically sleep for ',
        this.sleepDuration
    ].join(' ');

    console.log(reply);
}

var cats = {
    animal : 'Cat',
    sleepDuration : '3 Hours'
}
greet.call(cats, 'raj');
greet.call(cats)


// .apply example
console.log(Math.max(2,3,6));
console.log(Math.min(2,3,6));

numbers = [5, 6, 2, 3, 7]

console.log(Math.max.apply(null, numbers))
console.log(Math.min.apply(null, numbers))