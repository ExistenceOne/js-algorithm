function problem5(money) {
  const answer = [];
  const denoms = [50000, 10000, 5000, 1000, 500, 100, 50, 10, 1];
  denoms.forEach(denom => {
    answer.push(parseInt(money / denom));
    money %= denom;
  });
  return answer;
}

module.exports = problem5;
