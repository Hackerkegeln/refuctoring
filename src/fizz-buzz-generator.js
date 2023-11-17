class ModuloComparator {
  constructor(divisor) {
    this.divisor = divisor
  }

  compare(input) {
    return input % this.divisor === 0
  }
}

class ComparatorManager {
  static modulo(divisor) {
    return new ModuloComparator(divisor)
  }
}

export function generateFizzBuzz(number) {
  const comparator3 = ComparatorManager.modulo(3)
  const comparator5 = ComparatorManager.modulo(5)
  if (comparator3.compare(number) && comparator5.compare(number)) {
    return 'Fizz-Buzz'
  }
  if (comparator3.compare(number)) {
    return 'Fizz'
  }
  if (comparator5.compare(number)) {
    return 'Buzz'
  }
  return number.toString()
}
