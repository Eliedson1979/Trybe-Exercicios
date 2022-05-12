const sum = require('./sum');

describe('testa a função sum', () => {
    test('deve retornar o resultado da soma', () => {
        expect(sum(1, 2)).toBe(3);
        expect(sum(2, 2)).toBe(4);
    });
    test('deve disparar um erro caso receba como parametro uma string', () => {
        expect(() => sum(4, '5')).toThrowError();
        expect(() => sum('4', 5)).toThrowError('Os paramentros devem ser numericos');
       
    });
    
})