const anagram = (s1, s2) => {
  let s1_a = [...s1];
  let s1_s = s1_a.sort();
  let s2_a = [...s2];
  let s2_s = s2_a.sort();
  return s1_s.join("") === s2_s.join("");
};

module.exports = anagram;
