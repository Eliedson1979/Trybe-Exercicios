const numeroChecar = (myNumero, number) => myNumero === number;

    const loteriaResult = (myNumero, callback) => {
        const numero = Math.floor(Math.random() * 5) + 1;

        return callback(myNumero, numero) ? 'Você acertou o número' : 'Você errou o número';

    }
    console.log(loteriaResult(4, numeroChecar));


