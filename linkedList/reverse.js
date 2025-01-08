
const LinkledList = require('./linkledlist'); 

function reverse(linkedList) {
    let prev = null;
    let current = linkedList.head;
    let next = null;
    
    while (current !== null) {
        next = current.next;
        current.next = prev;
        prev = current;
        current = next;
    }

    linkedList.head = prev;
}


let ll = new LinkledList();
ll.append(1);
ll.append(2);
ll.append(4);
console.log("--->old " ,ll.print());

reverse(ll);
console.log("-->rev ", ll.print());
