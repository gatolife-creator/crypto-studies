import Decimal from "decimal.js";
import { extGCD } from "../math/index.mjs";

Decimal.set({ precision: 1e6, toExpPos: 9e15, modulo: 9, rounding: 8 });

const p = new Decimal(29);
const q = new Decimal(103);
const e = new Decimal(65537);

console.log(`p: ${p}, q: ${q}, e: ${e}`);

const n = p.times(q);
const l = p.minus(1).times(q.minus(1));
console.log(`n: ${n}, l: ${l}`);
let [, dDash] = extGCD(e, l);

while (dDash <= 0) {
  dDash = dDash.plus(l);
}
const d = dDash;
console.log(`d: ${d}`);

/**
 *
 * @param {Decimal} m
 * @returns
 */
export function enc(m) {
  return m.mod(n).pow(e).mod(n);
  // return m.pow(e).mod(n);
}

/**
 *
 * @param {Decimal} c
 * @returns
 */
export function dec(c) {
  return c.mod(n).pow(d).mod(n);
  // return c.pow(d).mod(n);
}
