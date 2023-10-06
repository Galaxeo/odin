const caesarCipher = require('./caesarCipher');
test('shift dog', () => {
  expect(caesarCipher('sza', 5)).toBe('xef');
})
