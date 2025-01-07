
class Node {
    constructor(data){
        this.data = data
        this.next = null;
    }
}

class LinkledList{
    constructor(){
        this.head = null;
        this.size =0;
    }

    append(data){
        let newnode = new Node(data);
        if(this.head == null){
            this.head = newnode;
            return;
        }
        let temp = this.head;
        while(temp.next!==null){
            temp = temp.next
        }
        temp.next = newnode;
        this.size++;
    }

    print(){
        let temp = this.head;
        let line = ""
        while(temp!=null){
            line +=  temp.data+ " -----> "
            temp = temp.next;
        }
        line += "null"
        return line
    }

    insertAt(value,index){
        if(this.head == null){
            this.append();
        }

        let current = this.head;
        let prev = null;
        let currIdx =0;

        const newNode = new Node(value)

        while(currIdx <index){
            prev = current;
            current = current.next;
            currIdx++;
        }

        newNode.next = current;
        prev.next = newNode;
        this.size++;



    }

    search(ele){
        let temp = this.head;
        while(temp!=null){
            if(temp.data ==ele){
                return true
            }
            temp = temp.next;
        }
        return false
    }

    delete(index){
        let temp = this.head
        while(index-1>0){
            temp = temp.next;
            index--;

        }
        temp.next = temp.next.next
    }

}


let ll = new LinkledList();
ll.append(1)
ll.append(2);
ll.append(4);
console.log(ll.print())
ll.insertAt(10,2)
console.log(ll.print())
ll.delete(2)
console.log(ll.print())