import User from "../models/User.model.js"
import bcryptjs from "bcryptjs"

export const signUp = async (req,res , next) => {
    const {password ,email ,username} = req.body;
    const hashedPassword =  bcryptjs.hashSync(password,10)

    const newUser = new User({password : hashedPassword, email ,username })
    try{
        await newUser.save()
    res.status(201).json({message : "User created Successfully"}
    )}catch(error){
        next(error)
    }
    
}