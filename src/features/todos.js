import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
export const todoSlice = createSlice({
  name: "TODO",
  initialState: { value: [] },
  reducers: {
    addTask: (state, action) => {
      const newTask = {
        id: nanoid(),
        taskName: action.payload,
        isTaskDone: false,
        isEdited: false,
      };
      state.value.push(newTask);
    },
    deleteTask: (state, action) => {
      state.value = state.value.filter((item) => item.id != action.payload);
    },
    taskDone: (state, action) => {
      state.value = state.value.map((task) =>
        task.id === action.payload ? { ...task, isTaskDone:!task.isTaskDone } : task
      );
    },

    edit: (state, action) => {
      state.value = state.value.map((task) =>
        task.id === action.payload
          ? { ...task, isEdited: !task.isEdited }
          : task
      );
    },

    update: (state, action) => {
      const { id, taskEdited} = action.payload;
      state.value = state.value.map((task) =>
        task.id === id
          ? { ...task, taskName:taskEdited, isEdited:false }
          : task
      );
    },
  },
});

export const {addTask, deleteTask, taskDone, edit, update } =
  todoSlice.actions;
export default todoSlice.reducer;
