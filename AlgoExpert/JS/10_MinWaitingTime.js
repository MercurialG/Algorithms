function minimumWaitingTime(queries) {
  if (!queries.length || queries.length == 1) return 0;
  queries.sort((a, b) => a - b);
  let wait = 0;
  while (queries.length > 1) {
    queries.pop();
    wait += queries.reduce((a, b) => a + b);
  }
  return wait;
}

function minimumWaitingTime(queries) {
  let total = 0;
  queries.sort((a, b) => a - b).pop();
  for (let i = 0; i < queries.length; i++) {
    total += queries[i] * (queries.length - i);
  }
  return total;
}

function minimumWaitingTime(queries) {
  queries.sort((a, b) => a - b).pop();
  let wait = 0;
  queries.forEach((el, i) => (wait += el * (queries.length - i)));
  return wait;
}

function minimumWaitingTime(queries) {
  if (!queries.length) return 0;
  queries.sort((a, b) => a - b).pop();
  return queries.reduce(
    (acc, add, idx) => acc + add * (queries.length - idx),
    0
  );
}
