const express = require("express");
const router = express.Router();
const {registerUser}= require("../utils/users.utils")
router.get("/try",(req,res)=>{
    try{
        return res.send("into the users routes")
    }catch(err){
        res.send(err.message)
    }
})

router.route("/register").post(registerUser);

module.exports = router