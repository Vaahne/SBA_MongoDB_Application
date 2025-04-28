import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    accountNumber : {
        type: String,
        required: true,
        unique : true
    },
    name:{
        type: String,
        required: true
    },
    branch:{
        type:String,
        required: true
    },
    balance:{
        type: Number,
        required: true
    },
    openDate:{
        type: Date,
        required: true,
        default : Date.now
    },
    email:{
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    }   
});

export default mongoose.model("Account",accountSchema);