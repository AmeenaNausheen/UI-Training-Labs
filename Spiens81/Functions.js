// Named function
function fnamed() {}

//----------------------------------------

//Named function Expression
// . It is only used for recursion
var frndNamed = function friendlyName() {
    if (100 == 101) {
        friendlyName();
    }
};
frndNamed();  // calling named function outside


//----------------------------------------

//Anonymous Function Expression
// . They are self invoking anonymous functions
// . They are called as IIFE - Immediately Invoking Function Expression
var fAnonymous = function () {
    
}

//Anonymous function
// (function () {
//     return "I'm orphaned";
// })

// By using () at the end of the function declaration it gets invoked itself
((function () {
    return 'JQUERY';
})());

console.log(
    (function () {
        this.$ = function () {
            
        }
        this.ajax = function (url, params) {
            
        }
    })()
)

//----------------------------------------//

//Anonymous function => Arrow Functions

var sum = (a, b) => {
    console.log(a.toString().concat(b.toString()));
    return a + b;
}
console.log(sum(100, 200));

var mul = (a, b) => a * b;
console.log(mul(5, 10));

var simpleSum = function (a, b) {
    return a + b;
}

console.log(simpleSum(100, 200));

//----------------------------------------//

// Callback Functions - jQuery

function addEventListner(eventName, fnHandler) {
    console.log('Triggering event :' + eventName);
    fnHandler();
}

addEventListner('click', () => console.log("Mouse left click triggered"));
addEventListner('cal', () => console.log("Math calculation activated"));


// JS can have infinite function parameters

function AddUp() {
    var result = 0;
    for (var i = 0; i < arguments.length; i++){
        result += arguments[i];
    }
    console.log(result)
    console.log(`The total is: ${result},
    This result was possible bcoz of parameters stored in js object "arguments.
    The values in arguments are ${arguments.length}`);
}
AddUp(10, 20);
AddUp();
AddUp(10, 20, 30, 40);