import TaskCards from './TaskCards'
import { useContext } from 'react';
import { TaskContext } from '../context/TaskContext';

function TaskList() {

  const {tasks} = useContext(TaskContext)



  if (tasks.tasks.length === 0) {
    return <h1>No Hay Tareas Aun</h1>;
  }

  return (
    <div>
      {tasks.tasks.map((task) => (
        <TaskCards key={task.id} task={task} />
      ))}
    </div>
  );
}

export default TaskList;
