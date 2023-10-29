import React, { useEffect, useState } from "react";
import { NavLink } from "react-router-dom";
import axios from "axios";
import { Chart } from "./chart";
import '../App.css';


function Products() {
  const [products, setproducts] = useState([]);
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get("http://localhost:3001")
      .then((result) => {
        console.log(result.data);
        const price = result?.data.map((item, index) => {
          return item.price;
        });
        const name = result?.data.map((item, index) => {
          return item.product;
        });
        setData({ labels: name, price });
        setproducts(result?.data);
      })
      .catch((err) => console.log(err));
  }, []);

  const handleDelete = (id) => {
    axios
      .delete("http://localhost:3001/deleteProduct/" + id)
      .then((res) => {
        console.log(res);
        window.location.reload();
      })
      .catch((err) => console.log(err));
  };
  return (
    <div className="d-flex vh-100  justify-content-center bgimage align-items-center">
      <div className="w-50 bg-light rounded p-3  " >
        <NavLink to="/create" className="btn btn-success px-3 mb-2 fw-bold">
          Add +
        </NavLink>
        <table className="table bg-light w-100 ">
          <thead>
            <tr>
              <td className="fw-bold ">Product</td>
              <td className="fw-bold ">Quantity</td>
              <td className="fw-bold ">Price</td>
            </tr>
          </thead>
          <tbody>
            {Array.from(products).map((product, index) => {
              return (
                <tr className="border rounded mt-5" key={product._id || index}>
                  <td className="">{product.product}</td>
                  <td className="">{product.quantity}</td>
                  <td className="-">{product.price}</td>
                  <td>
                    <NavLink
                      to={`/update/${product._id}`}
                      className="btn btn-success mx-2 fw-bold link-light"
                    >
                      Update
                    </NavLink>
                    <button
                      className="btn btn-danger fw-bold"
                      onClick={(e) => handleDelete(product._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Chart labels={data?.labels} price={data?.price} productsName = {data?.product} />
      </div>
    </div>
  );
}

export default Products;
