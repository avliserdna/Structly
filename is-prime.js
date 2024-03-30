const isPrime = (n) => {
  // check n if divisible by any number less than itself
// if N = 1, immediately false
   if (n === 1) return false
   if (n === 2) return true
  for (let i = 2; i < n; i++) {
    if (n % i === 0) return false
  }
  return true
};

module.exports = {
  isPrime,
};
