function problem1(pobi, crong) {
  if (pobi[1]-pobi[0] != 1 || crong[1]-crong[0] != 1) return -1;
  if (Math.min(pobi, crong) < 1 || Math.max(pobi, crong) > 400) return -1;

  const max_pobi = Math.max(...sumAndProduct(pobi));
  const max_crong = Math.max(...sumAndProduct(crong));
  
  if (max_pobi == max_crong) return 0;
  if (max_pobi > max_crong) return 1;
  
  else return 2;
}

function sumAndProduct(arr){
  const ret = [];

  arr.forEach(page => {
    const digits = [];

    while(page > 0){
      digits.push(page % 10);
      page = parseInt(page / 10);
    }
    ret.push(digits.reduce((acc, cur) => acc + cur, 0)); // 누적 합
    ret.push(digits.reduce((acc, cur) => acc * cur, 1)); // 누적 곱
  });
  
  return ret;
}

module.exports = problem1;
