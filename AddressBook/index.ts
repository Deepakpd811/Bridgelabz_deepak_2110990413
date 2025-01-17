
import { AddressBook } from "./models/addressBook";

let book1 = new AddressBook();

book1.addContact("deepak","7005209700","prasaddeepak@gmail.com","Friend", "punjab")
book1.addContact("Ankit","8675209756","ankit@gmail.com","Friend", "punjab")
book1.addContact("rohit","8435209740","rohit@gmail.com","family", "up")
book1.addContact("ritick","7006789770","ritick@gmail.com","work", "delhi")
book1.addContact("pandey","986209700","pandey@gmail.com","work")

// book1.viewContacts()
// book1.deleteContacts(4)

// book1.searchByName("deepak")
book1.groupByName("friend")
book1.viewContacts()