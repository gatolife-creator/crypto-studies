import Decimal from "decimal.js";
import { enc, dec } from "../../rsa/index.mjs";

const m = new Decimal(114514);
console.log(`平文: ${m.toString()}`);
const c = enc(m);

console.log(`暗号文: ${c.toString()}`);
console.log(`復号: ${dec(c).toString()}`);
