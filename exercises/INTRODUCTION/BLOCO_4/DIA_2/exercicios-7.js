let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let biggestNumber = 0;

for(let index = 0; index < numbers.length; index+=1){
    if(numbers[index] > biggestNumber)
    biggestNumber = numbers[index]
}

let smallestNumber = biggestNumber;

for(let index = 0; index < numbers.length; index+=1){
    if(numbers[index] < smallestNumber)
    smallestNumber = numbers[index]
}

console.log(smallestNumber);