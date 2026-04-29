import express from "express";
import User from "../models/User.js";
import { getUsers, createUser, getUserWorkouts, updateUser } from "../controllers/userController.js";


const router = express.Router();

router.get("/", getUsers);
router.post("/", createUser);
router.get("/:id/workouts", getUserWorkouts);
router.put("/:id", updateUser);



router.get("/", async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
});

router.post("/", async (req, res) => {
  try {
    const user = await User.create(req.body);
    res.status(201).json(user);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
});


export default router;