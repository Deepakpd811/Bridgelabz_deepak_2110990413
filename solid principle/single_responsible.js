// class User {
//     constructor(name, email) {
//       this.name = name;
//       this.email = email;
//     }
  
//     sendWelcomeEmail() {
//       // Sending email
//       console.log(`Sending welcome email to ${this.email}`);
//     }
  
//     saveToDatabase() {
//       // Save to database
//       console.log(`${this.name} saved to the database.`);
//     }
//   }


  class User {
    constructor(name, email) {
      this.name = name;
      this.email = email;
    }
  }
  
  class UserService {
    saveToDatabase(user) {
      console.log(`${user.name} saved to the database.`);
    }
  } 
  
  class EmailService {
    sendWelcomeEmail(user) {
      console.log(`Sending welcome email to ${user.email}`);
    }
  }
  
  // Single responsibility for each service
  const user = new User("Alice", "alice@example.com");
  const userService = new UserService();
  const emailService = new EmailService();
  
  userService.saveToDatabase(user);