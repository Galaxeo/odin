const capitalize = require('./capitalize');
test('capitalize dOG', () => {
  expect(capitalize('dOG')).toBe('Dog');
})
