import { Router } from "express";
import { createAccount } from "./handlers";


const router = Router();

router.post('/api/auth/register', createAccount);

export default router;