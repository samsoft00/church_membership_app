import { Router } from 'express';
import UserController from '../../controllers/user.controller';

// These are valid routes but they may contain a bug, please try to define and fix them

const router = Router();
router.post(
  '/customers',
  UserController.updateCreditCard
);
router.post('/customers/login',  UserController.login);
router.get('/customer', UserController.getUserProfile);
router.put(
  '/customer',
  UserController.apply
);
router.put(
  '/customer/address',
  UserController.updateUserAddress
);
router.put(
  '/customer/creditCard',
  UserController.updateCreditCard
);

export default router;
