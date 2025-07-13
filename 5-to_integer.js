const arg = process.argv[2];

if (arg == !NaN) {
  console.log(arg);
} else if (parseInt(arg) == !NaN) {
  console.log("Not a number");
} else {
  console.log(arg);
}
