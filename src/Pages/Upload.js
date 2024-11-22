// import React from 'react'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// const Upload = () => {
//     const handleSubmit = (e) => {
//         e.preventDefault()
//         const form = e.target
//         const title = form.title.value
//         const img = form.img.value
//         const price = form.price.value
//         const desc = form.desc.value

//         if(title === "" || img === "" || price === "" || desc === "")
//             toast.warn("Fill the required fields")
    
//         const foodObj = {title,img,price,desc}
//         console.log(foodObj);
        
//         fetch('http://localhost:3030/upload',{
//             method:"POST",
//             headers:{'Content-Type':'application.json'},
//             body:JSON.stringify(foodObj)
//         }).then((res)=>res.json())
//         .then((data)=>{
//             toast.success("Data Added Successfully")
//             form.reset()
//             window.location.href='/update'
//         })
//     }

//   return (
//     <div>
//         <ToastContainer/>
//         <form onSubmit={handleSubmit} className='w-50 m-auto my-5 pt-5'>
//             <h3 className='text-center mt-3'>Admin Control</h3>
//             <div className="mb-3">
//                 <label value='title' className="form-label">Product</label>
//                 <input type="text" name='title' id='title' className="form-control" placeholder="Enter Product Name"/>
//             </div>
//             <div className="mb-3">
//                 <label value='img' className="form-label">Image</label>
//                 <input type="text" name='img' id='img' className="form-control" placeholder="Enter Image URL"/>
//             </div>
//             <div className="mb-3">
//                 <label value='desc' className="form-label">Description</label>
//                 <input type="text" name='desc' id='desc' className="form-control"  placeholder="Enter Product Description"/>
//             </div>
//             <div className="mb-3">
//                 <label value='price' className="form-label">Price</label>
//                 <input type="number" name='price' id="price" class="form-control" placeholder="Enter Price"/>
//             </div>
//             <div className="text-center">
//                 <button type='submit' className='btn btn-success px-4'>Upload</button>
//             </div>
//         </form>
//     </div>
//   )
// }

// export default Upload


// import React from 'react'
// import { toast, ToastContainer } from 'react-toastify';

// const Upload = () => {

//     const handleSubmit = (e)=>{
//         e.preventDefault();
//         const form = e.target;
//         const image =form.image.value;
//         const title = form.title.value;
//         const ds = form.ds.value;
//         const price = form.price.value;
//         const quantity = 1;

//         if(image === "" || title === "" || ds === "" || price === ""){
//             toast.warn("Fill all the fields");
//         }
//         const prdObj = {
//             image,title,ds,price,quantity
//         };console.log(prdObj);

//         fetch("http://localhost:5008/upload",{
//             method:"POST",
//             headers:{
//                 "Content-Type":"application/json",
//             },
//             body:JSON.stringify(prdObj)
//         })
//         .then((res)=>res.json())
//         .then((data)=>{
//             toast.success("Product Added Successfully")
//             form.reset();
//             window.location.href = "/update";
//         });
//     }
    
//   return (
//     <div>
//         <ToastContainer/>
// <div className='up'>

// <div className='card up1'>
// <h3>Upload Products</h3>
// <form onSubmit={handleSubmit}>
// <label value="image">Image</label><br/>
// <input 
// type='text'
// name='image'
// id='image'
// /><br/>
// <label value="title">Title</label><br/>
// <input 
// type='text'
// name='title'
// id='title'
// /><br/>
// <label value="ds">Description</label><br/>
// <input 
// type='text'
// name='ds'
// id='ds'
// /><br/>
// <label value="price">Price</label><br/>
// <input 
// type='number'
// name='price'
// id='price'
// /><br/><br/>
// <button type="submit" className='btn btn-success'>Upload</button>
// </form>
// </div>
// </div>

//     </div>
//   )
// }

// export default Upload

import React from 'react'
import { toast, ToastContainer } from 'react-toastify';

const Upload = () => {
    const handleSubmit = (e) => {
        e.preventDefault()
        const form = e.target
        const title = form.title.value
        const img = form.img.value
        const desc = form.desc.value
        const price = form.price.value

        const prodObj = {title,img,desc,price}
        console.log(prodObj)

        if(title === "" || img === "" || desc === "" || price === "")
            toast.warn("Fill all the fields")

        fetch('http://localhost:5008/upload',{
            method:"POST",
            headers:{"Content-Type":"application/json"},
            body: JSON.stringify(prodObj)
        })
        .then((res) => res.json())
        .then((data) => {
            toast.success("Data Added Successfully!")
            form.reset()
            window.location.href = '/update'
        })
    }

  return (
    <div>
        <div className='vh-100 d-flex justify-content-center align-items-center bg-primary'>
            <div className='w-50 bg-light rounded p-3'>
                <ToastContainer />
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label className="form-label" value='title'>Product Name</label>
                        <input type="text" className="form-control" name="title" id="title" placeholder="Enter Product Name"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" value='img'>Image</label>
                        <input type="text" className="form-control" name="img" id="img" placeholder="Enter Product Url"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" value='desc'>Description</label>
                        <input type="text" className="form-control" name="desc" id="desc" placeholder="Enter Product Description"/>
                    </div>
                    <div className="mb-3">
                        <label className="form-label" value='price'>Price</label>
                        <input type="number" className="form-control" name="price" id="price" placeholder="Enter Product Price"/>
                    </div>
                    <div className='text-center'>
                        <button className='btn btn-success px-4'>Upload</button>
                    </div>
                </form>
            </div>
        </div>
    </div>
  )
}

export default Upload