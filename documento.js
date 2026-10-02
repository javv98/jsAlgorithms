// Ejercicio "Número primo"

let n = 7;
 
// Your code here
 
let isPrime = true; 

if (n < 2) {
    isPrime = false;
} else {
    for (let i = 2; i < n-1; i++) {
        if (n % i === 0) {
            isPrime = false;
            break;
      } 
    }
}

console.log(isPrime); // Expected output: true

// Ejercicio "Factorial"

let n2 = 5;
 
// Your code here

let result = 1

for (let j = 1; j <= n2; j++) {
    result = result * j
}
 
console.log(result); // Expected output: 120

// Ejercicio "Contador de vocales"

let text = 'Ironhack is amazing';
 
// Your code here

let count = 0

for (let k = 0; k < text.length; k++) {
    if (text[k] === "a" ||
        text[k] === "A" ||
        text[k] === "e" ||
        text[k] === "E" ||
        text[k] === "i" ||
        text[k] === "I" ||
        text[k] === "o" ||
        text[k] === "O" ||
        text[k] === "u" ||
        text[k] === "U") {
        count++
    } 
 }
 
console.log(count); // Expected output: 7

// Ejercicio "Cifrado cesar"

let message = 'xyz';
let shift = 3;
 
// Your code here

let encrypted = "";
let ABC = "abcdefghijklmnopqrstuvwxyz";

for (let h = 0; h < message.length; h++) {
    let newLetterNumber = ABC.indexOf(message[h])+ shift;
    if (newLetterNumber >= ABC.length) {
        encrypted = encrypted + ABC[newLetterNumber - ABC.length]
    } else {
        encrypted = encrypted + ABC[newLetterNumber];
    }
    
}
 
console.log(encrypted); // Expected output: 'khoor'

// Ejercicio "Palindromo"

let word = 'racecar';
 
// Your code here

let wordBackwards = ""
 
for (let r = word.length - 1; r >= 0; r--) {
    wordBackwards = wordBackwards + word[r]
}

let isPalindrome = word === wordBackwards

console.log(isPalindrome); // Expected output: true