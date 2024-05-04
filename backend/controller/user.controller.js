import UserCol from "../model/user.model.js";
import bcrypt from "bcrypt";

export const signup =async(req,res)=>{
    try {
        const {fullname,email,password} =req.body;
        const user= await UserCol.findOne({email})
        if(user){
            res.status(400).json({message:"User Already Exists",user})
        }
        else{
            const hashPass=await bcrypt.hash(password,10)
            const newUser=new UserCol({fullname:fullname,email: email,password:hashPass})
            await newUser.save();
            res.status(200).json({message:"User Created Successfully",
                user:{
                    fullname:newUser.fullname,
                    email:newUser.email,
                }
            })
        }
    } catch (error) {
        console.log(`Error encountered :${error}`);
        res.status(500).json({message:`Error encountered :${error}`})
    }
}


export  const login =async(req,res)=>{
    try {
        const {email,password} =req.body;
        const user= await UserCol.findOne({email})
        if(!user){
            res.status(400).json({message:"User Not Found"})
        }
        else{
            const isMatch=await bcrypt.compare(password,user.password)
            if(isMatch){
                res.status(200).json({message:"Login Successful",user})
            }
            else{
                res.status(400).json({message:"Incorrect Password"})
            }
        }
    } catch (error) {
        console.log(`Error encountered :${error}`);
        res.status(500).json({message:`Error encountered :${error}`})
    }
}