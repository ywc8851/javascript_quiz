function compress(str) {
  let arr = str.split("");
  console.log(arr);
}
function solution(s) {
  let answer = "";
  for (i = 0; i < s.length; i++) {
    if (answer.indexOf(s[i]) === -1) {
      answer += s[i];
      let count = 1;
      while (s[i] === s[i + 1]) {
        count++;
        i++;
      }
      if (count !== 1) answer += count;
    }
  }
  return answer;
}
console.log(solution("ABBCCCE"));
