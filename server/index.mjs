import express from "express";
import Decimal from "decimal.js";
import { enc, dec } from "../rsa/index.mjs";

const app = express();

app.get("/", (req, res) => {
  const m = new Decimal(114514);
  const c = enc(m);
  const d = dec(c);

  const test = m.mod(2987).pow(65537);

  res.send({ m, c, d, test });
});

app.listen(3000, () => {
  console.log("listening on port 3000");
});
