import { randomMinToMax } from "../../src/LCGs/index.mjs";

const randomValues = [];

for (let i = 0; i < 100; i++) {
  randomValues.push(randomMinToMax(0, 600) | 0);
}

console.log(randomValues);
