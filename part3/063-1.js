function verfyInteger(n) {
  if (!Number.isInteger(n)) return 0;
  return n;
}

const num1 = verfyInteger(15);
const num2 = verfyInteger(Infinity);
const num3 = verfyInteger(0.05);
console.log(num1, num2, num3);
