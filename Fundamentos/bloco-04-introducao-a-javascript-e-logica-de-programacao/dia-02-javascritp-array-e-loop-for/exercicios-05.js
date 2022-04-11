let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
console.table(number);

let iniNumber = number[0];

for ( let index = 1; index < number.length; index += 1) {
    if (number[index] > iniNumber) {
        iniNumber = number[index];
    }         
}
console.log(iniNumber);
