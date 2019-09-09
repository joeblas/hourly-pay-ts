import HourlyCalculator from '../index'

const mockCalculator = new HourlyCalculator(10, 10)
test('calc', () => {
  const result = mockCalculator.paycheck
  expect(result).toBe(100)
})