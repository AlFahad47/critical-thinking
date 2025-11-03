
// Sort
let fruits = ["Apple", "Banana", "Kiwi", "Orange"];

let numbers = [10, 25, 3.14, 7];
numbers.sort((a,b)=>b-a)

fruits.sort((a,b)=>a.localeCompare(b))

// console.log(numbers)
// console.log(fruits)


// Nested array flat

let nestedArray = ["Apple", "Orange", ["Kiwi", "Banana"], 10, [25, 7]];
let flatArray = nestedArray.flat()
console.log(flatArray)

let deeplyNestedArray = [1, [2, 3], [4, [5, 6], 7], 8];
let flatDeeplyNestedArray = deeplyNestedArray.flat(Infinity)
console.log(flatDeeplyNestedArray)


let nestedWithDuplicates = [
  "Apple",
  ["Banana", "Orange"],
  "Apple",
  ["Kiwi", "Banana"],
  "Orange"
];

const flatNestedWithDuplicates = new Set(nestedWithDuplicates.flat());

console.log(flatNestedWithDuplicates)
console.log([...flatNestedWithDuplicates]) // converting set to array