import type { LoginRequest, RegisterRequest } from "../types/auth";
import apiClient from "./client";

export const authApi = {
    login: (credentials: LoginRequest) =>
        apiClient.post("/auth/login", credentials),

    register: (userData: RegisterRequest) => 
        apiClient.post("/auth/register", userData)
}