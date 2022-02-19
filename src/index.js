module.exports = function check(str, bracketsConfig) {
  if (str.length <= 1)
  return false
let m, ch
let arr = []
let ob = ['[', '{', '(']
let cb = [']', '}', ')']
for (let i = 0; i < str.length; i++) {
  ch = str[i]
  if (cb.indexOf(ch) > -1) {
    m = ob[cb.indexOf(ch)]
    if (arr.length == 0 || (arr.pop() != m)) {
      return false
    }
  } else {
    arr.push(ch)
  }
}
return (arr.length == 0)
}
