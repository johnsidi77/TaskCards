import TaskItem from '../TaskItem/TaskItem';
import React from 'react';

import './TaskList.css';

function TaskList({ tasks }) {
  return tasks.map((task) => <TaskItem key={task._id} task={task} />);
}

export default TaskList;
