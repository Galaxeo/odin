const reverseString = require('./reverseString');
test('reverse dogg', () => {
  expect(reverseString('dogg')).toBe('ggod');
});
