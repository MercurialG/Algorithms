function classPhotos(redShirtHeights, blueShirtHeights) {
  redShirtHeights.sort();
  blueShirtHeights.sort();
  if (
    redShirtHeights[redShirtHeights.length - 1] >
    blueShirtHeights[blueShirtHeights.length - 1]
  ) {
    for (let i = 0; i < redShirtHeights.length; i++) {
      return redShirtHeights[i] > blueShirtHeights[i] ? true : false;
    }
  } else {
    for (let i = 0; i < blueShirtHeights.length; i++) {
      return redShirtHeights[i] < blueShirtHeights[i] ? true : false;
    }
  }
}
