import React from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { DeleteTask} from "../features/todos";
const TaskList = () => {
  const dispatch = useDispatch();
  const toDo = useSelector((state) => state.ToDo.value);
  
   const handleTaskDelete = (id) => {
    dispatch(DeleteTask(id));
  };
const handleTaskDone = (id) => {
const checkedTask = toDo.map((task) =>
  task.id === id ? { ...task, isTaskDone: !task.isTaskDone } : task
);
dispatch({ type: "toDo/TaskDone", payload:checkedTask });
}

  return toDo.map((oneTask) => (
    <div
      className="flex justify-between items-center w-[50%] border-b-2 border-gray-300 pb-2"
      key={oneTask.id}
    >
      <div className="flex gap-x-5 items-center">
        <input
          type="checkbox"
          className="w-4 h-4 outline-none cursor-pointer"
          name={oneTask.taskName}
          checked={oneTask.isTaskDone}
          onChange={() => handleTaskDone(oneTask.id)}
        />
        <label
          className={`text-3xl text-center text-white font-semibold ${
            oneTask.isTaskDone ? "text-red-500" : ""
          }`}
          htmlFor="isTaskDone"
        >
          {oneTask.taskName}
        </label>
      </div>

      <div className="flex gap-x-2">
        <div className="p-2 bg-gray-200 rounded-full cursor-pointer">
          <AiFillEdit size={24} className="text-green-500" />
        </div>
        <div
          className="p-2 bg-gray-200 rounded-full cursor-pointer"
          onClick={() => handleTaskDelete(oneTask.id)}
        >
          <AiFillDelete size={24} className="text-red-500" />
        </div>
      </div>
    </div>
  ));
};
export default TaskList;
