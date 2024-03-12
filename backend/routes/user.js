import express from 'express';

// Controller Functions
import { loginUser, signupUser } from '../controllers/userController.js';

const router = express.Router();

// login route
router.post('/login', loginUser)

// signup route
router.post('/signup', signupUser)


module.exports = router; // export the router