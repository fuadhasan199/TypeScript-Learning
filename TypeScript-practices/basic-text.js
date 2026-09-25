"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
let name = "Fuad Hasan";
let age = 22;
let isStudent = true;
let hobbies = ["Football", "Coding", "Movies"];
let marks = [70, 80, 90];
let user = {
    name: "Fuad Hasan",
    age: 22,
    email: "fuad@example.com",
};
function add(a, b) {
    return a + b;
}
function greet(name) {
    return `Hello ${name}`;
}
function introduce(name, age) {
    if (age) {
        return `My name is ${name} and I am ${age} years old.`;
    }
    return `My name is ${name}.`;
}
let userId = 101;
userId = "USER-101";
let country = "Bangladesh";
let score = 95;
console.log(name);
console.log(age);
console.log(isStudent);
console.log(hobbies);
console.log(marks);
console.log(user);
console.log(add(10, 20));
console.log(greet("Fuad"));
console.log(introduce("Fuad", 22));
console.log(userId);
console.log(country);
console.log(score);
