function resolveFizzBuzz(x: number): string {
  if (x % 3 === 0) {
    return "Fizz";
  }
  return x.toString();
}
export default resolveFizzBuzz;
