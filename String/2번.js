function count(str, target) {
  let pos = 0;
  let cnt = 0;
  while (true) {
    let foundPos = str.indexOf(target, pos);
    if (foundPos === -1) break;
    if (foundPos !== -1) cnt++;
    pos = foundPos + 1;
  }
  return cnt;
}

console.log(count("COMPUTERPROGRAMMING", "R")); // 3
