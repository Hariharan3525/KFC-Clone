import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { toast } from "react-toastify";

const Update = () => {
    const [products,setProducts] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5008/foods')
        .then((res) => res.json())
        .then((data) => setProducts(data))
        .catch((error) => console.error("Error Fetching Data",error))
    },[])

    const deleteProduct = (id) => {
        fetch(`http://localhost:5008/food/${id}`,{
            method:"DELETE"
        })
        .then((res) => res.json())
        .then((data) => {
            toast.success("Product Deleted Successfully!")
            setProducts((prevProductData) => prevProductData.filter((item) => item._id !== id))
            console.log(products)
        })
    }

  return (
    <div>
        <div className='table-responsive w-75 m-auto my-5'>
            <table className='table table-dark table-hover text-white text-center mt-5'>
                <thead>
                    <tr>
                        <td>Product Title</td>
                        <td>Image</td>
                        <td>Description</td>
                        <td>Price</td>
                        <td>Actions</td>
                    </tr>
                </thead>
                <tbody>
                    {products.map((item) => (
                        <tr key={item._id}>
                            <td>{item.title}</td>
                            <td><img src={item.img} alt='' width="300px" height="200px"/></td>
                            <td>{item.desc}</td>
                            <td>{item.price}</td>
                            <td>
                                <Link to={`/edit/${item._id}`}><button className='btn btn-primary me-2'>Edit</button></Link>
                                <button className='btn btn-danger' onClick={()=>deleteProduct(item._id)}>Delete</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    </div>
  )
}

export default Update