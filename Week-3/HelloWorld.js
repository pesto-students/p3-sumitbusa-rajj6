// const obj = {
//     firstName: 'Raj',
//     print: function() {
//         console.log(this.firstName)
//     }
// };

// setTimeout(obj.print, 100)

// var obj = {
//     firstName : 'Raj',
//     lastName : 'Jaiswal',
//     friends: ['Kumara', 'Bhasad', 'Hriju', 'Himanshu'],
//     loop : function() {
//         this.friends.forEach(function(friends) {
//             // console.log(this) 
//             console.log(this.firstName + ' knows ' +friends);
//         });
//     }
// };
// firstName = 'Krishnkant'
// obj.loop()

// function sum (a, b) {
//     console.log('called')
//     return 
//     a + b
// }
// console.log(sum(1,2));
// var a=null;
// console.log(a)


// function sum(a,b) {
//     console.log(a);
//     console.log(b);
// }
// sum(4);


// const obj = {};
// console.log(obj.name)

// // Closures
// for(var i = 0; i<3; i++) {
//     setTimeout( function log() {
//         console.log(i)
//     },100);
// }
//  // Output 
//  3
//  3
//  3

// SCOPE pata hi hai

//  let myName = 'Raj'
//  function printName() {
//     let myName = 'Chacha'
//     console.log(myName)
//  }

//  printName()

//  myName = 'Krishnkant'

//  printName()

// Nesting of scope

// Lexical(Static) Scope

// let count = 0;
// setTimeout(function(){
//     count++;
//     console.log(`In setTimeOut - ${count}`);
// }, 100);

// console.log(count)


// for (var i = 0; i < 3; i++) {
//     setTimeout(function log() {
//         console.log(i)
//     }, 100);
// }


// for (let i = 0; i < 3; i++) {
//     setTimeout(function log() {
//         console.log(i)
//     }, 100);
// }


// for (var i = 0; i < 3; i++) {
//     setTimeout(
//         (function (i) {
//             return function logger() {
//                 console.log(i)
//             }
//         })(i),
//         100);
// }

// function createConter() {
//     let count = 0;
//     let message;
//     function increment() {
//         count++;
//         message = `Count is ${count}`;
//     }
    
//     function log() {
//         console.log(message);
//     }

//     return [increment, log]
// }

// const [increment, log] = createConter()

// increment()
// increment()
// log()


// function createUser(initialName) {
//     let name = initialName;
//     return {
//         getName(){
//             return name;
//         },
//         setName(newName) {
//             name = newName;
//         }
//     }
// }

// let p1 = createUser('Raj'); // here you are creating new environment ENV {name :"Raj", {getName, setName}}
// let p2 = createUser('Ruby');

// console.log(p1.getName());
// console.log(p2.setName('Krishna'));
// console.log(p2.getName());

// function fib(n) {
//     if(n < 2) {
//         return n;
//     }
//     return fib(n-1) + fib(n-2);
// }

// function time(fn) {
//     console.time();
//     fn();
//     console.timeEnd();
// }

// function memoize(fn) {
//     const cache = new Map();
//     return function(...args) {
//         const key = args.toString();
//         if(cache.has(key)) {
//            return cache.get(key);
//         }
//         cache.set(key, fn(...args));
//         return cache.get(key);
//     }
// }

// const fibM = memoize(fib);

// time(() => fibM(20));
// time(() => fibM(20));
// time(() => fibM(21));

// function foo() {
//     console.log(this.a)
// }

// foo()           //! undefined 

// const obj = {
//     a : 2,
//     print : foo
// }

// obj.print();        // implisit binding

// var counter = {
//     count : 0,
//     inc : function() {
//         console.log('inc was called');
//         this.count++;
//     }
// }

// var fn = counter.inc;
// fn();
// console.log(counter.count);
// console.log(global.count);

// counter.inc()
// console.log(counter.count)

// setTimeout(counter.inc, 100);
// setTimeout(() => {
//     console.log(counter.count);
// }, 200);
// console.log(counter.count)

// Arrow function

// var obj = {
//     firstName : 'Raj',
//     friends: ['Kumara', 'Bhasad', 'Hriju', 'Himanshu'],
//     loop : function() {
//         // this == obj 
//         this.friends.forEach(function(friends) {
//             // console.log(this) 
//             console.log(this.firstName + ' knows ' +friends);
//         });
//     }
// };
// obj.loop()

// var obj = {
//     firstName : 'Raj',
//     friends: ['Kumara', 'Bhasad', 'Hriju', 'Himanshu'],
//     loop : function() {
//         // this == obj
//         that = this
//         this.friends.forEach(function(friends) {
//             // console.log(this) 
//             console.log(that.firstName + ' knows ' +friends);
//         });
//     }
// };
// obj.loop()


// var obj = {
//     firstName : 'Raj',
//     friends: ['Kumara', 'Bhasad', 'Hriju', 'Himanshu'],
//     loop : function() {
//         // this == obj
//         this.friends.forEach(function(friends) {
//             // console.log(this) 
//             console.log(this.firstName + ' knows ' +friends);
//         }.bind(this));
//     }
// };
// obj.loop()

// var obj = {
//     firstName : 'Raj',
//     friends: ['Kumara', 'Bhasad', 'Hriju', 'Himanshu'],
//     loop : function() {
//         // this == obj
//         this.friends.forEach(function(friends) {
//             // console.log(this) 
//             console.log(this.firstName + ' knows ' +friends);
//         }, this);
//     }
// };
// obj.loop()

// var obj = {
//     firstName : 'Raj',
//     friends: ['Kumara', 'Bhasad', 'Hriju', 'Himanshu'],
//     loop : function() {
//         // this == obj
//         this.friends.forEach((friend) => {
//             // console.log(this) 
//             console.log(this.firstName + ' knows ' +friend);
//         });
//     }
// };
// obj.loop()


// function sum(a, b) {
//     return this.a+this.b;
// }

// console.log(sum(5,6)); //  NaN

// const sumB = sum.bind({a:1, b:2});
// console.log(sumB());
// console.log(sumB.bind({a:2, b:3}));
// console.log(sum.bind({a:2, b:3}))
// console.log(sum.bind({a:2, b:3})())

// var module = {
//     x : 42,
//     getX: function() {
//         return this.x;
//     }
// }

// var fn1 = module.getX;
// var fn2 = module.getX.bind(module);
// console.log(fn1()); // undefined
// console.log(fn2()); // 42


// function product(a,b ) {
//     return a*b;
// }

// console.log(product(5,10));
// const double = product.bind(null, 2);

// console.log(double(6));

// console.log(typeof double)

// function greet() {
//     var reply = [
//         this.animal,
//         'typically sleep for ',
//         this.sleepDuration
//     ].join(' ');

//     console.log(reply);
// }

// var cats = {
//     animal : 'Cat',
//     sleepDuration : '3 Hours'
// }

// console.log(greet.call(cats))

// function greet(name) {
//     var reply = [
//         name,
//         this.animal,
//         'typically sleep for ',
//         this.sleepDuration
//     ].join(' ');

//     console.log(reply);
// }

// var cats = {
//     animal : 'Cat',
//     sleepDuration : '3 Hours'
// }
// greet.call(cats, 'raj');
// greet.call(cats)

// console.log(Math.max(2,3,6));
// console.log(Math.min(2,3,6));

numbers = [5, 6, 2, 3, 7]

console.log(Math.max.apply(null, numbers))
console.log(Math.min.apply(null, numbers))