import Decimal from "decimal.js";
import { extGCD } from "../math/index";

Decimal.set({ precision: 1e9, toExpPos: 9e15, modulo: 9, rounding: 8 });

const p = new Decimal(29);
const q = new Decimal(103);
const e = new Decimal(65537);

console.log(`p: ${p}, q: ${q}, e: ${e}`);

const n = p.times(q);
const l = p.minus(1).times(q.minus(1));
console.log(`n: ${n}, l: ${l}`);
let [, dDash] = extGCD(e, l);

while (dDash.lessThanOrEqualTo(0)) {
  dDash = dDash.plus(l);
}
const d = dDash;
console.log(`d: ${d}`);

export function enc(m: Decimal) {
  return m.mod(n).pow(e).mod(n);
  // return m.pow(e).mod(n);
}

export function dec(c: Decimal) {
  return c.mod(n).pow(d).mod(n);
  // return c.pow(d).mod(n);
}
