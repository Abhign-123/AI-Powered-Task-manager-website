import apiClient from "./client"
import type { Task } from "../types/Task"



export const tasksApi = {

    getTasksByUser: () =>
            
        apiClient.get("/users/userTasks"),

    addTask:(taskData: Task) =>
        apiClient.post("/users/addTask", taskData),

}