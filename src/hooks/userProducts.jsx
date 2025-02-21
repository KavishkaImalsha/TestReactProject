import axios from "axios"

const baseUrl = 'http://127.0.0.1:8000'

export const getProducts = async () => {
    const response = await axios.get(`${baseUrl}/api/get-products`)
    return response
}

export const addProduct = async (formData) => {
    const response = await axios.post(`${baseUrl}/api/add-product`, formData)
    
    return response
    
}