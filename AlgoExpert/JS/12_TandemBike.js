// O(Nlog(N) Time | O(1) Space

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  let total = 0;
  if (fastest == true) {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => b - a);
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      total += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
    }
  } else {
    redShirtSpeeds.sort((a, b) => a - b);
    blueShirtSpeeds.sort((a, b) => a - b);
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      total += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
    }
  }
  return total;
}

//Cleaner

function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  let total = 0;
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => b - a);
  if (fastest == true) {
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      total += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
    }
  } else {
    blueShirtSpeeds.reverse();
    for (let i = 0; i < redShirtSpeeds.length; i++) {
      total += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
    }
  }
  return total;
}

//More cleaner
function tandemBicycle(redShirtSpeeds, blueShirtSpeeds, fastest) {
  let total = 0;
  redShirtSpeeds.sort((a, b) => a - b);
  blueShirtSpeeds.sort((a, b) => (fastest ? b - a : a - b));

  for (let i = 0; i < redShirtSpeeds.length; i++) {
    total += Math.max(redShirtSpeeds[i], blueShirtSpeeds[i]);
  }

  return total;
}
