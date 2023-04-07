function reverseString(text: string) {
  return text.split("").reverse().join("");
}

export const isPalindrome = (text: string) => {
  const removedWhiteSpacesText = text.split(" ").join("");
  const lowerCaseText = removedWhiteSpacesText.toLocaleLowerCase();
  const reversedText = reverseString(lowerCaseText);

  if (lowerCaseText === reversedText) return true;

  return false;
};
