/*
Create an object called Teacher derived from the Person class, and implement a method called teach which receives a string called subject, and prints out:
    
    [teacher's name] is now teaching [subject]

Guidelines:
    1.  The expected output should be achieved using the keyword .prototype.
    2.  Reference:
    
    Var Person = function() {};
    Person.prototype.initialize=function(name,age)
    {
        this.name=name;
        this.age=age;
    }
    // TODO: create the class Teacher and a method teach
    varnhim = new Teacher();
    him.initialize("Adam",45);
    him.teach("Inheritance");
    
Outcome:
    1.  The candidates will understand how inheritance works in JS.
    2.  The candidates will understand what a prototype keyword is in JS.
*/

var Person = function () { };
Person.prototype.initialize = function (name, age) {
    this.name = name;
    this.age = age;
}

function Teacher() {

}

Teacher.prototype.teach = function (subject) {
    console.log(`${this.name} is now teaching ${subject}`);
}
Object.setPrototypeOf(Teacher.prototype, Person.prototype)

var him = new Teacher();
him.initialize("Adam", 45);
him.teach("Inheritance");
console.log(him);