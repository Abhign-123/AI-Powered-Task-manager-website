import apiClient from "./client"
import type { Task } from "../types/Task"



export const tasksApi = {

    getTasksByUserId: (userId : number) =>
        
        apiClient.get(`/users/userTasks/${userId}`),

    addTask:(taskData: Task) =>
        apiClient.post("/users/addTask", taskData),

}