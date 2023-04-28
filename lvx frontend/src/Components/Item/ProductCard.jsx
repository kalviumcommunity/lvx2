import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const Product = ({image,price,description,_id,seller,itemname,whatsapp,lpuid}) => {
  const navigate = useNavigate();
  const [first, setFirst] = useState("description");

  useEffect(() => {
    if(description.length>190){
      setFirst("descriptionY");
    }
    else{
      setFirst("description");
    }
  }, [description]);

  function handleClick() {
    // navigate(`/product/${_id}`);
    navigate(`/product/${_id}`, { state: {image,price,description,_id,seller,itemname,whatsapp,lpuid} })
  }

  return (
    <>
      <div className="product-card" onClick={handleClick}>
        <img src={image} className="img" alt={itemname}/>
        <div className="price">₹{price}</div>
        <div className={first}>{description}</div>
      </div>
    </>
  );
};
export default Product;
