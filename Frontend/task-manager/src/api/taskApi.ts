import apiClient from "./client"
import type {  CreateTask, TaskPatchRequest} from "../types/Task"



export const tasksApi = {

    getTasksByUser: () =>
            
        apiClient.get("/users/userTasks"),

    addTask:(taskData: CreateTask) =>
        apiClient.post("/users/addTask", taskData),

    patchTask:(id : number, taskData: TaskPatchRequest )=>
        apiClient.patch(`/users/patch/${id}`, taskData),

    deleteTask:(id:number)=>
        apiClient.delete(`/users/delete/${id}`)

}