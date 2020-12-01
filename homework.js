// Observe the list of people below
const people = [{ name: "John Doe", age: 16 },
{ name: "Thomas Calls", age: 19 },
{ name: "Liam Smith", age: 20 },
{ name: "Jessy Pinkman", age: 18 },
];

// Observe the coffeeLovers list containing people who are coffee lovers
const coffeeLovers = ["John Doe", "Liam Smith", "Jessy Pinkman"];

// use map, filter, and reduce to do the following:
/*
1. Filter all people above the age of 18 (use a function called ageAbove18)
2. Transform the people array so all people in the array who are in coffeeLovers have a property
   in their object called coffeeLover, set either to true or false. (Use a function called addCoffeeLoverProperty)
3. Get the total summed age of all people who are coffee lovers and above the age of 18 (Use a function called ageReducer)
*/

//filters all the people above the age of 18
const ageAbove18 = (results) => results.age > 18;
const filteredArray = (people) => people.filter(ageAbove18);
console.log( "1. Filter all people above the age of 18 (use a function called ageAbove18\n");
console.log(filteredArray(people));
console.log("\n");


//adds a property called coffeeLover; sets each property to true or false using .includes() and returns the property
const addCoffeeLoverProperty = (loverProperty) => {
    loverProperty.coffeeLover = coffeeLovers.includes(loverProperty.name);
    return loverProperty;
}
const mapper = (people) => people.map(addCoffeeLoverProperty);
console.log( "2. Transform the people array so all people in the array who are in coffeeLovers have a property in their object called coffeeLover, set either to true or false. Use a function called addCoffeeLoverProperty\n");
console.log(mapper(people));
console.log("\n");

//Collects the sum of ages of all people
const ageReducer = (accumalator, num) => accumalator + num.age;
const total = (people) => people.reduce(ageReducer, 0)

//filters coffee lovers
const newCoffee = (results) => results.coffeeLover == true;
const newFilter = (people) => people.filter(newCoffee);

//adds coffee lover property to people above the age of 18
const coffeeLoversAbove18 = (people) => mapper(filteredArray(people));


const totalAgeOfCoffeeLoversAbove18 = (people) => total(coffeeLoversAbove18(people));
console.log("3. Get the total summed age of all people who are coffee lovers and above the age of 18 (Use a function called ageReducer)");
console.log(totalAgeOfCoffeeLoversAbove18(newFilter(people)));



















