import { useEffect, useState } from "react";
import axios from "axios";

function WorkoutForm({ refresh, setRefresh, selectedWorkout }) {
  const [form, setForm] = useState({
    userId: "",
    exerciseId: "",
    sets: "",
    reps: "",
    weight: "",
    notes: ""
  });

  useEffect(() => {
    if (selectedWorkout) {
      setForm({
        userId: selectedWorkout.userId?._id || "",
        exerciseId: selectedWorkout.exerciseId?._id || "",
        sets: selectedWorkout.sets || "",
        reps: selectedWorkout.reps || "",
        weight: selectedWorkout.weight || "",
        notes: selectedWorkout.notes || ""
      });
    }
  }, [selectedWorkout]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      if (selectedWorkout) {
        await axios.put(
          `http://localhost:5000/api/workouts/${selectedWorkout._id}`,
          form
        );
      } else {
        await axios.post("http://localhost:5000/api/workouts", form);
      }

      setRefresh(!refresh);
      setForm({
        userId: "",
        exerciseId: "",
        sets: "",
        reps: "",
        weight: "",
        notes: ""
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <form className="form" onSubmit={handleSubmit}>
      <input
        type="text"
        placeholder="User ID"
        value={form.userId}
        onChange={(e) => setForm({ ...form, userId: e.target.value })}
      />
      <input
        type="text"
        placeholder="Exercise ID"
        value={form.exerciseId}
        onChange={(e) => setForm({ ...form, exerciseId: e.target.value })}
      />
      <input
        type="number"
        placeholder="Sets"
        value={form.sets}
        onChange={(e) => setForm({ ...form, sets: e.target.value })}
      />
      <input
        type="number"
        placeholder="Reps"
        value={form.reps}
        onChange={(e) => setForm({ ...form, reps: e.target.value })}
      />
      <input
        type="number"
        placeholder="Weight"
        value={form.weight}
        onChange={(e) => setForm({ ...form, weight: e.target.value })}
      />
      <button type="submit">
        {selectedWorkout ? "Update" : "Add workout"}
      </button>
    </form>
  );
}

export default WorkoutForm;