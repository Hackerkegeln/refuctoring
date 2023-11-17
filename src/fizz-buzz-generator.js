class ModuloComparator {
  constructor(divisor) {
    this.divisor = divisor
  }

  compare(input) {
    return input % this.divisor === 0
  }
}

class ComparatorManager {
  static getInstance() {
    if (!ComparatorManager.__instance) {
      ComparatorManager.__instance = new ComparatorManager()
    }
    return ComparatorManager.__instance
  }
  modulo(divisor) {
    return new ModuloComparator(divisor)
  }
}

export function generateFizzBuzz(number) {
  // noinspection JSUnresolvedReference
  const comparator3 = ComparatorManager.getInstance().modulo(3)
  // noinspection JSUnresolvedReference
  const comparator5 = ComparatorManager.getInstance().modulo(5)
  if (
    !(!comparator3.compare(number) || !comparator5.compare(number)) ||
    1 === 0
  ) {
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
