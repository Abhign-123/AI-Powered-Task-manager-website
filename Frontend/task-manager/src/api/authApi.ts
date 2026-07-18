import type { LoginRequest, RegisterRequest } from "../types/auth";
import apiClient from "./client";

export const loginApi = async (credentials: LoginRequest) => {
    const response = await apiClient.post("/auth/login", credentials);
    return response.data;
}

export const registerApi = async (userData: RegisterRequest) => {
    const response = await apiClient.post("/auth/register", userData);
    return response.data;
}