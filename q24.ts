let apple = "apple";
let uppercaseApple = "APPLE";
let ten = 10;
let twenty = 20;
let fruits =["Apple", "Banana", "Grapes"];

console.log("one apple is equal to apple?");
console.log(apple == "apple");
 console.log("\n apple is not iqual to apple?");
 console.log(apple != "apple");

console.log("APPLE is equal to apple after converting the lowercase?");
console.log(uppercaseApple.toLowerCase() == "apple");

console.log("\nAPPLE is not equal apple after converting the lowercase?");
console.log(uppercaseApple.toLowerCase() != "apple");

console.log("\n Is ten is equal to twenty?");
console.log(ten == 20);

console.log("\n Is ten is not equal to twenty? ");
console.log(ten != 20);

console.log("\n Is twenty is greather than 10?");
console.log(20> 10);

console.log("\n Is twenty is less than ten?");
console.log(twenty < 10);

console.log("\nIs ten is greather than or equal to 5?");
console.log(10 >= 5);

console.log("\n twenty is less than or equal to to ten?");
console.log(twenty <= 10);

console.log("\ntwenty is not equal to 10 and twenty is greather than 10?");
console.log(twenty !=10 && twenty >10);
 
 
console.log("\ntwenty is not equal to 10 and twenty is greather than 10?");
console.log(twenty !=10 && twenty > 30);

console.log("\n twenty is greather then 50 OR twenty is equal to 20?");
console.log(20 > 50 || 20 == 20);

console.log("\n twenty is greather then 50 OR twenty is not equal to 20?");
console.log(20 > 50 || 20 != 20);

console.log(" Is grapes are include in my array");
console.log(fruits.includes("Grapes"));

console.log("\nIs Grapes not include in my fruits array");
console.log(!fruits.includes("Grapes"));
