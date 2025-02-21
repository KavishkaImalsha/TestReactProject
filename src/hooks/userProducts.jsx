import axios from "axios"

const baseUrl = 'http://127.0.0.1:8000'

const getProducts = async () => {
    const response = await axios.get(`${baseUrl}/api/get-products`)
    return response
}

const addProduct = async (formData) => {
    const response = await axios.post(`${baseUrl}/api/add-product`, formData)
    return response 
}

const deleteProduct = async (id) => {
    const response = await axios.delete(`${baseUrl}/api/delete-product/${id}`)
    return response
}

export {getProducts, addProduct, deleteProduct}