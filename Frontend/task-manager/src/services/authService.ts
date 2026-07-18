import { registerApi } from "../api/authApi"

export const register = async (fullName: string, email: string, password: string) => {
    await registerApi({fullName, email, password})
}