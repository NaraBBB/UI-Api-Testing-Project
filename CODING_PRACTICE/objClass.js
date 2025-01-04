
class Cookies {
    constructor(нэр, isГурилтай){
        this.name = нэр;
        this.isGlutenFree = isГурилтай
    }  
}
const myCookie = new Cookies("maruujin", false);
console.log(myCookie);


class Танилцуулга{
    constructor(нэр, нас){
    this.name = нэр;
    this.age = нас;
    }
    }
    const минийМэдээлэл1 = new Танилцуулга("Nara", "25")
    const минийМэдээлэл2 = new Танилцуулга("Muugi", "35")
    const минийМэдээлэл3 = new Танилцуулга("Gerlee", "36")
    console.log(минийМэдээлэл1) 
    console.log(минийМэдээлэл2) 
    console.log(минийМэдээлэл3["name"]) //Gerlee 
    console.log(минийМэдээлэл3.name) //Gerlee


    // EXAMPLE 3
    class Calculator {
        нэмэх( a, b) {
            return a + b;
        }
        хасах(a, b){
            return a - b;
        }
        үржих(a, b){
            return a * b;
        }
        хуваах(a, b){
            if(b === 0){
            return "You cannot divide number by zero"
        }
        return a / b
    }
}
const calc = new Calculator();
console.log(calc.нэмэх(5, 3));       // OUTPUT: 8
console.log(calc.хасах(10, 4)); // OUTPUT: 6
console.log(calc.үржих(3, 3));  // OUTPUT: 9
console.log(calc.хуваах(10, 2));   // OUTPUT: 5
console.log(calc.хуваах(10, 0));   // OUTPUT: Cannot divide by zero!


  // EXAMPLE 4


  class BankAccount{
    constructor(owner,balance ){
        this.эзэн = owner;
        this.үлдэгдэл = balance ;
    }
  deposit(хэмжээ){
    this.эзэн +=хэмжээ;
    console.log(`${this.эзэн} nemsen $${хэмжээ}. New үлдэгдэл: $${this.үлдэгдэл }`);
  }
withdraw(хэмжээ){
    if(хэмжээ > this.үлдэгдэл){
        console.log("Insufficient funds!");
    }else{
        this.үлдэгдэл -= хэмжээ
        console.log(`${this.эзэн} tatsan $${хэмжээ}. New үлдэгдэл: $${this.үлдэгдэл }`);
    }
}
checkBalance(){
    console.log(`${this.эзэн}iin odoogiin bgaa mungu ni $${this.үлдэгдэл }`);
}
}
  
const myAccount = new BankAccount("John" , 500);
myAccount.deposit(200);// OUTPUT: John nemsen $200. New үлдэгдэл $700
myAccount.withdraw(100);// OUTPUT: John tatsan $100. New үлдэгдэл: $600
myAccount.checkBalance();// OUTPUT: John's current balance is $600
myAccount.withdraw(700);// OUTPUT: Insufficient funds!




  