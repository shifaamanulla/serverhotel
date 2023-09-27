import Hotels from "../models/Hotels.js";
import Room from "../models/Room.js";


export const createRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;
    const newRoom = new Room(req.body)
    try {
        const savedRoom = await newRoom.save()
        try {
            await Hotels.findByIdAndUpdate(hotelId, { $push: { rooms: savedRoom._id } })
        }
        catch (err) {
            next(err)
        }
        res.satus(200).json(savedRoom)

    }
    catch (err) {
        next(err)
    }
}

export const updateRoom = async (req, res, next) => {

    try {
     
        const updatedRoom = await Room.findByIdAndUpdate(req.params.id, { $set: req.body }, { new: true })
        res.status(200).json(updatedRoom)
    } catch (err) {
        next(err)
    }
}

export const deleteRoom = async (req, res, next) => {
    const hotelId = req.params.hotelId;

    try {
        try {
            await Hotels.findByIdAndUpdate(hotelId, { $pull: { rooms: req.params.id} })
        }
        catch (err) {
            next(err)
        }
        await Room.findByIdAndDelete(req.params.id)
        res.status(200).json("Room has been deleted")
    } catch (err) {
        next(err)
    }
}

export const getRoom = async (req, res) => {
    try {
        const room = await Room.findById(req.params.id)
        res.status(200).json(room)
    } catch (err) {
      res.status(400).json({err})
    }
}

export const getAllRoom = async (req, res) => {

    try {
        const rooms = await Room.find({})
        res.send(rooms)
    } catch (err) {
       res.status(400).json({message:err})
    }
}

export const addRoom=async(req,res)=>{
    try{
const newroom= new Room(req.body)
await newroom.save()

res.send('new room added sucessfully')

    }
    catch(error){
return res.status(400).json({error})
    }
}
