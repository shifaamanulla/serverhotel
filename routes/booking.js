import express from "express"
import { bookRoom, cancelBooking, getAllBooking } from "../controllers/booking.js"

const router =express.Router()

router.post("/bookroom",bookRoom)
router.post("/alldata",getAllBooking)
router.post('/cancelbooking',cancelBooking)


export default router