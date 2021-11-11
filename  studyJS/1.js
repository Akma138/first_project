
const fruits = ['apple', 'limon', 'orange']; 
const freshFruits = fruits.map(fruit => `свежие ${fruit}`); 

console.log(freshFruits);


let hello = ()=> console.log("Hello");
hello();

let print = (mes)=> console.log(mes);
 
print("Hello Metanit.com");
print("Welcome to JavaScript");

let sum = (x, y)=> console.log("Sum =", x + y);
 
sum(1, 2);      // Sum = 3
sum(4, 3);      // Sum = 7
sum(103, 2); 

function hellow(){
  console.log("Hellow from Metanit.com");
}
// передача константе message ссылки на функцию hello
const message = hellow;
message();  

1
2
3
4
5
6
7
	
function printt(message){
    console.log(message);
}
 
printt("Hello JavaScript");
printt("Hello METANIT.COM");
printt("Function in JavaScript");

function display(season, ...temps){
  console.log(season);
  for(index in temps){
      console.log(temps[index]);
  }
}
display("Весна", -2, -3, 4, 2, 5);
display("Лето", 20, 23, 31);
