import Withdraw from '../models/Withdraw.mjs';
import data from '../utilities/data.mjs';

async function newWithdraw(req,res){
    let newWithdraw = await Withdraw.create(req.body);
    res.json(newWithdraw);
}
async function deleteWithdraw(req,res) {
    const deletedWithdraw = await Withdraw.findByIdAndDelete(req.params.id);
    res.json(deletedWithdraw);
}
async function getAllWithdraws(req,res) {
    const allWithdraws = await Withdraw.find({});
    res.json(allWithdraws);
}
async function getSpecificWithdraws(req,res) {
    const Withdraw = await Withdraw.findById(req.params.id);
    res.json(Withdraw);
}

async function updateWithdraw(req,res) {
    const Withdraw = await Withdraw.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(Withdraw);
}


export default {deleteWithdraw,updateWithdraw,getAllWithdraws,getSpecificWithdraws,newWithdraw};