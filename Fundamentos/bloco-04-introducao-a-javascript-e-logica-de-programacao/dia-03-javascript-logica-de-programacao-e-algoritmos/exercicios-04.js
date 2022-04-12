let numero = 0;

for (let index = 0; index <= 50; index += 1) {
    let primo = true;
    for (let divisor = 2; divisor < index; divisor += 1) {
        if (index % divisor === 0) {
            primo = false;
            break;
            
        }
    }
    if (primo) {
        numero = index;
}

}
console.log(numero);
//console.table(numero);