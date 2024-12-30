const _add = (a, b) => a + b;
const add = (...args) => args.reduce(_add, 0);

const _sub = (a, b) => a - b;
const sub = (...args) => args.reduce(_sub);

const _mul = (a, b) => a * b;
const mul = (...args) => args.reduce(_mul, 1);

const _div = (a, b) => a / b;
const div = (...args) => args.reduce(_div);

export const myMath = { add, sub, mul, div };