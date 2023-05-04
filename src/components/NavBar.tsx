import React from 'react'

interface Props{
    cartItemCount: number
}

const NavBar = ({cartItemCount} : Props) => {
  return (
    <div>Navbar: {cartItemCount}</div>
  )
}

export default NavBar