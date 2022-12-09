function add(...args) {
    if (args.length > 30) {
        throw new Error('引数が多すぎます');
    }
    if (args.some(isNaN)) {
        throw new Error('不正な引数です');
    }
    const result = args.reduce((a, b) => a + b);
    if (result > 1000) {
        return 'too big';
    }
    return result
}

function multiply(...args) {
    if (args.length > 30) {
        throw new Error('引数が多すぎます');
    }
    const result = args.reduce((a, b) => a * b);
    if (result > 1000) {
        return 'big big number';
    }
    return result;
}

function subtract(...args) {
    if (args.length > 30) {
        throw new Error('引数が多すぎます');
    }
    const result = args.reduce((a, b) => a - b);
    if (result < 0) {
        return 'negative number';
    }
    return result;
}

function divide(...args) {
    if (args.length > 30) {
        throw new Error('引数が多すぎます');
    }
    const result = args.reduce((a, b) => a / b);
    return Math.round(result * 100) / 100
}

module.exports = {add, multiply, subtract, divide}
