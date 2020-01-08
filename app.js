//alert("Hello")
const name="Janar";
const age="20";
const city="Pärnu";
const job="Junior Software Developer";
console.log("Name: ", name, typeof(name));
console.log('Age: ', age, typeof(age));

function hello(){
    console.log("Hello");
}

hello();
//Create a list
//let html = '<ul><li>Name:' + name + '</li><li>Age:' + age + '</li></ul>'

let html = `
    <ul>
        <li>Name: ${name}</li>
        <li>Age: ${age}</li>
        <li>City: ${city}</li>
        <li>Job: ${job}</li>
    </ul>
`;

document.body.innerHTML = html;

//Arrays

const numbers1 = [1,2,3,4,5];
console.log(numbers1);
console.log(typeof(numbers1));
// Add an element to the end of the array
numbers1.push(6);
console.log(numbers1);

// Add an element in front of the array
numbers1.unshift(0);
console.log(numbers1);

// Remove the last element of the array
let removedElement = numbers1.pop();
console.log(numbers1);
console.log("Removed element: ", removedElement)

// Remove the last element of the array
numbers1.shift();
console.log(numbers1);

// Remove element in certain position of the array using SPLICE
let spliceElement = numbers1.splice(2, 1);
console.log(numbers1);
console.log("Splice element: ", spliceElement);

// Search of an element with a certain value
let index = numbers1.indexOf(5);
console.log(index);

let mixedArray = [22, "banana", true]
// foreach loop
mixedArray.forEach(element=>{
    console.log(element, typeof(element));
});
console.log(mixedArray[1].length);

// Objects

let johnName = "John"
let johnAge = 30;

let steveName = "Steve"
let steveAge = 100;

let person1 = {
    name: johnName,
    age: johnAge
}

let person2 = {
    name: steveName,
    age: steveAge
}

let people = [person1, person2];
console.log(people);
// Show only names
people.forEach(person =>{
    console.log(person.name);
});


