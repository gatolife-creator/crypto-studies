const x0 = Date.now();
let x = x0;

export function random() {
  const A = 48271;
  const M = 2147483647;

  x = (A * x) % M;

  return x / M;
}

export function randomMinToMax(min: number, max: number) {
  return random() * (max - min) + min;
}
