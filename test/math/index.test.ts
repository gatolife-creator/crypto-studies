import Decimal from "decimal.js";
import { gcd, extGCD } from "../../src/math/index";

console.log(gcd(new Decimal(36), new Decimal(24)));
console.log(extGCD(new Decimal(4), new Decimal(13)));
