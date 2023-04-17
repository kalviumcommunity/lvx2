import React from 'react'
import Navbar2 from './Components/Navbar2/Navbar2'
import './login.css'

export default function login() {
  return (
    <>
    <Navbar2 />
    <div className='loginpage'>
        <div className='login-box'>
          <div className='area'>
            <label className='label'>Name</label>
            <input className='inputs'></input>
            <label className='label'>Email</label>
            <input className='inputs' type='email'></input>
            <label className='label'>Whatsapp Number</label>
            <input className='inputs' type='number'></input>
            <label className='label'>Lpu Registration ID</label>
            <input className='inputs' type='number'></input>
          </div>
            <button type='submit' id='logbtn'>LOGIN</button>
        </div>
    </div>
    </>
  )
}
