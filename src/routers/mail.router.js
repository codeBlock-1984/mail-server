import express from 'express';
import MailContoller from '../controllers/mail.controller';

const router = express.Router();

router.post('/', MailContoller.send);

export default router;
