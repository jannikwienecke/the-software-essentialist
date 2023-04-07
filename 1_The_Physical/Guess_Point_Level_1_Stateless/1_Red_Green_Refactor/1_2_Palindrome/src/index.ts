function reverseString(text: string) {
  return text.split("").reverse().join("");
}

function transformTextIntoLowercaseWord(text: string) {
  return text.split(" ").join("").toLocaleLowerCase();
}

export const isAPalindrome = (text: string) => {
  return (
    transformTextIntoLowercaseWord(text) ===
    reverseString(transformTextIntoLowercaseWord(text))
  );
};
