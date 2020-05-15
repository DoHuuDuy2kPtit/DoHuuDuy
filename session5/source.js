// Object 

// Khai báo

// const person = {
//     name: "Duy",
//     age: 20,
// }

// Property - Thuộc tính

// console.log(person["name"]);
// console.log(person.name);

// person.name = "Đỗ Hữu Duy";

// console.log(person.name);

// person.hobbies = ["Reading books", "Play LOL"];

// console.log(person);

// delete person.hobbies;

// console.log(person);

// Method - Phương thưc

// Function - Hàm

// Khai báo 

// function doSomeThing(input1, input2,)

// const person = {
//   name: "Duy",
//   age: 20,
//   weight: 60,
//   sing: function() {
//     console.log("La La La...");
//     return this;
//   },
//   eat: function(meal) {
//     this.weight = this.weight + meal.weight;
//     return this;
//   }
// };

// console.log(person.sing());
// person.eat({weight : 1});
// console.log(person);

// Ex 1:

// const myDog = {
//   name: "Cat",
//   age: 10,
//   weight: 20
// };

// In ra toàn bộ các value có trong myDog

// for (const key in myDog) {
//   if (myDog.hasOwnProperty(key)) {
//     console.log(myDog[key]);    
//   }
// }

// console.log(Object.values(myDog));
// Ex 2:

// const arr = [
//   {
//     name: "Duy",
//     age: 18
//   },
//   {
//     name: "Truong",
//     age: 20,
//     address: "Ha Noi"
//   }
// ]

// In ra toàn bộ các phần tử có trong mảng theo dạng name-age

// for(let i = 0; i < arr.length; i++) {
//   console.log(`${arr[i].name} - ${arr[i].age}`);
// }

// for(let i = 0; i < arr.length; i++) {
//   string = "";
//   for (const t in arr[i]) {
//     string += `${arr[i][t]} `
//   }
//   console.log(string)
// }


// Ex 3

// Hàm để in ra màn hình console 
function showAll(arr){
  let j = 0;
  for (const i of arr) {
    ++j;
    console.log(`${j}.  ${i.name} - ${i.phone}`);        
  }       
}

// Hàm kiểm tra tên trong mảng.

function checkPhone(phoneNumber,arr){
  return arr.find((value,index) => value.phone == phoneNumber);
}

// Hàm kiểm tra tên nhập vào có hợp lệ hay ko ?

function checkCorrectName(sequenceName,arr){
  for(let i of sequenceName){
    if( "0" <= i && i <= "9") return false;
  }
  return true;
}

const phoneList = [
  {
    name: "Peter Parker",
    phone: "0973712312"
  },
  {
    name: "Tony Stark",
    phone: "0937477134"
  },
  {
    name: "Tony Stark 2",
    phone: "0988123456"
  }
];


let loop = true;

while(loop) { 
  // Nhập vào kí tự C/R/U/D
  let keyPress = prompt("Enter C/R/U/D").toUpperCase();
  
  switch(keyPress) {
    // Thêm contact
    case "C": 

      let newName, newPhoneNumber;
      // Kiểm tra xem số điện thoại đã tồn tại hay chưa ?
      do {
        // Kiểm tra xem tên có hợp lệ hay ko ?
        do{
          newName = prompt("Enter new name you want to add");
          if(!checkCorrectName(newName,phoneList)) alert("Name has number, Please try again");
        }
        while(!checkCorrectName(newName,phoneList));
        newPhoneNumber = prompt("Enter phone number");
        if(checkPhone(newPhoneNumber,phoneList) !== undefined) alert("The phone number is exist");
      }
      while(checkPhone(newPhoneNumber,phoneList) !== undefined); 
      
      // Thêm contact vào mảng phoneList và in mảng 
      phoneList.push({name: newName, phone: newPhoneNumber});
      showAll(phoneList);
      break;

    // In ra màn hình console
    case "R":
      showAll(phoneList);
      break;

    // Cập nhập contact theo tên.
    case "U":
      let findName;
      // Kiểm tra xem tên có hợp lệ hay ko ?
      do{
        findName = prompt("Enter name you want to find");
        if(!checkCorrectName(findName,phoneList)) alert("Name has numbers, Please try again !");
      } 
      while(!checkCorrectName(findName,phoneList)); 

      // Cập nhập contact
      let check = 0;
      for (const i of phoneList) { 
        if(i.name.includes(findName,0)) {
          // Hỏi xem đây có phải là contact mà họ muốn update hay ko ? YES thì update còn NO thì tiếp tục
          let answer = prompt(`Is this the contact(${i.name} - ${i.phone}) you wanna update? YES or NO?`).toUpperCase();
          if(answer == "NO") continue;
          check = 1;
          let updateName = prompt("Enter new name you want to update");
          let updatePhoneNumber = prompt("Enter phone number");
          i.name = updateName;
          i.phone = updatePhoneNumber;
          break;
        }
      }
      if(check === 0) console.log("Not found");
      else showAll(phoneList);
      break;

    case "D": 
      let deleteName;
      // Kiểm tra xem tên có hợp lệ hay ko ?
      do{
        deleteName = prompt("Enter name you want to find");
        if(!checkCorrectName(deleteName,phoneList)) alert("Name has numbers, Please try again !");
      }
      while(!checkCorrectName(deleteName,phoneList));

      // Xóa bỏ contact
      let checkD = 0; 
      for (let i = 0; i < phoneList.length; i++) {
        if(phoneList[i].name == deleteName) {
          // Hỏi người dùng đây có phải contact mà họ muốn xóa ko? YES thì xóa còn NO thì tiếp tuc.
          let answerDel = prompt(`Is this the contact(${phoneList[i].name} - ${phoneList[i].phone}) you wanna update? YES or NO?`)
            .toUpperCase();
          if(answerDel == "NO") continue;
          checkD = 1;
          phoneList.splice(i,1);
          break;
        }
      }
      if(checkD === 0) console.log("Not found");
      else showAll(phoneList);
      break;

    // Thoát chương trình.
    case "E":
      loop = false;
      break;

    // Trường hợp ko hợp lệ của Input.
    default:
      alert("Invalid comment");
      break;
  }
}
