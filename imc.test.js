const calcularIMC = require('./imc');

test('deve calcular o IMC corretamente', () => {
    expect(calcularIMC(80, 1.80)).toBeCloseTo(24.69, 2);
});

test('não deve retornar um valor incorreto de IMC', () => {
    expect(calcularIMC(80, 1.80)).not.toBeCloseTo(30, 2);
});

test('o resultado deve ser maior que 20', () => {
    expect(calcularIMC(80, 1.80)).toBeGreaterThan(20);
});

test('comparação sem sentido nenhum', () => {
    expect(calcularIMC(80, 1.80)).toEqual({ imc: 'banana' });
});