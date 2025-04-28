import Withdraw from '../models/Withdraw.mjs';
import data from '../utilities/data.mjs';

async function newWithdraw(req,res){
    let newWithdraw = await Withdraw.create(req.body);
    res.json(newWithdraw);
}
async function deleteWithdraw(req,res) {
    const deletedWithdraw = await Withdraw.findByIdAndDelete(req.params.id);
    if(!deleteWithdraw) res.json({message:`No withdraw transaction with given id`});
    res.json(deletedWithdraw);
}
async function getAllWithdraws(req,res) {
    const allWithdraws = await Withdraw.find({});
    if(allWithdraws.length==0) res.json({message: `No data found!!`});
    res.json(allWithdraws);
}
async function getSpecificWithdraws(req,res) {
    const withdraw = await Withdraw.findById(req.params.id);
    if(!withdraw) res.json({message : `No withdraw transaction found!!`});
    res.json(withdraw);
}

async function updateWithdraw(req,res) {
    const withdraw = await Withdraw.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!withdraw) res.json({message : `No withdraw transaction found!!`});
    res.json(withdraw);
}

export default {deleteWithdraw,updateWithdraw,getAllWithdraws,getSpecificWithdraws,newWithdraw};