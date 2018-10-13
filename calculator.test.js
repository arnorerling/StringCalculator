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
  test('returns 1 + 2 + 3 + 4 but 4 is in a new line', () => {
    expect(add("1,2,3\n4")).toBe(10);
  });

  test('returns negatives not allowed:-1,-2,-4', () => {
    function testNeg() {
      add("-1,-2,3\n-4");
    }
    expect(testNeg).toThrowError('Negatives not allowed:-1,-2,-4');
    
  });
  test('returns negatives not allowed: -1', () => {
    function testNeg() {
      add("-1");
    }
    expect(testNeg).toThrowError('Negatives not allowed:-1');
    
  });

