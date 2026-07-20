import { authApi } from "../api/authApi"

export const register = async (fullName: string, email: string, password: string) => {
    await authApi.register({fullName, email, password})
}