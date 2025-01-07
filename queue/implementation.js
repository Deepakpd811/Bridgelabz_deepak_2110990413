
class Queue{
    constructor(){
        this.arr = []
    }

    enqueue(element){
        this.arr.push(element)
    }

    dequeue(){
        if(this.isEmpty()){
            console.log("queue is empty")
            return null;
        }
        return this.arr.shift()
    }

    peek(){
        if(this.isEmpty()){
            console.log('queue is empty')
            return null
        }
        return this.arr[0]
    }

    isEmpty(){
        return this.arr.length ===0;
    }

    print(){
       console.log(this.arr.join(" ")) 
    }

}

let q = new Queue()
q.enqueue(1)
q.enqueue(3)
q.enqueue(4)
q.print()
q.dequeue()
q.print()