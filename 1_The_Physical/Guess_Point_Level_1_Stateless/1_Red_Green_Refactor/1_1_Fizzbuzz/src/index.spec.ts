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
    [1, 2, 4, 11, 13, 17].map((val) => expect(fizzbuzz(val)).toEqual(`${val}`));
  });

  it('returns "Fizz" for a multipple of three', () => {
    [3, 6, 9, 12, 18].map((val) => expect(fizzbuzz(val)).toEqual("Fizz"));
  });

  it('returns "Buzz" for a multiple of five', () => {
    [5, 10, 20, 35].map((val) => expect(fizzbuzz(val)).toEqual("Buzz"));
  });

  it("should return Fizzbuzz for a multiple of three AND five", () => {
    [15, 30, 45].map((val) => expect(fizzbuzz(val)).toEqual("FizzBuzz"));
  });

  // REFERENCE FOR PARAMERIZED TESTS
  // https://blog.codeleak.pl/2021/12/parameterized-tests-with-jest.html
  it.each([
    [-10, ""],
    [-1, ""],
    [101, ""],
    [2000, ""],
  ])(
    "%p is out off bounds and therefore returns %p",
    (number: number, result: string) => {
      expect(fizzbuzz(number)).toEqual(result);
    }
  );
});
