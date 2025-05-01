import mongoose from "mongoose";

const accountSchema = new mongoose.Schema({
    accountNumber : {
        type: String,
        required: true,
        unique : true
    },
    name:{
        type: String,
        required: true,
        minlength: [4,'Name should be atleast 4 characteers']
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
        default : Date.now,
        validate:{  // date validation, cannot be future date
            validator : function (v){
                return v <= Date.now();
            },
            message: 'Account cannot be opened for the future date'
        }
    },
    email:{
        type: String,
        required: true,
        match: [/^\S+@\S+\.\S+$/, 'Please use a valid email address']
    }   
});
accountSchema.index({branch : 1});
accountSchema.index({openDate : -1});

//  to get all the accounts with balance more than given amount 
accountSchema.statics.balanceAbove = function (val){
    return this.find({balance : {$gt : val}});
}

export default mongoose.model("Account",accountSchema);