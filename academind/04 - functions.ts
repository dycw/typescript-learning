function add_04(n1: number, n2: number): number {
  return n1 + n2;
}

console.log(add_04(1, 2));

function printResult(num: number): void {
  console.log("Result: " + num);
}

printResult(add_04(5, 12));

console.log("This is undefined: ", printResult(add_04(5, 12)));

function returnsUndefined(): undefined {
  return; // must have empty return as type -> undefined
}

console.log("This is also undefined:", returnsUndefined());

const add_copy: (a: number, b: number) => number = add_04;
console.log(add_copy(2, 3));

function addAndHandle(n1: number, n2: number, cb: (number) => void) {
  const result = add_04(n1, n2);
  cb(result);
}

addAndHandle(5, 6, console.log);
