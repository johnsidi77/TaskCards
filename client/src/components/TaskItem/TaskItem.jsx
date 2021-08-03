import './TaskItem.css';
import moment from 'moment';
import React from 'react';

function TaskItem({ task, deleteHandler }) {
  return (
    <div className='taskContent'>
      <label class='buttonContainer'>
        <input type='checkbox' id={task._id} className='printCheckbox'></input>
        <span class='checkmark'></span>
      </label>
      <div className='title'>
        <h2 id={task._id}>{task.title}</h2>
        <p>
          <b>Creation date:</b> {moment(task.createdAt).format('YYYY-MM-DD')}
        </p>
        {task.dueDate ? (
          <p>
            <b>Due date:</b> {task.dueDate}{' '}
          </p>
        ) : (
          ''
        )}
        {task.startDate ? (
          <p>
            <b>Start date:</b> {task.startDate}
          </p>
        ) : (
          ''
        )}
      </div>
      <div className='taskDelete'>
        <button
          onClick={() => deleteHandler(task._id)}
          className='deleteButton'
        >
          <svg
            className='trashIcon'
            xmlns='http://www.w3.org/2000/svg'
            viewBox='0 0 50 50'
            width='30'
            hight='30'
            fill='#000000'
          >
            <path
              d='M 21 2 C 19.354545 2 18 3.3545455 18 5 L 18 7 L 10.154297 7 A 1.0001 1.0001 0 0 0 9.984375 6.9863281 A 1.0001 1.0001 0 0 0 9.8398438 7 L 8 7 A 1.0001 1.0001 0 1 0 8 9 L 9 9 L 9 45 C 9 46.645455 10.354545 48 12 48 L 38 48 C 39.645455 48 41 46.645455 41 45 L 41 9 L 42 9 A 1.0001 1.0001 0 1 0 42 7 L 40.167969 7 A 1.0001 1.0001 0 0 0 39.841797 7 L 32 7 L 32 5 C 32 3.3545455 30.645455 2 29 2 L 21 2 z M 21 4 L 29 4 C 29.554545 4 30 4.4454545 30 5 L 30 7 L 20 7 L 20 5 C 20 4.4454545 20.445455 4 21 4 z M 11 9 L 18.832031 9 A 1.0001 1.0001 0 0 0 19.158203 9 L 30.832031 9 A 1.0001 1.0001 0 0 0 31.158203 9 L 39 9 L 39 45 C 39 45.554545 38.554545 46 38 46 L 12 46 C 11.445455 46 11 45.554545 11 45 L 11 9 z M 18.984375 13.986328 A 1.0001 1.0001 0 0 0 18 15 L 18 40 A 1.0001 1.0001 0 1 0 20 40 L 20 15 A 1.0001 1.0001 0 0 0 18.984375 13.986328 z M 24.984375 13.986328 A 1.0001 1.0001 0 0 0 24 15 L 24 40 A 1.0001 1.0001 0 1 0 26 40 L 26 15 A 1.0001 1.0001 0 0 0 24.984375 13.986328 z M 30.984375 13.986328 A 1.0001 1.0001 0 0 0 30 15 L 30 40 A 1.0001 1.0001 0 1 0 32 40 L 32 15 A 1.0001 1.0001 0 0 0 30.984375 13.986328 z'
              fill='#000000'
            />
          </svg>
        </button>
      </div>
    </div>
  );
}

export default TaskItem;
