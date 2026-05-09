const soma = require('./soma');

test('deve somar 2 + 3', () => {
    expect(soma(2,3)).toBe(5);
});