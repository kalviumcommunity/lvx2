import React from "react";
import { useLocation } from "react-router-dom";
import "./product.css";

function Product() {
  const location = useLocation();
  const product = location.state;
  console.log(product);
  return (
    <>
      <div className="content2">
        <div className="imagearea">
        <img alt={product.itemname} src={product.image} className="image"></img>
        </div>
        <div className="details">
          <div className="productdetails">
            <div className="priceofproduct">{product.price}</div>
            <div className="nameofproduct">{product.itemname}</div>
            <div className="descriptionofproduct">{product.description}</div>
          </div>
          <div className="sellerdetails">
            <div className="sellername">Sold By - {product.seller}</div>
            <div className="lpuid">LPU ID - {product.lpuid}</div>
            <div className="wpnum">Whatsapp Number - {product.whatsapp}</div>
            <div></div>
          </div>
        </div>
      </div>
    </>
  );
}

export default Product;
