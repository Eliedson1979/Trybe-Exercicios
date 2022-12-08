const readline = require('readline-sync');


function handleBMI(weight, height) {
  console.log(`Weight: ${weight}, height: ${height}`);

  const heightInMeters = height / 100;
  const heightSquared = heightInMeters ** 2;

  const bmi = weight / heightSquared;

  return bmi;
}

const BMI_MAX_E_MIN_POR_SITUACAO = {
  'Underweight (magreza)': {
    minBMI: 0,
    maxBMI: 18.4,
  },
  'Normal Weight (peso normal)': {
    minBMI: 18.5,
    maxBMI: 24.9,
  },
  'Overweight (sobrepeso)': {
    minBMI: 25,
    maxBMI: 29.9,
  },
  'Obese Class I (obesida grai I)': {
    minBMI: 30.0,
    maxBMI: 34.9,
  },
  'Obese Class II (obesidade grau II)': {
    minBMI: 35,
    maxBMI: 39.9,
  },
  'Obese Class III (obesidade grau III)': {
    minBMI: 40,
    maxBMI: 100, // Um valor default máximo qualquer, impossível de alcançar no imc.
  },

};

function calculaSituacao(bmi) {
  const situacoes = Object.keys(BMI_MAX_E_MIN_POR_SITUACAO);

  const situacaoEncontrada = situacoes.find((situacao) => {
    const {bmiMaximo, bmiMinimo} = BMI_MAX_E_MIN_POR_SITUACAO[situacao];
    const dentroDoMinimo = bmiMinimo ? bmi > bmiMinimo : true;
    const dentroDoMaximo = bmiMaximo ? bmi > bmiMaximo : true;

    return dentroDoMaximo && dentroDoMinimo;
  });

  return situacaoEncontrada;
}

function main() {
  const peso = readline.questionFloat('Digite seu peso: ');
  const altura = readline.questionInt('Digite sua altura: ');

  const bmi = handleBMI(peso, altura);
  const situacao = calculaSituacao(bmi);

  console.log(`BMI: ${bmi.toFixed(2)}`);
  console.log(`Situação: ${situacao}`);
}

main();

