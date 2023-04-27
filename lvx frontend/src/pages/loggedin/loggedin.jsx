import React from 'react'
function loggedin() {

    const handleLogout=()=>{
        sessionStorage.removeItem('user')
    }
  return (
    <>
    <button onClick={handleLogout}>Logout</button>
    <div>Hello</div>
    </>
  )
}

export default loggedin