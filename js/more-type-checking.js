/**
 * @param {number} a - The first number.
 * @param {number} b - The second number.
 * @returns {number}
 */
function add(a, b) {
  return a + b;
}

// let sum = add(1, "2");
let sum = add(1, 2);

/**
 * @param {number[]} numbers - An array of numbers
 * @returns {number} The sum of the numbers
 */
function addArray(numbers) {
  return numbers.reduce((a, b) => a + b, 0)
}

let total = addArray([1, 2, 3])