import { configureStore } from "@reduxjs/toolkit";
import tasksReducer from "../components/TaskSlice"; 

export default configureStore({
    reducer: {
        tasks: tasksReducer, 
    }
}); 