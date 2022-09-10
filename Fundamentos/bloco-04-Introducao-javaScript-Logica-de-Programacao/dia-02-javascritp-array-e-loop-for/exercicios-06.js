let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27,45,200];
let total = 0;

for (let index = 0; index < numbers.length; index += 1) {
    if (numbers[index] % 2 !== 0) {
        total += 1;
    }
}
console.log(total);

