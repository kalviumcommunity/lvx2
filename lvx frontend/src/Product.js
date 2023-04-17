import React from "react";
import Navbar from "./Components/Navbar/Navbar";
import "./Product.css";
import { useParams } from "react-router-dom";
import data from "./data.json";

function Product() {
  const params = useParams()
  const product = data.find(item =>item.id===Number(params.id))
  return (
    <>
    <Navbar />
      <div className="content2">
        <img
          alt="item"
          src={product.image}
          className="image"
        ></img>
        <div className="details">
            <div className="priceofproduct">{product.price}</div>
            <div className="descriptionofproduct">{product.description}</div>
        </div>
      </div>
    </>
  );
}

export default Product;