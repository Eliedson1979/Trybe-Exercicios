const retObj = (fullName) => {
    const email = fullName.toLowerCase().split(' ').join('_');
    return {fullName, email: `${email}@trybe.com`};  
}
const novoFuncionario = (callback) => {
    const funcionarios = {
        id1: callback('Eliedson Gomes'),
        id2: callback('Gomes Santos'),
        id3: callback('Santos Sousa'),
    }
    return funcionarios;
}
console.log(novoFuncionario(retObj));



