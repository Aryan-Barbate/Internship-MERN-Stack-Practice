let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9];

// Even number print
console.log("Even numbers are : ");
arr.forEach((val) => {
  if (val % 2 == 0) {
    console.log(val);
  }
});

// sum of even number print
let sum = 0;
arr.forEach((val) => {
  if (val % 2 == 0) {
    sum += val;
  }
});
console.log("Sum of even numbers = ", sum);
