import express from "express"
import { addRoom,  getAllRoom, getRoom } from "../controllers/room.js";
const router =express.Router()
//create
// router.post("/:hotelId",createRoom)

router.post('/addroom',addRoom)

    //update
// router.put("/:id",updateRoom)

//    //delete
// router.delete("/:id/:hotelId",deleteRoom)
//get
router.get("/:id",getRoom)

//get All
router.get("/",getAllRoom)

export default router