import React from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarButton, Compras } from "./SidebarElements";

import { Cart } from './Cart';

import styled from 'styled-components';

import Image from 'next/image';

import Picker from '../Picker';

import { useSelector, useDispatch } from 'react-redux';


interface Props {
    isOpen: boolean;
    toggle: () => void;
}



export default function Sidebar ({isOpen, toggle}: Props) {
    const totalAmounnt = useSelector((state: any) => state.cart.totalAmount)

  return (
    <SidebarContainer isOpen={isOpen}>
            <SidebarHeading>
                <Compras>Carrinho de compras</Compras>
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
                <SidebarButton>Finalizar Compra</SidebarButton>
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