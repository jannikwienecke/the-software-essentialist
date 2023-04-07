// 1) mom or wow is palindrome
// 2) bill is not a palindrom
// 3) Mom is also a palindrome
// 4) should also detect palindromes in sentences "Was It A Rat I Saw"
import { isAPalindrome } from "./index";
describe("palindrome checker", () => {
  it("knows that mom, wow, dad is a palindrome", () => {
    ["mom", "wow", "dad"].forEach((val) =>
      expect(isAPalindrome(val)).toBeTruthy()
    );
  });

  it('knows that "hello", "bye" or "test" arent palindromes', () => {
    ["hello", "bye", "test"].forEach((val) =>
      expect(isAPalindrome(val)).toBeFalsy()
    );
  });

  it("can handle camel case words like Mom or daD or WOW", () => {
    ["Mom", "WOW", "daD"].forEach((val) =>
      expect(isAPalindrome(val)).toBeTruthy()
    );
  });

  it("can detect palindromes in sentences, such as 'Was It A Rat I Saw' ", () => {
    ["Was It A Rat I Saw"].forEach((val) =>
      expect(isAPalindrome(val)).toBeTruthy()
    );
  });

  it("can detect that something is not a palindrome in sentences, such as 'Hello World' ", () => {
    ["Hello World"].forEach((val) => expect(isAPalindrome(val)).toBeFalsy());
  });
});
