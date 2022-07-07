const asyncHandler = require("express-async-handler");

const User = require("../models/users.model")
const registerUser =asyncHandler(async (req,res)=>{
    const {name,email,password,pic} = req.body;
    const userExists = await User.findOne({email});
    if(userExists){
        res.status(400)
        throw new Error ("User already Exists")
    }
    const user = await User.create({
        name,email,password,pic
    })
    if(user){
        const {_id,name,email,pic} = user;
        res.status(201).json({_id,name,email,pic})
    }
    else{
        res.status(400);
        throw  new Error("Error Occured")
    }
    

})
module.exports = {registerUser}