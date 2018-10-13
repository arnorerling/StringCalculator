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
  test('test tries adding 1001 + 2, returns 2', () => {
    expect(add("1001,2")).toBe(2);
  });
  test('test tries adding 1001 + 2000, returns 0', () => {
    expect(add("1001,2000")).toBe(0);
  });
  test('test adds 1000 + 2, returns 1002', () => {
    expect(add("1000,2")).toBe(1002);
  });
  test('returns 1 + 2 + 3 + 4 + 5 with ; as an extra delimiter', () => {
    expect(add("//;\n1;2;3\n4,5")).toBe(15);
  });
  test('returns 1 + 2 + 3 + 4 + 5 with % as an extra delimiter', () => {
    expect(add("//%\n1%2%3\n4,5")).toBe(15);
  })
  test('returns 1 + 2 + 3 + 4 + 5 with emil as an extra delimiter', () => {
    expect(add("//emil\n1,2emil3\n4,5")).toBe(15);
  });
