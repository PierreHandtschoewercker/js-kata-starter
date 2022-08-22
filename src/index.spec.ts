// @ts-ignore see https://github.com/jest-community/jest-extended#setup
import resolveFraction, { Fraction } from ".";

test("test fraction Addition on same denominator(1)", () => {
  const fraction1: Fraction = {
    numerator: 1,
    denominator: 1,
  };
  const fraction2: Fraction = {
    numerator: 1,
    denominator: 1,
  };

  const resultat: Fraction = {
    numerator: 2,
    denominator: 1,
  };

  expect(resolveFraction(fraction1, fraction2)).toEqual(resultat);
});

test("test fraction Addition on same denominator (1)", () => {
  const fraction1: Fraction = {
    numerator: 3,
    denominator: 1,
  };
  const fraction2: Fraction = {
    numerator: 4,
    denominator: 1,
  };

  const resultat: Fraction = {
    numerator: 7,
    denominator: 1,
  };

  expect(resolveFraction(fraction1, fraction2)).toEqual(resultat);
});

test("test fraction Addition on same denominator (1)", () => {
  const fraction1: Fraction = {
    numerator: 4,
    denominator: 1,
  };
  const fraction2: Fraction = {
    numerator: 4,
    denominator: 1,
  };

  const resultat: Fraction = {
    numerator: 8,
    denominator: 1,
  };

  expect(resolveFraction(fraction1, fraction2)).toEqual(resultat);
});

test("test fraction Addition on different denominator", () => {
  const fraction1: Fraction = {
    numerator: 1,
    denominator: 3,
  };
  const fraction2: Fraction = {
    numerator: 1,
    denominator: 2,
  };

  const resultat: Fraction = {
    numerator: 5,
    denominator: 6,
  };

  expect(resolveFraction(fraction1, fraction2)).toEqual(resultat);
});

test("test fraction Addition on different denominator", () => {
  const fraction1: Fraction = {
    numerator: 1,
    denominator: 3,
  };
  const fraction2: Fraction = {
    numerator: 1,
    denominator: 3,
  };

  const resultat: Fraction = {
    numerator: 2,
    denominator: 3,
  };

  expect(resolveFraction(fraction1, fraction2)).toEqual(resultat);
});

test("test fraction Addition on different denominator", () => {
  const fraction1: Fraction = {
    numerator: 2,
    denominator: 3,
  };
  const fraction2: Fraction = {
    numerator: 2,
    denominator: 6,
  };

  const resultat: Fraction = {
    numerator: 1,
    denominator: 1,
  };

  expect(resolveFraction(fraction1, fraction2)).toEqual(resultat);
});

test("test fraction Addition on different denominator", () => {
  const fraction1: Fraction = {
    numerator: 2,
    denominator: 5,
  };
  const fraction2: Fraction = {
    numerator: 3,
    denominator: 4,
  };

  const resultat: Fraction = {
    numerator: 23,
    denominator: 20,
  };

  expect(resolveFraction(fraction1, fraction2)).toEqual(resultat);
});
