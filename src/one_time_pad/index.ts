import { random } from "../math/index";

export function enc(m: bigint) {
  const length = m.toString(2).length;
  const s = BigInt(Math.floor(random(0, Math.pow(2, length))));
  const c = m ^ s;

  return [c, s];
}

export function dec(s: bigint, c: bigint) {
  return c ^ s;
}
