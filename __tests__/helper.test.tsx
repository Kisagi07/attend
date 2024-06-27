import { calculatePercentageValue } from "@/app/helper";

describe("calculatePercentageValue", () => {
  it("return 30 in index 0 when 30 and 70 are passed", () => {
    const expected = 30;
    const numbers = [30, 70];
    const result = calculatePercentageValue(numbers);
    expect(result[0]).toEqual(expected);
  });
  it("return 15 in index 0 when 30 and 170 are passed", () => {
    const expected = 15;
    const numbers = [30, 170];
    const result = calculatePercentageValue(numbers);
    expect(result[0]).toEqual(expected);
  });
  it("return all zero if all numbers passed are zero", () => {
    const expected = [0, 0, 0, 0];
    const numbers = [0, 0, 0, 0];
    const result = calculatePercentageValue(numbers);
    expect(result).toEqual(expected);
  });
  it("return zero percentage on index with value of zero (don't calculate percentage)", () => {
    const expected = [25, 50, 0, 25];
    const numbers = [25, 50, 0, 25];
    const result = calculatePercentageValue(numbers);
    expect(result).toEqual(expected);
  });
});
