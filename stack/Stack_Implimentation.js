class Stack{
    constructor(){
        this.arr = []
    }
    push(element){
        this.arr.push(element)
    }
    isEmpty(){
        return this.arr.length ===0;
    }
    peek(){
        let n = this.arr.length
        if(this.isEmpty()){
            console.log("stack is empty")
        }
        return this.arr[n-1];
    }
    pop(){
        if(this.isEmpty()){
            console.log("stack is empty")
        }
        return this.arr.pop();
    }
    size(){
        return this.arr.length;
    }
    clear(){
        this.arr = [];
    }

    print(){
        console.log(this.arr.join(" "))
    }

}


module.exports = Stack;