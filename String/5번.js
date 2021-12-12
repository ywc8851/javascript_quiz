function solution(new_id) {
  new_id = new_id
    .toLowerCase()
    .replace(/[^\w-_.]/g, "")
    .replace(/\.{2,}/g, ".")
    .replace(/^\.| \.$/g, "")
    .replace(" ", "a")
    .slice(0, 15)
    .replace(/\.$/, "");
  if (new_id.length <= 2) {
    if (!new_id.length) new_id = "aaa";
    else new_id += new_id[new_id.length - 1].repeat(3 - new_id.length);
  }

  return new_id;
}
