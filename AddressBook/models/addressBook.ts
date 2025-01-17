import { Contacts } from "./contacts";

export class AddressBook{
    private contacts: Contacts[]=[];
    private idCounter:number = 1;

    addContact(name:string, phone:string, email:string , category:string,address?:string):void{
        let newContact = new Contacts(this.idCounter++,name,phone,email,category,address)
        this.contacts.push(newContact);
        // console.log(newContact)
    }

    viewContacts():void{
        if(this.contacts.length==0){
            console.log(`No contacts available`)
            return
        }

        this.contacts.forEach((contact)=>{
            console.log(`Id:${contact.id}, Name: ${contact.name}, Phone: ${contact.phone} , email:${contact.email} category: ${contact.category}`)
            if(contact.address){
                console.log(`address: ${contact.address}`)
            }
            console.log(`- - -`)
        })

    }

    deleteContacts(id:number){
        let index = this.contacts.findIndex((con)=> con.id===id)
        
        if(index !==-1){
           let removed =  this.contacts.splice(index,1)[0]
           console.log(`this contact is removed ${removed.name}`)
        }else{
            console.log(`id is not found`)
        }
    }

    searchByName(name:string){
        let results = this.contacts.filter((con)=> con.name.toLowerCase().includes(name.toLowerCase()))
        // console.log(results)
        if(results.length===0){
            console.log("No match found")
            return
        }

        results.forEach((contact)=>{
            console.log(`Id:${contact.id}, Name: ${contact.name}, Phone: ${contact.phone} , email:${contact.email}`)
            if(contact.address){
                console.log(`address: ${contact.address}`)
            }
            console.log(`- - -`)
        })

    }

    groupByName(category:string){
        let results = this.contacts.filter((con)=> con.category.toLowerCase()=== category.toLowerCase())


        if(results.length===0){
            console.log("No match found")
            return
        }

        results.forEach((contact)=>{
            console.log(`category: ${contact.category}`)
            console.log(`Id:${contact.id}, Name: ${contact.name}, Phone: ${contact.phone} , email:${contact.email}`)
            if(contact.address){
                console.log(`address: ${contact.address}`)
            }
            console.log(`- - -`)
        })

    }

}


