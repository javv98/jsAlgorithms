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

for (let i = 0; i < message.length; i++) {
    let newLetterNumber = ABC.indexOf(message[i])+ shift;
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

// Ejercicio "Sumar dígitos"

let num = 1234;
 
// Your code here

let numString = '' + num

let digitSum = 0;

for (let i = 0; i < numString.length; i++) {
    let indNum = +numString[i];
    digitSum = digitSum + indNum;
}
 
console.log(digitSum); // Expected output: 10

// Ejercicio "Pirámide centrada"

let n3 = 5;
 
// Your code here

for (let i = 0; i < n3*2; i++) {
    if (i % 2 === 0) {
        continue
    } else {
    let asterisco = "*".repeat(i)
    let blankSpace = " ".repeat((n3*2 - i)/2)
    let pyramid = blankSpace + asterisco + blankSpace
    console.log(pyramid)
    }
}

// Ejercicio "Contador de consonantes"

let text2 = 'Ironhack is amazing';
 
// Your code here

let consonants = 0

for (let i = 0; i < text2.length; i++) {
    let char = text2[i]
    if (!("AEIOUaeiou ".includes(char))) { // Le he añadido un espacio para que no los cuente 
        consonants++
}
}
 
console.log(consonants); // Expected output: 10

// Ejercicio "Contador de palabras" 

let sentence = 'I love learning JavaScript at Ironhack';
 
// Your code here

let wordCount = 1 // Empezamos en 1 porque siempre hay un espacio menos que palabras

for (let i = 0; i < sentence.length; i++) {
    let char = sentence[i]
    if (char === " ") {
        wordCount++
    }

}
 
console.log(wordCount); // Expected output: 7 // <-- Está mal esta indicación del lab

// Ejercicio "Capitalizar palabras"

let sentence2 = 'i love javascript';
 
// Your code here

let capitalized = ""

for (let i = 0; i < sentence2.length; i++) {
    let char = sentence2[i];
    if (i === 0) {
        capitalized = capitalized + char.toUpperCase()
    } else if (char === " ") {
        capitalized = capitalized + char
        i++;
        char = sentence2[i];
        capitalized = capitalized + char.toUpperCase()
    } else {
        capitalized = capitalized + char
    }
}
 
console.log(capitalized); // Expected output: 'Hello Cruel World'

// Ejercicio "Edificios con vistas al mar"

let buildings = '3_7_8_3_6_1';
 
// Your code here

let seaViews = 0 // El primero siempre tendrá vistas
let buildingsNew = ""
let evaluadorMenor = 0

for (let i = 0; i < buildings.length; i++) {
    let num = buildings[i]
    if (num !== "_") {
        buildingsNew = buildingsNew + num;
    }
}

for (let i = buildingsNew.length - 1; i >= 0; i--) {
    let num = buildingsNew[i]
    let restoNumDerecha = buildingsNew.slice(i + 1)
    evaluadorMenor = 0
    for (let j = 0; j < restoNumDerecha.length; j++) {
        let num2 = restoNumDerecha[j]
        if (num <= num2) {
            evaluadorMenor++
        }
    }
    if (evaluadorMenor === 0) {
        seaViews++
    }
}
 
console.log(seaViews); // Expected output: 3