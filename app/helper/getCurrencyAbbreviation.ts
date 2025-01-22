/**
 * Converts a number to its Indonesian currency abbreviation.
 *
 * - Numbers up to 999 are returned as-is.
 * - Numbers from 1,000 to 999,999 are abbreviated with "rb" (ribu).
 * - Numbers from 1,000,000 to 999,999,999 are abbreviated with "jt" (juta).
 * - Numbers 1,000,000,000 and above are abbreviated with "m" (miliar).
 *
 * @param num - The number to be abbreviated.
 * @returns The abbreviated currency string.
 */
const getCurrencyAbbreviation = (num: number): string => {
  const number = num.toString();
  const length = number.length;
  if (length <= 3) {
    return number;
  } else if (length <= 6) {
    return number.slice(0, length - 3) + "rb";
  } else if (length <= 9) {
    return number.slice(0, length - 6) + "jt";
  } else {
    return number.slice(0, length - 9) + "m";
  }
};

export default getCurrencyAbbreviation;
