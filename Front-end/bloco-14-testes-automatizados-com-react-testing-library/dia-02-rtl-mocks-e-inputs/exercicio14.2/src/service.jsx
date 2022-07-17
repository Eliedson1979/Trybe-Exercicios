const numerosAleatorio = () => Math.floor(Math.random()*101);

const firstFuntion = (str) => str.toUpperCase();
const secondFuntion = (str) => str.charAt(0);
const thirdFuntion = (str1, str2) => str1.concat(str2);

function fetchDog() {
  return fetch('https://dog.ceo/api/breeds/image/random')
    .then(response => response.json())
    .then(json => json.message);
}

module.exports ={
  numerosAleatorio,
  firstFuntion,
  secondFuntion,
  thirdFuntion,
  fetchDog,
};