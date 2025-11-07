// ----------------------------------------------------
// 📘 CLASS 11: Modern JavaScript (ES6 & ES7)
// ----------------------------------------------------

// ✅ 1. INTRODUCTION to Function
// A simple function that takes three numbers, adds them, and returns the result
function sum(num1, num2, num3) {
    const result = num1 + num2 + num3;
    return result;
}

// Calling the function with different arguments
const sum1 = sum(5, 10, 20);
const sum2 = sum(500, 100, 300);

// Printing results
console.log(sum1);  // Output: 35
console.log(sum2);  // Output: 900


// ✅ 2. LET, CONST (Block Scoped Variables)
// 'let' allows reassignment
let age = 25;
age = 26; // ✅ Allowed
console.log(age); // Output: 26

// 'const' is used for constants (cannot be reassigned)
const birthYear = 1998;
// birthYear = 1999; ❌ Error: Assignment to constant variable
console.log(birthYear); // Output: 1998


// ✅ 3. TEMPLATE LITERALS (String Interpolation)
// Combine variables easily using backticks (` `)
const f_name = "Md";
const m_name = "Naimur";
const l_name = "Rahman";

// Traditional string concatenation
const full_name = f_name + " " + m_name + " " + l_name;
console.log(full_name); // Output: Md Naimur Rahman

// Template literal with embedded expressions
const full_name_2 = `Name: ${full_name}, Age: ${age}, Birth Year: ${birthYear}`;
console.log(full_name_2); // Output: Name: Md Naimur Rahman, Age: 26, Birth Year: 1998


// ✅ 4. ARROW FUNCTIONS (Shorter way to write functions)
const divide = (num1, num2) => {
    console.log(num1 / num2);
};

// Calling arrow functions
divide(10, 2);  // Output: 5
divide(5, 10);  // Output: 0.5


// ✅ 5. DEFAULT PARAMETERS
// Function with default parameter values (if no arguments are passed)
const multiply = (num1 = 3, num2 = 2) => {
    return num1 * num2;
};

// Calling the function with and without arguments
console.log(multiply(5));     // Output: 10 (uses num1=5, num2=2)
console.log(multiply());      // Output: 6 (uses default 3*2)
console.log(multiply(7, 8));  // Output: 56
// ----------------------------------------------------
// 🧠 TASKS FOR PRACTICE
// ----------------------------------------------------

// 1️⃣ Create a function called 'subtract' that takes two numbers and returns their difference.
//    Example: subtract(10, 5) → 5

// 2️⃣ Use template literals to print: 
//    "My name is [your name] and I am learning JavaScript."

// 3️⃣ Write an arrow function called 'square' that takes one number and prints its square.

// 4️⃣ Create a function 'greet' with a default parameter 'name = "Guest"'.
//    It should print "Welcome, [name]!".

// 5️⃣ Create three variables: 'firstName', 'lastName', 'city'.
//    Use template literals to print: "My name is [firstName lastName] and I live in [city]."

// 6️⃣ Write a function 'calculate' that takes three numbers and returns their average.

// 7️⃣ Use const and let properly to show the difference between reassignable and constant variables.

// 8️⃣ Create an arrow function 'cube' that takes a number and returns its cube.

// 9️⃣ Write a function that multiplies two numbers but if one number is missing, it should use 1 as the default.

// 🔟 Create a function 'printInfo' that accepts name, age, and country — 
//     and prints them using template literals in a full sentence.
