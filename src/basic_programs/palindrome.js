const palindrome = (num) => {
  let len = num.length;
  const n = [...num];
  for (let i = 0; i < len; i++) {
    let rev_i = len - i - 1;
    if (n[i] !== n[rev_i]) {
      return false;
    }
  }
  return true;
};
palindrome("racecar");
module.exports = palindrome;
