function add(...args) {
    return args.reduce((a, b) => a + b);
}

module.exports = {add}
