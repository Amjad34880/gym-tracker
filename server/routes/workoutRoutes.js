import express from "express";
import {
  getWorkouts,
  getWorkoutById,
  createWorkout,
  updateWorkout,
  deleteWorkout,
  getTotalReps,
} from "../controllers/workoutController.js";

const router = express.Router();

router.get("/", getWorkouts);
router.get("/stats/total-reps", getTotalReps);
router.get("/:id", getWorkoutById);
router.post("/", createWorkout);
router.put("/:id", updateWorkout);
router.delete("/:id", deleteWorkout);


export default router;

