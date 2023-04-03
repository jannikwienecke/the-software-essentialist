const isMultipleOfThree = (number: number) => {
  return number % 3 === 0;
};

const isMultipleOfFive = (number: number) => {
  return number % 5 === 0;
};

export const fizzbuzz = (number: number) => {
  if (number < 1 || number > 100) return "";

  if (isMultipleOfThree(number) && isMultipleOfFive(number)) return "FizzBuzz";
  if (isMultipleOfThree(number)) return "Fizz";
  if (isMultipleOfFive(number)) return "Buzz";

  return String(number);
};
