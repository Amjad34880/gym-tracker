import { useEffect, useState } from "react";
import axios from "axios";
import WorkoutList from "./components/workoutList";
import WorkoutForm from "./components/workoutForm";
import "./App.css";

function App() {
  const [workouts, setWorkouts] = useState([]);
  const [refresh, setRefresh] = useState(false);
  const [selectedWorkout, setSelectedWorkout] = useState(null);

  useEffect(() => {
    axios
      .get("http://localhost:5000/api/workouts")
      .then((res) => setWorkouts(res.data))
      .catch((err) => console.log(err));
  }, [refresh]);

  return (
    <div className="app">
      <h1 className="title">Gym Tracker</h1>

      <WorkoutForm
        refresh={refresh}
        setRefresh={setRefresh}
        selectedWorkout={selectedWorkout}
      />

      <div className="table-wrapper">
        <WorkoutList workouts={workouts} onEdit={setSelectedWorkout} />
      </div>
    </div>
  );
}

export default App;