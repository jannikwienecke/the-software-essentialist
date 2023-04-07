function reverseString(text: string) {
  return text.split("").reverse().join("");
}

function transformTextIntoLowercaseWord(text: string) {
  return text.split(" ").join("").toLocaleLowerCase();
}

export const isPalindrome = (text: string) => {
  const singleWordLowerCase = transformTextIntoLowercaseWord(text);
  const reversedVersion = reverseString(singleWordLowerCase);

  if (singleWordLowerCase === reversedVersion) return true;

  return false;
};
