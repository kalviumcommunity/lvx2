import React from "react";
import { useNavigate } from "react-router-dom";
import "./items.css";

function Item(props) {
  const navigate =useNavigate()
  function handleClick (){
    navigate(`/product/${props.id}`)
  }
  return (
      <div className="product-card" onClick={handleClick}>
        <img src={props.image} alt="item" className="img" />
        <div className="price">₹{props.price}</div>
        <div className="description">
          {props.description}
        </div>
      </div>
  );
}

export default Item;
