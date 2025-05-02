import mongoose from "mongoose";

const withDrawSchema = new mongoose.Schema({
    accountNumber: {
        type: String,
        requied: true
    },
    withdrawAmount:{
        type: Number,
        required: true
    } 
});

withDrawSchema.index({accountNumber:1});

// to get all transactions of an Account
withDrawSchema.statics.allTransactionsofAccount= function (accNum){
    return this.find({accountNumber : accNum});
}

export default mongoose.model("Withdraw",withDrawSchema);