
// public modifer 

class Student {
 name: string = "Fuad Hasan";
}

const student = new Student();

console.log(student.name); 

// ````````````````````````````````````````````````````````````````````````````
// private modifer 

 class BankAccount {
      private balance: number =2000

    public showBalance(){
          console.log(`Balance is ${this.balance}`)
      }
 } 

 const account =new BankAccount() 
 account.showBalance()
 console.log(account)  


// ````````````````````````````````````````````````````````````````````````````
// protected modifer  
class Animal {
  protected sound: string = "Animal sound";
} 

class Dog extends Animal {
  public makeSound() {
    console.log(this.sound);
  }
} 

const dog = new Dog();
dog.makeSound(); 

console.log(dog)

