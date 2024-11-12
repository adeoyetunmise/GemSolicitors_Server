import express from 'express';
import { getAllCases, createCase, removeClient, editClient, getSingleClient } from '../controllers/caseControllers.js';

const router = express.Router();

router.get('/cases', getAllCases);
router.get('/cases/:_id', getSingleClient);
router.post('/cases', createCase);
router.delete('/cases/:_id', removeClient)
router.patch('/cases/:_id', editClient)

export default router;
