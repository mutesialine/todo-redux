import { useState } from "react";
import { AiFillDelete, AiFillEdit } from "react-icons/ai";
import { useDispatch, useSelector } from "react-redux";
import { deleteTask, edit, update } from "../features/todos";
const TaskList = () => {
  const todo = useSelector((state) => state.TODO.value);
  const dispatch = useDispatch();

  const [valueEdited, setEditedValue] = useState("");

  const handleTaskDelete = (id) => {
    dispatch(deleteTask(id));
  };
  const handleTaskDone = (id) => {
    dispatch({ type: "TODO/taskDone", payload: id });
  };

  const handleTaskEdited = (task) => {
    setEditedValue(task.taskName);
    dispatch(edit(task.id));
  };

  const handletaskUpdate = (valueEdited, id) => {
    dispatch(update({ taskEdited:valueEdited, id }));
  };
  return todo.length > 0 ? (
    todo.map((oneTask) => (
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
              value={valueEdited}
              className="text-3xl font-semibold text-white bg-transparent outline-none"
              onChange={(event) => setEditedValue(event.target.value)}
              onMouseLeave={() => handletaskUpdate(valueEdited, oneTask.id)}
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
    ))
  ) : (
    <h2 className="text-2xl font-bold text-white pt-12">
      what your main focus today ?
    </h2>
  );
};
export default TaskList;
