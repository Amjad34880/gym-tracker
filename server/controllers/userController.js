import User from "../models/User.js";
import Workout from "../models/Workout.js";

export const getUsers = async (req, res) => {
  try {
    const users = await User.find().sort({ createdAt: -1 });
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createUser = async (req, res) => {
  try {
    const { name, email, goal } = req.body;

    if (!name || !email || !goal) {
      return res.status(400).json({ message: "Please fill all required fields" });
    }

    const newUser = await User.create({ name, email, goal });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getUserWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find({ userId: req.params.id })
      .populate("userId", "name email goal")
      .populate("exerciseId", "name muscleGroup equipment");

    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};