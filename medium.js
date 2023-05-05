// Medium

// Write a function that takes in an array of numbers and returns a new array with only the even numbers.
function getEvenNumbers(numbers) {
  // Your code here
}

const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

console.log(getEvenNumbers(numbers)); // Output: [2, 4, 6, 8, 10]

// Write a function that takes in a string and returns a new string with the first letter of each word capitalized.
function capitalizeFirstLetter(str) {
  let words = str.split(" ");
  for (let i = 0; i < words.length; i++) {
    let word = words[i];
    words[i] = word.charAt(0).toUpperCase() + word.slice(1);
  }
  return words.join(" ");
}

const str = "the quick brown fox jumps over the lazy dog";

console.log(capitalizeFirstLetter(str)); // Output: 'The Quick Brown Fox Jumps Over The Lazy Dog'

// Write a function that takes in an array of objects representing people, and returns a new array with only the people who are over 30 years old.
function getPeopleOver30(people) {
  const peopleOver30 = [];

  for (let i = 0; i < people.length; i++) {
    if (people[i].age > 30) {
      peopleOver30.push(people[i]);
    }
  }

  return peopleOver30;
}

const people = [
  { name: "John", age: 32 },
  { name: "Mary", age: 25 },
  { name: "David", age: 42 },
  { name: "Sarah", age: 28 },
];

console.log(getPeopleOver30(people)); // Output: [{ name: 'John', age: 32 }, { name: 'David', age: 42 }]
