// 1.1. What is the difference between a parameter and an argument?
// The arguent is what is inputed into the function. Such as someone ones name. The parameter is the place holder for the arugement.

// 1.2. Within a function, what is the difference between return and console.log?
// console.log is just for testing purposes. Return returns the value of a functions.

// 1. 3. What are the implications of the ability of a function to return a value?
//lets you use th output in another function
// 2. calculateCube
function calculateCube(num) {
    return num ** 3   
}
console.log(`number 2: ${calculateCube(4)}`)


// 3. isAVowel
function isAVowel(letter) {
    const vowels = ['a', 'e',  'i', 'o', 'u'];
    for (let i = 0; i < vowels.length; i++){
        if (letter === vowels[i]) return true;
    }
        return false
}

//method #2 
// fucntion isAvowel(letter)
   // return 'aeiou'.includes(letter.toLowerCase());

console.log(`number 3: ${isAVowel('i')}`)

// 4. getTwoLengths
function getTwoLengths(arr1, arr2) {
    sum = [arr1.length, arr2.length]
    return sum
}

getTwoLengths('Hank', 'Hippopopalous')
console.log(`number 4: ${getTwoLengths('Hank', 'Hippopopalous')}`)


// 5. sumArray
function sumArray (arr) {
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        sum += arr[i];
    }
    return sum
}

//let sum = arr.reduce((acc, curr) => acc + curr);
// return sum

console.log('number 5: ' + sumArray([1, 2, 3, 4, 5, 6]));


// // 6.1 checkPrime

function checkPrime(num) {
    if (num < 2)
        return false

    for (let i = 2; i < num; i++){
        if(num % i === 0){
            return false
        }
    }
    return true
}
console.log('number 6: ' + checkPrime(17))
//method 2
//for (let i = 2; i < Math.sqrt(num); i++){
//     if(num % i === 0){
//         return false;
//     }
//     return false
// }
//funcPrintPrime = printPrimes()
// 6.2 printPrimes
function printPrimes(num) {
    for(let i = 2; i <= num; i++){
        if(checkPrime(i)){
            console.log(i);
        }
    }
}
console.log(printPrimes(97));
// why do I get an undifined after last number
//!! Question why cant I return i?? only can console.log(i)//


// 7. printLongestWord
function printLongestWord(arr){
let longestWord = " ";
for (let i = 0; i < arr.length; i++){
    if(arr[i].length > longestWord.length){
        longestWord = arr[i];    
    }
}
return longestWord;
}

console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "blob"]));
//method 2 with reduce
// let longestWord = arr.reduce((acc, curr) => {
//     if (curr.length > acc.length){
//         acc = curr;
//     }
//     return acc;
// })
// // BONUS!

// // 8. eulerFibo
function eulerFibo(num) {
    let x = 1;
    let y = 2;
    let z = null;
    let sum = 0

    while(y <= num){
        if(y % 2 == 0){
            sum += y;
        }
        z = x + y;
        x = y;
        y = z;
    }
    return sum
}
console.log(eulerFibo(4000000))


// // 9. findNeedle
function findNeedle (arr){
    let needleIndex = arr.indexOf('needle')
    return 'found needle at postion ' + needleIndex
}
findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk'])
console.log(findNeedle(['hay', 'junk', 'hay', 'hay', 'moreJunk', 'needle', 'randomJunk']))


// // 10. sumPositive
function sumPositive(arr){
    let sum = 0;
    for (let i = 0; i < arr.length; i++){
        if (arr[i] % 2 === 0){
            sum += arr[i];
        }
    }
    return sum;
}
console.log(sumPositive([1,2,3,4,5,6,7,8,9]))

// module.exports = {
//     calculateCube,
//     isAVowel,
//     getTwoLengths,
//     sumArray,
//     checkPrime,
//     printPrimes,
//     printLongestWord,
//     eulerFibo,
//     findNeedle,
//     sumPositive
// };