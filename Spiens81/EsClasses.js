class Person{
    constructor(name = '', gender = '', age = 0, ...others) {
        this.name = name;
        this.gender = gender;
        this.age = age;
        (() => {
            console.log('random');
        })();
    }
    works() {
        console.log('WAT :-D');
    }
    static sleeps() {
        console.log('........ZZZZZZZzzzzzzz...........');
    }
}
class Employoee extends Person{
    constructor(name = '', gender = '', age = 0, ...others) {
        super(name, gender, age, ...others);
        this.empId = 0;
        this.designation = '';
        this.salary = 0;
    }
    works() {
        console.log(`${this.name} is working as ${this.designation} for software products division`);
    }
}
let obj = new Person('Ameena','Female',25);
console.log(obj);
obj.works();
Person.sleeps();


var xyz = new Employoee('Ameena', 'Female', 25);
xyz.designation = 'Sr Developer';
xyz.salary = 250000;
xyz.empId = 0001
xyz.works();
console.log(xyz);