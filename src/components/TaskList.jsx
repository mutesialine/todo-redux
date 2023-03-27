import { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { DeleteTask, Edit, Update } from "../features/todos";
const TaskList = () => {
  const toDo = useSelector((state) => state.ToDo.value);
  const dispatch = useDispatch();

  const [editingValue, setEditingValue] = useState("");

  const handleTaskDelete = (id) => {
    dispatch(DeleteTask(id));
  };
  const handleTaskDone = (id) => {
    dispatch({type:"ToDo/TaskDone", payload:id});
  };
 
  const handleTaskEdited = (task) => {
    setEditingValue(task.taskName);
    dispatch(Edit(task.id));
  };

 const handleMouseLeave = (editingValue, id) => {
    dispatch(Update({ TaskEdited:editingValue, id }));
  }
  return toDo.map((oneTask) => (
    <div
      className="flex justify-between items-center w-[50%] border-b-2 border-gray-300 pb-2"
      key={oneTask.id}
    >
      {!oneTask.isEdited ? (
        <div className="flex gap-x-5 items-center">
          <input
            type="checkbox"
            className="w-4 h-4 outline-none cursor-pointer"
            checked={oneTask.isTaskDone}
            onChange={() => handleTaskDone(oneTask.id)}
          />
          <label
            className={`text-3xl text-center text-white font-semibold  ${
              oneTask.isTaskDone ? "line-through" : ""
            }`}
          >
            {oneTask.taskName}
          </label>
        </div>
      ) : (
        <div className="w-full pl-8">
          <input
            type="text"
            value={editingValue}
            className="text-3xl font-semibold text-white bg-transparent outline-none"
            onChange={(event) => setEditingValue(event.target.value)}
            onMouseLeave={() => handleMouseLeave(editingValue, oneTask.id)}
          />
        </div>
      )}

      <div className="flex gap-x-2">
        <div
          className="p-2 bg-gray-200 rounded-full cursor-pointer"
          onClick={() => handleTaskEdited(oneTask)}
        >
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
