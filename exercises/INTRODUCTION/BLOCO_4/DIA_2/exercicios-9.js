let array = [];
let division = [];

for(let index = 0; index < 25; index+=1) {
    array.push(index + 1)
    division.push(array[index] / 2);
}

console.log(division);
