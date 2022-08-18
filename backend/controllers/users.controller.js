const express = require("express");
const router = express.Router();
const {registerUser, authUser, updateUserProfile}= require("../utils/users.utils")
const {protect} = require("../middlewares/authMiddleware")
router.get("/try",(req,res)=>{
    try{
        return res.send("into the users routes")
    }catch(err){
        res.send(err.message)
    }
})

router.route("/register").post(registerUser);
router.route("/login").post(authUser)
router.route("/profile").post(protect,updateUserProfile);

module.exports = router