// Exercise 1.

// let number = Number(prompt('Please, giving a random number !!!'));

// if(number < 0 ) {
//     console.log('Invalid input !!!');
// } else {
//     let factorial = 1;
//     for(let i = 1; i <= number; i++) {
//         factorial *= i;
//     }
//     console.log(factorial);
// }

// Exercise 2.

// let name = prompt("What's ur name ??");

// let age = Number(prompt("How old are u ??"));

// if(age < 18) {
//     alert(`${name} don't have enough age to enter this web `);
// } else {
//     let answer = prompt('Do you want to log in to this web ??');
//     if(answer == 'yes') {
//         alert(`${name} loged in success !!!`);
//     } else {
//         alert(`${name} exited this web !`);
//     }
// }

// Exercise 3.
// const username2 = 'dohuuduyptit';

// const password2 = 'thisispassword';

// while(true){
//     let username = prompt("What's your username ??");

//     let password = prompt('Please enter password to log in !!');

//     if(username === username2 && password === password2) {
//         alert('Log in success !!!');
//         break;
//     } else if(username !== username2 && password !== password2 ) {
//         alert('Both username and password are wrong !!')
//     } else if(username != username2){ 
//         alert("Username don't exist !!. Try again");    
//     } else {
//         alert('Your password is wrong !!. Try again');
//     }
// }
// 
// Exercise 4:

// let d = new Date();

// let input = Number(prompt('What is the month of your birthday ??'));

// let condition;

// if( 0 <= input && input <= 11){
//     d.setMonth(input);
//     condition = d.getMonth()
// } else {
//     condition = d.getMonth() + 12;
// }

// let name = prompt('And your name ??')

// switch(condition) {
//     case 0:
//     case 1:
//     case 2:
//         console.log(`${name} was born in spring !!`);
//         break;
//     case 3:
//     case 4:
//     case 5:
//         console.log(`${name} was born in summer !!`);
//         break;
//     case 6:
//     case 7:
//     case 8:
//         console.log(`${name} was born in autumn !!`);
//         break;
//     case 9:
//     case 10:
//     case 11:
//         console.log(`${name} was born in winter !!`);
//         break;
//     default:
//         console.log('Invalid input');
//         break;
// }

// Exercise 5

// while(true) {
//     let a = Number(prompt('a = ?'));

//     let b = Number(prompt('b = ?'));

//     let c = Number(prompt('c = ?'));

//     if(a === 0) {
//         console.log('Equation has solution: x= ' +  -c/b);
//     } else {
//         let delta = b*b - 4*a*c
//         let sqrtDelta = Number(Math.sqrt(b*b - 4*a*c).toFixed(3));
//         if(delta < 0) console.log('Equation doesnt has solution);
//         else if(delta === 0) console.log('Equation has solution: x =' + -b/(2*a));
//             else {
//                 let x1 = ((-b + sqrtDelta)/(2*a)).toFixed(3);
//                 let x2 = ((-b - sqrtDelta)/(2*a)).toFixed(3);
//                 console.log(`Equation has 2 solution: x1 = ${x1} and x2 = ${x2}`);
//             }
//     }

//     let respond = prompt('Bạn có muốn tiếp tục ?? Nhập vào Yes hoặc No');

//     if(respond === 'No') break; 
// }

// Exercise 6.

// while(true) {

// let randomString = (prompt('Please, give a message'));

// let result = '';

// let j = randomString.length-1;

// let i = 0;

// while (j >= 0) {
//     result += randomString[j];
//     j--;
// } 

// console.log(result);

// if(prompt('Do you want to go on ?? Choose Yes or No !!') === 'No') break;

// }


