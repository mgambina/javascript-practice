// Calculate median and mean
// Calculate the mean and median values of the number elements from the input array.
// const input = [12, 46, 32, 64];
// expected output =  { mean: 38.5, median: 32 }

// The mean (average) of a data set is found by adding all numbers in the data set and then dividing by the number of values in the set.
// The median is the middle value when a data set is ordered from least to greatest.

const input = [12, 46, 32, 64];

function calculateMeanAndMedian(array) {
  const sortedArray = array.sort()
  sortedArray.reduce(
    (accumulator, currentValue, index, array) => {
      accumulator.mean += currentValue / array.length;

      if (Math.abs(index + 1 - array.length / 2) < 1) {
        accumulator.median = currentValue;
      }

      return accumulator;
    },{mean: 0, median: 0});
}

console.log(calculateMeanAndMedian(input));
