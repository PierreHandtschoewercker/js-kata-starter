export type Fraction = {
  numerator: number;
  denominator: number;
}

export function scale(fraction: Fraction, factor: number): Fraction {
  return { numerator: fraction.numerator * factor, denominator: fraction.denominator * factor };
}
export function gcd(numerator: number, denominator: number): number {
  return denominator === 0 ? numerator : gcd(denominator, numerator % denominator);
}
export function reduction(fraction: Fraction): Fraction {
  const greatestCommonDivisor = gcd(fraction.numerator, fraction.denominator);
  return { numerator: fraction.numerator / greatestCommonDivisor, denominator: fraction.denominator / greatestCommonDivisor };
}

function resolveFraction(fraction1: Fraction, fraction2: Fraction): Fraction {
  if (fraction1.denominator !== fraction2.denominator) {
    const scaledFraction1 = scale(fraction1, fraction2.denominator);
    const scaledFraction2 = scale(fraction2, fraction1.denominator);
    const fractionBeforeReduction = resolveFraction(scaledFraction1, scaledFraction2);
    return reduction(fractionBeforeReduction);
  }
  return { numerator: (fraction1.numerator + fraction2.numerator), denominator: fraction1.denominator };
}

export default resolveFraction;
