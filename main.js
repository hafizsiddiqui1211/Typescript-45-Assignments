//task 01
// Installation of Node.js, TypeScript and VS Code.
//task 02
/*let myName: string = "Hafiz Siddiqui";
console.log(`Hello ${myName}, Want to learn some TypeScript today?`);*/
//task 03
/*let myName: string = "Hafiz Siddiqui";
console.log(myName.toLowerCase());
console.log(myName.toUpperCase());
console.log(myName.charAt(0).toUpperCase() + myName.slice(1).toLowerCase());*/
//task 04
/*console.log('Albert Einstein once said, “A person who never made a mistake never tried anything new.”');*/
//task 05
/*let famous_person: string = "Albert Einstein";
let message: string = `${famous_person} once said, “A person who never made a mistake never tried anything new.”`;
console.log(message);*/
//task 06
/*let myName: string = "\t\n Wildan \t\n";
console.log(myName);
console.log(myName.trim());*/
//task 07
/*console.log(5 + 3); // Addition
console.log(10 - 2); // Subtraction
console.log(4 * 2); // Multiplication
console.log(16 / 2); // Division*/
//task 08
/*console.log(5 + 3); // Addition
console.log(10 - 2); // Subtraction
console.log(4 * 2); // Multiplication
console.log(16 / 2); // Division*/
//task 09
/*let favoriteNumber: number = 8;
console.log(`My favorite number is ${favoriteNumber}.`);*/
//task 10
/*//Hafiz Wildan ahmed Siddiqui
//09-JUL-2024
//Revealing favorite number
let favoriteNumber: number = 8;
console.log(`My favorite number is ${favoriteNumber}.`);
//Hafiz Wildan ahmed Siddiqui
//09-JUL-2024
//Revealing favorite number
console.log(5 + 3); // Addition
console.log(10 - 2); // Subtraction
console.log(4 * 2); // Multiplication
console.log(16 / 2); // Division*/
//task 11
/*let names: string[] = ["Alice", "Bob", "Charlie"];
for (let i = 0; i < names.length; i++) {
    console.log(names[i]);
}*/
//task 12
/*let names: string[] = ["Alice", "Bob", "Charlie"];
for (let name of names) {
    console.log(`Hello ${name}, would you like to learn some TypeScript today?`);
}*/
//task 13
/*let transports: string[] = ["Honda motorcycle", "Tesla car", "bicycle"];
transports.forEach(transport => {
    console.log(`I would like to own a ${transport}.`);
});*/
//task 14
/*let guests: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});*/
//task 15
/*// Q14 Answer:
let guests: string[] = ["Albert Einstein", "Marie Curie", "Nikola Tesla"];
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
// Q15 Answer:
let unableToAttend = "Nikola Tesla";
console.log(`${unableToAttend} can't make it to dinner.`);
// Replace the guest
let newGuest = "Leonardo da Vinci";
guests[guests.indexOf(unableToAttend)] = newGuest;
// New invitations
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});*/
//task 16
/*let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo Vinci"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Isaac Newton");
guests.splice(guests.length / 2, 0, "Charles Darwin");
guests.push("Ada Lovelace");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});*/
//task 17
/*// Q16 Answer:
let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo Vinci"];
console.log("Great news! I found a bigger dinner table!");
// Adding more guests
guests.unshift("Isaac Newton");
guests.splice(guests.length / 2, 0, "Charles Darwin");
guests.push("Ada Lovelace");
guests.forEach(guest => {
    console.log(`Dear ${guest}, would you like to join me for dinner?`);
});
// Q17 Answer:
console.log("Unfortunately, I can only invite two people for dinner.");
while (guests.length > 2) {
    let removedGuest = guests.pop();
    console.log(`Sorry, ${removedGuest}, I can't invite you to dinner.`);
}
guests.forEach(guest => {
    console.log(`Dear ${guest}, you're still invited to dinner.`);
});
guests.splice(0, guests.length);
console.log(guests); // Shows an empty list*/
//task 18
/*let places: string[] = ["NZ", "Iceland", "Japan", "Switzerland", "Norway"];
console.log("Original order:", places);
console.log("Alphabetical order:", [...places].sort());
console.log("Original order:", places);
console.log("Reverse alphabetical order:", [...places].sort().reverse());
console.log("Original order:", places);
places.reverse();
console.log("Reversed order:", places);
places.reverse();
console.log("Original order:", places);
places.sort();
console.log("Alphabetical order:", places);
places.reverse();
console.log("Reverse alphabetical order:", places);*/
//task 19
/*let guests: string[] = ["Albert Einstein", "Marie Curie", "Leonardo da Vinci", "Isaac Newton", "Charles Darwin"];
console.log(`I am inviting ${guests.length} people to dinner.`);*/
//task 20
/*let countries: string[] = ["Japan", "Canada", "New Zealand", "Iceland"];
console.log("Countries I'd like to visit:", countries);*/
//task 21
/*let book: { title: string; author: string; yearPublished: number } = {
    title: "The Hobbit",
    author: "J.R.R. Tolkien",
    yearPublished: 1937
};
console.log(`Book Info: ${book.title} by ${book.author}, published in ${book.yearPublished}`);*/
//task 22
/*let friends: string[] = ["Alice", "Bob", "Charlie"];
console.log(friends[3]); // Intentional error: Arrays are zero-indexed, so index 3 is out of bounds.
friends[2] = "Charlie"; // Correcting the error by accessing a valid index.*/
//task 23
/*let car = "subaru";
console.log("Is car == 'subaru'? I predict true");
console.log(car == "subaru");
console.log("Is car == 'toyota'? I predict false");
console.log(car == "toyota");
// Create at least 10 tests. Have at least 5 tests evaluate to
// True and another 5 tests evaluate to False.*/
//task 24
/*// Equality with strings
console.log("Testing equality with strings:");
console.log("apple" == "apple"); // True
console.log("apple" == "Apple"); // False
// Using the lower case function
console.log("Testing with lower case:");
console.log("Apple".toLowerCase() == "apple"); // True
// Numerical tests
console.log("Numerical tests:");
console.log(10 > 5); // True
console.log(2 < 1); // False
// Tests using "and" and "or" operators
console.log("Tests with 'and' and 'or':");
console.log(true && false); // False
console.log(true || false); // True
// Test whether an item is in a array
let fruits = ["apple", "banana", "cherry"];
console.log("Is 'apple' in fruits?");
console.log(fruits.includes("apple")); // True
// Test whether an item is not in a array
console.log("Is 'mango' not in fruits?");
console.log(!fruits.includes("mango")); // True*/
//task 25
/*// Version that passes:
let alien_color = "green";
if (alien_color == "green") {
console.log("You just earned 5 points!");
}
// Version that fails (no output):
alien_color = "red";
if (alien_color == "green") {
  // No output because the condition is false
}*/
//task 26
/*// Version that passes:
let alien_color = "green";
// Q26 Answer:
// Version that runs the if block:
alien_color = "green";
if (alien_color == "green") {
console.log("You just earned 5 points for shooting the alien");
} else {
console.log("You just earned 10 points");
}
// Version that runs the else block:
alien_color = "yellow";
if (alien_color == "green") {
console.log("You just earned 5 points for shooting the alien!");
} else {
console.log("You just earned 10 points!");
}*/
//task 27
/*let alien_color = "pink";
// Green alien version:
alien_color = "green";
if (alien_color == "green") {
console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
console.log("You earned 10 points.");
} else if (alien_color == "red") {
console.log("You earned 15 points.");
}
// Yellow alien version:
alien_color = "yellow";
if (alien_color == "green") {
console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
console.log("You earned 10 points.");
} else if (alien_color == "red") {
console.log("You earned 15 points.");
}
// Red alien version:
alien_color = "red";
if (alien_color == "green") {
console.log("You earned 5 points.");
} else if (alien_color == "yellow") {
console.log("You earned 10 points.");
} else if (alien_color == "red") {
console.log("You earned 15 points.");
}
export {} // To prevent errors from redeclaration*/
//task 28
/*let age: number = 25;
if (age < 2) {
console.log("The person is a baby.");
} else if (age < 4) {
console.log("The person is a toddler.");
} else if (age < 13) {
console.log("The person is a kid.");
} else if (age < 20) {
console.log("The person is a teenager.");
} else if (age < 65) {
console.log("The person is an adult.");
} else {
console.log("The person is an elder.");
}*/
//task 29
/*let favorite_fruits:string[]=["Mango", "Date", "Grape"];
if (favorite_fruits.includes("Mango"))
{
    console.log("You really like Mangoes!");
}
if (favorite_fruits.includes("Date"))
{
    console.log("You really like Dates!");
}
if (favorite_fruits.includes("Grape"))
{
    console.log("You really like Grapes!");
}
if (favorite_fruits.includes("Apple"))
{
    console.log("You really like Apples!");
}
if (favorite_fruits.includes("Bananas"))
{
    console.log("You really like Bananas!");
}*/
//task 30
/*let usernames: string[] = ["admin", "user1", "user2", "user3", "user4"];
usernames.forEach((username) => {
if (username == "admin") {
    console.log("Hello admin, would you like to see a status report?");
} else {
    console.log(`Hello ${username}, thank you for loggin in again.`);
}
});*/
//task 31
/*let usernames: string[] = [];
if(usernames.length === 0){
    console.log("We need to find some users!");
} else {
    // Greet Users
}
// Removing all usernames ensures the message
// "We need to find some users!" is printed.*/
//task 32
/*let current_users: string[] = ["user1", "admin", "user3", "user4", "user5"];
let new_users: string[] = ["User1", "User6", "user7", "admin", "User9"];
new_users.forEach((newUser) => {
if (
    current_users.some((currentUser) => currentUser.toLowerCase() === newUser.toLowerCase())
) {
    console.log(`${newUser} will need to enter a new username.`);
} else {
    console.log(`${newUser} is available.`);
}
});*/
//task 33
/*let numbers: number[] = [1, 2, 3, 4, 5, 6, 7, 8, 9];
numbers.forEach((number) => {
let suffix = "th";
if (number === 1) {
    suffix = "st";
} else if (number === 2) {
    suffix = "nd";
} else if (number === 3) {
    suffix = "rd";
}
console.log(`${number}${suffix}`);
});*/
//task 34
/*let pizzas: string[] = ["pepperoni", "margherita", "hawaiian"];
pizzas.forEach(pizza => {
console.log(`I like ${pizza} pizza.`);
});
console.log("I really love pizza!");*/
//task 35
/*let animals: string[] = ["dog", "cat", "rabbit"];
animals.forEach((animal) => {
console.log(`A ${animal} would make a great pet.`);
});
console.log("Any of these animals would make a great pet!");*/
//task 36
/*function make_shirt(size: string, message: string) {
console.log(`Making a ${size} t-shirt with the message "${message}" printed on it`);
}
make_shirt("medium", "Code is Life");*/
//task 37
/*function make_shirt(size: string = "large", message: string ="I love TypeScript") {
console.log(`Making a ${size} t-shirt with the message"${message}" printed on it.`);
}
make_shirt(); // Default large and message
make_shirt("medium"); // Default message, medium size
make_shirt("small", "Dive into Coding"); // Custom message, small size*/
//task 38
/*function describe_city(city: string, country: string = "Pakistan") {
console.log(`${city} is in ${country}.`);
}
describe_city("Karachi");
describe_city("Lahore");
describe_city("Tokyo", "Japan");*/
//task 39
/*function city_country(city: string, country: string): string {
return `${city}, ${country}`;
}
console.log(city_country("Lahore", "Pakistan"));
console.log(city_country("Tokyo", "Japan"));
console.log(city_country("Paris", "France"));*/
//task 40
/*function make_album(artist: string, title: string, tracks?: number) {
let album = { artist, title };
if (tracks) {
album["tracks"] = tracks;
}
return album;
}

console.log(make_album("Artist One", "The First Album"));
console.log(make_album("Artist Two", "The Second Album"));
console.log(make_album("Artist Three", "The Third Album", 12));*/
//task 41
/*let magicians: string[] = ["Alice", "David", "Chris"];
function show_magicians(magicians: string[]) {
magicians.forEach((magician) => {
console.log(magician);
});
}
show_magicians(magicians);*/
//task 42
/*let magicians: string[] = ["Alice", "David", "Chris"];
function show_magicians(magicians: string[]) {
magicians.forEach((magician) => {console.log(magician);
});
}
function make_great(magicians: string[]) {
for (let i = 0; i < magicians.length; i++) {
magicians[i] = magicians[i] + " the Great";
}
}
make_great(magicians); // Modifies the original array
show_magicians(magicians); // Shows modified names*/
//task 43
var magicians = ["Alice", "David", "Chris"];
function make_great(magicians) {
    var greatMagicians = [];
    magicians.forEach(function (magician) {
        greatMagicians.push("".concat(magician, " the Great"));
    });
    return greatMagicians;
}
function show_magicians(magicians) {
    magicians.forEach(function (magician) {
        console.log(magician);
    });
}
// Creates a new modified array
var greatMagicians = make_great(magicians.slice());
console.log("Original magicians:");
show_magicians(magicians); // Shows original names
console.log("Great magicians:");
show_magicians(greatMagicians); // Shows modified names
