import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        message: `Name must be provided!`
    },
    dob:{
        type: Date,
        required: true,
        message: `Date of Birth cannot be empty!`
    },
    email:{
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    }
});

userSchema.index({dob: 1});

export default mongoose.model("User",userSchema);