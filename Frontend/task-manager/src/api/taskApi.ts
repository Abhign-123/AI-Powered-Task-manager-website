import apiClient from "./client"

export const getTasksApi = async () => {
    const response = await apiClient.get("/users/userTasks");
    
    return response.data;
}