import React,{useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function UpdateProducts ( ) {
    const {id} = useParams()
    const [product, setProduct] = useState('')
    const [quantity,setQuantity] = useState('')
    const [price, setPrice] = useState('')
    const navigate = useNavigate();

    useEffect(()=>{
        axios.get('http://localhost:3001/getProducts/'+id)
        .then(result => {console.log(result)
         setProduct(result.data.product)
         setQuantity(result.data.quantity)
         setPrice(result.data.price)
        })
        .catch(err => console.log(err))
    },[])

    // const Update = (e) => {
    //     e.preventDefault(); 
    //     axios.put("http://localhost:3001/updateProducts/"+id, {product,quantity,price})
    //     .then(result => {
    //         console.log(result)
    //         navigate('/')
            
    //     })
    //     .catch(err => console.log(err))
    // }
    const Update = (e) => {
        e.preventDefault(); 
        if (id && product && quantity && price) {
            axios.put("http://localhost:3001/updateProducts/" + id, { product, quantity, price })
            .then(result => {
                console.log(result);
                navigate('/');
            })
            .catch(err => console.log(err));
        } else {
            console.log('Please ensure all fields are filled before updating.');
        }
    };
    

    

    return (

        <div>
            <div className="d-flex vh-100 bg-primary bgimage justify-content-center align-items-center">
            <div className="w-50 bg-light rounded p-3">
            <h2>Update Product</h2>
                
                <form className="bg-light" action="" onSubmit={Update}>
                    
                    <div className="mb-2">
                        <label className="fw-bold" htmlFor="">Product</label>
                        <input type="text" placeholder="Enter Product Name" className="form-control" value={product} onChange={(e)=> setProduct(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label className="fw-bold" htmlFor="">Quantity</label>
                        <input type="number" placeholder="Enter Product Quantity" className="form-control" value={quantity} onChange={(e)=> setQuantity(e.target.value)} />
                    </div>
                    <div className="mb-2">
                        <label className="fw-bold" htmlFor="">Price</label>
                        <input type="number" placeholder="Enter Product Price" className="form-control" value={price} onChange={(e)=> setPrice(e.target.value)}/>
                    </div>
                    <button className="btn btn-success fw-bold">Update</button>
                </form>
            </div>
            </div>
        </div>
    )
}

export default UpdateProducts;