const arg = process.argv[2];

if (arg == !NaN) {
  console.log(arg);
} else if (parseInt(arg) == !NaN) {
  console.log(parseInt(arg));
} else {
  console.log(toString(arg));
}
