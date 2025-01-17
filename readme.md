# Topics Covered  

## **2024-12-09**

### **Initialize Repository and Check Status**
- `git init`  
  Initialize a new Git repository.
- `git status`  
  Check the status of the repository.

### **File Operations**
- `echo "hi" >> readme.md`  
  Add text to `readme.md`.
- `touch readme.md`  
  Create an empty file `readme.md`.

### **Branch Management**
- `git branch -M main`  
  Rename the default branch `master` to `main`.
- `git branch`  
  List all branches.
- `git checkout -b <branchname>`  
  Create a new branch and switch to it.
- `git checkout <branchname>`  
  Switch to an existing branch.
- `git branch -d <branchname>`  
  Delete a branch.
- `git branch -D <branchname>`  
  Force delete a branch.
- `git checkout --orphan new-branch`  
  Create an orphan branch.  
- `rm -rf .`  
  Clean the working directory.
- **Delete Branches:**
  - Locally: `git branch -d orphanBranch`
  - Remotely: `git push origin --delete orphanBranch`
- `git branch -a`  
  View all branches, including remote ones.

### **Remote Repository Setup**
- `git remote add origin <url>`  
  Link the repository to a remote URL.
- `git remote -v`  
  View the list of remote URLs.

### **Push and Pull Operations**
- `git push -u origin main`  
  Push the `main` branch to the remote repository for the first time.
- `git push -u origin <branchname>`  
  Push a specific branch to the remote repository.
- `git pull`  
  Fetch and merge changes from the remote branch.

---

## **2024-12-10**

### **Merging Branches**
- `git merge <branchname>`  
  Merge a branch into the current branch.
- `git checkout main`  
  Switch back to the `main` branch after merging.

### **Cloning Repositories**
- `git clone <url>`  
  Clone a repository.
- `git clone --branch <branchname> <url>`  
  Clone a specific branch.

### **File Viewing and Editing**
- `nano <filename>`  
  Edit a file using the Nano editor.
- `cat <filename>`  
  Display the contents of a file.

### **Differences and Comparisons**
- `git diff origin/main`  
  Compare the local branch with the remote `main` branch.

### **Git Stash**
- `git stash`  
  Save changes temporarily and clean the working directory.
- `git stash list`  
  View a list of all stashes.
- `git stash apply`  
  Reapply the latest stash without removing it from the stash list.
- `git stash pop`  
  Reapply and remove the latest stash.
- `git stash drop`  
  Delete a specific stash.

---

## **2024-12-11**
- `git rebase`
- Orphan branch creation and management.

---

## **2024-12-12**

### **JavaScript Basics**
#### **Data Types**
- Primitive and Non-Primitive.

#### **Operators**
- Arithmetic, Logical, and Comparison.

#### **Functions**
- Basics of function declaration and usage.

#### **String Methods**
- `String.length`
- `String.charAt()`
- `String.slice()`
- `String.substring()`
- `String.substr()`
- `String templates`
- `String.toUpperCase()`
- `String.toLowerCase()`
- `String.concat()`
- `String.trim()`
- `String.replace()`
- `String.replaceAll()`
- `String.split()`

#### **Numbers**
- `toString()`
- `Number.parseInt()`

#### **Loops**
- `for`, `while`, `forEach`.

#### **Array Methods**
- `map`, `filter`, `flatMap`, `splice`, `slice`, `flat`.

---

## **2024-12-16**
- Array methods: `map`, `filter`, `reduce` with examples.
- Basics of objects.
- Object destructuring.
- Classes and constructors with examples.

---

## **2024-12-17**
- `Map` and `WeakMap`.
- `Set` and `WeakSet`.
- Object-Oriented Programming (OOP).

---

## **2024-12-18**
- Node.js.
- NPM.
- OOP.
- Event Loop in JavaScript.

---

## **2024-12-20**

### **User Interaction**
- `alert`, `prompt`, `confirm`.

### **Event Handlers**
- `MouseEvents`
- `KeyEvents`
- `WindowEvents`

---

## **2024-12-23**

### **Function Types**
- **IIFE** (Immediately Invoked Function Expression)
- **NFE** (Named Function Expression)
- `new Function`
- `call/apply` methods.
- Function binding (`bind`).

### **Core Concepts**
- `this` keyword.
- Rest parameters and spread syntax.
- Variable scope.
- Closures.

---

## **2024-12-24**
- JavaScript Decorators.
- Easy Array questions.
- Linked List implementation.

---

## **2024-12-26**
- DSA: Solving 1–30 JavaScript basic questions.

---

## **2024-12-27**
- DSA: Solving questions 30–53 for JavaScript.
- Stack implementation and basic questions.

---

## **2025-01-06**
- Queue implementation.
- Binary Search Tree (BST) implementation.
- BST traversals: DFS, BFS.

---

## **2025-01-07**

### **Object-Oriented JavaScript**
- Objects and classes.
- Object references and copying.
- Garbage collection.
- Object methods and `this`.
- Constructor and operator usage.

### **Asynchronous JavaScript**
- Callback hell and promisification.
- Promises.
- `async/await`.

---

## **2025-01-08**

### **Advanced JavaScript**
- Optional chaining (`?.`).
- Object-to-primitive conversion:
  - `toValue()`
  - `toString()`
- Property flags (`value`, `write`, `enumerable`, `configurable`) and descriptors.
- Property getters and setters.

### **Prototypes and Inheritance**
- Prototypes and inheritance.
- Native prototypes.
- Objects without `__proto__`.
- Class inheritance and extending built-in classes.

---

## **2025-01-09**

### **Promises**
- Promise chaining.
- Promise API.
- Error handling with promises.
- Custom errors and extending `Error`.
- Promisification.
- `async/await`.

---
## **2025-01-13**

### **TypeScript**
- basic Syntax.
- Special tyes - any ,unknown.
- Tuples, Array, object.
- Function, optional paramater, default parameter, union.
- Inteface, abstract class.

---
## **2025-01-14**

### **TypeScript and Es**
- OPPS in TypeScript .
- Acess modifiers public,private,protected
- classes object, Encapsulation, inheritance, polymorphsim, abstraction.
- ES6,ES7,ES8,ES9,ES10 feature in ts essential one
---
## **2025-01-15**

### **TypeScript **
- More on Data Types
- ATM machine problem
- Alias vs interface
---

## **2025-01-16**

### **TypeScript **
- Revesion
- solve logical question on js ans ts
---

## **2025-01-17**

### **TypeScript **
- Solve AddressBook Problem using Typescript and OOPS
- decorators
---
