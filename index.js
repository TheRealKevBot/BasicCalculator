//  Create a function that takes two numbers and a mathematical operator + - / * 
//  and will perform a calculation with the given numbers.

function calculator(num1, operator, num2) {
    num1 = num1.toString();
    num2 = num2.toString();
    let result = num1.concat(operator, num2);
	return eval(result) === Infinity ? "You can't divide a number by zero (0)!" : result
} 

console.log(calculator(2, '/', 2), 1)
console.log(calculator(10, '-', 7), 3)
console.log(calculator(2, '*', 16), 32)
console.log(calculator(2, '-', 2), 0)
console.log(calculator(15, '+', 26), 41)
console.log(calculator(2, '+', 2), 4)
console.log(calculator(2, "/", 0), "//error message//") 