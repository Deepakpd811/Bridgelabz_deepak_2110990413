
class Node {
    constructor(data){
        this.data = data
        this.next = null;
    }
}

class LinkledList{
    constructor(){
        this.head = null;
    }

    append(data){
        let newnode = new Node(data);
        if(this.head ==null){
            this.head = newnode;
            return;
        }
        let temp = this.head;
        while(temp.next!==null){
            temp = temp.next
        }
        temp.next = newnode;
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

}


let ll = new LinkledList();
ll.append(1)
ll.append(2);
ll.append(4);
console.log(ll.print())
console.log(ll.search(4))