import { useEffect, useState } from "react"
import { getProducts } from "./hooks/userProducts.jsx"

const Products = () => {
    const [products, setProducts] = useState([])
    useEffect(() => {
       const response =  getProducts()
       response.then((response) => {
        setProducts(response.data.products)
       })
    }, [])
    const array = ['a', 'b', 'c']
    return(<>
        <h1 className="heading">Products</h1>
        <table className="table">
            <thead>
                <th className="tableHead">Product Name</th>
                <th className="tableHead">Units</th>
                <th className="tableHead">Price</th>
                <th className="tableHead">Action</th>
            </thead>
            <tbody>
                {products.map((product) => {
                    return(
                        <tr>
                            <td>{product.name}</td>
                            <td>{product.unit}</td>
                            <td>{product.price}</td>
                            <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
                        </tr>
                    )
                })}
            </tbody>
        </table>
    </>)
}

export default Products