import React from 'react';
import styled from 'styled-components';

import { SidebarContainer, Icon, CloseIcon, Title } from "./SidebarElements";
import { Cart, Finish } from './Cart';
import { useSelector } from 'react-redux';


interface Props {
    isOpen: boolean;
    toggle: () => void;
}

export default function Sidebar ({isOpen, toggle}: Props, {item}: any) {
    const totalAmounnt = useSelector((state: any) => state.cart.totalAmount)

  return (
    <SidebarContainer isOpen={isOpen}>
            <SidebarHeading>
                <Title>Carrinho de compras</Title>
                <Icon onClick={toggle}>
                    <CloseIcon>X</CloseIcon>
                </Icon>
            </SidebarHeading>

            <CartContainer>
                <Cart />
            </CartContainer>

            <SidebarFooter>
                <Total>
                    <h1>Total:</h1>
                    <h1>R${totalAmounnt}</h1>
                </Total>
                <Finish item={item} />
            </SidebarFooter>
    </SidebarContainer>
  )
}


const SidebarFooter = styled.div`
    display: flex;
    flex-direction: column;
    align-self: end;
`

const SidebarHeading = styled.div`
    padding-left: 2.94rem;
`

const Total = styled.div`
    padding-left: 2.94rem;
    padding-right: 3.94rem;
    margin-bottom: 2.63rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const CartContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.37rem;
    max-height: 38rem;
    align-self: flex-start;
    padding-left: 2.94rem;
    max-height: 50vh;
    overflow: auto;
`