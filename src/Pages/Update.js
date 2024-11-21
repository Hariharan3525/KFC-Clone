// import React, { useEffect, useState } from 'react'
// import { ToastContainer, toast } from 'react-toastify'
// import 'react-toastify/dist/ReactToastify.css'

// const Update = () => {
    
//     const[productItems,setProductItems] = useState([])
//     useEffect(()=>{
//         fetch(`http://localhost:3030/foods`)
//         .then((res)=>res.json())
//         .then((data)=>setProductItems(data))
//     },[])
    
    
//     const DeleteItems = (id) => {
//         fetch(`http://localhost:3030/food/${id}`,{
//             method:"DELETE"
//         })
//         .then((res)=>res.json())
//         .then((data)=>{
//             toast.error("Deleted Successfully")
//             setProductItems((prevProductItems)=>prevProductItems.filter((Item)=>Item._id !== id))
//         })
//     }

//     return (
//         <div>
//           <ToastContainer />
//           <div className="mt-5 py-5">
//             <div className="card m-auto w-50">
//               <div className="card-body">
//                 <div className="table-responsive">
//                   <table className="table table-bordered table-hover">
//                     <thead>
//                       <tr className='text-center'>
//                         <th>Product Title</th>
//                         <th>Image</th>
//                         <th>Description</th>
//                         <th>Price</th>
//                         <th>Actions</th>
//                       </tr>
//                     </thead>
//                     <tbody>
//                       {productItems.map((items) => (
//                         <tr key={items._id}>
//                             <td>{items.title}</td>
//                             <td><img src={items.img} alt=''/></td>
//                             <td>{items.desc}</td>
//                             <td>{items.price}</td>
//                             <td className='text-center'>
//                                 <button className='btn btn-primary me-2'>Edit</button>
//                                 <button className='btn btn-danger'onClick={()=>DeleteItems(items._id)}>Delete</button>
//                             </td>
//                         </tr>
//                       ))}
//                     </tbody>
//                   </table>
//                 </div>
//               </div>
//             </div>
//           </div>
//         </div>
//     );
// }

// export default Update

// 

import React, {useState,useEffect} from "react";
import { toast } from "react-toastify";

const Update = () => {
  const[products, setProducts] = useState([]);

  useEffect(() => {
    fetch('http://localhost:5008/foods')
    .then((res) => res.json())
    .then((data) => setProducts(data))
    .catch((error) => console.error("Error fetching data:",error));
  }, []);

  const deleteProduct = (id) => {
    fetch(`http://localhost:5008/food/${id}`,{
        method: "DELETE",
})
.then((res)=>res.json())
.then((data)=>{
    toast.success("Product deleted Successfully");
    setProducts((prevProductData)=>
    prevProductData.filter((item)=>item._id !== id))
})
}

  return(
    <div>
      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>Title</th>
              <th>Price</th>
              <th>Description</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>
            {products.map((item) => (
              <tr key={item._id}>
                <td>{item.title}</td>
                <td>{item.price}</td>
                <td>{item.ds}</td>
                <td><img src={item.image} alt=""/></td>
                <td>
                  <button onClick={() => deleteProduct(item._id)}>Delete</button>
                  <button>Edit</button>
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