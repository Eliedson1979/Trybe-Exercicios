const produto = 2;
const valor = 5;

if (produto >= 0 && valor >= 0) {
    const totalP = produto * 1.2;
    const totalV = (valor - totalP) * 1000;
    console.log(totalV);
}else {
    console.log("Valor inválido");
}