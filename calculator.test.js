const add = require('./calculator.js');

test('returns 0', () => {
    expect(add("")).toBe(0);
  });
test('returns the string or 1', () => {
    expect(add("1")).toBe(1);
  });
test('returns 1 + 2', () => {
    expect(add("1,2")).toBe(3);
  });
test('returns 1 + 2 + 3 + 4', () => {
    expect(add("1,2,3,4")).toBe(10);
  });
  
