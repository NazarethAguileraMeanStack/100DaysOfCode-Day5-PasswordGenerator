const PasswordBuilder = require("./PasswordBuilder");
const prompt = require("prompt-sync")({ sigint: true });

console.log("\nWelcome to the Password Generator");
let numOfChars = prompt("How many letters would you like in your password? ");
let numOfSymbols = prompt("How many symbols would you like? ");
let numOfNumbers = prompt("How many numbers would you like? ");

let passwordBuilder = new PasswordBuilder();
let chars = passwordBuilder.generateCharacters(Number(numOfChars));
let symbols = passwordBuilder.generateSymbols(Number(numOfSymbols));
let nums = passwordBuilder.generateNumbers(Number(numOfNumbers));
let password = [...chars, ...symbols, ...nums];
let passwordShuffled = passwordBuilder.shuffle(password,  password.length).join('');

console.log(`\nHere is your password: ${passwordShuffled}`);