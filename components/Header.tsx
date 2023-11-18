import React from 'react'
import styled from 'styled-components'
import { CartIcon } from './CartIcon'

export function Header() {
  return (
    <Container>
        <Logo>
            <Title>MKS</Title>
            <SmallText>Sistemas</SmallText>
        </Logo>
        <CartButton><CartIcon />0</CartButton>
    </Container>
  )
}

const Container = styled.main`
    --primary-color: #0F52BA;

    /* This set the Header styling */

    height: 6.3125rem;
    background: #0F52BA;
    color: #FFF;
    padding-top: 1.75rem;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Logo = styled.div`
    padding-left: 4rem;
    display: flex;
    flex-direction: row;
    align-items: baseline;
    font-weight: 100;
    font-size: 1.25rem;
`

const Title = styled.h1`
    font-size: 2.5rem;
    font-style: normal;
    font-weight: 600;
    margin-right: 0.5rem;
`

const SmallText = styled.span`
    font-size: 1.25rem;
    font-style: normal;
    font-weight: 300;
`

const CartButton = styled.button`
    margin-right: 5.5rem;
    border: none;
    width: 5.625rem;
    height: 2.8125rem;
    border-radius: 0.5rem;
    font-weight: 700;
    font-size: 1.125rem;
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 1rem;
`