import React, { useState } from "react";
import "./Sell.css";
import { BiImageAdd } from "react-icons/bi";
import { useNavigate } from "react-router-dom";

function Sell() {
  const navigate = useNavigate()
  console.log(`${process.env.REACT_APP_API}/api/v1/items`)
  const [values, setValues] = useState({
    seller: "",
    itemname: "",
    price: "",
    whatsapp: "",
    lpuid: "",
    description: "",
    image: "",
    // unit: 'day',
    // type: 'accessories',
  });

  const handleSubmit = async (e) => {
    e.preventDefault();
    console.log(values);
    try {
      const response = await fetch(
        `${process.env.REACT_APP_API}/api/v1/items`,
        {
          method: "POST",
          body: JSON.stringify(values),
          headers: {
            "Content-type": "application/json; charset=UTF-8",
          },
        }
      );
      if(response.status===201){
        alert("Post successful")
        navigate("/")
      }else{
        alert("Unable to post")
      }
      console.log(response.status);
    } catch (error) {
      console.log(error);
    }
  };

  const handleChange = (e) => {
    setValues({
      ...values,
      [e.target.name]: e.target.value,
      email: JSON.parse(sessionStorage.getItem("user")).email,
    });
  };

  return (
    <>
      <div className="sellcontent">
        {/* SELL FORM */}
        <form className="sell-form" onSubmit={handleSubmit}>
          {/* IMAGE SECTION */}
          <div className="image-section">
            <div className="add-icon">
              <BiImageAdd size={60} />
            </div>
            <input
              className="imglink"
              required
              type="url"
              placeholder="Add image link"
              name="image"
              onChange={handleChange}
            />
          </div>

          {/* NAME */}
          <label className="name">Your Name</label>
          <input
            className="enter"
            required
            type="text"
            name="seller"
            minLength={2}
            maxLength={40}
            onChange={handleChange}
            title="Name should be greater than 1 character and less than 41 characters"
          />

          {/* PRODUCT NAME */}
          <label className="name">Name of the product</label>
          <input
            className="enter"
            required
            type="text"
            name="itemname"
            minLength={3}
            maxLength={50}
            onChange={handleChange}
            title="Product name should have more than 2 characters and less than 51"
          />

          {/* PRICE */}
          <label className="name">Price</label>
          <input
            className="enter"
            required
            name="price"
            pattern="[0-9]{2,8}"
            onChange={handleChange}
            title="price should be less than 1cr and more than 10"
          />

          {/* WHATSAPP */}
          <label className="name">Whatsapp Number </label>
          <input
            className="enter"
            required
            name="whatsapp"
            pattern="[0-9]{10}"
            onChange={handleChange}
            title="whatsapp number must be of 10 numbers"
          />

          {/* LPUID */}
          <label className="name">Lpu Id</label>
          <input
            className="enter"
            required
            name="lpuid"
            title="lpuid must be of 8 numbers"
            pattern="[0-9]{8}"
            onChange={handleChange}
          />

          {/* DESCRIPTION */}
          <label className="name">Description</label>
          <textarea
            className="descrip"
            required
            name="description"
            minLength={10}
            maxLength={250}
            onChange={handleChange}
            title="Characters must be between 10 and 250"
          />

          {/* SELL BUTTON */}
          <button type="submit" className="sell-button">
            SELL
          </button>
        </form>
      </div>
    </>
  );
}

export default Sell;
