import express from 'express';
import withdrawControler from '../controllers/withdrawController.mjs';

const router = express.Router();

router.route('/').get(withdrawControler.getAllWithdraws)
                 .post(withdrawControler.newWithdraw);
                 
router.route('/:id').get(withdrawControler.getSpecificWithdraws)
                    .delete(withdrawControler.deleteWithdraw)
                    .put(withdrawControler.updateWithdraw);


export default router;