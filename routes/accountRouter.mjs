import express from 'express';
import accountControler from '../controllers/accountController.mjs';
import Accounts from '../models/Accounts.mjs';

const router = express.Router();

router.route('/').get(accountControler.getAllAccounts)
                 .post(accountControler.addAccount);
                 
router.route('/:id').get(accountControler.getSpecificAccount)
                    .delete(accountControler.deleteAccount)
                    .put(accountControler.updateAccount);

// to get the accounts with greater balance than the given amount 
router.get("/balance/:bal",async (req,res)=>{
    const accounts = await Accounts.balanceAbove(req.params.bal);
    res.json(accounts);
});

export default router;