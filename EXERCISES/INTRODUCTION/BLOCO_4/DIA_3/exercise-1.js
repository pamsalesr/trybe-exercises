let n = 5;
let asterisk = '* ';
let nRow = '';

for(rowIndex = 0; rowIndex < n; rowIndex += 1) {
    nRow = asterisk + nRow;
}

for(rowIndex = 0; rowIndex < n; rowIndex += 1) {
    console.log(nRow);
}
