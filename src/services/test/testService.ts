import instance from "../../api/axiosConfig"

export const testReq = async (params?: any) => {
    try {
        const res = await instance.get('todos/1')
        return res
    } catch (error) {
        console.error(error)
    }
}