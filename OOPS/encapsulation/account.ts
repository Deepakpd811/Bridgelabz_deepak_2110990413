// encapsulation

class Account {
  private balance: number;
  private name: string;

  constructor(name: string, balance: number) {
    this.name = name;
    this.balance = balance;
  }

  public getBalance() {
    return this.balance;
  }

  public deposit(amount: number) {
    if (amount > 0) {
      this.balance += amount;
    } else {
      console.log("please enter valid number");
    }
  }

  public withdrawal(amount: number) {
    if (amount < 0) {
      console.log("please enter valid amount");
    } else if (this.balance < amount) {
      console.log("low balance");
    } else {
      this.balance -= amount;
    }
  }
}
