function problem7(user, friends, visitors) {
  const map_friends = new Map();
  const map_scores = new Map();

  friends.forEach(([a,b]) => {
    if (!map_friends.has(a)) map_friends.set(a, new Set());
    if (!map_friends.has(b)) map_friends.set(b, new Set());
    map_friends.get(a).add(b);
    map_friends.get(b).add(a);
  });

  const user_friends = map_friends.get(user) || new Set();

  map_friends.forEach((set_friends, friend) => {
    if (friend === user || user_friends.has(friend)) return;
    let count = 0;
    set_friends.forEach(person => {
      if (user_friends.has(person)) ++count;
    });

    if (count > 0)
      map_scores.set(friend, (map_scores.get(friend) || 0) + count * 10);
  });
  
  visitors.forEach(visitor => {
    if (visitor !== user && !user_friends.has(visitor)){
      map_scores.set(visitor, (map_scores.get(visitor) || 0) + 1);
    }
  });

  const ret = Array.from(map_scores.entries())
    .filter(([, score]) => score > 0)
    .sort((a,b) => b[1]-a[1] || a[0].localeCompare(b[0]))
    .slice(0,5)
    .map(([friend]) => friend);

  return ret;
}

module.exports = problem7;
