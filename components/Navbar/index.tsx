import React from 'react'
import { Nav, NavLink, NavIcon, Bars, CartButton } from "./NavbarElements"; 

import { CartIcon } from '../CartIcon';

const Navbar = ({toggle}: any) => {
  return (
    <>
        <Nav>
          <CartButton onClick={toggle}>
            <CartIcon /> 0 {/* Here comes a dynamic number of products on the cart */} 
          </CartButton>
        </Nav>
    </>
  )
}

export default Navbar