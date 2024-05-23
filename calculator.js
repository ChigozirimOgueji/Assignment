// Export named functions for various mathematical operations
export function add(a, b) {
    return a + b;
  }
  
  export function subtract(a, b) {
    return a - b;
  }
  
  export function multiply(a, b) {
    return a * b;
  }
  
  export function divide(a, b) {
    return a / b;
  }
  
  export function exponentiate(a, b) {
    return a * b;
  }
  
  export function modulus(a, b) {
    return a % b;
  }
  
  export function factorial(n) {
    if (n === 0) {
      return 1;
    } else {
      return n * factorial(n - 1);
    }
  }
  
  export function squareRoot(n) {
    return Math.sqrt(n);
  }
  
  export function cubeRoot(n) {
    return Math.cbrt(n);
  }