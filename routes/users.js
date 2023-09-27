import express from "express"
import {  getAllUser,  loginUser, registerUser } from "../controllers/user.js"

const router =express.Router()



router.post("/register",registerUser)
router.post("/login",loginUser)
router.get('/getallusers',getAllUser)
    //update
// router.put("/:id",verifyuser,updateUser)

//    //delete
// router.delete("/:id",verifyuser,deleteUser)
// //get
// router.get("/:id",verifyuser,getUser)

// //get All
// router.get("/",verifyAdmin,getAllUser)

export default router