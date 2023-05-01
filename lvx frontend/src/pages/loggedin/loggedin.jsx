import React from 'react'
import { useNavigate } from 'react-router-dom'
function Loggedin() {

  const navigate = useNavigate()

  const handleLogout=()=>{
    sessionStorage.removeItem('user')
    navigate('/')
  }
  return (
    <>
    <button onClick={handleLogout}>Logout</button>
    <div>Hello</div>
    </>
  )
}

export default Loggedin