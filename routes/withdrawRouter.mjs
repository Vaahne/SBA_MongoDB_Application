import express from 'express';
import withdrawControler from '../controllers/withdrawController.mjs';
import Withdraw from '../models/Withdraw.mjs';

const router = express.Router();

router.route('/').get(withdrawControler.getAllWithdraws)
                 .post(withdrawControler.newWithdraw);
                 
router.route('/:id').get(withdrawControler.getSpecificWithdraws)
                    .delete(withdrawControler.deleteWithdraw)
                    .put(withdrawControler.updateWithdraw);
router.get('/account/:accountId', async (req,res)=>{
    const allTransactions = await Withdraw.allTransactionsofAccount(req.params.accountId);
    if( allTransactions.length == 0) return res.json({message: "No transactions found for given account"});
    res.json(allTransactions);
});               


export default router;