import express from 'express';
import userControler from '../controllers/userControler.mjs';

const router = express.Router();


router.get('/seed',userControler.seed);

router.route('/').get(userControler.getAllUsers)
                 .post(userControler.addUser);
                 
router.route('/:id').get(userControler.getSpecificUsers)
                    .delete(userControler.deleteUser)
                    .put(userControler.updateUser);


export default router;