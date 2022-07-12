#!/usr/bin/env node
import fetch from "node-fetch";
import { readFileSync, writeFileSync } from "fs";

async function dapatkan() {
  let data: any = await fetch("https://github.zenia.my.id/terbaru.json");
  data = await data.json();

  let readme = readFileSync("README.md").toString();
  readme = readme.replace(
    /(<!-- blog start -->)(.*?)(<!-- blog end -->)/gms,
    `$1
## Blog

${data.map(
  (x) => `- [${x.judul}](https://github.zenia.my.id/tulisan/${x.slug})`
).join("\n")}
$3`
  );
  writeFileSync("README.md", readme);
}
dapatkan();
