# Map
The `map()` method is used for creating a new array from an existing one, applying a function to each one of the elements of the first array.

## Syntax
```
var new_array = arr.map(function callback(element, index, array) {
    // Return value for new_array
}[, thisArg])
```

In the callback, only the array element is required. Usually some action is performed on the value and then a new value is returned.

# Filter
The `filter()` method takes each element in an array and it applies a conditional statement against it. If this conditional returns true, the element gets pushed to the output array. If the condition returns false, the element does not get pushed to the output array.

## Syntax
```
var new_array = arr.filter(function callback(element, index, array) {
    // Return true or false
}[, thisArg])
```

The syntax for `filter` is similar to map, except the callback function should return true to keep the element, or false otherwise. In the callback, only the element is required.

# Reduce
The `reduce()` method reduces an array of values down to just one value. To get the output value, it runs a reducer function on each element of the array.

## Syntax
```
arr.reduce(callback[, initialValue])
```

The callback argument is a function that will be called once for every item in the array. This function takes four arguments, but often only the first two are used.

- *accumulator* - the returned value of the previous iteration
- *currentValue* - the current item in the array
- *index* - the index of the current item
- *array* - the original array on which reduce was called
- The *initialValue* argument is optional. If provided, it will be used as the initial accumulator value in the first call to the callback function.
