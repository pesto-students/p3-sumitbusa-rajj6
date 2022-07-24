const cal = require('./Calculator');

test('adds 2 + 3 to equal 5', () => {
    expect(cal.sum(2, 3)).toBe(5);
})

test('adds 5 - 3 to equal 2', () => {
    expect(cal.diff(5, 3)).toBe(2);
})

test('adds 5 * 3 to equal 15', () => {
    expect(cal.product(5, 3)).toBe(15);
})