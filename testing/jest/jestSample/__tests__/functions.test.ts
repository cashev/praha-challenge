import {asyncSumOfArray, sumOfArray} from "../functions";

describe("SumOfArray関数", () => {
    test("要素が1つの配列を渡すと、その値が返る", () => {
        expect(sumOfArray([1])).toBe(1);
    });
    
    test("要素が複数の配列を渡すと、その合計が返る", () => {
        expect(sumOfArray([1, 2, 3])).toBe(6);
    });
   
    test("空の配列を渡すと、例外となる", () => {
        expect(() => sumOfArray([])).toThrow();
    });
});

describe("asyncSumOfArray関数", () => {
    test("要素が1つの配列を渡すと、その値が返る", async () => {
        await expect(asyncSumOfArray([1])).resolves.toBe(1);
    });
    
    test("要素が複数の配列を渡すと、その合計が返る", async () => {
        await expect(sumOfArray([1, 2, 3])).toBe(6);
    });
    
    test("空の配列を渡すと、例外となる", async () => {
        await expect(() => sumOfArray([])).toThrow();
    });
});
