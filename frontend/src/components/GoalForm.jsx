import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { createGoal } from '../features/goals/goalSlice';

function GoalForm() {
  const [text, setText] = useState('');

  const dispatch = useDispatch();

  const onSubmit = (e) => {
    e.preventDefault();

    dispatch(createGoal({ text }));
    setText('');
  };

  return (
    <section className="form">
      <form onSubmit={onSubmit}>
        <div class="form-group">
          <input
            type="text"
            name="text"
            id="text"
            class="form-control"
            placeholder="Enter your goal"
            value={text}
            onChange={(e) => setText(e.target.value)}
          />
        </div>
        <div class="form-group">
          <button type="submit" className="btn btn-block">
            Add Goal
          </button>
        </div>
      </form>
    </section>
  );
}

export default GoalForm;
