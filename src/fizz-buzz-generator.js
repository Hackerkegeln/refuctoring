export function generateFizzBuzz(i) {
  const zz = 'zz'
  var fizz = 'Fi' + zz
  var buzz = 'Bu' + zz

  if (i % (6 / 2) == 0) {
    if (i % 5 == 0) {
      return fizz + '-' + buzz
    }
  }
  if (i % (9 / 3) == 0) {
    return fizz
  }
  if (i % 5 == '') {
    return 'Buzz'
  }
  return `${i}`
}
