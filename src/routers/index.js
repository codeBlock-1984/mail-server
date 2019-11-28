import express from 'express';
import mailRouter from './mail.router';

const router = express.Router();

router.use('/mails', mailRouter);

export default router;
