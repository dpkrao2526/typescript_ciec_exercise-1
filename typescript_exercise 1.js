// EXERCISE 1
var numbersList = [10, 25, 38, 49, 57, 66, 78, 89];
console.log(numbersList);

var wordsList = ["Alpha", "Beta", "Gamma", "Delta", "Epsilon", "Zeta", "Eta", "Theta"];
console.log(wordsList);

var truthValues = [true, false, true, false, false];
console.log(truthValues);

var mixedItems = ["Apple", 23, "Banana", 45, "Cherry", 67, "Date", 89];
console.log(mixedItems);

// EXERCISE 2
var fruitBasket = ["Orange", "Mango", "Pineapple"];
fruitBasket.push("Strawberry");
console.log(fruitBasket);
fruitBasket.shift();
console.log(fruitBasket);
fruitBasket.splice(1, 0, "Watermelon");
console.log(fruitBasket);
fruitBasket = fruitBasket.reverse();
console.log(fruitBasket);

// EXERCISE 3: Map, Filter, and Reduce
var valuesArray = [12, 24, 36, 48, 60, 72];
var squaredValues = valuesArray.map(x => x ** 2);
console.log(squaredValues);
var greaterThanThirty = valuesArray.filter(x => x > 30);
console.log("Values greater than 30:", greaterThanThirty);
var totalSum = valuesArray.reduce((total, current) => total + current, 0);
console.log("Sum of values:", totalSum);

// EXERCISE 4: Find and FindIndex
var dataset = [5, 15, 25, 35, 45, 55];
var firstMatch = dataset.find(x => x > 20);
console.log("First value greater than 20:", firstMatch);
var indexFound = dataset.findIndex(x => x === 35);
console.log("Index of 35:", indexFound);

// EXERCISE 5: Sorting
var ranking = [75, 34, 56, 92, 12];
var ascendingOrder = ranking.slice().sort((a, b) => a - b);
console.log("Ascending Order:", ascendingOrder);
var descendingOrder = ranking.slice().sort((a, b) => b - a);
console.log("Descending Order:", descendingOrder);

// EXERCISE 6: Tuple Types
var studentRecord = ["Prasanna", 23, "CSE"];
studentRecord[1] = 26;
console.log("Updated Age:", studentRecord[1]);
console.log(studentRecord);

// EXERCISE 7: includes() and some()
var roleList = ["Viewer", "Editor", "Moderator", "SuperUser"];
var hasModerator = roleList.includes("Moderator");
console.log("Has Moderator Role:", hasModerator);
var hasSuperPrefix = roleList.some(role => role.startsWith("Super"));
console.log("Contains Super Role:", hasSuperPrefix);

// EXERCISE 8: Flattening an Array
var nestedData = [[1, 2], [3, [4, 5]], 6];
console.log("Flattened List:", nestedData.flat(2));

// EXERCISE 9: Merging and Removing Duplicates
var listOne = [5, 10, 15, 20];
var listTwo = [15, 20, 25, 30];
var combinedList = [...new Set([...listOne, ...listTwo])].sort((a, b) => a - b);
console.log("Merged Unique List:", combinedList);

var staff = [
    { name: "Prasanna", age: 24, role: "Engineer" },
    { name: "Varun", age: 40, role: "Manager" },
    { name: "Aditi", age: 35, role: "HR" },
    { name: "Sneha", age: 27, role: "Analyst" }
];

var experiencedStaff = staff.filter(person => person.age > 30);
console.log("Staff above 30:", experiencedStaff);
