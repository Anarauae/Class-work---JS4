// let myNum = -15;
// let myFloat = 15.12;

// console.log(myFloat);

// let myBigint = 123456789012345678901234567890n;

// let myBigint2 = Bigint("123456789012345678901234567890");

// console.log(myBigint);
// console.log(myBigint2);



//let a = 10;
//let b = 5;

// clojenie
//console.log(a + b)

//vychitenie
//console.log(a - b)

//umnojenie
//console.log(a * b)

//delenie
//console.log(a / b)

//ostatok
//console.log(a % b)

//vozvedenie
//console.log(a ** b)

//console.log(4 + 2 *5);

//console.log((4 + 2) *5);

//sprava na napravo chitaet toest 4 mins 2 a potom plus 5
//console.log(4 - 2 + 5);


//let a = 1;

//increment
//console.log(a++);
//console.log(a);


//decrement
//console.log(a--);
//console.log(a);

//let a = -1;

//console.log(a);

//let a = 5;
//a = +a

//console.log(typeof a);

//let roomLength = promt("Vedite dlinu room");
//let roomWidth = prompt("vedite shirinu room");

//let roomArea = roomLength * roomWidth;


//document.write(<h1>Ploshad vashei komnaty: ${roomArea.toFixed(2)} </h1>);

//let roomLength = prompt("Введите длину комнаты");
//let roomWidth = prompt("Введите ширину комнаты");

//let roomArea = roomLength * roomWidth;

//document.write(<h1>Площадь вашей комнаты составляет: ${roomArea.toFixed(2)}</h1>);



//task 3

// let landLength = prompt("Ведите длину участка:");
// let landWidth = prompt("Ведите ширину участка:");

// const SQ_FEET_PER_ACRE = 43560;

// let acres = (landLength * landWidth) / SQ_FEET_PER_ACRE;

// document.write(`<h1>Площадь вашей участка составляет: ${acres.toFixed(3)}</h1>`);



//task 4

// const LESS_DEPOSIT = 0.1;
// const MORE_DEPOSIT = 0.25;

// let lessBottles = prompt("Сколько у вас бутылок обьемом 1л и меньше?");
// let moreBottles = prompt("Сколько у вас бутылок обьемом больше 1л?");

// let refund = lessBottles*LESS_DEPOSIT+moreBottles*MORE_DEPOSIT;

// document.write(`Выручка от сданных бутылок составит: $${refund.toFixed(2)}`);


//task5
// document.write(`<h1>Общая сумма: ${sum} </h1>`);
// document.write(`<h3>Сумма заказа: ${Bill.toFixed(2)} </h3>`);
// document.write(`<h3>Tips: ${tips} </h3>`);
// document.write(`<h3>Tax: ${tax} </h3>`);

let Bill = prompt("Сумма заказа");
let tips = Bill*0.18;
let tax = Bill*0.05;

let summBill = Number (+ Bill+(tips+tax));

document.write(Bill +" - Сумма заказа <br>");
document.write(tips.toFixed(2) +" - чаевые <br>");
document.write(tax.toFixed(2) +" - налог с продаж<br>");
document.write(summBill.toFixed(2) +" - Общая сумма <br>");