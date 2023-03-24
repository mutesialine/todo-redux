import { createSlice } from "@reduxjs/toolkit";
import { nanoid } from "nanoid";
export  const todoSlice =createSlice({
  name:"ToDo",
  initialState:{value: []},
   reducers :{
   AddTask :(state ,action) => {
      const newTask = {
        id: nanoid(),
        taskName: action.payload,
        isTaskDone: false,
        isEdited: false,
      };
      state.value.push(newTask)
   },
    DeleteTask : (state,action) => {
         state.value = state.value.filter((item)=> item.id !=action.payload)
    }
  //    TaskDone: (state,action)=> {
  //   state.value=state.value.map(task => task.id === action.payload ? {...task, isTaskDone:!task.isTaskDone } : task )
  //  }
  
   }
  
  })
  
  export const {AddTask,DeleteTask}= todoSlice.actions
  export default todoSlice.reducer
