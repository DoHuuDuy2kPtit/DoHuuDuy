// Ex 1

// let x = Number(prompt("x :"));

// let y = Number(prompt("y :"));

// let arrayNumbers = [];

// let subtract = x - y;

// while(true) {
//     arrayNumbers.push(subtract);
//     subtract += 2;
//     if(arrayNumbers.length === 10) break;
// }

// console.log(arrayNumbers);

// let TB = arrayNumbers.reduce(function(tong,value,index){
//     return tong += value/arrayNumbers.length; 
// },0)

// console.log(TB);

// Ex 2

// let squenceNumbers = prompt("Input :");

// let arrayNumbers = squenceNumbers.split(",");

// console.log(arrayNumbers);

// let sumOdd = 0;
// let sumEven = 0;

// let i = 0;

// while(i < arrayNumbers.length) {
//     if(arrayNumbers[i]%2===0) {
//         sumEven += Number(arrayNumbers[i]); 
//     } else {
//         sumOdd += Number(arrayNumbers[i]);
//     }
//     i++;
// }

// console.log(`Tổng lẻ là ${sumOdd} và tổng chẵn là ${sumEven}`);

// console.log(`Số lớn nhất là ${Math.max(...arrayNumbers)} và số bé nhất là ${Math.min(...arrayNumbers)}`);

// Ex 3

// let arrays = [1,2,4,6,[3,5],[10,12]];

// let sum = 0;

// for(let i = 0; i < arrays.length; i++) {
//     if(arrays[i].length === undefined) sum += arrays[i];
//     for(let j = 0; j < arrays[i].length; j++) 
//         sum += arrays[i][j];
// }

// console.log(sum);

// let newArray = arrays.reduce(function(array,value,index){
//     return array.concat(value);
// },[]);

// let newArrayUpdate = newArray.map(function(value,index){
//     return value += 10;
// })

// console.log(newArrayUpdate);

// Ex 4:

// let squenceNumber = prompt("Input :");

// let arrayNumber = squenceNumber.split(",");

// let newArray = [];

// for(let i = 0; i < arrayNumber.length; i++){
//     if(newArray.indexOf(arrayNumber[i],0) === -1) {
//         newArray.push(arrayNumber[i]);
//     }
// }

// console.log(newArray);

// Ex 5:

// let sentence = prompt("Hãy nhập 1 câu đầy đủ");

// let arrayWords = sentence.split(" ");

// let newArrayWords = arrayWords.map(function(value,index){
//     return value = value.charAt(0).toUpperCase() + value.slice(1);
// })

// console.log(newArrayWords.join(" "));

// Ex 6:

// let n = Number(prompt("n = "))

// let squenceNumbers = prompt("Input :");

// let arrNumber = squenceNumbers.split(",");

// let newArrayNumbers = arrNumber.filter(function(value,index){
//     return index < n;
// });

// console.log(newArrayNumbers);

// Ex 8:

// let squenceNumbers = prompt("Input :");

// let arrNumbers = squenceNumbers.split(",");

// console.log(arrNumbers);

// arrNumbers.sort();

// console.log(arrNumbers[arrNumbers.length-1] - arrNumbers[0]);

// Ex 10:

// let squenceString = prompt("Input :");

// let arrCharacter = squenceString.split("");

// console.log(arrCharacter);

// let l = 0;
// let r = arrCharacter.length-1;
// let trangthai = 0;

// while(l <= r) {
//     if(arrCharacter[l] != arrCharacter[r]) {
//         trangthai = 1;
//         break;
//     }
//     l++;
//     r--; 
// }

// if(trangthai === 0) console.log("Correct!!");
// else console.log("Incorrect!!");

// Ex 9:

// let squenceNumbers = prompt("Input :");

// let arrNumbers = squenceNumbers.split(",");


// function countOccurrences(arr) {
//     return arr.reduce(function(a, b){
//       a[b] = a[b] + 1 || 1
//       return a;
//     }, {});
//   }
// let x = countOccurrences(arrNumbers);

// console.log(x);

// let max = 0;

// for (const i in x) {
//   if (x.hasOwnProperty(i)) {
//     if(x[i] > max) {
//       max = x[i];
//     }
//   }
// }

// let newArrayNumbers = [];

// for (const i in x) {
//   if (x.hasOwnProperty(i)) {
//     if(x[i] === max)
//       newArrayNumbers.push(i);
//   }
// }

// console.log(newArrayNumbers);

// Ex 7;

// let squenceNumber = prompt("Input : ");
// let n = Number(prompt("n :"));

// let arrNumber =  squenceNumber.split(",").map(function(value,index){
//   return value = Number(value);
// });

// let newArray = [];

// for(let i = 0; i < arrNumber.length; i += n) {
//   myArray = arrNumber.slice(i,i+n);
//   newArray.push(myArray);
// }

// console.log(newArray);

// while(arrNumber.length) {
//   newArray.push(arrNumber.splice(0,n));
// }

// console.log(newArray);










