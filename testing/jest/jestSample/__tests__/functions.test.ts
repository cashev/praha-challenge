// todo: ここに単体テストを書いてみましょう！
import {asyncSumOfArray, sumOfArray} from "../functions";

test('SumOfArray', () => {
    expect(sumOfArray([1, 1])).toBe(2);
});

test('SumOfArray', () => {
    expect(sumOfArray([1])).toBe(1);
});

test('SumOfArray', () => {
    expect(sumOfArray([1, 2, 3])).toBe(6);
});

test('SumOfArray', () => {
    expect(() => sumOfArray([])).toThrow();
});

test('asyncSumOfArray', async () => {
    await expect(asyncSumOfArray([1, 2])).resolves.toBe(3);
});
