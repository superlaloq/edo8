import * as fs from "fs";
import { Router } from "express";
const router = Router();

export default router;

router.get("/",(req,res)=>{
    res.render("esferas2");
})


router.get("/edo10",(req,res)=>{
    res.render("edo10");
})

