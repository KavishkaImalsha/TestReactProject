import { useEffect, useState } from "react"
import { getProducts, deleteProduct } from "./hooks/userProducts.jsx"
import { Link, useNavigate } from "react-router"
import { ToastContainer, toast } from "react-toastify"

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
       const response =  getProducts()
       response.then((response) => {
        setProducts(response.data.products)
       })
    }, [])

    const productDelete = (id) => {
        const response = deleteProduct(id)

        response.then((response) => {
            const message = response.data.message
            if(response.status == 200){
                window.location.reload();
                toast.success(message, {
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
            
        })
    }
    return(<>
    <div className="flex justify-between mx-8 my-3">
        <h1 className="font-bold text-2xl text-center mx-4">Products Details</h1>
        <Link to="/add-product"
         class="text-white bg-gray-800 hover:bg-gray-900 focus:outline-none focus:ring-4 focus:ring-gray-300 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-700 dark:border-gray-700">Add Product</Link>
    </div>
    
<div class="relative overflow-x-auto shadow-md sm:rounded-lg">
    <table class="w-full text-sm text-left rtl:text-right text-gray-500">
        <thead class="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
                <th scope="col" class="px-6 py-3">
                    Product Name
                </th>
                <th scope="col" class="px-6 py-3">
                    Product Unit
                </th>
                <th scope="col" class="px-6 py-3">
                    Product Price
                </th>
                <th scope="col" class="px-6 py-3">
                    Action
                </th>
            </tr>
        </thead>
        <tbody>
            {products && products.map((product) => {
                return(
            <tr class="bg-white border-b border-gray-200 hover:bg-gray-50 ">
                <th scope="row" class="px-6 py-4 font-medium text-gray-900 whitespace-nowrap">
                {product.name}
                </th>
                <td class="px-6 py-4">
                {product.unit}
                </td>
                <td class="px-6 py-4">
                {product.price}
                </td>
                <td class="px-6 py-4 text-right">
                    <a href="#" class="font-medium text-blue-600 hover:underline">Edit</a> | <a href="#" class="font-medium text-blue-600 hover:underline" onClick={() => {
                        productDelete(product.id)
                    }}>Delete</a>
                </td>
            </tr>
                )
            })}
        </tbody>
    </table>

    <ToastContainer/>
</div>


    </>)
}

export default Products