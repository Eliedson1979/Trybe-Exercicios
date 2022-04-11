let number = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let result = 0;

for (let index = 0; index < number.length; index += 1){
    result += number[index];
}
let total = result / number.length;
console.log(total);
