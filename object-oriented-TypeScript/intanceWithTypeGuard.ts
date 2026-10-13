
export {}

class Animal {
     constructor(public name:string){}
} 

class Dog extends Animal {
     bark(){
         console.log(`${this.name} is barking`)
     }
} 

class Cat extends Animal {
     mew(){
         console.log(`${this.name} is mew mew`)
     }
}  

const dog =new Dog("Tommy") 
const cat =new Cat("Jerry") 

// type Guard function 


function makeSound(animal:Animal){
     if(animal instanceof Dog){
         animal.bark()
     } 
     else if(animal instanceof Cat){
         animal.mew()
     }
} 

makeSound(dog)
makeSound(cat)