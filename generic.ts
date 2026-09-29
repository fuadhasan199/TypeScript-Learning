// without generic
 function getValue(value: string ):string {
      return value
 } 
 console.log(getValue("Hello TypeScript")) 

// with generic 
  function getValue<T>(value:T):T{
       return value
  } 

  const name =getValue("Fuad Hasan") 
  const age= getValue(30) 

  console.log(name,age)  

// array generic 

function getArray<T>(items: T[]):T[]{
      return items
} 
const name=["Fuad ","Porag"] 
const number=[1,2,3] 
console.log(name,number)