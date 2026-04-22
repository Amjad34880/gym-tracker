import Workout from  "../models/Workout.js";

export const getWorkouts = async (req, res) => {
  try {
    const workouts = await Workout.find()
  .populate("userId", "name email goal")
  .populate("exerciseId", "name muscleGroup equipment")
  .sort({ createdAt: -1 });

    res.status(200).json(workouts);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const getWorkoutById = async (req, res) => {
  try {
    const workout = await Workout.findById(req.params.id)
  .populate("userId", "name email goal")
  .populate("exerciseId", "name muscleGroup equipment");

    if (!workout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.status(200).json(workout);
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const createWorkout = async (req, res) => {
  try {

  const { userId, exerciseId, sets, reps, weight, workoutDate, notes } = req.body;

if (!userId || !exerciseId || !sets || !reps || weight === undefined) {
  return res.status(400).json({ message: "Please fill all required fields" });
}

const newWorkout = await Workout.create({
  userId,
  exerciseId,
  sets,
  reps,
  weight,
  workoutDate,
  notes,
});

    res.status(201).json(newWorkout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const updateWorkout = async (req, res) => {
  try {
    const updatedWorkout = await Workout.findByIdAndUpdate(
      req.params.id,
      req.body,
      { new: true, runValidators: true }
    );

    if (!updatedWorkout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.status(200).json(updatedWorkout);
  } catch (error) {
    res.status(400).json({ message: error.message });
  }
};

export const getTotalReps = async (req, res) => {
  try {
    const workouts = await Workout.find();

    const totalReps = workouts.reduce((sum, workout) => {
      return sum + workout.sets * workout.reps;
    }, 0);

    res.status(200).json({ totalReps });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export const deleteWorkout = async (req, res) => {
  try {
    const deletedWorkout = await Workout.findByIdAndDelete(req.params.id);

    if (!deletedWorkout) {
      return res.status(404).json({ message: "Workout not found" });
    }

    res.status(200).json({ message: "Workout deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};