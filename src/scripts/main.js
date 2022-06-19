// console.log(-9.2 / 0);
// console.log('[NaN]', 92 / 'Hello world');

// alert('Hello world \nWorld hello');
// console.log('Hello world \tWorld hello');

// typeOf
// console.log(typeof 'Number');
// console.log(typeof 23);
// console.log(typeof true + 1);
// console.log(typeof false - 1);
// console.log(typeof 0, typeof null, undefined, null - 1);

// {}

// if (typeof data === "object") {
//     return
// }

// new Number();
// new String();
// new Object();
// new Array();
// new Boolean();

// Nothing
// alert('Hello world');
// String 23 => {}
// prompt('Hello world');
// Boolean
// confirm('Hello world');

// Math

// console.log(Math.min(12, 23, 32, 1, 24));
// console.log(Math.max(12, 23, 32, 1, 24));
// console.log(Math.sqrt(16));
// console.log(Math.floor(2.23));
// console.log(Math.round(2.5));

// const num = Number(prompt('Enter ur favorit number : '));

// if (!isNaN(num)) {
//     console.log('These nums is not NaN');
// }

// console.log('[num]', num);

// Function
// const MathM = {
//     minValue(a, b) {
//         if (a > b) {
//             return b;
//         } else if (a < b) {
//             return a;
//         } else {
//             return 'Huck you!';
//         }
//     }
// };

// const num1 = +prompt('Enter first number : ');
// const num2 = +prompt('Enter second number : ');
// const minValue = MathM.minValue(num1, num2);

// 12 * 12 , 23 * 23 , 12 * 12

// const num = prompt('Enter num');

// function square(x) {
//     return x * x;
// }

// const squareNumber = square(num);
// const anotherNumber = square(num * 2);

// console.log('[squareNumber]', squareNumber);
// console.log('[anotherNumber]', anotherNumber);

// const name = prompt('Enter ur name : ');

// function greeting(abstractName) {
//     if (abstractName.length > 3) {
//         console.log('Hello ' + abstractName);
//     }
// }

// greeting(name);
// greeting('Egor');
// greeting('Anton');

// const bestNameOfTheHuckingWorld = prompt(
//     'Hey hucker say waht is ur mfc anonimus name : '
// );

// greeting(bestNameOfTheHuckingWorld);

// 1) square function

// x => x / y / z  => x => y * y ? x => y => xx => nn
// function power(x, y) {
//     let result = 1;
//     if (y === 0) {
//         console.log('[something went wrong]');
//     } else {
//         for (let i = 0; i < y; i++) {
//             result *= x;
//         }
//         return result;
//     }
// }

// console.log(power(10, 5));

// scoped

// let globalVariable = '[KEK]';
// console.log('[globalVariable]', globalVariable);

// function printScopedprtToTheConsole() {
//     let globalVariable = '[SOMETHING]';

//     console.log('[globalVariable]', globalVariable);
// }

// console.log('[globalVariable]', globalVariable);

// printScopedprtToTheConsole();

// console.log('[globalVariable]', globalVariable);

// const plus = function (x, y) {
//     return x + y;
// };

// console.log(plus(23, 23));

// (function (x, y) {
//     console.log(x + y);
// })(32, 23);

// let johnsNumber;

// function plus(x, y) {
//     return +x + +y;
// }

// const userName = prompt('How are you ?');

// if (userName === 'John') {
//     if (confirm("Do you wanna use add operation click 'Okay' ")) {
//         const theFirstNumberOfJohn = prompt('Enter ur first number : ');
//         const theSecondNumberOfJohn = prompt('Enter ur first number : ');

//         johnsNumber = plus(theFirstNumberOfJohn, theSecondNumberOfJohn);
//     }
// }

// console.log('[johnsNumber]', johnsNumber);
// function addNums(x, y) {
//     let result = x + y;
//     if (confirm('Do u wanna add 23 to your number')) {
//         return addTwentyThreeToUserNumber(result);
//     } else return result;

//     function addTwentyThreeToUserNumber(number) {
//         return number + 23;
//     }
// }

