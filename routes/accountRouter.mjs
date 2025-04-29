import express from 'express';
import accountControler from '../controllers/accountController.mjs';

const router = express.Router();

router.route('/').get(accountControler.getAllAccounts)
                 .post(accountControler.addAccount);
                 
router.route('/:id').get(accountControler.getSpecificAccount)
                    .delete(accountControler.deleteAccount)
                    .put(accountControler.updateAccount);


export default router;