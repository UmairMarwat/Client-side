import React, { useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";



function CreateProducts ( ) {
    

const [product, setProduct] = useState('')
const [quantity,setQuantity] = useState('')
const [price, setPrice] = useState('')
const navigate = useNavigate();

const Submit = (e) => {
    e.preventDefault(); 
    axios.post("http://localhost:3001/createProducts", {product,quantity,price})
    .then(result => {
        console.log(result)
        navigate('/')
        
    })
    .catch(err => console.log(err))
}


    return (
        <div className="d-flex vh-100 bg-primary bgimage justify-content-center align-items-center">
            <div className="w-50 bg-white rounded p-3">
               
                <form action="" onSubmit={Submit}>
                    <h2>Add Product</h2>
                    <div className="mb-2">
                        <label className="fw-bold" htmlFor="">Product</label>
                        <input type="text" placeholder="Enter Product Name" value={product} className="form-control" onChange={(e) => setProduct(e.target.value)}
                         />
                         

                    </div>
                    <div className="mb-2">
                        <label className="fw-bold" htmlFor="">Quantity</label>
                        <input type="number" placeholder="Enter Product Quantity" value={quantity} className="form-control" onChange={(e) => setQuantity(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label className="fw-bold" htmlFor="">Price</label>
                        <input type="number" placeholder="Enter Product Price" className="form-control" value={price}  onChange={(e) => setPrice(e.target.value)} />
                    </div>
                    <button type="submit" className="btn btn-success fw-bold">Add Product</button>
                </form>
            </div>
            </div>
    )
}

export default CreateProducts;