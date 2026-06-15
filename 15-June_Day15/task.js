let arr = [1, 2, 3, 4, 5];
let mul = 1;

mul = arr.map((val) => val * 3);
mul = mul.filter((val) => val % 2 != 0);
mul = mul.reduce((total, val) => total * val, 1);

console.log(mul);
