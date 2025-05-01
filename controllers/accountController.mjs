import Account from '../models/Accounts.mjs';

// To add an account into db
async function addAccount(req,res){
    const lastInserted = await Account.find().sort({_id:-1}).limit(1);
    const accountNum = newAccNumber(lastInserted[0].accountNumber);

    req.body.accountNumber = accountNum;    
    let newAccount = await Account.create(req.body);
    res.json(newAccount);
}

function newAccNumber(accNum){
    const newAcc = Number(accNum.slice(3,accNum.length))+1;
    if(newAcc < 99)
        return "ACC0"+newAcc;
    else
        return "ACC"+newAcc;
}


// to delete an account from db
async function deleteAccount(req,res) {
    const deletedAccount = await Account.findByIdAndDelete(req.params.id);
    if(!deleteAccount) res.json({message: `No account found with given id`});
    res.json(deletedAccount);
}
// to get all the accounts 
async function getAllAccounts(req,res) {
    const allAccounts = await Account.find({});
    if(allAccounts.length == 0) res.json({message : `No Data found`});
    res.json(allAccounts);
}
// to get specific account by id
async function getSpecificAccount(req,res) {
    const account = await Account.findById(req.params.id);
    if(!account) res.json({message:`No account found with given Id`});
    res.json(account);
}
//  to update an account by id
async function updateAccount(req,res) {
    const account = await Account.findByIdAndUpdate(req.params.id,req.body,{new:true});
    if(!account) res.json({message:`No account found with given Id`});
    res.json(account);
}

export default {deleteAccount,updateAccount,getAllAccounts,getSpecificAccount,addAccount};