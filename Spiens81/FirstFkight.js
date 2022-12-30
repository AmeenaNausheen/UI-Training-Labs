console.log("First Flight");
var name = "Ameena";
var arr = [10, 20, 30];
var str = arr.toString();
console.log(str);
console.log(arr);

//Object Literal
var obj = { id: 100, eName: 'Ameena' };
obj.designation = 'Sr Developer';
console.log(obj);


// In Js - To create a class use function syntax
function emplyoee() {
    // Property    "this keyword act as a public access modifier"
    this.id = 0;
    this.eName = '';
    this.designation = '';

    // normal variable = private field
    var secret = "Top secret";

    // public function
    this.works = function () {
        return this.eName.concat(" Works");
    }

    // Private function
    var secretFn = function () {
        "Nobody outside can access me";
    }
    // Below code executes only if this is called as a function
    return "ha ha ha";
}
emplyoee();   // call as a function
var objEmp = new emplyoee();
console.log(objEmp);
console.log(emplyoee());

objEmp.id = 001;
objEmp.eName = 'Ameena';
objEmp.designation = 'Sr Dev';
console.log(objEmp.works());
console.log(objEmp.secretFn());


