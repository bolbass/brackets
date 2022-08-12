module.exports = function check(str, bracketsConfig) {
  let arr = str.split('');
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < bracketsConfig.length; j++) {
      if (arr.slice(i, (i + 2)).join() === bracketsConfig[j].join()) { 
        arr.splice(i, 2);
        i -= 2;
      }
    }
  }
  return arr.length === 0 ? true : false;
}