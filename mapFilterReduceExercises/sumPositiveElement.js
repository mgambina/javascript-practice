// Sum of every positive element
// If the given input is an array of numbers, return the sum of all the positives ones. 
// If the array is empty or there aren't any positive numbers, return 0.
// const input = [ 1, -4, 12, 0, -3, 29, -150];
// expected result --> 42

// filter -> method takes each element in an array and it applies a conditional statement against it
// reduce -> educes an array of values down to just one value

const input = [ 1, -4, 12, 0, -3, 29, -150];

function sumPositiveElements(array) {
  if (array.length == 0) {
    return 0
  }

  return array
  .filter(item => item > 0)
  .reduce((acc, suc) => acc + suc, 0);

}
console.log(sumPositiveElements(input));


