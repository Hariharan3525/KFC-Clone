import React, { useEffect, useState } from 'react'
import { ToastContainer } from 'react-toastify'
import { toast } from "react-toastify";
import {useParams} from 'react-router-dom'

const Edit = () => {
    const {id} = useParams()
    const [productData,setProductdata] = useState({
        title:"",img:"",desc:"",price:""
    })

    useEffect(()=>{
        fetch(`http://localhost:5008/fooding/${id}`)
        .then((res) => res.json())
        .then((data) => setProductdata(data))
    })

    const handleUpdate = (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const img = form.img.value
        const desc = form.desc.value
        const price = form.price.value

        const productObj = {title,img,desc,price}
        console.log(productObj);

        fetch(`http://localhost:5008/updateproduct/${id}`,{
            method:"PATCH",
            headers:{"Content-Type":"application/json"},
            body:JSON.stringify(productObj)
        })
        .then((res) => res.json())
        .then((data) => {
            toast.success("Product Updated Successfully")
            window.location.href = '/update'
        })
    }

  return (
    <div>
        <div className='m-auto'>
            <ToastContainer/>
            <h2 className='text-center my-3 mt-5 pt-5'>Update Product</h2>
            <form onSubmit={handleUpdate} className='w-50 m-auto'>
                <div className="mb-3">
                    <label value='title' className="form-label">Product Title</label>
                    <input type="text" className="form-control" name='title' id='title'  defaultValue={productData.title} placeholder="Enter Product Title"/>
                </div>
                <div className="mb-3">
                    <label value='img' className="form-label">Image</label>
                    <input type="text" className="form-control" name='img' id='img' defaultValue={productData.img} placeholder="Enter Product Image"/>
                </div>
                <div className="mb-3">
                    <label value='desc' className="form-label">Description</label>
                    <input type="text" className="form-control" name='desc' id='desc' defaultValue={productData.desc} placeholder="Enter Product Description"/>
                </div>
                <div className="mb-3">
                    <label value='price' className="form-label">Price</label>
                    <input type="number" className="form-control" name='price' id='price' defaultValue={productData.price} placeholder="Enter Product Price"/>
                </div>
                <div className='text-center'>
                    <button className='btn btn-primary px-4 mb-3'>Update</button>
                </div>
            </form>
        </div>
    </div>
  )
}

export default Edit