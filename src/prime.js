const is_prime = (num) => {
  for (let i = 2; i < Math.ceil(num / 2); i++) {
    if (num % i == 0) {
      return false;
    }
  }
  return true;
};

module.exports = is_prime;
