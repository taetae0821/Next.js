import mongoose from "mongoose"

const connetDB = () =>{
    try{
        mongoose.connect("mongodb+srv://<db_username>:<db_password>@cluster0.fatu4mp.mongodb.net/");
        console.log("Success: Connected to MongoDB");
    }catch{

    }
}

export default connetDB