import Account from '../models/Accounts.mjs';

async function addAccount(req,res){
    let newAccount = await Account.create(req.body);
    res.json(newAccount);
}
async function deleteAccount(req,res) {
    const deletedAccount = await Account.findByIdAndDelete(req.params.id);
    if(!deleteAccount) res.json({message: `No account found with given id`});
    res.json(deletedAccount);
}
async function getAllAccounts(req,res) {
    const allAccounts = await Account.find({});
    if(allAccounts.length == 0) res.json({message : `No Data found`});
    res.json(allAccounts);
}
async function getSpecificAccount(req,res) {
    const account = await Account.findById(req.params.id);
    if(!account) res.json({message:`No account found with given Id`});
    res.json(account);
}

async function updateAccount(req,res) {
    const account = await Account.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!account) res.json({message:`No account found with given Id`});
    res.json(account);
}

export default {deleteAccount,updateAccount,getAllAccounts,getSpecificAccount,addAccount};