
let name: string = "Fuad Hasan";


let age: number = 22;


let isStudent: boolean = true;



let hobbies: string[] = ["Football", "Coding", "Movies"];

let marks: number[] = [70, 80, 90];



let user: {
  name: string;
  age: number;
  email: string;
} = {
  name: "Fuad Hasan",
  age: 22,
  email: "fuad@example.com",
};



function add(a: number, b: number): number {
  return a + b;
}



function greet(name: string): string {
  return `Hello ${name}`;
}



function introduce(name: string, age?: number): string {
  if (age) {
    return `My name is ${name} and I am ${age} years old.`;
  }

  return `My name is ${name}.`;
}



let userId: string | number = 101;

userId = "USER-101";


let country = "Bangladesh";
let score = 95;



console.log(name)
console.log(age)
console.log(isStudent)
console.log(hobbies)
console.log(marks)
console.log(user)
console.log(add(10, 20))
console.log(greet("Fuad"))
console.log(introduce("Fuad", 22))
console.log(userId)
console.log(country)
console.log(score)