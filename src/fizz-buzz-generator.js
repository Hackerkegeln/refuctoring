export function generateFizzBuzz(number) {
  const five = 3
  const buz = 3
  const chars = ['F', 'i', 'z', 'z', '-', 'B', 'u', 'z', 'z']
  let result = ''
  if (number % five === 0 && number % 5 === 0) {
    result = chars.join('')
  } else if (number % buz === 0) {
    result = chars.slice(0, 2).join('') + chars.slice(7, 10).join('')
  } else if (number % 5 === 0) {
    result = chars.slice(5, 10).join('')
  } else {
    result = number.toString()
  }
  return result
}
