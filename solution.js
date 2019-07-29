const peakIndexInMountainArray = arr => {
  let i = 0;
  while (arr[i] < arr[i+1]) {
    i++;
  }
  return i;
}

module.exports = { peakIndexInMountainArray }
