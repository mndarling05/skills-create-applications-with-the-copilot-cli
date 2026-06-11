const { add, sub, mul, div, mod, pow, sqrt, operate } = require('../calculator');

describe('calculator', () => {
  test('addition', () => {
    expect(add(2, 3)).toBe(5);
  });

  test('subtraction', () => {
    expect(sub(5, 2)).toBe(3);
  });

  test('multiplication', () => {
    expect(mul(3, 4)).toBe(12);
  });

  test('division', () => {
    expect(div(10, 2)).toBe(5);
  });

  test('division by zero throws', () => {
    expect(() => div(1, 0)).toThrow('Division by zero');
  });

  test('modulo', () => {
    expect(mod(10, 3)).toBe(1);
  });

  test('modulo by zero throws', () => {
    expect(() => mod(1, 0)).toThrow('Modulo by zero');
  });

  test('power', () => {
    expect(pow(2, 3)).toBe(8);
  });

  test('square root', () => {
    expect(sqrt(9)).toBe(3);
  });

  test('square root of negative throws', () => {
    expect(() => sqrt(-1)).toThrow('Square root of negative number');
  });

  test('operate shortcuts and symbols', () => {
    expect(operate('add', 1, 2)).toBe(3);
    expect(operate('-', 5, 2)).toBe(3);
    expect(operate('*', 2, 3)).toBe(6);
    expect(operate('/', 10, 2)).toBe(5);
    expect(operate('%', 10, 3)).toBe(1);
    expect(operate('^', 2, 3)).toBe(8);
    expect(operate('sqrt', 16)).toBe(4);
  });
});
