import { Router, Response, Request } from "express";

const router = Router();

router.post('/api/auth/register', (req: Request,res :Response)=>{
    console.log(req.body);
    res.status(200).json(req.body);
})

export default router;