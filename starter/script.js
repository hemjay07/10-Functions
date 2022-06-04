'use strict';
// let ingredients;
// //note that you cant however skip an arguement. The trick to do that is to pass in the arguement as undefined(the therefore ensures that the default value is used)
// const ingredient = function (first = 2, second = first * 2, third = 'oil') {
//   ingredients = {
//     first,
//     second,
//     third,
//   };
// };

// ingredient(4, undefined, '  ');
// console.log(ingredients);

// // the below show that when you pass a string to a function, the original string's value is not effect in the function(this happens because strings are primitive type). But if you pass an object , the original object is affected this is because a reference type and a reference(address in heap) is what is copied
// const name = 'mujeeb';

// const passport = {
//   name: 'mr mujeeb',
//   job: 'web developer',
//   hobby: 'coding',
// };

// const registerUser = function (user, id) {
//   user = user.toUpperCase();
//   id.hobby = 'traveling';
// };

// registerUser(name, passport);
// console.log(name, passport);

// // Higher order function using a callback function b
// const oneWord = function (str) {
//   return str.replaceAll(' ', '');
// };
// const firstWordToUpper = function (str) {
//   const [first, ...other] = str.split(' ');
//   return [first.toUpperCase(), ...other].join(' ');
// };

// const transformer = function (str, action) {
//   console.log(`Transformed string : ${action(str)}`);
//   console.log(`Transformed by: ${action.name}`);
// };

// transformer('my name is opabode abdulmujeeb', oneWord);

// // example of abstraction
// const calcAge = function (birthYear) {
//   return 2022 - birthYear;
// };
// const calcBirthYear = function (age) {
//   return 2022 - age;
// };
// const answerQuestion = function (info, action) {
//   // right here the function to calculate the age or the birthyear has been abstracted away.Also the two different functionalities were made seperate.
//   console.log(`The result by ${action.name} function is ${action(info)}`);
// };
// answerQuestion(22, calcBirthYear);

// // Here the greet function takes an arguement(greeting) then it returns a function which takes an arguement name and returns the console.log
// const greet = greeting => name => console.log(`${greeting} ${name}`);
// greet('hey')('mujeeb');

// using the call method on function

// const mathematics = {
//   subject: 'Mathematics',
//   passPercent: 60,
//   attainableScore: 70,
//   percentageCalc(score) {
//     return Math.trunc((score / this.attainableScore) * 100);
//   },
//   resultCalc(name, score) {
//     return `${name} scored ${this.percentageCalc(score)} percentage in ${
//       this.subject
//     } : he ${
//       this.percentageCalc(score) > this.passPercent ? 'passed' : 'failed'
//     }`;
//   },
// };

// const english = {
//   subject: 'English',
//   passPercent: 55,
//   attainableScore: 70,
//   percentageCalc(score) {
//     return Math.trunc((score / this.attainableScore) * 100);
//   },
// };

// // we dont have to put the resultCalc method on the english object again we could just store it in a function variable and call it but making sure we specify what the this keyword means using the call method
// const resultCalc = mathematics.resultCalc;
// console.log(resultCalc.call(english, 'mujeeb', 20));

// // using the bind method
// // this method explicitly set the this keyword in resultCalc method to point to english and  we store that in a new function
// const resultCalcEng = resultCalc.bind(english);
// console.log(resultCalcEng('mujeeb', 56));

// // also we can set part of the arguement before hand and this is called partial application

// const resultCalcEngMujeeb = resultCalc.bind(english, 'mujeeb');

// console.log(resultCalcEngMujeeb(34));

// const addVat = function () {
//   const rate = 0.23;
//   return function (value) {
//     return value + rate * value;
//   };
// };
// console.log(addVat()(100));
// const rate = 0.23;
// const addVata = () => value => value + rate * value;
// console.log(addVata()(100));

// const poll = {
//   question: 'What is your favourite programming language?',
//   options: ['0: JavaScript', '1: Python', '2: Rust', '3: C++'],
//   // This generates [0, 0, 0, 0]. More in the next section!
//   answers: new Array(4).fill(0),
//   registerNewAnswer() {
//     let answer = Number(
//       prompt(
//         `${this.question}\n${this.options.join('\n')}\nWrite option number`
//       )
//     );
//     //   if (typeof answer === 'number' && answer >= 0 && answer <= 3)
//     //     this.answers[answer]++;
//     typeof answer === 'number' &&
//       answer < this.answers.length &&
//       this.answers[answer]++; //this is a nice usecase of short circuiting
//     this.displayResults();
//     this.displayResults('string');
//   },
//   displayResults(type = 'array') {
//     if (type === 'array') {
//       console.log(this.answers);
//     }
//     if (type === 'string') {
//       console.log(`The result of the poll is ${this.answers.join(', ')}`);
//     }
//   },
// };

// // console.log(poll.registerNewAnswer());
// document
//   .querySelector('.poll')
//   .addEventListener('click', poll.registerNewAnswer.bind(poll));

// //   Bonus
// // below, we set this to a new object which has also has a property called answers. The second arguement is for the original function(the displayResults function)
// poll.displayResults.call({ answers: [5, 2, 3] }, 'string');

// // immediately invoked function expression
// (function () {
//   console.log('this will never execute again');
// })();

// // in the example below, the variable declared with const is not accesible outside the block while that declared with var is still accessible
// {
//   const a = 'this is private';
//   var b = 'this can still be accessed outside this block';
// }

(function () {
  const header = document.querySelector('h1');
  header.style.color = 'red';
  document.querySelector('body').addEventListener('click', function () {
    header.style.color = 'blue';
  });
})();
