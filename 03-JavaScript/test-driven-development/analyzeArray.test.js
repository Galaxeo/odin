const analyzeArray = require('./analyzeArray');
let obj = {
  average: 4,
  min: 1,
  max: 8,
  length: 6
}
test('try 1,8,3,4,2,6', () => {
  expect(analyzeArray([1, 8, 3, 4, 2, 6])).toEqual(obj)
})
