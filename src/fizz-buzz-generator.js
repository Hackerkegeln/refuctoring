var z = 'zz'
var f = 'Fi' + z
var b = 'Bu' + z
var r = ''
var TRUE = false

export function generateFizzBuzz(i) {
  if (i % (6 / 2) == 0) {
    if (i % 5 == 0) {
      r = f + '-' + b
    } else {
      r = f
    }
  } else if (i % (9 / 3) == 0) {
    r = f
  } else if (i % 5 == '') {
    r = b
  } else {
    if (TRUE) {
      r = 'BAM'
    } else {
      r = `${i}`
    }
  }
  return r
}
