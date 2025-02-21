import { useState } from "react"
import { addProduct } from "./hooks/userProducts.jsx"
import { Link, useNavigate } from "react-router"
import { ToastContainer, toast } from "react-toastify"

const AddProduct = () => {
    const navigate = useNavigate()
    const [formData, setFormData] = useState({product_name : '', product_unit : null, unit : null})

    const haddleFormData = (event) => {
        setFormData((prevData) => ({
            ...prevData,
            [event.target.name] : event.target.value
        }))
    }

    const handelFormData = (event) => {
        event.preventDefault()
        const response = addProduct(formData)

        response.then((response) => {
            if(response.status == 200){
                toast.success(response.data.message, {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                    })
            }
            else{
                toast.error("Product is not added", {
                    position: "top-center",
                    autoClose: 5000,
                    hideProgressBar: false,
                    closeOnClick: false,
                    pauseOnHover: true,
                    draggable: true,
                    progress: undefined,
                    theme: "light"
                    });
            }
        })
    }
    
    return(
        <>
        <form onSubmit={handelFormData} className="max-w-sm mx-auto my-10">
            <h3 className="mb-4 text-3xl text-center font-extrabold leading-none tracking-tight text-gray-900">Add Product</h3>
            <label className="block mb-2 text-sm font-medium text-gray-900">Product Name</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="text" name="product_name" onChange={haddleFormData}/>

            <label className="block mb-2 text-sm font-medium text-gray-900">Product Unit</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="number" name="unit" onChange={haddleFormData}/>

            <label className="block mb-2 text-sm font-medium text-gray-900">Product Price</label>
            <input className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5" type="number" name="product_price" onChange={haddleFormData}/>

            <button type="submit" className="text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-blue-600 dark:hover:bg-blue-700 focus:outline-none dark:focus:ring-blue-800 my-3 w-full">Add Product</button>

            <Link to="/" className="font-medium text-blue-600 dark:text-blue-500 hover:underline">View Products</Link>
        </form>
        <ToastContainer/>
        </>
    )    
}

export default AddProduct