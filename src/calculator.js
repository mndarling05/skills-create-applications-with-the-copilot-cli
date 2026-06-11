// Calculator module
// Supported operations:
// - addition ("+", "add")
// - subtraction ("-", "sub")
// - multiplication ("*", "mul", "x")
// - division ("/", "div")
// - modulo ("%", "mod")
// - power ("^", "pow")
// - square root ("sqrt")

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

function mod(a, b) {
  if (b === 0) {
    throw new Error('Modulo by zero');
  }
  return a % b;
}

function pow(a, b) {
  return Math.pow(a, b);
}

function sqrt(a) {
  if (a < 0) {
    throw new Error('Square root of negative number');
  }
  return Math.sqrt(a);
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
    case '%':
    case 'mod':
      return mod(a, b);
    case '^':
    case 'pow':
      return pow(a, b);
    case 'sqrt':
      return sqrt(a);
    default:
      throw new Error(`Unsupported operator: ${op}`);
  }
}

module.exports = { add, sub, mul, div, mod, pow, sqrt, operate };
