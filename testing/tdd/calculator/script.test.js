/*
TODO
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

test('divideに10と3を渡すと3.33が返る', () => {
    expect(script.divide(10, 3)).toBe(3.33);
});

test('divideに1と8を渡すと0.13が返る', () => {
    expect(script.divide(1, 8)).toBe(0.13);
});

test('addに30個の引数を渡すとエラーなく結果が返る', () => {
    const args = new Array(30);
    args.fill(1);
    expect(script.add(...args)).toBe(30);
});

test('addに31個の引数を渡すとエラーが返る', () => {
    const args = new Array(31);
    args.fill(1);
    expect(() => script.add(...args)).toThrow(new Error('引数が多すぎます'));
});

test('multiplyに30個の引数を渡すとエラーなく結果が返る', () => {
    const args = new Array(30);
    args.fill(1);
    expect(script.multiply(...args)).toBe(1);
});

test('multiplyに31個の引数を渡すとエラーが返る', () => {
    const args = new Array(31);
    args.fill(2);
    expect(() => script.multiply(...args)).toThrow(new Error('引数が多すぎます'));
});

test('subtractに30個の引数を渡すとエラーなく結果が返る', () => {
    const args = new Array(30);
    args.fill(0);
    expect(script.subtract(...args)).toBe(0);
});

test('subtractに31個の引数を渡すとエラーが返る', () => {
    const args = new Array(31);
    args.fill(0);
    expect(() => script.subtract(...args)).toThrow(new Error('引数が多すぎます'));
})

test('divideに30個の引数を渡すとエラーなく結果が返る', () => {
    const args = new Array(30);
    args.fill(1);
    expect(script.divide(...args)).toBe(1);
});

test('divideに31個の引数を渡すとエラーが返る', () => {
    const args = new Array(31);
    args.fill(1);
    expect(() => script.divide(...args)).toThrow(new Error('引数が多すぎます'));
});

test('addに1とaを渡すとエラーが返る', () => {
    expect(() => script.add(1, 'a')).toThrow(new Error('不正な引数です'));
});
