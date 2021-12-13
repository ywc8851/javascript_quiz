function isPalindrome(str) {
  const palindromeStr = str.toLowerCase().replace(/[^a-z]/g, "");
  const checkpalindromeStr = palindromeStr
    .split("")
    .reverse()
    .join("");   
  return palindromeStr === checkpalindromeStr;
}
console.log(isPalindrome("A man, a plan, a canal: Panama")); // => true
console.log(isPalindrome("race a car")); // => false
