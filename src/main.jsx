import {StrictMode} from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import { configureStore } from "@reduxjs/toolkit";
import {Provider} from 'react-redux'
import ToDoReducer from "./features/todos";

const Store= configureStore({
  reducer :{
  TODO: ToDoReducer,
  }
})

ReactDOM.createRoot(document.getElementById("root")).render(
  <StrictMode>
    <Provider store={Store}>
      <App />
    </Provider>
  </StrictMode>
);
