import bcrypt from "bcryptjs"


// hasihing a password:
async function hashPassword(params) {
     

    try {

        let myPassword = "rahman004";
        let myHashPassword = await bcrypt.hash(myPassword, 10);
        console.log(myHashPassword);
        
        
    } catch (error) {
        console.log(error);
        
    }

}

hashPassword();




// verifying the password using hash value:

async function verifyPass() {
    
    try {
        let hashValue = "$2a$10$gQq9m5o7nwAurPFvwqotJeCTAh3L/vnKlTEwF8h9qd4qQQveKOGlG"
        let myPassword = "rahman004";
        let verify = await bcrypt.compare(myPassword, hashValue);
        console.log(verify);
        
        if(verify){
            console.log('Login successful');
            
        } else {
            console.log('invalid password!');
            
        }
    } catch (error) {
        console.log(error);
        
    }
}
verifyPass()