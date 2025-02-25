// EXERCISE 1

// Array of numbers
let numList: number[] = [9, 8, 7, 6, 5, 4, 3, 2];
console.log(numList);

// Array of strings
let strList: string[] = ["A", "B", "C", "D", "E", "F", "G", "H"];
console.log(strList);

// Array of booleans
let boolList: boolean[] = [false, true];
console.log(boolList);

// Mixed Array containing numbers and strings
let mixedList: (number | string)[] = [100, "x", 200, "y", 300, "z", 400];
console.log(mixedList);

// EXERCISE 2
let fruitBasket: string[] = ["orange", "kiwi", "melon"];

// Add "strawberry" at the end
fruitBasket.push("strawberry");
console.log(fruitBasket);

// Remove the first element
fruitBasket.splice(0, 1);
console.log(fruitBasket);

// Insert "blueberry" at index 2
fruitBasket.splice(2, 0, "blueberry");
console.log(fruitBasket);

// Reverse the array
fruitBasket = fruitBasket.reverse();
console.log(fruitBasket);

// EXERCISE 3: Map, Filter, and Reduce
let numArray: number[] = [5, 10, 15, 20, 25, 30];

// Create a new array that squares each number
let squaredArray = numArray.map(n => n * n);
console.log(squaredArray);

// Filter numbers greater than 18
let filteredNums = numArray.filter(n => n > 18);
console.log("Numbers greater than 18:", filteredNums);

// Compute the total sum
let total = numArray.reduce((acc, curr) => acc + curr, 0);
console.log("Total sum:", total);

// EXERCISE 4: Find and FindIndex
let valuesArray: number[] = [11, 22, 33, 44, 55];

// Find the first number greater than 30
let firstGreaterThan30 = valuesArray.find(n => n > 30);
console.log("First number greater than 30:", firstGreaterThan30);

// Get the index of 44
let index44 = valuesArray.indexOf(44);
console.log("Index of 44:", index44);

// EXERCISE 5: Sorting an Array
let scoresList: number[] = [42, 13, 66, 29, 90, 51];

// Sort in ascending order
scoresList.sort((a, b) => a - b);
console.log("Sorted in ascending order:", scoresList);

// Sort in descending order
let descScores = [...scoresList].sort((a, b) => b - a);
console.log("Sorted in descending order:", descScores);

// EXERCISE 6: Tuple Types
let person: [string, number, boolean] = ["Alice", 25, false];

// Update age
person[1] = 28;
console.log("Updated tuple:", person);

// EXERCISE 7: Working with includes() and some()
let permissions: string[] = ["Guest", "Member", "Admin", "SuperUser"];

// Check if "Admin" exists
let hasAdminRole = permissions.includes("Admin");
console.log("Has Admin role:", hasAdminRole);

// Check if at least one role starts with "Super"
let hasSuperRole = permissions.some(role => role.startsWith("Super"));
console.log("Contains Super role:", hasSuperRole);

// EXERCISE 8: Flattening an Array
let nestedArray: (number | number[])[] = [3, [4, 5], [6, [7, 8]]];
let flatArray = nestedArray.flat(2);
console.log("Flattened array:", flatArray);

// EXERCISE 9: Merging and Removing Duplicates
let arrayOne: number[] = [2, 4, 6, 8];
let arrayTwo: number[] = [5, 6, 7, 8];

// Merge and sort
let mergedArray = [...new Set([...arrayOne, ...arrayTwo])].sort((a, b) => a - b);
console.log("Merged and sorted array:", mergedArray);

// EXERCISE 10: Interface with Arrays
interface Employee {
    fullName: string;
    yearsOld: number;
    jobTitle: string;
}

let staff: Employee[] = [
    { fullName: "Prasanna", yearsOld: 22, jobTitle: "Engineer" },
    { fullName: "Vinoth", yearsOld: 31, jobTitle: "Manager" },
    { fullName: "MuthuMathi", yearsOld: 45, jobTitle: "HR" },
    { fullName: "KSK", yearsOld: 23, jobTitle: "Intern" }
];

// Filter employees older than 30
let seniorEmployees = staff.filter(emp => emp.yearsOld > 30);
console.log("Employees older than 30:", seniorEmployees);
