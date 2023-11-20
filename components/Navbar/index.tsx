import React from 'react'
import { Nav, NavLink, NavIcon, Bars, CartButton } from "./NavbarElements"; 
import { useSelector } from 'react-redux';

import { CartIcon } from '../CartIcon';

const Navbar = ({toggle}: any) => {
  const totalQuantity = useSelector((state: any) => state.cart.totalQuantity);
  return (
    <>
        <Nav>
          <CartButton onClick={toggle}>
            <CartIcon /> {totalQuantity} {/* Here comes a dynamic number of products on the cart */} 
          </CartButton>
        </Nav>
    </>
  )
}

export default Navbar