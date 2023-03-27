import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
export const todoSlice = createSlice({
  name: "ToDo",
  initialState: { value: [] },
  reducers: {
    AddTask: (state, action) => {
      const newTask = {
        id: nanoid(),
        taskName: action.payload,
        isTaskDone: false,
        isEdited: false,
      };
      state.value.push(newTask);
    },
    DeleteTask: (state, action) => {
      state.value = state.value.filter((item) => item.id != action.payload);
    },
    TaskDone: (state, action) => {
      const taskId = action.payload;
      state.value = state.value.map((task) =>
        task.id === taskId ? { ...task, isTaskDone:!task.isTaskDone } : task
      );
    },

    Edit: (state, action) => {
      state.value = state.value.map((task) =>
        task.id === action.payload
          ? { ...task, isEdited: !task.isEdited }
          : task
      );
    },

    Update: (state, action) => {
      const { id, TaskEdited} = action.payload;
      state.value = state.value.map((task) =>
        task.id === id
          ? { ...task,TaskName:TaskEdited, isEdited:false }
          : task
      );
    },
  },
});

export const { AddTask, DeleteTask, TaskDone, Edit, Update } =
  todoSlice.actions;
export default todoSlice.reducer;
