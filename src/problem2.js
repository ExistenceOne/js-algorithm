function problem2(cryptogram) {
  const stack = [];

  [...cryptogram].forEach(char => {
    if(stack.at(-1) != char) stack.push(char);
    else stack.pop();
  });
  
  return stack.toString().replaceAll(',','');
}

module.exports = problem2;
