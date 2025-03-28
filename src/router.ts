import { Router, Response, Request } from "express";
import { registerUser } from "./handlers";


const router = Router();

router.post('/api/auth/register', registerUser);

export default router;