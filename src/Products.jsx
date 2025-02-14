const Products = () => {
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
                <td>Iphones</td>
                <td>10</td>
                <td>250000</td>
                <td><a href="#">Edit</a> | <a href="#">Delete</a></td>
            </tbody>
        </table>
    </>)
}

export default Products