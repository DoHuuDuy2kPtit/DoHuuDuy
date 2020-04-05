// Exercise 1:
// let n = Number(prompt("Input :"));
// let sumOdd = 0;
// let sumEven = 0;

// for(let i = 0; i <= n; i++) {
//     if(i%2 === 0) sumEven += i;
//     else sumOdd += i;
// }

// console.log('Sum of Odds ' + sumOdd);
// console.log('Sum of Evens ' + sumEven);

// Exercise 2:
// let n = Number(prompt('Input :'));

// let isPrime = true;

// if(n===1 || n===0) isPrime = false;

// for(let i = 2; i < n;i++) {
//     if(n%i===0) isPrime = false;
// }

// console.log(isPrime);

// Exercise 3:

//let n = Number(prompt('Input :'));

//let primes = [];

// Way 1: No use sieve of Eratosthenes
// function isPrime(n) {
//     let check = true;

//     if(n===1 || n===0) check = false;

//     for(let i = 2; i < n;i++) {
//     if(n%i===0) check = false;
//     }
//     return check;
// }

// for(let i=2; i <= n; i++) {
//     if(isPrime(i) === true) {
//         primes.push(i);
//     }
// }

// Way 2: Use Sieve of Eratosthenes
// let check = [];

// for(let i = 0; i <= n; i++) {
//     check.push(true);
// }
// for(let i = 2; i <= n; i++) {
//     if(check[i] === true) {
//         for(let j = i*i; j <= n; j+=i) {
//             check[j] = false;
//         }
//     }
// }

// for(let i = 2; i <= n; i++) {
//     if(check[i] === true) {
//         primes.push(i);
//     }
// }

// console.log(primes);

// Exercise 4:
// Way 1: Use loop;

//let n = Number(prompt('Input :'));

// let result = 0;

// if(n === 1) console.log(1);
// if(n === 0) console.log(0)

// let first = 0;
// let second = 1;

// for(let i = 2; i <= n; i++){
//     result = first + second;
//     first = second;
//     second = result;
// }

// console.log(result);

//Way 2: Use recursion;

// function fibonacci(n) {
//     if(n===0 || n===1) return n;
//     else 
//         return fibonacci(n-1) + fibonacci(n-2);
// }

// console.log(fibonacci(n));

// Exercise 5:
 
// let sum = 0;

// while(true) {
//     let n = Number(prompt("Input: "));
//     if(n >= 0) sum+=n;
//     else break;
// }

// console.log(sum);

// Exercise 6:

// let input = prompt('INPUT :');

// let i = 0;
// let j = input.length-1;

// let check = true;

// while(i <= j) {
//     if(input.charAt(i) != input.charAt(j)) 
//     {
//         check = false;
//         break;
//     }
//     i++;
//     j--;
// }

// console.log(check);

// Exercise 7:

// let m = Number(prompt('INPUT m = '));

// let n = Number(prompt('INPUt n = '));

// let matrix ="";

// for(let i = 0; i < m; i++) {
//     for(let j = 0; j < n; j++) {
//         matrix += "* ";
//     }
//     matrix += "\n";
// }

// console.log(matrix);

// Exercise 8 + 9:

// let a1 = Number(prompt("a1 :"));

// let b1 = Number(prompt("b1 :"));

// let c1 = Number(prompt('c1 :'));

// let a2 = Number(prompt("a2 :"));

// let b2 = Number(prompt('b2 :'));

// let c2 = Number(prompt('c2 :'));

// let d = (a1*b2 - a2*b1);

// let dx1 = (c1*b2 - c2*b1);

// let dx2 = (a1*c2 - a2*c1);

// let x1 = dx1/d;

// let x2 = dx2/d;

// console.log(`Solution 1 : x1 = ${x1} \nSolution 2 : x2 = ${x2}`);