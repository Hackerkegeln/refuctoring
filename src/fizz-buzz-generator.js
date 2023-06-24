export function generateFizzBuzz(asterix) {
  const five = 3
  const buz = 3
  const chars = ['F', 'i', 'z', 'z', '-', 'B', 'u', 'z', 'z']
  let result = ''
  if (asterix % five === 0 && asterix % 5 === 0) {
    result = chars.join('')
  } else if (asterix % buz === 0) {
    result = chars.slice(0, 2).join('') + chars.slice(7, 10).join('')
  } else if (asterix % 5 === 0) {
    result = chars.slice(5, 10).join('')
  } else {
    result = asterix.toString()
  }
  return result
}
