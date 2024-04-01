import { deleteTask, getMyTask, newTask, updateTask } from "../Controllers/task.js";
import express from "express"
import { isAuthentacated } from "../MiddleWares/auth.js";


const router = express.Router();

router.post("/new", isAuthentacated ,newTask)
router.get("/my", isAuthentacated ,getMyTask)


router.route("/:id").put(isAuthentacated, updateTask).delete(isAuthentacated, deleteTask)




export default router