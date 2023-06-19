import { describe, expect, it } from 'vitest'
import { generateFizzBuzz } from './fizz-buzz-generator'

describe('Fizz-Buzz Generator', () => {
  describe('normal numbers are replicated', () => {
    it.each([1, 2, 4])(`should replicate %n.`, number =>
      expect(generateFizzBuzz(number)).toEqual(number.toString())
    )
  })

  describe('numbers divisible by 3 should be replaced by Fizz', () => {
    it.each([3, 6, 9])(`number %n is converted to Fizz`, number => {
      expect(generateFizzBuzz(number)).toEqual('Fizz')
    })
  })

  describe('numbers divisible by 5 should be replaced by Buzz', () => {
    it.each([5, 10, 20])(`number %n is converted to Buzz`, number => {
      expect(generateFizzBuzz(number)).toEqual('Buzz')
    })
  })

  describe('numbers divisible by both 3 and 5 should be replaced by Fizz-Buzz', () => {
    it.each([15, 30, 45])(`number %n is converted to Fizz-Buzz`, number => {
      expect(generateFizzBuzz(number)).toEqual('Fizz-Buzz')
    })
  })
})
