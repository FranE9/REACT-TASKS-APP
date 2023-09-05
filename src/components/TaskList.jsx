import { tasks } from "../data/tasks";
import TaskCards from './TaskCards'

function TaskList(tasks, deleteTask) {
  if (tasks.tasks.length === 0) {
    return <h1>No Hay Tareas Aun</h1>;
  }

  return (
    <div>
      {tasks.tasks.map((task) => (
        <TaskCards key={task.id} task={task} deleteTask={deleteTask} />
      ))}
    </div>
  );
}

export default TaskList;
