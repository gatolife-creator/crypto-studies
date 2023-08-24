import { enc, dec } from "../../one_time_pad/index.mjs";

const m = BigInt("123456789123456789123456789123456789123456789123456789");
const [c, s] = enc(m);
console.log("平文: ", m);
console.log("秘密鍵: ", s);
console.log("暗号文: ", c);
console.log("復号: ", dec(s, c));
