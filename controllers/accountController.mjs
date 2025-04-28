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
async function getSpecificAccounts(req,res) {
    const Account = await Account.findById(req.params.id);
    res.json(Account);
}

async function updateAccount(req,res) {
    const Account = await Account.findByIdAndUpdate(req.params.id,req.body,{new:true});
    res.json(Account);
}

async function seed(req,res){
    const userData = data.users;
    await User.insertMany(userData);
    res.json({message: 'Successfully seeded'});
}


export default {deleteAccount,updateAccount,getAllAccounts,getSpecificAccounts,addAccount};