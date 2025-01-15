class ShoppingCarts {
  private carts: { name: string; price: number; quantity: number }[] = [];

  public addItem(item: { name: string; price: number; quantity: number }) {
    let isExist = this.carts.find((cartItem) => cartItem.name === item.name); // return an object ref to cart array
    // { name: 'lapto', price: 20000, quantity: 2 }
    if (isExist) {
      isExist.quantity += item.quantity;
    } else {
      this.carts.push(item);
    }
  }

  public deleteItem(name: String) {
    let findIndex = this.carts.findIndex((curr) => curr.name === name);
    if (findIndex != -1) {
      let item = this.carts[findIndex];
      this.carts.splice(findIndex, 1);   // delete the item at that index
    }
  }

  public displayCarts() {
    return this.carts;
  }
}


let c1 = new ShoppingCarts();
c1.addItem({ name: "lapto", price: 20000, quantity: 2 });
console.log(c1.displayCarts());
c1.addItem({ name: "lapto", price: 20000, quantity: 2 });
c1.addItem({ name: "mobile", price: 20000, quantity: 2 });
c1.addItem({ name: "watch", price: 20000, quantity: 2 });
c1.deleteItem("watch");

console.log(c1.displayCarts());
