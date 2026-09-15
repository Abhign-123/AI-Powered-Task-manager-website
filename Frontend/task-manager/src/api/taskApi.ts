import apiClient from "./client"
import type {  CreateTask} from "../types/Task"



export const tasksApi = {

    getTasksByUser: () =>
            
        apiClient.get("/users/userTasks"),

    addTask:(taskData: CreateTask) =>
        apiClient.post("/users/addTask", taskData),

}