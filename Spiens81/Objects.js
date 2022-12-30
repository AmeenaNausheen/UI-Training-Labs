var arr = [10, 20, 30];
const obj = {
    empId: 1001,
    eName: 'Ameena',
    works: (tasks) => {
        for (let i = 0; i < tasks.length; i++){
            console.log(tasks[i]);
            sendEmail();
        }
    },
    projects: ['Illustration Pro', 'Underwritting Pro'],
    accolades:['Best Dancer Award',{y2021:['Best Developer of Year 2021','Spot Award']}]
};

function sendEmail() {
    console.log("Email sent to hr@sapiens.com");
}

//access 20
// console.log(arr[1]);
// console.log(obj.eName);
// //obj.works(['coding', 'testing']);
// console.log(obj.projects[0]);
// console.log(obj.accolades[1].y2021[0]);


// ========================== Using Object API's,Instead of creating a function class for Instantiation
Object.seal(obj);
var Ameena = Object.create(obj);
var Rahul = Object.create(obj);

Ameena.empId = 1001;
Ameena.eName = 'Nausheen';
//Ameena.works(['Attending a training']);
Ameena.hobbies = ['Signing', 'Reading'];        // it is a problem using object api
//Object.freeze(Ameena);                        // will not change or delete object properties after freezing
Ameena.empId = 20321;
console.log(Ameena);

Rahul.empId = 1003;
Rahul.eName = 'Rahul';
//Rahul.works(['Solving a bug']);
// Object.seal(Rahul);
// Rahul.empId = 30000;
// Rahul.hobbies = ['River rafting'];
// Rahul.projects=['Illustration']
console.log(Rahul);

//Object.assign(copy, obj);
//console.log(copy);

//======================== Function classes

function objEmp() {
    this.id = 0;
    this.Name = "Ameena";
    this.Age = "20";
    this.Gender = "Female";
}
var empVar = new objEmp();
empVar.isPresent = true;
Object.seal(empVar);
empVar.isPresent = false;
Object.seal(empVar);
console.log(empVar);

var empVar01 = Object.create(objEmp);
console.log(empVar01);