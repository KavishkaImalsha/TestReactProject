import axios from "axios"

const baseUrl = 'http://127.0.0.1:8000'

export const getProducts = async () => {
    const response = await axios.get(`${baseUrl}/api/get-products`)
    return response
}