import { tasks } from "./tasks";

function TaskList(tasks) {
  if (tasks.tasks.length === 0) {
    return <h1>No Hay Tareas Aun</h1>;
  }

  return (
    <div>
      {tasks.tasks.map((task) => (
        <div key={task.id}>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
        </div>
      ))}
    </div>
  );
}

export default TaskList;
