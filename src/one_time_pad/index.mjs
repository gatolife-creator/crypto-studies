import { random } from "../math/index.mjs";

/**
 *
 * @param {BigInt} m
 * @returns
 */
export function enc(m) {
  const length = m.toString(2).length;
  const s = BigInt(Math.floor(random(0, Math.pow(2, length))));
  const c = m ^ s;

  return [c, s];
}

/**
 *
 * @param {BigInt} s
 * @param {BigInt} c
 * @returns
 */
export function dec(s, c) {
  return c ^ s;
}
