const myFizzBuzz = require('./myFizzBuzz.js');

describe('testar a função MyFizzBuzz', () => {
    test('verificar se de acordo com o parametro recebido, retorna o valor esperado', () => {
        expect(myFizzBuzz(15)).toBe('fizzbuzz');
        expect(myFizzBuzz(3)).toBe('fizz');
        expect(myFizzBuzz(5)).toBe('buzz');
        expect(myFizzBuzz(1)).toBe(1);
        expect(myFizzBuzz('2')).toBe(false);
        
    })
})