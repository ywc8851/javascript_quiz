function countUpperCase(str) {
  const regExp = /[A-Z]+/g;
  return str.match(regExp).length;
}

console.log(countUpperCase("KoreaTimeGood")); // 3
