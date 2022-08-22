// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import resolveFizzBuzz from ".";

test("Le premier nombre est 1", () => {
  expect(resolveFizzBuzz(1)).toBe("1");
});

test("Le deuxième nombre est 2", () => {
  expect(resolveFizzBuzz(2)).toBe("2");
});

test("Le nombre est multiple de 3, on renvoi Fizz", () => {
  expect(resolveFizzBuzz(3)).toBe("Fizz");
});

test("Le nombre est multiple de 3, on renvoi Fizz", () => {
  expect(resolveFizzBuzz(6)).toBe("Fizz");
});

test("Le nombre est multiple de 5, on renvoi Buzz", () => {
  expect(resolveFizzBuzz(5)).toBe("Buzz");
});

test("Le nombre est multiple de 5, on renvoi Buzz", () => {
  expect(resolveFizzBuzz(2 * 5)).toBe("Buzz");
});

test("Le nombre est multiple de 5 et de 3, on renvoi FizzBuzz", () => {
  expect(resolveFizzBuzz(15)).toBe("FizzBuzz");
});
