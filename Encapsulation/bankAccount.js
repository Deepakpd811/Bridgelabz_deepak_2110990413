// Encapsulation is the bundling of data (properties) and methods that operate on that data into a single unit or class. It also restricts direct access to some of an object's components, which helps to prevent accidental interference and misuse of the data. give more exapmle


class BankAccount{
    #balance =0;
    constructor(name,intialBalance){
        this.name = name;
        this.#balance = intialBalance
    }
    getBalance(){
        console.log(`your balance is ${this.#balance}`)
    }
    deposit(amount){
        //if amount is -ve
        if(amount>0){

            this.#balance += amount;
            console.log(`amount is added ${amount} in your account`)
        }else{
            console.log(`Please enter valid amount`)
        }
    }
    
    withdraw(amount){
        if(amount<=0){
            console.log("please enter valid amount")
        }else if(amount>this.#balance){
            console.log("insufficient fund")
            // console.log("------------------")

        }else{
            this.#balance -= amount;
            console.log(`amount is withdraw ${amount} in your account`)
        }
    }


} 

let p1 = new BankAccount("ritick",500)

console.log(p1.name)
p1.getBalance()
p1.deposit(1000)
p1.getBalance()

p1.withdraw(5000)

