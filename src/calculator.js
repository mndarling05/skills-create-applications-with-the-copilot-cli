// Calculator module
// Supported operations:
// - addition ("+", "add")
// - subtraction ("-", "sub")
// - multiplication ("*", "mul", "x")
// - division ("/", "div")

function add(a, b) {
  return a + b;
}

function sub(a, b) {
  return a - b;
}

function mul(a, b) {
  return a * b;
}

function div(a, b) {
  if (b === 0) {
    throw new Error('Division by zero');
  }
  return a / b;
}

function operate(op, a, b) {
  switch (op) {
    case '+':
    case 'add':
      return add(a, b);
    case '-':
    case 'sub':
      return sub(a, b);
    case '*':
    case 'x':
    case 'mul':
      return mul(a, b);
    case '/':
    case 'div':
      return div(a, b);
    default:
      throw new Error(`Unsupported operator: ${op}`);
  }
}

module.exports = { add, sub, mul, div, operate };
