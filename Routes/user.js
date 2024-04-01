import express from "express"
import { createNewUser, getAllUsers, getMyProfile, login, logout } from "../Controllers/user.js";
import { isAuthentacated } from "../MiddleWares/auth.js";


const router = express.Router();

router.get("/all", getAllUsers)

router.post("/new", createNewUser)
router.post("/login", login)
router.post("/logout", logout)

router.get("/myProfile", isAuthentacated, getMyProfile)

export default router;