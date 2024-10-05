export const strongNumber = (num: number): string => {
  const factorial = (n: number): number => {
    return n === 0 ? 1 : n * factorial(n - 1);
  };

  const sumOfFactorials = num
    .toString()
    .split('')
    .map(Number)
    .reduce((sum, digit) => sum + factorial(digit), 0);

  return sumOfFactorials === num ? "STRONG!!!!" : "Not Strong !!";
};
