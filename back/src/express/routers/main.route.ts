import express from 'express';
import * as mainController from '../controllers/main.controller';
import { isAuthenticate } from '../middleware/authenticate';

const router = express.Router();

router.post('/login', mainController.login);

router.use(isAuthenticate);

router.get('/basicCompany', mainController.basicCompany);
router.get('/fullCompany/:companyName', mainController.fullCompanyByName);
router.get('/userCredits', mainController.getUserCredits);

export default router;
