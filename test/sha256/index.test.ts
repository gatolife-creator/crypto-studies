import { padding, compute, hash2str } from "../../src/sha256/index";
import { TEST_VECTOR_SHA256_LONG } from "../../src/sha256/sample.json";

// console.log(test(TEST_VECTOR_SHA256_LONG));
console.log(tmp("how are you doing"));

function tmp(str: string) {
  let msg: number[] = [];
  for (let j = 0; j < str.length; j += 2) {
    msg[j / 2] = parseInt(str.substring(j, 2), 16);
  }
  let hash = compute(padding(msg));
  let hs = hash2str(hash);

  return hs;
}

function test(
  tv: {
    Len: number;
    Msg: string;
    MD: string;
  }[]
) {
  for (let i = 0; i < tv.length; i += 2) {
    let msg: number[] = [];
    if (tv[i].Len > 0) {
      for (let j = 0; j < tv[i].Msg.length; j += 2) {
        msg[j / 2] = parseInt(tv[i].Msg.substr(j, 2), 16);
      }
    }
    let hash = compute(padding(msg));
    let hs = hash2str(hash);
    if (!(hs === tv[i].MD)) {
      return false;
    }
  }
  return true;
}
