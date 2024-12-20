
class ShoppingCart{
    #cart=[];

  

    addItem(item){
        this.#cart.push(item)
        console.log(`item is added ${item}`)
    }
    getTotalItem(){
        return this.#cart.length
    }
    getTotalPrice(){
        return this.#cart.reduce((acc, val)=> acc+val.price,0)
    }

    removeItem(itemName){
        this.#cart =  this.#cart.filter((val)=>val.item !=itemName)
        console.log(this.#cart)
    }



}

let cart = new ShoppingCart()

cart.addItem({item:"Laptop",price:32000})
cart.addItem({item:"Mobile",price:10000})
console.log(cart.getTotalItem())
cart.removeItem("Laptop")
console.log(cart.getTotalItem())
console.log(cart.getTotalPrice())