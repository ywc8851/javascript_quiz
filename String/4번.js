function isPalindrome(str) {
  const palinstr = str.toLowerCase().replace(/[^a-z]/g, "");

  const checkpalinstr = str
    .toLowerCase()
    .split("")
    .reverse()
    .join()
    .replace(/[^a-z]/g, "");
  return palinstr === checkpalinstr;
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // => true
console.log(isPalindrome("race a car")); // => false
