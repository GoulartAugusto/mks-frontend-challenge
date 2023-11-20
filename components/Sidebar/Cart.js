import React from 'react';
import styled from 'styled-components';
import Image from 'next/image';

import { cartActions } from '../../redux/slices/cartSlice';
import { useSelector, useDispatch } from 'react-redux';

export const Cart = () => {
    const cartItems = useSelector((state) => state.cart.cartItems)
    
    return (
        <div>
            {
                cartItems.length === 0 ? (
                    <div>Your cart is empty</div>
                ) : (
                    cartItems.map((item, index) => (
                        <ShopItem item={item} index={index} />
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
            <Image src={item.photo} alt='' width={57} height={57} />
            <ProductName>{item.name}</ProductName>
            <Selector>
                <Qtd>Qtd: </Qtd>
                <Container>
                    <DecrementButton onClick={decrementQuantity}>-</DecrementButton>
                        <Quantity>{item.quantity}</Quantity>
                    <IncrementButton onClick={incrementQuantity}>+</IncrementButton>
                </Container>
            </Selector>
            <Price>R${item.price}</Price>
            <CloseIcon onClick={deleteProduct}>X</CloseIcon>
        </ShopCard>
    )
}

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
    right: -7%;

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
`
const Quantity = styled.p`
    font-weight: 100;
    margin: 0 0.25rem;
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