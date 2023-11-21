import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { cartActions } from '../../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

import { SidebarButton } from "./SidebarElements";

export const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)

    return (
        <div>
            {
                cartItems.length === 0 ? (
                    <div>Your cart is empty</div>
                ) : (
                    cartItems.map((item, index) => (
                        <ShopItem item={item} index={index} key={index} />
                    ))
                )
            }
        </div>
    )
}


const ShopItem = ({ item }) => {
    const dispatch = useDispatch()
    
    const incrementQuantity = () => {
        dispatch(cartActions.incrementItem(item.id))
    }
    
    const decrementQuantity = () => {
        dispatch(cartActions.decrementItem(item.id))
    }
    
    const deleteProduct = () => {
        dispatch(cartActions.deleteItem(item.id))
    }
    
    return (
        <ShopCard>
            <ImageContainer>
                <Image src={item.photo} priority alt='' fill />
            </ImageContainer>
            <ProductName>{item.name}</ProductName>
            <Div>
                <Selector>
                    <Qtd>Qtd: </Qtd>
                    <Container>
                        <DecrementButton onClick={decrementQuantity}>-</DecrementButton>
                            <Quantity>{item.quantity}</Quantity>
                        <IncrementButton onClick={incrementQuantity}>+</IncrementButton>
                    </Container>
                </Selector>
                <PriceTag>
                    <Price>R${item.price}</Price>
                </PriceTag>
            </Div>
            <CloseIcon onClick={deleteProduct}>X</CloseIcon>
        </ShopCard>
    )
}

const Div = styled.div`
    display: flex;
    flex-direction: row;
    align-items: end;
    gap: 1rem;
`

export const Finish = ({ item }) => {
    const dispatch = useDispatch()
    const finishCart = () => {
        dispatch(cartActions.finishBuy())
    }

    return (
        <SidebarButton onClick={finishCart}>Finalizar Compra</SidebarButton>
    )
}

const ImageContainer = styled.div`
    position: relative;
    overflow: hidden;
    width: 3.8rem;
    height: 3.8rem;
    @media screen and (max-width: 550px) and (orientation: portrait) {
        width: 9rem;
        height: 12rem;
    }
`

export const CloseIcon = styled.button`
    color: #FFF;
    background: #000;
    border: none;
    font-size: 0.7rem;
    font-weight: 100;
    width: 18px;
    height: 18px;
    border-radius: 50%;
    cursor: pointer;
    position: relative;
    top: -50%;
    right: -4%;
    @media screen and (max-width: 550px) {
        top: -85%;
        right: -42%;
        font-size: 2rem;
        color: black;
        background: transparent;
    }

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
    margin-bottom: 1.37rem;
    @media screen and (max-width: 550px) {
        width: 18.6875rem;
        height: 13.75295rem;
        display: flex;
        flex-direction: column;
    }
`

const ProductName = styled.span`
    width: 5.0625rem;
    font-size: 0.8125rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.0625rem;
    @media screen and (max-width: 550px) {
        font-size: 1.1rem;
        width: 9rem;
        margin-bottom: 0.5rem;
    }
`

const Selector = styled.div`
    display: flex;
    flex-direction: column;
    align-items: start;
    gap: 0.5rem;
    margin-left: -0.5rem;
`

const Qtd = styled.span`
    font-size: 0.5rem;
    font-size: 0.3125rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    @media screen and (max-width: 550px) {
        display: none;
    }
`

const Price = styled.h2`
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 800;
    line-height: 1.0625rem;
    @media screen and (max-width: 550px) {
        color: #FFF;
        font-size: 0.675rem;
    }
`

const Container = styled.div`
    background: #fff;
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    border-radius: 0.25rem;
    border: 0.3px solid #BFBFBF;
    width: 3.125rem;
    height: 1.1875rem;
    color: #000;
    border-radius: 0.265rem;
    font-weight: 100;
    @media screen and (max-width: 550px) {
        width: 6rem;
        height: 2rem;
    }
`
const Quantity = styled.p`
    font-weight: 100;
    margin: 0 0.25rem;
        @media screen and (max-width: 550px) {

    }
`

const DecrementButton = styled.button`
    background: #fff;
    border: none;
    outline: none;
    padding-right: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 0.5rem;
    border-right: 0.2px solid #BFBFBF;
    cursor: pointer;
`


const IncrementButton = styled.button`
    background: #fff;
    border: none;
    outline: none;
    padding-left: 0.25rem;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-right: 0.5rem;
    border-left: 1px solid #BFBFBF;
    stroke-width: 122px;
    stroke: #BFBFBF;
    cursor: pointer;

`
const PriceTag = styled.div`
    border-radius: 0.3125rem;
    background: transparent;
    width: 4rem;
    height: 1.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
    @media screen and (max-width: 550px) {
        background: #373737;
        width: 6rem;
        height: 2rem;
    }
`