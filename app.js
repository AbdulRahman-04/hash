import bcrypt from "bcryptjs"

async function hashPassword(params) {
    

    try {

        let myPassword = "rahman004";
        let myHashPassword = await bcrypt.hash(myPassword, 10);
        console.log(myHashPassword);
        
        
    } catch (error) {
        console.log(error);
        
    }

}

hashPassword()