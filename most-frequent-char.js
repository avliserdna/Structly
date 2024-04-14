const mostFrequentChar = (s) => {
  //  create an object?
  let charObj = {}
  let result = ""

  for (let i = 0; i < s.length; i++) {
    if (charObj[s[i]]) {
      charObj[s[i]] += 1
    }
    else {
      charObj[s[i]] = 1
    }
  }

  let freqArr = Object.values(charObj)
  let max = Math.max(...freqArr);
  return Object.keys(charObj).find(key => charObj[key] === max)
};

module.exports = {
  mostFrequentChar,
};
