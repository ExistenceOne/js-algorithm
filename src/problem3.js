function problem3(number) {
  let count = 0;
  for (let i=1; i<=number; ++i) count += count369(i);
  return count;
}

function count369(number){
  let count = 0;
  while (number > 0){
    switch (number % 10) {case 3: case 6: case 9: ++count};
    number = parseInt(number / 10);
  }
  return count;
}

module.exports = problem3;
