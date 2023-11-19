import styled from 'styled-components';
import Link from 'next/link';
import { CartIcon } from '../CartIcon';

export const Nav = styled.nav`
    background: transparent;
    height: 80px;
    display: flex;
    justify-content: center;
    font-weight: 700;
`

export const NavLink = styled(Link)`
    color: #fff;
    font-size: 2rem;
    display: flex;
    align-items: center;
    text-decoration: none;
    cursor: pointer;    

    @media screen and (max-width: 400px) {
        position: absolute;
        top: 10px;
        left: 25px;
    }
`

export const NavIcon = styled.div`
    display: block;
    position: absolute;
    top: 0;
    right: 0;
    cursor: pointer;
    color: #fff;

    p {
        transform: translate(-175%, 100%);
        font-weight: bold;
    }
`

export const Bars = styled(CartIcon)`
    font-size: 2rem;
    transform: translate(-50%, -15%);
`

export const CartButton = styled.button`
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
    cursor: pointer;
    @media screen and (max-width: 675px){
        margin-right: 1.44rem;
        height: 50%;

    }
    @media screen and (max-width: 550px){
        margin-right: 1.44rem;
        height: 50%;
    }
`