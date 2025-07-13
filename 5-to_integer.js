const arg = process.argv[2];

if (arg == !NaN) {
  console.log("My number: " + arg);
} else if (parseInt(arg) == !NaN) {
  console.log("My number: " + parseInt(arg));
} else {
  console.log(toString(arg));
}
