
// Question 1. WAP to find the Second largest number in array.

const arr3 = [4,102,104,6,1,90,34,67,1000];

var largest = arr3[0];
var secondLargest = arr3[0];

    for(let i=0;i< arr3.length;i++){
        if(arr3[i] > largest){
            secondLargest = largest;
            largest = arr3[i];
        }
        else if(arr3[i]>secondLargest && arr3[i] != largest)
            secondLargest = arr3[i];
    }
    
console.log(`Second Largest Number is ${secondLargest} from Array [${arr3}]`);


// Question 2. WAP to find the Factorial of Number.
let n = 3;

function factorial(n){
    
    if(n == 0){
        return 1;
    }else{
        return n * factorial(n-1);
    }

}

const fact = factorial(n);
console.log(`Factorial of ${n} is :`,fact);

// Question 3. WAP to print the Fibonacci Series of Number.

let fibnum = 7;
let a = 0;
let b = 1;

function fibonacci(fib){
    for(let i = 0; i <= fib ;i++){
        console.log(a);
        series = a + b;
         a = b;
         b = series;
    }
}

console.log('Fibonacci Series are Printed below: ');
fibonacci(fibnum);
console.log('\n');

// Question 4. WAP to find the power of number using for loop.

let power = 3;
let nav = 1;

function powerNumber(num, power){
    for(let i= 1; i <= power; i++){
        nav = nav * num;
    }
    return nav;
}

const powerNum = powerNumber(5,3);
console.log(`5 raised to power ${power} is  =`,powerNum,'\n');


// Question 5. WAP to find the duplicate values in a given array.

const dupArray = [4,5,6,3,2,8,9,2,3];

function findDuplicates(){
    let dup = [];
    for(let i = 0; i < dupArray.length; i++){
        for(let j = 0; j < dupArray.length; j++){
            if( i != j){
                if( dupArray[i] === dupArray[j]){
                    dup.push(dupArray[i]);
                }
            }
        }
    }
    return dup;
}

console.log('Duplicate Values from array',findDuplicates(dupArray),'\n');

console.log("ES6 Feature of finding unique values by Set method takes unique values ");
const sampleValues = [1, 4, 5, 2, 'a', 'e', 'b', 'e', 2, 2, 4];
const uniqueValues = [...new Set(sampleValues)];

console.log(uniqueValues);


// Question 6. WAP to find the Armstrong Number.

let number1 = '153';

function armStrong(number1){
    let sum = 0;
    let remainder;
    let compare = number1;
    let noOfDigits = number1.length;

    if(number1 < 0 && number1 == 0){
        console.log('Invalid Input');
     }

    while(number1 > 0){
         remainder = number1 % 10;
         sum += remainder ** noOfDigits;
         number1 = parseInt(number1 / 10);
     }

    if(sum == compare){
        console.log(`${compare} is Armstrong Number`,'\n');
    }else{
        console.log(`${compare} is not Armstrong Number`,'\n');
    }
    return sum;
 }

armStrong(number1);


// Question 7. WAP to find the Product of two arrays.

let arr1 = [2,3,0,1,-3];
let arr4 = [5,6,3,2];

let newArr = [];

if(arr1.length !== arr4.length){
    console.log("Input array should have equal Length to get the Correct Output ");
}

for(let i = 0; i < arr1.length; i++){
    for(let j=0; j < arr4.length; j++){
         if(i === j){
            newArr.push(arr1[i] * arr4[j]);
        }
    }
}

console.log(`Product of 2 Arrays [${arr1}] and [${arr4}] is`,newArr);


// Question 8. WAP to find the Product of two arrays.


const arr = [1,2,3,6,8];

function productOfArray(arr){
    let total = 1;
    for(let i=0; i < arr.length; i++){
        total *= arr[i]; 
    }
    return total;
}

const out = productOfArray(arr);
console.log("Product of Numbers: ",out);



