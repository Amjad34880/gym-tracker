import axios from "axios";

function WorkoutRow({ workout, onEdit }) {
  const handleDelete = async () => {
    await axios.delete(`http://localhost:5000/api/workouts/${workout._id}`);
    window.location.reload();
  };

  return (
    <tr>
      <td>{workout.userId?.name}</td>
      <td>{workout.exerciseId?.name}</td>
      <td>{workout.userId?.goal}</td>
      <td>{workout.sets}</td>
      <td>{workout.reps}</td>
      <td>{workout.weight}</td>
      <td>
        <div className="action-buttons">
          <button className="edit-btn" onClick={() => onEdit(workout)}>Edit</button>
          <button className="delete-btn" onClick={handleDelete}>Delete</button>
        </div>
      </td>
    </tr>
  );
}

export default WorkoutRow;