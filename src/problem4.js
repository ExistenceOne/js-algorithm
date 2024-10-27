function problem4(word) {
  var answer = "";

  [...word].forEach(char => {
    if (/[A-Z]/.test(char))
      answer += String.fromCharCode(65+25-(char.charCodeAt()-65));
    else if (/[a-z]/.test(char))
      answer += String.fromCharCode(97+25-(char.charCodeAt()-97));
    else
      answer += char;
  });
  
  return answer;
}

module.exports = problem4;
