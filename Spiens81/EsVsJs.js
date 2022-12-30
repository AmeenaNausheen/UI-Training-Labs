var num = 100;
if (true) {
    let num = 200;
    console.log(num);
}
console.log(num);

let greetings = ['Hello', 'Namaste', 'Ola'];                                   // strucuring
let [engGreet, hindiGreet, spanishGreet] = greetings;                          // De-structuring
console.log(`English: ${engGreet} | Hindi: ${hindiGreet} | Spanish: ${spanishGreet}`);

let [, g2,] = greetings;
let [g1] = greetings;
console.log(g2);
console.log(g1);


// Spread Operator

let randomNums = [1, 3, 5, 7, 9, 10, 11, 13, 15, 19, 21];
let [n1, , , , ...nums] = randomNums;
console.log(...nums);
console.log(n1);

let swap = (x, y) => {
    return [x, y] = [y, x];
}
console.log(swap(100, 200));

function createShape(type = 'circle') {
    console.log(type);
}
createShape();
createShape('square');

let printBill = (...items) => {
    for (const item of items) {
        console.log(`item: ${item}....... INR 0`);
    }
}

printBill();
printBill('Groceries', 'IPhone14', 'Screen Guard');