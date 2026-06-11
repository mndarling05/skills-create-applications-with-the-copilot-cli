Calculator CLI

This small CLI calculator supports the four basic operations:
- addition (+, add)
- subtraction (-, sub)
- multiplication (*, mul, x)
- division (/, div)

Usage examples:

  node src/cli.js add 2 3    # -> 5
  node src/cli.js + 7 4      # -> 11
  node src/cli.js 10 / 2     # -> 5

Division by zero will report an error and exit with non-zero code.
