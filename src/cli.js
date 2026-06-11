#!/usr/bin/env node
// CLI for the calculator module
// Supports: +, -, *, /  (also accept words: add, sub, mul, div)

const calc = require('./calculator');

function printUsage() {
  console.log('Usage:');
  console.log('  node src/cli.js add 2 3     # or: node src/cli.js + 2 3');
  console.log('  node src/cli.js 2 + 3       # also supported');
  console.log('\nSupported operations: +, -, *, /  (and add, sub, mul, div)');
}

function parseNumber(val) {
  const n = Number(val);
  if (Number.isNaN(n)) throw new Error(`Invalid number: ${val}`);
  return n;
}

async function main() {
  const args = process.argv.slice(2);
  if (args.length === 0) {
    printUsage();
    process.exit(0);
  }

  let op, aStr, bStr;

  if (args.length === 3) {
    // Possible forms: [op, a, b] or [a, op, b]
    if (isOperator(args[0])) {
      op = args[0];
      aStr = args[1];
      bStr = args[2];
    } else if (isOperator(args[1])) {
      aStr = args[0];
      op = args[1];
      bStr = args[2];
    } else {
      throw new Error('Operator not found in arguments');
    }
  } else if (args.length === 2) {
    // [op, a] (not valid) or assume op and single number? show usage
    printUsage();
    process.exit(1);
  } else {
    printUsage();
    process.exit(1);
  }

  const a = parseNumber(aStr);
  const b = parseNumber(bStr);

  try {
    const result = calc.operate(op, a, b);
    console.log(result);
  } catch (err) {
    console.error('Error:', err.message);
    process.exit(2);
  }
}

function isOperator(x) {
  return ['+', '-', '*', '/', 'add', 'sub', 'mul', 'div', 'x'].includes(x);
}

if (require.main === module) {
  main();
}
