import mongoose from "mongoose"

const connetDB = async() =>{
    try{
        await mongoose.connect("mongodb+srv://Name:password@cluster0.fatu4mp.mongodb.net/");
        console.log("Success: Connected to MongoDB");
    }catch{
        console.log("Failure: Unconnected to MongoDB");
        throw new Error();
    }
}

export default connetDB