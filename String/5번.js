function solution(new_id) {
  let answer = "";
  // 1단계
  new_id = new_id.toLowerCase();
  // 2단계
  new_id = new_id.replace(/[^a-z0-9-_.]/g, "");
  // 3단계
  new_id = new_id.replace(/\.{2,}/g, ".");

  // 4단계
  new_id = new_id.replace(/^\.|| \.$/g, "");

  // 5단계
  new_id = new_id.replace(" ", "a");

  // 6단계
  if (new_id.length >= 16) new_id = new_id.substring(0, 15);
  if (/\.$/.test(new_id)) new_id = new_id.substring(0, new_id.length - 1);
  // 7단계
  if (new_id.length <= 2) {
    if (new_id.length === 0) new_id = "aaa";
    else new_id += new_id[new_id.length - 1].repeat(3 - new_id.length);
  }

  return new_id;
}
