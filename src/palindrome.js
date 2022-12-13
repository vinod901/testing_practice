const palindrome = (n) => {
  let len = `${n}`.length;
  for (let i = 0; i < len; i++) {
    if (n[i] !== n[len - i - 1]) {
      return false;
    }
  }
  return true;
};
module.exports = palindrome;
