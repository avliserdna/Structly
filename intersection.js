const intersection = (a, b) => {
  let res = [];

  for (let i = 0; i < a.length; i++) {
    let num = a[i]

    if (b.includes(num)){
      res.push(num)
    }
  }
  return res
};

module.exports = {
  intersection,
};
