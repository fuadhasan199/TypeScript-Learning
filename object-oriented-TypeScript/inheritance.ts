
class Animal { 

     constructor(  public name:string ,
     public barking:boolean) {}

   
}  

class cat1 extends Animal {
      constructor(name:string , barking:boolean){
         super(name,barking)
      } 
      makeSound(){
         console.log(`${this.name} is making a sound`)
      }
} 


const cat =new cat1("Jerry",false)  
const dog1 =new cat1("Tommy",true)
console.log(cat.name)
cat.makeSound() 

console.log(dog1.name)
dog1.makeSound()