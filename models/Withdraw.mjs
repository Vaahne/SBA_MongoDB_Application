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

export default mongoose.model("Withdraw",withDrawSchema);