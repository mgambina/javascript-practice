// Array squared
// Square the value of every element in the array. Presume that you will only get numbers in the input array.
// const input = [ 1, 2, 3, 4, 5 ];
// result =  [ 1, 4, 9, 16, 25]

const input = [ 1, 2, 3, 4, 5 ];

function arraySquared(array) {
  return array.map(item => item ** 2)
}
console.log(arraySquared(input));

