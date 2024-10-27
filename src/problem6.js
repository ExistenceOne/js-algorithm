function problem6(forms) {
  const set = new Set();
  const map = new Map();

  forms.forEach(([email, nickname]) => {
    for (let i=0; i<nickname.length-1; ++i) {
      for (let j=i+2; j<=nickname.length; ++j) {
        const substr = nickname.slice(i, j);
        if (map.has(substr)) {
          set.add(email);
          set.add(map.get(substr));
        }
        else map.set(substr, email);
      }
    }
  });

  return Array.from(set).sort();
}

module.exports = problem6;
