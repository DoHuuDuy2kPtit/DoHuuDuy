// Ex 5 + 6;

let listProducts = [];

function Product(name,brand,price,color,category,providers) {
        this.name = name;
        this.brand = brand;
        this.price = price;
        this.color = color;
        this.category = category;    
        this.providers = providers;
}

let divice1 = new Product(`Xiaomi portable charger 20000mah`,`Xiaomi`,428, `White`,`Charger`,`Phukienzero Dientuccc`);
let divice2 = new Product(`VSmart Active 1`,`VSmart`,5487,`Black`,`Phone`,`Tgdd Ddghn VhStore`);
let divice3 = new Product(`Iphone X`,`Apple`,21490,`Gray`,`Phone`,`Tgdd`);
let divice4 = new Product(`Samsung Galaxy A9`,`Samsung`,8490,`Blue`,`Phone`,`Tgdd`);

function addProduct(...args) {
    listProducts = args;
}

addProduct(divice1,divice2,divice3,divice4);

listProducts.forEach((value,index)=>{
    console.log(`-------------------------`);
    console.log(`#${index+1} Name : ${value.name}`);
    console.log(`   Price: ${value.price}`);
});

let productPosition;

do{
    productPosition = Number(prompt("Enter product position"));
    if(productPosition > listProducts.length) alert("404 Not found");
}
while(productPosition > listProducts.length);

for (const key in listProducts[productPosition-1]) {
    if (listProducts[productPosition-1].hasOwnProperty(key)) {
        const element = listProducts[productPosition-1][key];
        console.log(`${key}: ${element}`);
    }
}

let check = 0;
let categoryInput = prompt("Enter your category");

for (const i of listProducts) {
    if(i.category.toLowerCase() == categoryInput.toLowerCase()) {
        check = 1;
        console.log(`-------------------------`)
        console.log(`Name : ${i.name}`);
        console.log(`Price : ${i.price}`);
    }
}

if(check == 0) console.log("404 Not found");

console.log("\n");
console.log("\n");
console.log("\n");
console.log("\n");


listProducts.forEach((value,index)=>{
    console.log(`-------------------------`);
    console.log(`#${index+1} Name : ${value.name}`);
    console.log(`   Price: ${value.price}`);
    console.log(`   Provider: ${value.providers}`);
});

let input = prompt("Enter provider").toLowerCase();
let test = 1;

for (const element of listProducts) {
    if(element.providers.toLowerCase().includes(input)){
        test = 0;
        console.log(`--------------------------`);
        for (const key in element) {
            if (element.hasOwnProperty(key)) {
                console.log(`${key} : ${element[key]}`);                
            }
        }
    } 
}

if(test === 1) console.log(`404 Not found`);