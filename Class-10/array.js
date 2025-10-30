// ----------------------------------------------------
// 📘 Let's Learn About Arrays in JavaScript
// ----------------------------------------------------

// ✅ A string array (array of names)
let names = ["Naimur", "Shakib", "Tamim"];
console.log(names); // Output: ["Naimur", "Shakib", "Tamim"]


// ✅ A number array
let numbers = [1, 2, 3, 4];
console.log(numbers); // Output: [1, 2, 3, 4]


// ✅ Accessing elements using index
// (Remember: array index starts from 0)
console.log(numbers[3] + " " + names[1]); 
// Output: "4 Shakib" (4th number and 2nd name)


// ✅ Adding a new element to the end of the array using push()
names.push("Musfiq");
console.log(names); // Output: ["Naimur", "Shakib", "Tamim", "Musfiq"]
console.log(names[3]); // Output: "Musfiq"


// ✅ Removing the last element using pop()
names.pop();
console.log(names); // Output: ["Naimur", "Shakib", "Tamim"]


// ✅ Extracting a portion of an array using slice(start, end)
// It returns a new array without changing the original one
let neededNumbers = numbers.slice(1, 3);
console.log(neededNumbers); // Output: [2, 3]


// ✅ Finding the length (total number of elements) in an array
let lengthOfNamesArray = names.length;
console.log("Length of names array is: " + lengthOfNamesArray);
// Output: "Length of names array is: 3"


// ----------------------------------------------------
// 🧠 TASKS FOR PRACTICE (10 Tasks)
// ----------------------------------------------------

// 1️⃣ Create an array of 5 fruits and print them in the console.

// 2️⃣ Add a new fruit at the end of the array using push() and print the updated array.

// 3️⃣ Remove the last fruit using pop() and print the array again.

// 4️⃣ Print the first and last fruit from the array using indexes.

// 5️⃣ Create a number array from 10 to 50. Print only the 2nd and 4th elements.

// 6️⃣ Use slice() to extract a portion of your number array (e.g., elements 2 to 5).

// 7️⃣ Find and print the length of your fruits array using the length property.

// 8️⃣ Replace one element in your fruits array (for example, change "Apple" to "Mango").

// 9️⃣ Combine two arrays (e.g., fruits + vegetables) into one using concat() and print it.

// 🔟 Sort your number array in ascending order using sort() and print the result.
