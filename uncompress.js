const uncompress = (s) => {
  // two pointers
  // string_pointer + num_pointer
  // Loop to check char/num.
  // if num or letter,
  // num_pointer = num
  // letter_pointer = letter
  // for (let i =0; i <num;i++)
  // append or push o(n)
  // isNum()
  // Number(num_pointer) % 1 if true Numbe
  let i = 0; // 2 <=== True +=
  let j = 0; // p  <====True
  let result = "";

  while (j < s.length) {
    if (s[j] % 1 === 0) {
      j+=1
    }
    else {
      let num = Number(s.slice(i, j))
      for (let k = 0; k < num; k++) {
        result += s[j]
      }
      j+=1
      i=j
    }
  }
  return result
};

module.exports = {
  uncompress,
};
