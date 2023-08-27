# 暗号学習メモ

## 16 進数から元のフラグを取得する方法

```javascript
const hexString =
  "63727970746f7b596f755f77696c6c5f62655f776f726b696e675f776974685f6865785f737472696e67735f615f6c6f747d";
const bytes = [];

for (let i = 0; i < hexString.length; i += 2) {
  bytes.push(parseInt(hexString.substr(i, 2), 16));
}

console.log(new TextDecoder().decode(new Uint8Array(bytes)));
```

### 説明

このコードは、与えられた 16 進数文字列をバイトにデコードするために、文字列を 2 つの文字ずつ分割し、それぞれの 16 進数表現を 10 進数に変換して、バイト配列に追加します。

次に、バイト配列を元のフラグにデコードするために、TextDecoder()オブジェクトを使用して、Uint8Array()オブジェクトを作成し、それをデコードします。

16 進数文字列は、各文字が 4 ビットのバイトを表すため、2 つの文字を組み合わせることで 1 バイトを表します。
