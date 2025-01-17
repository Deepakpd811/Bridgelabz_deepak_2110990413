

class Node{
    data;
    next;
    constructor(data){
      this.data= data;
      this.next = null;
    }
}

class LinkledList {
  head;
  
  constructor(){
    this.head = null;
  }
  
  append(val){
    let newnode = new Node(val);
    if(this.head ===null){
      this.head = newnode;
    }else{
      let temp = this.head;
      while(temp.next!==null){
        temp = temp.next;
      }
      temp.next = newnode;
    }
  }
  insertAtTail(val){
    let newnode = new Node(val);
    if(this.head === null){
        this.append(val)
    }else{
    
      newnode.next = this.head;
      this.head = newnode
    }
  }
  
  insetAtIndex(val,idx){
    
    let temp = this.head;
    let size = 0;
    let newnode = new Node(val)
    while(temp!==null && size<idx-1){
        size++;
        temp = temp.next;
    }
    
    if(temp ===null){
      console.log("enter valid index")
      return
    }
    
    newnode.next = temp.next;
    temp.next = newnode;
    
    
    
    
    console.log(temp.data)
    
    
  }
  
  print(){
    let temp = this.head;
    while(temp!==null){
      console.log(temp.data);
      temp = temp.next;
    }
  }
  
}



let ll = new LinkledList();
// ll.append(10);
// ll.append(20)
// ll.append(20);
// ll.append(20);

ll.insertAtTail(10)
ll.insertAtTail(20)
ll.insertAtTail(30)
ll.insetAtIndex(100,3)
console.log("----------------")
ll.print();





