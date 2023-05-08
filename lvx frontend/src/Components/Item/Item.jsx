/* eslint-disable react-hooks/exhaustive-deps */
import React from "react";
// import { useNavigate } from "react-router-dom";
import { useEffect, useState } from "react";
import "./items.css";
import ProductCard from "./ProductCard";
import { useGlobalContext } from "../../context";

const Item = () => {
  // const navigate = useNavigate();
  const [data, setData] = useState(null);
  const url = `${process.env.REACT_APP_API}/api/v1/items`
  const {searchData} = useGlobalContext()

  useEffect(() => {
    const fetchDB = async () => {
      try {
        const response = await fetch(url);
        const items = await response.json();
        setData(items.data.items);
      } catch (err) {
        console.log(err);
      }
    };
    fetchDB();
  }, []);
  if(searchData===''){
    console.log(searchData)
    return <>not found</>
  }
  else if (searchData) {
    return (
      <div className="content">
        {searchData.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            seller={product.seller}
            price={product.price}
            description={product.description}
            _id={product._id}
            itemname={product.itemname}
            lpuid={product.lpuid}
            whatsapp={product.whatsapp}
          />
        ))}
      </div>
    );
  } else if (data) {
    return (
      <div className="content">
        {data.map((product, index) => (
          <ProductCard
            key={index}
            image={product.image}
            seller={product.seller}
            price={product.price}
            description={product.description}
            _id={product._id}
            itemname={product.itemname}
            lpuid={product.lpuid}
            whatsapp={product.whatsapp}
          />
        ))}
      </div>
    );
  } else return <>loading</>;
};

export default Item;
