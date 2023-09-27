import mongoose from "mongoose";
const RoomSchema = new mongoose.Schema({
name: {
    type: String,
    required: true
    
  },

  maxCount: {
    type: Number,
    required: true

  },
  phonenumber:{
    type:Number,
    required:true
  },
  rentperday:{
    type:Number,
    required:true
  },
  imageurls:[],

 desc:{
    type: String,
    required: true,
  },
  rating:{
    type:String
  },
  currentbookings:[],
  type:{
type:String,
required:true
}
}
);

export default mongoose.model("Room", RoomSchema)