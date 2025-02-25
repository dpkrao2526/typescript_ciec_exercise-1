// 1. concat() Exercises
// Q1: Combining two arrays using concat()
let arr1 = [1, 2, 3];
let arr2 = [4, 5, 6];
let combinedArr = arr1.concat(arr2);
console.log(combinedArr); // Output: [1, 2, 3, 4, 5, 6]

// Q2: Merging three arrays using concat()
let names1 = ["Alice", "Bob"];
let names2 = ["Charlie", "David"];
let names3 = ["Eve", "Frank"];
let mergedNames = names1.concat(names2, names3);
console.log(mergedNames); // Output: ["Alice", "Bob", "Charlie", "David", "Eve", "Frank"]

// Q3: Output of the given concat() code
let boolArr = [true, false];
let stringArr = ["Yes", "No"];
let finalArr = boolArr.concat(stringArr, [1, 2, 3]);
console.log(finalArr); // Output: [true, false, "Yes", "No", 1, 2, 3]



// 2. copyWithin() Exercises
// Q4: Replace first two elements with the last two elements
let numbers = [10, 20, 30, 40, 50];
numbers.copyWithin(0, 3, 5);
console.log(numbers); // Output: [40, 50, 30, 40, 50]

// Q5: Output of the given copyWithin() code
let fruits = ["apple", "banana", "cherry", "date", "elderberry"];
fruits.copyWithin(1, 3, 5);
console.log(fruits); // Output: ["apple", "date", "elderberry", "date", "elderberry"]

// Q6: Copy elements from index 2 and place them at index 0
let arr = [1, 2, 3, 4, 5, 6];
arr.copyWithin(0, 2);
console.log(arr); // Output: [3, 4, 5, 6, 5, 6]



// 3. every() Exercises
// Q7: Check if all numbers are even
let evenNumbers = [2, 4, 6, 8, 10];
let allEven = evenNumbers.every(num => num % 2 === 0);
console.log(allEven); // Output: true

// Q8: Output of the given every() code
let words = ["apple", "banana", "avocado"];
let startsWithA = words.every(word => word.startsWith("a"));
console.log(startsWithA); // Output: false

// Q9: Function to check if all numbers are positive
function areAllPositive(nums: number[]): boolean {
    return nums.every(num => num > 0);
}
console.log(areAllPositive([1, 2, 3, 4])); // Output: true
console.log(areAllPositive([-1, 2, 3, 4])); // Output: false



// 4. fill() Exercises
// Q10: Replace all elements with 0
let filledArr = [1, 2, 3, 4, 5];
filledArr.fill(0);
console.log(filledArr); // Output: [0, 0, 0, 0, 0]

// Q11: Output of the given fill() code
let letterArr = ["A", "B", "C", "D", "E"];
letterArr.fill("X", 1, 4);
console.log(letterArr); // Output: ["A", "X", "X", "X", "E"]

// Q12: Update only the last three elements with "done"
let status = ["pending", "pending", "pending", "pending", "pending"];
status.fill("done", 2);
console.log(status); // Output: ["pending", "pending", "done", "done", "done"]
