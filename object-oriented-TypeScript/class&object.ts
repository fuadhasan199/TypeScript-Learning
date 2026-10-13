// Class and Object in TypeScript 

class Animal {
    //  public name:string 
    //  public species:string 
    //  public barking:boolean 

     constructor(public name:string, public species:string, public barking:boolean){
        //  this.name =name ;
        //  this.species = species ;
        //     this.barking = barking ;
     } 

 makeSound(){
     console.log(`this animal name is ${this.name}`)
   }


} 

   const dog=new Animal('Tommy','dog',true) 
   const tiger=new Animal("Sheru bhai",'tiger',true) 

  dog.makeSound()
  tiger.makeSound()
  