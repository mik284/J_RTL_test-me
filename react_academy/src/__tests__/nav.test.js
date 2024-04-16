import { expect, test } from "vitest";

function sum(...nums) {
  return nums?.reduce((a, b) => a + b, 0);
}

test("Find the sum of two numbers", () => {
  expect(sum(3, 2)).toEqual(5);
});
test("Find the sum of three numbers", () => {
  expect(sum(3, 2, 5)).toEqual(10);
});
test("Find the sum of four numbers", () => {
  expect(sum(3, 2, 3, 6)).toEqual(14);
});
test("Find the sum of five numbers", () => {
  expect(sum(3, 2, 6, 7, 9)).toEqual(27);
});
test("1 number", () => {
  expect(sum(3)).toEqual(3);
});
test("0 number", () => {
  expect(sum()).toEqual(0);
});
