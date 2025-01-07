// class Database {
//     connect() {
//       console.log("Connecting to the database...");
//     }
//   }
  
//   class UserService {
//     constructor() {
//       this.db = new Database();
//     }
  
//     saveUser(user) {
//       this.db.connect();
//       console.log(`Saving user ${user}`);
//     }
//   }



// High-level modules should not depend on low-level modules. 
// Both should depend on abstractions.


class Database {
    connect() {
      throw new Error("This method should be overridden!");
    }
  }
  
  class MySQLDatabase extends Database {
    connect() {
      console.log("Connecting to MySQL...");
    }
  }
  
  class UserService {
    constructor(database) {
      this.db = database;
    }
  
    saveUser(user) {
      this.db.connect();
      console.log(`Saving user ${user}`);
    }
  }
  
  const db = new MySQLDatabase();
  const userService = new UserService(db);
  userService.saveUser("Alice");