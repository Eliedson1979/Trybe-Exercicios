let nome = "banana";
nomeInvertido = "";

for(let index = 0; index < nome.length; index += 1){
    nomeInvertido += nome[nome.length -1 - index];
  //nomeInvertido = nome[index] + nomeInvertido; essa posição tbm servi
}
console.log(nomeInvertido);
