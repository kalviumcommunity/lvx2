import React from 'react'
import Navbar2 from './Components/Navbar2/Navbar2'
import './Sell.css'
import { BiImageAdd } from "react-icons/bi";
function Sell() {
    return (
      <>
      <Navbar2 />
      <div className='sellcontent'>
        <form className='sell-form'>
          <div className='image-section'>
            <div className="add-icon">
              <BiImageAdd size={60} />
            </div>
            <div>Add images</div>
          </div>
        <label className='name'>Name of the product</label>
        <input className='enter'></input>
        <label className='name'>Price</label>
        <input className='enter' type='number'></input>
        <label className='name'>DESCRIPTION</label>
        <textarea className='descrip'></textarea>
          <button type='submit' className='sell-icon'>SELL</button>
        </form>
      </div>
      </>
      )
}

export default Sell