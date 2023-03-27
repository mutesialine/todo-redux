import { useState } from "react";
import { AiFillPlusCircle } from "react-icons/ai";
import { AddTask } from "../features/todos";
import { useDispatch } from "react-redux";
const TaskInput = () => {
  const dispatch = useDispatch()
   const [task, setTask] = useState("");
     const handleOnChange = (event) => {
       setTask(event.target.value);
     };

     const handleTaskAdd = () => {
       if (task.trim() !== "") {
        dispatch(AddTask(task));
         setTask("");
       }
     };
  return (
    <div className="bg-teal-50 flex justify-between items-center space-x-3 px-4 w-[50%] rounded-full border shadow-3xl">
      <input
        type="text"
        value={task}
        onChange={handleOnChange}
        placeholder=" Add todo..."
        className="text-xl font-semibold w-full outline-none bg-teal-50 py-4 rounded-full  pl-8 placeholder:text-black"
      />
      <AiFillPlusCircle
        size={35}
        className="text-green-800 w-18 cursor-pointer"
        onClick={handleTaskAdd}
      />
    </div>
  );
};

export default TaskInput;
