const bersu_ball = (boys, girls) => {
  let count = 0;
  for (let i = 0; i < boys.length; i++) {
    for (let j = 0; j < girls.length; j++) {
      if (Math.abs(boys[i] - girls[j]) < 2) {
        count++;
        boys.splice(i, 1);
        i--;
        girls.splice(j, 1);
        j--;
      }
    }
  }
  return count;
};

module.exports = bersu_ball;
