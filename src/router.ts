import { Router } from "express";
import { createAccount } from "./handlers";
import { body } from 'express-validator'


const router = Router();

router.post('/api/auth/register', 
    body('handle')
        .notEmpty()
        .withMessage('El usuario no debe estar vacío'),
    body('email')
        .notEmpty()
        .withMessage('El correo no debe estar vacío'),
    createAccount
);

export default router;