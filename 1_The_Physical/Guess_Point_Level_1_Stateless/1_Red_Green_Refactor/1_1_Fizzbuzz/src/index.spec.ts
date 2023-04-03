// > Write a function that takes numbers from 1 to 100 and outputs them as a string
// ✅ but for multiples of three it returns “Fizz” instead of the number,
// ✅ and for multiples of five it returns “Buzz.”
// ✅ For numbers that are multiples of both three and five, it returns “FizzBuzz.”
import { fizzbuzz } from "./fizzbuzz";

// 🚨 NOTE USE CONCRETE EXAMPLES => Returns "Buzz" for a multiple of five such as 5, 10, 20
// OR it(”knows that 1 is a valid input because it’s in between 1 and 100”)
// IS BETTER THAN
// it('takes numbers from 1 to 100')
describe("fizzbuzz", () => {
  it("outputs the number as a string", () => {
    expect(fizzbuzz(2)).toEqual("2");
    expect(fizzbuzz(11)).toEqual("11");
  });

  it('returns "Fizz" for a multipple of three', () => {
    expect(fizzbuzz(3)).toEqual("Fizz");
    expect(fizzbuzz(6)).toEqual("Fizz");
  });

  it('returns "Buzz" for a multiple of five', () => {
    expect(fizzbuzz(5)).toEqual("Buzz");
    expect(fizzbuzz(10)).toEqual("Buzz");
  });

  it("should return Fizzbuzz for a multiple of three AND five", () => {
    expect(fizzbuzz(15)).toEqual("FizzBuzz");
    expect(fizzbuzz(30)).toEqual("FizzBuzz");
  });

  it("knows that 1 is valid because it is in between 1 and 100", () => {
    expect(fizzbuzz(110)).toEqual("");
    expect(fizzbuzz(-10)).toEqual("");
  });
});
