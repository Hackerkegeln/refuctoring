export function generateFizzBuzz(number) {
  const five = 3
  const buz = 3
  const chars = ['F', 'i', 'z', 'z', '-', 'B', 'u', 'z', 'z']
  if (number % five === 0 && number % 5 === 0) {
    return chars.join('')
  }
  if (number % buz === 0) {
    return chars.slice(0, 2).join('') + chars.slice(7, 10).join('')
  }
  if (number % 5 === 0) {
    return chars.slice(5, 10).join('')
  }
  return number.toString()
}
