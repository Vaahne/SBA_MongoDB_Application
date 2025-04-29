import User from '../models/Users.mjs';
import Accounts from '../models/Accounts.mjs';
import Withdraw from '../models/Withdraw.mjs';
import data from '../utilities/data.mjs';
import express from 'express';

const router = express.Router();
//  seedinf the data into database
router.get('/',async (req,res)=>{
    
    await User.deleteMany({});
    await Withdraw.deleteMany({});
    await Accounts.deleteMany({});
    

    await User.insertMany(data.users);
    await Withdraw.insertMany(data.withdraws);
    await Accounts.insertMany(data.accounts);

    res.json({message : 'Successfully Seeded the data'});
   
});


export default router;