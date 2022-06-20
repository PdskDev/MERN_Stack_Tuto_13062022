import { useDispatch } from 'react-redux';
import { deleteGoal } from '../features/goals/goalSlice';

function GoalItem({ goal }) {
  const dispatch = useDispatch();

  return (
    <div className="goal">
      <div>
        {new Date(goal.createdAt).toLocaleString('fr-FR')}
        <h4>{goal.text}</h4>
        <button
          onClick={() => dispatch(deleteGoal(goal._id))}
          className="close"
        >
          X
        </button>
      </div>
    </div>
  );
}

export default GoalItem;
