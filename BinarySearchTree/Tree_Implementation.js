class Node {
  constructor(val) {
    this.data = val;
    this.left = null;
    this.right = null;
  }
}

class BST {
  constructor() {
    this.root = null;
  }

  insert(val) {
    this.root = this.insertRec(this.root, val);
  }

  insertRec(node, val) {
    if (node === null) {
      return new Node(val);
    }
    if (val < node.data) { // Use 'data' for comparison
      node.left = this.insertRec(node.left, val);
    } else {
      node.right = this.insertRec(node.right, val);
    }
    return node;
  }


  inorder(node=this.root){
   
    if(node==null) return;
    this.inorder(node.left)
    console.log(node.data)
    this.inorder(node.right)
  }

  postorder(node = this.root){
    if(node==null) return;
    this.postorder(node.left)
    this.postorder(node.right)
    console.log(node.data)
  }
  preorder(node = this.root){
      if(node==null) return;
      console.log(node.data)
    this.preorder(node.left)
    this.preorder(node.right)
  }

  levelorderTraversal(node=this.root){
        if(node==null) return;

        const queue = []

        queue.push(this.root)

        while(queue.length>0){
            let curr = queue.shift()
            console.log(curr.data)
            if(curr.left!=null) {
                queue.push(curr.left)
            }
            if(curr.right!=null){
                queue.push(curr.right)
            }
        }


  }

}


let root = new BST()
//         10
//       /  \
//      5    15
//     / \   / \
//    2   7 12 20

let arr = [10,5,15,2,7,12,20]

for(let x of arr){
    root.insert(x)
}

// root.inorder()
root.levelorderTraversal()