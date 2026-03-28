export function sumOfSquares(...args) {
  return args.reduce((acc, elem) => acc + elem * elem, 0);
}
