export function generateFizzBuzz(i) {
  var zz = 'zz'
  var fizz = 'Fi' + zz
  var buzz = 'Bu' + zz
  var result = ''
  var TRUE = false

  if (i % (6 / 2) == 0) {
    if (i % 5 == 0) {
      result = fizz + '-' + buzz
    } else {
      result = fizz
    }
  } else if (i % (9 / 3) == 0) {
    result = fizz
  } else if (i % 5 == '') {
    result = buzz
  } else {
    if (TRUE) {
      result = 'BAM'
    } else {
      result = `${i}`
    }
  }
  return result
}
