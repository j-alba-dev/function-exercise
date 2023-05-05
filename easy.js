// Easy

// Write a function that takes in an array of numbers and returns the largest number in the array.
function findLargestNumber(numbers) {
  let largest = numbers[0];
  for (let i = 1; i < numbers.length; i++) {
    if (numbers[i] > largest) {
      largest = numbers[i];
    }
  }
  return largest;
}

const numberArr = [5, 1, 9, 3, 7];

console.log(findLargestNumber(numberArr)); // Output: 9

// Write a function that takes in a string and returns the number of vowels in the string.
function countVowels(str) {
  return str.match(/[aeiou]/gi).length;
}
const str1 = "Hello world";

console.log(countVowels(str1)); // Output: 3

// Write a function that takes in an object and a key, and returns the value of that key in the object.
function getValueByKey(obj, key) {
  return obj[key];
}
const person = {
  name: "John",
  age: 32,
  job: "Software Engineer",
};

console.log(getValueByKey(person, "age")); // Output: 32
