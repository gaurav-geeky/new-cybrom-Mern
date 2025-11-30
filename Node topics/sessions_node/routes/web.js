import express from "express";  
const router = express.Router(); 
import StudentController from "../controller/StuController.js"

router.get("/getsessioninfo", StudentController.get_session_info); 

router.get("/deletesession", StudentController.delete_session); 

// router.get("/resession", StudentController.regenerate_session); 


export default router; 


