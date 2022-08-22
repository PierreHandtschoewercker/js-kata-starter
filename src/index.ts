function isMultipleOf(nb: number, multiple: number): boolean {
  return nb % multiple === 0;
}

function resolveFizzBuzz(x: number): string {
  let res = "";
  if (isMultipleOf(x, 3)) {
    res += "Fizz";
  }
  if (isMultipleOf(x, 5)) {
    res += "Buzz";
  }
  return res || x.toString();
}

export default resolveFizzBuzz;
