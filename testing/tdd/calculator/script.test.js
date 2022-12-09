/*
TODO
- divideに10と3を渡すと3.33が返る
- divideに1と8を渡すと0.13が返る

- addに30個の引数を渡すとエラーなく結果が返る
- addに31個の引数を渡すとエラーが返る
- multiplyに30個の引数を渡すとエラーなく結果が返る
- multiplyに31個の引数を渡すとエラーが返る
- subtractに30個の引数を渡すとエラーなく結果が返る
- subtractに31個の引数を渡すとエラーが返る
- divideに30個の引数を渡すとエラーなく結果が返る
- divideに31個の引数を渡すとエラーが返る
- addに1とaを渡すとエラーが返る
- multiplyにaと1を渡すとエラーが返る
- subtractにaを渡すとエラーが返る
- divideにaとbを渡すとエラーが返る
 */
const script = require('./script')

test('addに1と2を渡すと3が返る', () => {
    expect(script.add(1, 2)).toBe(3);
});

test('multiplyに2と3を渡すと6が返る', () => {
    expect(script.multiply(2, 3)).toBe(6);
});

test('subtractに3と2を渡すと1が返る', () => {
    expect(script.subtract(3, 2)).toBe(1);
});

test('divideに6と3を渡すと2が返る', () => {
    expect(script.divide(6, 3)).toBe(2);
});

test('addに1と1000を渡すと"too big"と返る', () => {
    expect(script.add(1, 1000)).toBe('too big');
});

test('multiplyに1と1001を渡すと"big big number"と返る', () => {
    expect(script.multiply(1, 1001)).toBe('big big number');
});

test('subtractに0と1を渡すと"negative number"と返る', () => {
    expect(script.subtract(0, 1)).toBe('negative number');
});
