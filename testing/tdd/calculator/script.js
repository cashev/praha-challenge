function add(...args) {
    const result = args.reduce((a, b) => a + b);
    if (result > 1000) {
        return 'too big';
    }
    return result
}

function multiply(...args) {
    const result = args.reduce((a, b) => a * b);
    if (result > 1000) {
        return 'big big number';
    }
    return result;
}

function subtract(...args) {
    const result = args.reduce((a, b) => a - b);
    if (result < 0) {
        return 'negative number';
    }
    return result;
}

function divide(...args) {
    return args.reduce((a, b) => a / b);
}

module.exports = {add, multiply, subtract, divide}
