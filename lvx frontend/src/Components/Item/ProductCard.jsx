import { useNavigate } from "react-router-dom";

const Product = ({image,price,description,_id,seller,itemname,whatsapp,lpuid}) => {
  console.log(_id);
  const navigate = useNavigate();
  
  function handleClick() {
    // navigate(`/product/${_id}`);
    navigate(`/product/${_id}`, { state: {image,price,description,_id,seller,itemname,whatsapp,lpuid} })
  }

  return (
    <>
      <div className="product-card" onClick={handleClick}>
        <img src={image} className="img" alt={itemname}/>
        <div className="price">₹{price}</div>
        <div className="description">{description}</div>
      </div>
    </>
  );
};
export default Product;
