// Create a palindrome checker that should be able to detect
// that a string is a palindrome;
// that is, it is the same word or phrase in reverse.
// This means that words like "mom" and "wow" palindromes.
// It also means that words like "bill" are not palindromes.
// It should still know that something is a palindrome,
// even if the casing is off (that means that "Mom" is still a palindrome).
// Lastly, it should also be able to detect palindromes
// in phrases like "Was It A Rat I Saw"
// and "Never Odd or Even" too.

// mom or wow is palindrome
// bill is not a palindrom
// Mom is also a palindrome
// should also detect palindromes in sentences

// HELPERS
// 1) use concretions (real examples -> mom is palindrome)
// 2) use negations to check if we test what we think we test The Lightswitch Technique
// 3) use parameterized examples (['mom', 'wow'])
// 4) Declare the facts (what is it that we want to test)
// 5) Refine also the test code

import { isPalindrome } from "./index";
describe("palindrome checker", () => {
  it("knows that mom, wow, dad is a palindrome", () => {
    ["mom", "wow", "dad"].forEach((val) =>
      expect(isPalindrome(val)).toBeTruthy()
    );
  });

  it('knows that "hello", "bye" or "test" arent palindromes', () => {
    ["hello", "bye", "test"].forEach((val) =>
      expect(isPalindrome(val)).toBeFalsy()
    );
  });

  it("can handle camel case words like Mom or daD or WOW", () => {
    ["Mom", "WOW", "daD"].forEach((val) =>
      expect(isPalindrome(val)).toBeTruthy()
    );
  });

  it("can detect palindromes in sentences, such as 'Was It A Rat I Saw' ", () => {
    ["Was It A Rat I Saw"].forEach((val) =>
      expect(isPalindrome(val)).toBeTruthy()
    );
  });

  it("can detect that something is not a palindrome in sentences, such as 'Hello World' ", () => {
    ["Hello World"].forEach((val) => expect(isPalindrome(val)).toBeFalsy());
  });
});
