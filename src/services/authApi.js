import api from "../config/api";

export const login = async (data) => {
    try {
        const response = await api.post("/auth/login", data)
        return response?.data?.data
    } catch (e) {
        console.error(e)
    }
}