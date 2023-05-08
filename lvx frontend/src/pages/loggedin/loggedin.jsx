import React from 'react'
import { useNavigate } from 'react-router-dom'
import "./loggedin.css"
function Loggedin() {

  const navigate = useNavigate()

  const handleLogout=()=>{
    sessionStorage.removeItem('user')
    navigate('/')
    window.location.reload()
  }
  return (
    <>
    <button className='logout' onClick={handleLogout}>Logout</button>
    <div>Hello</div>
    </>
  )
}

export default Loggedin