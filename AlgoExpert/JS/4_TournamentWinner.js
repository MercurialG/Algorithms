function tournamentWinner(competitions, results) {
  const hash = {};
  for (let i = 0; i < competitions.length; i++) {
    const pair = competitions[i];
    if (!(pair[0] in hash)) hash[pair[0]] = 0;
    if (!(pair[1] in hash)) hash[pair[1]] = 0;
    results[i] === 0 ? (hash[pair[1]] += 3) : (hash[pair[0]] += 3);
  }
  return Object.keys(hash).reduce((a, b) => (hash[a] > hash[b] ? a : b));
}

function tournamentWinner(competitions, results) {
  const hash = {};
  competitions.forEach(([p0, p1], i) => {
    if (!(p0 in hash)) hash[p0] = 0;
    if (!(p1 in hash)) hash[p1] = 0;
    results[i] === 0 ? (hash[p1] += 3) : (hash[p0] += 3);
  });
  return Object.keys(hash).reduce((a, b) => (hash[a] > hash[b] ? a : b));
}
