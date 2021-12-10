function replaceAtoSharp(s) {
  let answer = s;
  answer = answer.replace(/A/g, "#");
  return answer;
}

console.log(replaceAtoSharp("BANANA"));
