import Booking from "../models/Booking.js"
import Room from "../models/Room.js"
import { v4 as uuidv4 } from 'uuid';
import Stripe from "stripe";
const stripe = new Stripe('sk_test_51NtRH5SEfxSQlVgUbWnUYEW60Fz5WE581dnqYgJflH18FRuAOYnl9ihVorEj9GW4DQSU5uGgjX4MCdxmEhqe7LGE00i9NirXFg', {
    apiVersion: '2020-08-27',
  });
  

export const bookRoom = async (req, res) => {

    const {
        room,
        userid,
        fromdate,
        todate,
        totalamount,
        totaldays,
        
    } = req.body


try {
        const newbooking = new Booking({
            room: room.name,
            roomid: room._id,
            userid,
            fromdate,
            todate,
            totalamount,
            totaldays,
            transactionid: '1234'
        })
        const booking = await newbooking.save()
         
        const roomtemp = await Room.findOne({ _id: room._id })
       roomtemp.currentbookings.push({ bookingid: booking._id, fromdate: fromdate, todate: todate, userid: userid, status: booking.status })
        await roomtemp.save()

        res.send('room booked successsfully')
    }
    catch (error) {
        return res.status(400).json({ error })
    }

}


 export const getAllBooking=async(req,res)=>{

const userid=req.body.userid
try{
const bookings= await Booking.find({})
res.send(bookings)
}
catch(error){
return res.status(400).json({error})
}


}

export const cancelBooking=async(req,res)=>{
    const{bookingid,roomid}=req.body

try{
const booking=await Booking.findOne({_id:bookingid})
booking.status="cancelled"
await booking.save()
const room=await Room.findOne({_id:roomid})
const bookings=room.currentbookings
const temp=bookings.filter(booking=>booking.bookingid.toString()!==bookingid)
room.currentbookings=temp
await room.save()
res.send("your booking cancelled sucessfully")

}
catch(error){
return res.send(400).json({error})

}

} 


