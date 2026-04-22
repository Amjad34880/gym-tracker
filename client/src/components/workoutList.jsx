import WorkoutRow from "./workoutRow";

function WorkoutList({ workouts, onEdit }) {
  return (
    <table border="1">
      <thead>
        <tr>
          <th>User</th>
          <th>Exercise</th>
          <th>Goal</th>
          <th>Sets</th>
          <th>Reps</th>
          <th>Weight</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {workouts.map((workout) => (
          <WorkoutRow
            key={workout._id}
            workout={workout}
            onEdit={onEdit}
          />
        ))}
      </tbody>
    </table>
  );
}

export default WorkoutList;