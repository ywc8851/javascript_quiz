// 2. 문자 찾기 => 몇개 존재하는지
function count(str, target) {
  const regexp = new RegExp(target, "g");
  return str.match(regexp).length;
}
console.log(count("COMPUTERPROGRAMMING", "R"));
