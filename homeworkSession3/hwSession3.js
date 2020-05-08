// Exercise 1:

// let a = Number(prompt("First is "));
// let b = Number(prompt("Second is "));

// console.log(`First is ${a} and second is ${b} !`);

// Way 1: Using a temporary variable 

// let temp = a;
// a = b;
// b = temp;

// console.log(`First is ${a} and second is ${b} !`);

// Way 2: Without a temporary variable

// a = a + b;
// b = a - b;
// a = a - b;

// console.log(`First is ${a} and second is ${b} !`);

// Way 3: Using Bitwise XOR;

// a = a ^ b;
// b = b ^ a;
// a = a ^ b;

// console.log(`First is ${a} and second is ${b} !`);

// Way 4: One-liner  

// [a,b] = [b,a];

// console.log(`First is ${a} and second is ${b} !`);

// Ex 2:

// let s = prompt("Input : ");

// console.log(s);

// let array = s.split(" ",100);

// console.log(array);

// Ex 3:

// const HereIsaNameOfArray_ItMayBeALongNameAndYouFeelBothered_ImSorryButItMakesMeFeelALittleBetterWhenIcode = ["This is first string.","Oh no this must be first string.", "And this is second string.","And I am trying the 3 dots(...) operator"];

// console.log(...HereIsaNameOfArray_ItMayBeALongNameAndYouFeelBothered_ImSorryButItMakesMeFeelALittleBetterWhenIcode);

// Ex 4:

// let shopItem = ["Gươm của vua vô danh", "Quỷ thư", "Giáp thiên nhiên"];

// let check = true;

// while(check){
//     let keyPress = prompt("Welcome my shop, What do you want (C/R/U/D) ?").toUpperCase();
    
//     switch(keyPress) {
//         case "C":
//             let addItem = prompt("Enter the name of item you want to add");
//             shopItem.push(addItem);
//             alert("Done !");
//             break;
//         case "R":
//             console.log(shopItem);
//             break;
//         case "U":
//             let posUpdate;
//             do {
//                 posUpdate = Number(prompt("Enter the position of item you want to update"));
//                 if(isNaN(posUpdate)) alert("This command is not supported, Please enter again");
//                 if(posUpdate >= shopItem.length) alert("404 not found, Please enter again");
//             }
//             while(isNaN(posUpdate) || posUpdate >= shopItem.length);
//             let contentUpdate = prompt("Enter content update");
//             shopItem[posUpdate] = contentUpdate;
//             alert("Done !");
//             break;
//         case "D":
//             let posDelete;
//             do {
//                 posDelete = Number(prompt("Enter the position of item you want to update"));
//                 if(isNaN(posDelete)) alert("This command is not supported, Please enter again");
//                 if(posDelete >= shopItem.length) alert("404 not found, Please enter again");
//             }
//             while(isNaN(posDelete) || posDelete >= shopItem.length);
//             shopItem.splice(posDelete,1);
//             break;
//         case "E":
//             check = false;
//             break;
//         default:
//             alert("This command is not supported, Please enter again");
//             break;
//     }
// }

// Ex 5:

// let squenceNumber = prompt("Enter a squence number, separated by commas");

// let arrNumber = squenceNumber.split(",",100);

// let sum = arrNumber.reduce(function(total,value,index){
//     return Number(total) + Number(value);
// },0);

// alert(`The sum of them is ${sum}`);

// Ex 6:

// let squenceNumber = prompt("Enter a squence number, separated by commas");

// let arrNumber = squenceNumber.split(",",100);

// arrNumber.sort();

// alert(`The smallest number is ${arrNumber[0]}`);

// Ex 7:

// let arrNumbers = [2, 3, 1, -2, -3, 15, 20, 13];

// let searchNumber = Number(prompt("Enter the number which you want to search"));

// let result = arrNumbers.indexOf(searchNumber,0);
// if(result === -1) {
//     alert(`${searchNumber} is NOT FOUND in my array`);
// } else alert(`${searchNumber} is FOUND in my array at index ${result}`);

// Ex 8:

// let sizeOfSheeps = [5, 7, 300, 90, 24, 50, 75];

// console.log("Hello, my name is Duy and here is my sheep sizes");

// console.log(sizeOfSheeps);

// let maxValue = Math.max(...sizeOfSheeps);

// console.log(`Now my biggest sheep has size ${maxValue}, let's shave it`);

// indexMax = sizeOfSheeps.indexOf(maxValue,0);

// sizeOfSheeps[indexMax] = 8;

// console.log(sizeOfSheeps);


// let month = 1;

// while(month <= 3) {
//     console.log(`MONTH ${month}`);
//     console.log("One month has, passed, my sheep have grown, here is their sizes");

//     let sizeOfSheepsAfter1Month = sizeOfSheeps.map(function(value,index){
//         return value += 50;
//     });
//     sizeOfSheeps = sizeOfSheepsAfter1Month.slice(0,sizeOfSheepsAfter1Month.length);
//     console.log(sizeOfSheeps);

//     if(month === 3 ) break;

//     let maxValue = Math.max(...sizeOfSheeps);

//     console.log(`Now my biggest sheep has size ${maxValue}, let's shave it`);


//     indexMax = sizeOfSheeps.indexOf(maxValue,0);

//     sizeOfSheeps[indexMax] = 8;

//     console.log(sizeOfSheeps);
    
//     month++;
    
// }

// let total = sizeOfSheeps.reduce(function(sum,value,index){
//     return sum += value;
// },0);

// console.log(`My flock has size in total : ${total}`);
// console.log(`I would get ${total} * 2$ = ${total*2}`);

// Ex 10:

// let squenceNames = prompt("Enter a squence of names");

// let arrNames = squenceNames.split(", ",100);

// let stringUpdate = "";

// arrNames.forEach(function(value,index){
//     stringUpdate += `<${value}>,`; 
// });


// alert(`${squenceNames} => ${stringUpdate.substring(0,stringUpdate.length-1)}`);

// Ex 11:

// let squenceNumbers = prompt("Enter a sequence numbers");
// let arrayNumbers = squenceNumbers.split(",",100);

// let newArrayNumbers = arrayNumbers.filter(function(value,index){
//     return value%2==1;
// });

// let newSquenceNumbers = newArrayNumbers.join(",");

// alert(`${squenceNumbers} => ${newSquenceNumbers}`);





