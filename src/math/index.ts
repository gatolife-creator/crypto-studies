import Decimal from "decimal.js";

export function gcd(e: Decimal, l: Decimal): Decimal {
  return e.isZero() ? l : gcd(l.mod(e), e);
}

export function extGCD(a: Decimal, b: Decimal): [Decimal, Decimal, Decimal] {
  let x = new Decimal(1);
  let y = new Decimal(0);
  if (b.isZero()) {
    return [a, x, y];
  }
  let [d, x1, y1] = extGCD(b, a.mod(b));
  x = y1;
  y = x1.minus(a.dividedToIntegerBy(b).times(y1));
  return [d, x, y];
}

export function random(min: number, max: number) {
  return Math.random() * (max - min) + min;
}
