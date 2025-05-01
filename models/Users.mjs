import mongoose from "mongoose";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required: true,
        minlength: [4,'Name should be atleast 4 characters'],
    },
    dob:{
        type: Date,
        required: true,
        validate:{
            validator: function (d){
                return d<=Date.now()
            },
            message: `Date cannot be greater than today's date!`
        }        
    },
    email:{
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    }
});

userSchema.index({dob: 1});

export default mongoose.model("User",userSchema);