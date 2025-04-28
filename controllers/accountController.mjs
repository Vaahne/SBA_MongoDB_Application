import Account from '../models/Accounts.mjs';

async function addAccount(req,res){

    let newAccount = await Account.create(req.body);
    res.json(newAccount);
}
async function deleteAccount(req,res) {
    const deletedAccount = await Account.findByIdAndDelete(req.params.id);
    res.json(deletedAccount);
}
async function getAllAccounts(req,res) {
    const allAccounts = await Account.find({});
    res.json(allAccounts);
}
async function getSpecificAccount(req,res) {
    const account = await Account.findById(req.params.id);
    res.json(account);
}

async function updateAccount(req,res) {
    const account = await Account.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(account);
}

export default {deleteAccount,updateAccount,getAllAccounts,getSpecificAccount,addAccount};