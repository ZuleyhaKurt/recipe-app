import React from 'react'

const PrivateRouter = () => {
  return (
    <div>{user ? <Outlet /> : <Navigate to="/login" />}</div>

  )
}

export default PrivateRouter