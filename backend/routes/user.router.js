import express from 'express';
import { deleteUser, getUserListing, test, updateUser } from '../controllers/user.controller.js';
import { verifyUser } from '../utils/varifyUser.js';

const router = express.Router();

router.get('/',test);
router.post('/update/:id',verifyUser,updateUser);
router.delete('/delete/:id',verifyUser,deleteUser);
router.get('/listings/:id',verifyUser,getUserListing);

export default router;