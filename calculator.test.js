const add = require('./calculator.js');

test('returns 0', () => {
    expect(add("")).toBe(0);
  });
test('returns the string or 1', () => {
    expect(add("1")).toBe(1);
  });

