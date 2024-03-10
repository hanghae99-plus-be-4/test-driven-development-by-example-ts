import { Dollar } from '../src/dollar'

it('$5 x 2 = $10', () => {
  const five = new Dollar(5)
  const product1 = five.times(2)
  expect(product1.amount).toBe(10)
  const product2 = five.times(3)
  expect(product2.amount).toBe(15)
})
