import React, { useState } from 'react';
import { SidebarContainer, Icon, CloseIcon, SidebarMenu, SidebarLink, SidebarBtnWrap, SidebarButton, Compras } from "./SidebarElements";

import styled from 'styled-components';

import Image from 'next/image';

import Picker from '../Picker';

const ProductImage = "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp"


interface Props {
    isOpen: boolean;
    toggle: () => void;
}

export default function Sidebar ({isOpen, toggle}: Props) {
    
  return (
    <SidebarContainer isOpen={isOpen}>
            <SidebarHeading>
                <Compras>Carrinho de compras</Compras>
                <Icon onClick={toggle}>
                    <CloseIcon>X</CloseIcon>
                </Icon>
            </SidebarHeading>
            <CardContainer>
                <ShopCard>
                    <Image src={ProductImage} alt='' width={57} height={57} />
                    <ProductName>Apple Watch Series 4 GPS</ProductName>
                    <Selector>
                        <Qtd>Qtd:</Qtd>
                        <Picker />
                    </Selector>
                    <Price>R$399</Price>
                </ShopCard>
                <ShopCard>
                    <Image src={ProductImage} alt='' width={57} height={57} />
                    <ProductName>Apple Watch Series 4 GPS</ProductName>
                    <Selector>
                        <Qtd>Qtd:</Qtd>
                        <Picker />
                    </Selector>
                    <Price>R$399</Price>
                </ShopCard>
            </CardContainer>

            <SidebarFooter>
                <Total>
                    <h1>Total:</h1>
                    <h1>R$798</h1>
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

const CardContainer = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.37rem;
    max-height: 38rem;
    align-self: flex-start;
    padding-left: 2.94rem;
    margin-top: -4rem;


`

const ShopCard = styled.div`
    width: 23.6875rem;
    height: 5.9375rem;
    border-radius: 0.5rem;
    background: #FFF;
    box-shadow: -2px 2px 10px 0px rgba(0, 0, 0, 0.05);
    color: #2C2C2C;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-evenly;
`

const ProductName = styled.span`
    width: 7.0625rem;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.0625rem;
`

const Selector = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
    margin-left: -2rem;
`

const Qtd = styled.span`
    font-size: 0.5rem;
    font-size: 0.3125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
`

const Price = styled.h2`
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 800;
    line-height: 1.0625rem;
`

