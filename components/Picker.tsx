import React, { useState } from "react";
import styled from "styled-components";

export function Picker() {
    const [quantity, setQuantity] = useState(1)
    
    const incrementQuantity = () => {
        setQuantity(quantity + 1)
    }

    const decrementQuantity = () => {
        if(quantity > 1) {
            setQuantity(quantity - 1)
        }
    }

  return (
    <Container>
        <DecrementButton onClick={decrementQuantity}>-</DecrementButton>
        <Quantity>{quantity}</Quantity>
        <IncrementButton onClick={incrementQuantity}>+</IncrementButton>
    </Container>
  )
}

export default Picker

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