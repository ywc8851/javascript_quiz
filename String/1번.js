function replaceAtoSharp(str) {
  str = str.replace(/A/g, "#");
  return str;
}

console.log(replaceAtoSharp("BANANA"));
