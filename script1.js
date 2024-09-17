//Exercise 1
let name="Martin";
console.log(`Hy my name is ${name}`);
let myName='Yasmina';
let age=24;
console.log(`Hi, my name is ${myName} and I am ${age} years old.`);
let players = ["Martin", "Thomas", "Peter", "Mathias", "Niki"];
console.log("The most valuable player of the match is " + players[2] + ".");
let cars = ["Tesla", "Audi", "Volvo", "Mazda", "Fiat", "Ferrari"];
console.log(cars.sort());

//Exercise 2

let fruits = ["Apple", "Banana", "Kiwi", "Mango", "Pear"]; //Orange dazu
fruits.push("Orange");
console.log(fruits);

fruits.shift();; //Apple löschen
console.log(fruits);  

fruits.unshift("Strawberry"); //Strawberry dazu
console.log(fruits);

let animals = ["Monkey", "Horse", "Dog", "Elephant", "Giraffe"];
animals.shift(); //Monkey
console.log(animals);

animals.unshift("Cat"); //Cat dazu
console.log(animals);

animals.pop();//Giraffe weg
console.log(animals);

animals.push("Tiger"); //Tiger dazu
console.log(animals);

animals.sort(); //rückwärts sortieren
animals.reverse();
console.log(animals);

//Exercise 3

let fruitMessage = "Mango/Cherries/Kiwi/Grapes/Pear/Peach/Orange/Lemon";
let fruits1=fruitMessage.split("/");
console.log(fruits1);
document.write(fruits1[0]);
document.write("<br>");
document.write(fruits1[1]);
document.write("<br>");
document.write(fruits1[2]);
document.write("<br>");
document.write(fruits1[3]);
document.write("<br>");
document.write(fruits1[4]);
document.write("<br>");
document.write(fruits1[5]);
document.write("<br>");
document.write(fruits1[6]);
document.write("<br>");
document.write(fruits1[7]);
document.write("<br>");

//Advanced exercise 1

let a = 7;
let b = 14;
let c = "21";
let d = "36";
let e = 42;
let sum = a + b + parseInt(c) + parseInt(d) + e;
console.log("Die Summe der ersten Zahlen beträgt: " + sum);

let f = "1";
let g = 15;
let h = 8;
let i = "1";
let prod = parseInt(f) * g * h * parseInt(i);
console.log("Das Produkt der zweiten Zahlen beträgt: " + prod);

let final = sum / prod;
console.log("Das finale Resultat beträgt: " + final);

//Advanced exercise 2

let people = ["Greg", "Mary", "Devon", "James"];
people.shift();; //Greg vorne löschen
console.log(people);

people.unshift("Matt"); //Matt vorner hinzufügen
console.log(people);

people.pop(); //James löschen
console.log(people);

people.push("Edith"); //Edith dazu
console.log(people);

let people1 = people.slice(2, 4);
console.log(people1);

console.log(people.indexOf("Mary")); //Output: 1

console.log(people.indexOf("Foo")); //Output: -1

people.splice(0,1,"Greg");
console.log(people);
people.splice(3,1,"James");
console.log(people);
people.splice(2,1,"Elizabeth", "Anna");
console.log(people);

//Advanced exercise 3

let multNum = [
    [1, 2, 1, 24],
    [8, 11, 9, 4],
    [7, 0, 7, 27],
    [7, 4, 28, 14],
    [3, 10, 25, 7],
    [21, 4, 6, 17],
    [3, 5, 26, 3]
];

// let searchValue = 11;
// let found = false;

// for (let i = 0; i < multNum.length; i++) {
//   for (let j = 0; j < multNum[i].length; j++) {
//     if (multNum[i][j] === searchValue) {
//       console.log(`Found ${searchValue} at position (${i}, ${j})`);
//       found = true;
//       break;
//     }
//   }
//   if (found) break;
// }

console.log(multNum[1][1]); // Zahl 11
console.log(multNum[4][2]); // Zahl 25
console.log(multNum[5][3]); // Zahl 17
console.log(multNum[2][3]); // Zahl 27
console.log(multNum[2][1]); // Zahl 0

//Challenge String manipulation

let message = "Properties,$a$set$of$immutable$values,$are$passed$to$a$component's$renderer$as$properties$in$its$HTML$tag$component$cannot$directly$modify$any$properties$passed$to$it,$but$can$be$passed$callback$functions$that$do$modify$values.$This$mechanism's$promise$is$expressed$as$properties$flow$down;$actions$flow$up";
console.log(message.replaceAll("$", " "));