// console.log('[NUMBER]', );

// function multyplyOnTwo(number) {
//     return number * 2;
// }

// console.log('[result]', multyplyOnTwo(addNums(23, 32)));

// function sayHello() {
//     console.log('HEllo');
//     saySuuuui();
// }

// function saySuuuui() {
//     console.log('Suuuuuuuuuuui!');
//     sayHello();
// }

// sayHello();

// function valueByDefault(x = 23, y = 32) {
//     return x + y;
// }

// console.log('[valueByDefault()]', valueByDefault(2, 21));

// closurs

// function wrapValue(n) {
//     let local = n;

//     return function () {
//         return local * 2;
//     };
// }

// const firstV = wrapValue(23);
// console.log('[firstV]', firstV());
// Object (method)
// type of data
// property(key) -> value

// let john = {
// property -> value
//     name: 'John',
//     age: 23,
//     isStudent: true
// };
// . , ['']
// const johnsProperty = prompt('What the property do you wanna set for John ?');
// const johnsValue = prompt('What the value do you wanna set for John ?');
// john[johnsProperty] = johnsValue;
// debugger;
// delete john.age;
// debugger;

// const johnsName = {};
// console.log('[johnsName]', johnsName);
// console.log('[john]', john);

// john = {};
// console.log('[john]', john);

// 1)Добавить свойство деньги -> кол-во денег введет пользователь
// 2)Содаем ключ под назв. food -> burger
// 3)Удалить у Джона имя

// const john = {
//     name: 'John',
//     age: 23,
//     isStudent: true
// };
// const john1 = {
//     name: 'John',
//     age: 23,
//     isStudent: true
// };
// console.log(john === john1);

// console.log('[john]', john);
// debugger;
// john.skills = {
//     PL: 'HTML'
// };

// const html = john.skills.PL;
// console.log('[html]', html);

// const john = {
//     name: 'John',
//     age: 23,
//     isStudent: true,
//     skills: {
//         PL: 'C++'
//     }
// };

// console.log('[john['name']]', john['name']);
// for in
// for (let prop in john) {
//     console.log('[john["prop"]]', john[prop]);
// }

// console.log('name' in john);
// const word = 'hello';

// console.log(word[0]);
// console.log(word[1]);
// console.log(word[2]);
// console.log(word[3]);
// console.log(word[4]);

// for (let i = 0; i < word.length; i++) {
//     console.log('[word[i]]', word[i]);
// }
// const obj = {
//     name: 'Toshich',
//     age: 23
// };

// obj.food = 'Sniger';

// for (let key in obj) {
//     // console.log(obj[personalData]);
//     let value = obj[key];
//     console.log('[key]', key);
//     console.log('[value]', value);
//     console.log('----------------------');
// }

// const strName = 'name';

// console.log(obj.name);
// console.log(obj[strName]);

// const hasName = 'name' in obj;

// if (hasName) {
//     console.log('[obj.name]', obj.name);
// }

// const obj = {
//     name: 'John',
//     bag: {
//         food: 'Dishes',
//         frinks: 'Cola , Sprite , Pepsi'
//     },
//     surname: 'Doe'
// };

// for (let key in obj) {
//     let value = obj[key];

//     if (typeof value === 'object') {
//         for (let prop in value) {
//             let propValue = value[prop];

//             console.log('[prop]', prop);
//             console.log('[propValue]', propValue);
//             console.log('----------');
//         }

//         continue;
//     }
//     console.log('[key]', key);
//     console.log('[value]', value);
//     console.log('----------');
// }
// const obj = {};

// console.log(typeof obj);]
// funct

// const john = {
//     surname: 'Doe',
//     sayHello(name) {
//         console.log('Hello from John to ' + name);
//     },
//     greeting: function () {
//         return 'KeK';
//     }
// };
// const mike = {
//     surname: 'Smith',
//     sayHello() {
//         console.log('Hello from Mike');
//     }
// };

// john.sayHello('Danya');
// console.log('[john]', john);

// console.log(john.greeting());
function createAnObject() {
    const obj = {};
}
