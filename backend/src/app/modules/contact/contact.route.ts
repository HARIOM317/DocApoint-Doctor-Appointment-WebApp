import express from 'express';
import { ContactController } from './contact.controller';

const router = express.Router();
router.get('/', ContactController.getAllContactUs);
router.post('/', ContactController.ContactUs);


export const ContactRouter = router;