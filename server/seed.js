import mongoose from "mongoose";
import dotenv from "dotenv";
import User from "./models/User.js";
import Exercise from "./models/Exercise.js";
import Workout from "./models/Workout.js";

dotenv.config();

const seedData = async () => {
  try {
    await mongoose.connect(process.env.MONGO_URI);
    console.log("MongoDB connected for seeding");

    await Workout.deleteMany();
    await User.deleteMany();
    await Exercise.deleteMany();

    const users = await User.insertMany([
      { name: "Amjad Ali", email: "amjad@example.com", goal: "Build muscle" },
      { name: "Sara Nilsson", email: "sara@example.com", goal: "Lose weight" },
      { name: "Johan Eriksson", email: "johan@example.com", goal: "Strength" },
      { name: "Emma Larsson", email: "emma@example.com", goal: "Endurance" },
      { name: "Lina Berg", email: "lina@example.com", goal: "Fitness" }
    ]);

    const exercises = await Exercise.insertMany([
      { name: "Bench Press", muscleGroup: "Chest", equipment: "Barbell" },
      { name: "Squat", muscleGroup: "Legs", equipment: "Barbell" },
      { name: "Deadlift", muscleGroup: "Back", equipment: "Barbell" },
      { name: "Shoulder Press", muscleGroup: "Shoulders", equipment: "Dumbbell" },
      { name: "Lat Pulldown", muscleGroup: "Back", equipment: "Machine" }
    ]);

    await Workout.insertMany([
      {
        userId: users[0]._id,
        exerciseId: exercises[0]._id,
        sets: 4,
        reps: 8,
        weight: 60
      },
      {
        userId: users[1]._id,
        exerciseId: exercises[1]._id,
        sets: 3,
        reps: 10,
        weight: 50
      },
      {
        userId: users[2]._id,
        exerciseId: exercises[2]._id,
        sets: 5,
        reps: 5,
        weight: 100
      },
      {
        userId: users[3]._id,
        exerciseId: exercises[3]._id,
        sets: 4,
        reps: 12,
        weight: 18
      },
      {
        userId: users[4]._id,
        exerciseId: exercises[4]._id,
        sets: 3,
        reps: 15,
        weight: 45
      }
    ]);

    console.log("Seed data inserted");
    process.exit();
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

seedData();