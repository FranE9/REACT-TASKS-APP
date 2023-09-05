import { useContext } from "react";
import { TaskContext } from "../context/TaskContext";

function TaskCards({ task, deleteTask }) {

  const valor = useContext(TaskContext)
  
  return (
     <div>
          <h1>{task.title}</h1>
          <p>{task.description}</p>
          <button
        className="bg-red-500 px-2 py-1 rounded-md mt-4 hover:bg-red-400"
        onClick={() => deleteTask(task.id)}
      >
        Eliminar Tarea
      </button>
        </div>
  );
}

export default TaskCards