/**
 * @return {Generator<number>}
 */
var fibGenerator = function*(n) {
 let a = 0, b = 1; // Initialize the first two Fibonacci numbers
  while (true) {
    yield a;        // Yield the current Fibonacci number
    [a, b] = [b, a + b]; // Update to the next Fibonacci numbers
  }};

/**
 * const gen = fibGenerator();
 * gen.next().value; // 0
 * gen.next().value; // 1
 */