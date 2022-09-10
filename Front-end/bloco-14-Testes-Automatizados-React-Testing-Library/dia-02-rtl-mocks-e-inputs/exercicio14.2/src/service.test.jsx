// @ts-nocheck
const { test } = require('@jest/globals');
const service = require('./service')

describe('Testando 1º Implementação', () => {
test('1º Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.', () => {
  service.numerosAleatorio = jest.fn().mockReturnValue(10);

  expect(service.numerosAleatorio()).toBe(10);
  expect(service.numerosAleatorio).toHaveBeenCalled();
  expect(service.numerosAleatorio).toHaveBeenCalledTimes(1);
});
test('2º Verifique se a aplicação da nova implementação acontece apenas uma vez.', () => {
  service.numerosAleatorio = jest.fn().mockImplementationOnce((a, b) => a / b);

  expect(service.numerosAleatorio(10, 2)).toBe(5);
  expect(service.numerosAleatorio).toHaveBeenCalled();
  expect(service.numerosAleatorio).toHaveBeenCalledTimes(1);
  expect(service.numerosAleatorio).toHaveBeenCalledWith(10, 2);
});
test('3º Mockando a função para receber 3 parametros e retorna sua multiplicação', () => {
  service.numerosAleatorio = jest.fn().mockImplementation((a, b, c) => a * b * c);

  expect(service.numerosAleatorio(10, 2, 3)).toBe(60);
  expect(service.numerosAleatorio).toHaveBeenCalled();
  expect(service.numerosAleatorio).toHaveBeenCalledTimes(1);
  expect(service.numerosAleatorio).toHaveBeenCalledWith(10, 2, 3);
});
test('4º Mockando função que recebe um paramentro e retorna seu dobro', () => {
  service.numerosAleatorio = jest.fn().mockReset();
  expect(service.numerosAleatorio).toHaveBeenCalledTimes(0);

  service.numerosAleatorio.mockImplementation((a) => a * 2);

  expect(service.numerosAleatorio(5)).toBe(10);
  expect(service.numerosAleatorio).toHaveBeenCalled();
  expect(service.numerosAleatorio).toHaveBeenCalledTimes(1);
  expect(service.numerosAleatorio).toHaveBeenCalledWith(5);
});
});
describe('Testando 2º Implementação', () => {
test('1º Mockando função para receber um paramentro em caixa baixa', () => {
  const mockFirstFunction = jest.spyOn(service, 'firstFuntion').mockImplementation(a => a.toLowerCase());

  expect(mockFirstFunction('TESTE')).toBe('teste');
  expect(service.firstFuntion).toHaveBeenCalledTimes(1);
  expect(service.firstFuntion).toHaveBeenCalledWith('TESTE');
});
test('2º Mockando função que recebe um paramentro e retorna a ultima letra', () => {
  const mockSecondFunction = jest.spyOn(service, 'secondFuntion').mockImplementation(a => a.charAt(a.length - 1));

  expect(mockSecondFunction('TESTE')).toBe('E');
  expect(service.secondFuntion).toHaveBeenCalledTimes(1);
  expect(service.secondFuntion).toHaveBeenCalledWith('TESTE');
});
test('3º Mockando a função que recebe 3 paramentro e os concatena', () => {
  const mockThirdFunction = jest.spyOn(service, 'thirdFuntion').mockImplementation((a, b, c) => a + b + c);

  expect(mockThirdFunction('TESTE', 'TESTE', 'TESTE')).toBe('TESTETESTETESTE');
  expect(service.thirdFuntion).toHaveBeenCalledTimes(1);
  expect(service.thirdFuntion).toHaveBeenCalledWith('TESTE', 'TESTE', 'TESTE');
});
test('4º Restaurando a primeira função e verificar se retorna em caixa alta', () => {
  service.firstFuntion.mockRestore();

  expect(service.firstFuntion('TESTE')).toBe('TESTE');
});
});
describe('Testando 3º requisição', () => {
  service.fetchDog = jest.fn();
  afterEach(service.fetchDog.mockReset);

test('1º Testando a requisição caso a promise resolva', async () => {
   service.fetchDog.mockResolvedValue('request sucess');

   service.fetchDog();
   expect(service.fetchDog).toHaveBeenCalled();
   expect(service.fetchDog).toHaveBeenCalledTimes(1);
   await expect(service.fetchDog()).resolves.toBe('request sucess');
   expect(service.fetchDog).toHaveBeenCalledTimes(2);
});
test('2º Testando a requisição caso a promise seja rejeitada', async () => {
 service.fetchDog.mockRejectedValue('request error');

 expect(service.fetchDog).toHaveBeenCalledTimes(0);
 await expect(service.fetchDog()).rejects.toBe('request error');
 expect(service.fetchDog).toHaveBeenCalledTimes(1);
});
});


