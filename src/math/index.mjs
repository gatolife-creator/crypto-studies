import Decimal from "decimal.js";

/**
 *
 * @param {Decimal} e
 * @param {Decimal} l
 * @returns
 */

export function gcd(e, l) {
  return e.isZero() ? l : gcd(l.mod(e), e);
}

/**
 *
 * @param {Decimal} a
 * @param {Decimal} b
 * @returns {[Decimal, Decimal, Decimal]}
 */
export function extGCD(a, b) {
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

export function random(min, max) {
  return Math.random() * (max - min) + min;
}
