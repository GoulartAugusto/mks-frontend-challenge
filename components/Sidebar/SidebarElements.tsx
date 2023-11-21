import styled from "styled-components";
import Link from "next/link";

export const SidebarContainer = styled.aside<{ isOpen: boolean }>`
    position: fixed;
    z-index: 999;
    width: 30.375rem;
    height: 100vh;
    background: #0F52BA;
    box-shadow: -5px 0px 6px 0px rgba(0, 0, 0, 0.13);
    display: grid;
    justify-content: center;
    top: 0;
    transition: 0.3s ease-in-out;
    right: ${({ isOpen }) => (isOpen ? '0' : '-1000px') };

    @media screen and (max-width: 400px) {
        width: 85%;
    }
`

export const CloseIcon = styled.button`
    color: #FFF;
    background: #000;
    border: none;
    font-size: 1.5rem;
    font-weight: 100;
    width: 2.375rem;
    height: 2.375rem;
    border-radius: 50%;
    cursor: pointer;
`

export const Icon = styled.div`
    position: absolute;
    top: 1.2rem;
    right: 1.5rem;
    background: transparent;
    font-size: 2rem;
    cursor: pointer;
    outline: none;
    margin-top: 1.25rem;
`

export const SidebarMenu = styled.div`
    display: grid;
    grid-template-columns: 1fr;
    grid-template-rows: repeat(3, 80px);
    text-align: center;

    @media screen and (max-width: 400px) {
        grid-template-rows: repeat(3, 60px);
    }
`

export const SidebarLink = styled(Link)`
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.5rem;
    text-decoration: none;
    list-style: none;
    transition: 0.2s ease-in-out;
    color: #000;
    cursor: pointer;

    &:hover {
        color: #e31837;
        transition: 0.2s ease-in-out;
    }
`

export const SidebarBtnWrap = styled.div`
    display: flex;
    width: 100%;
    justify-content: baseline;
`

export const SidebarButton = styled.button`
    width: 30.375rem;
    align-self: end;
    background: #000;
    color: #fff;
    height: 6.0625rem;
    font-size: 1.75rem;
    font-style: normal;
    font-weight: 500;
    outline: none;
    border: none;
    cursor: pointer;
    transition: 0.2s ease-in-out;
    text-decoration: none;

    &:hover {
        transition: 0.2s ease-in-out;
        background-color: #fff;
        color: #010606;
    }
`


export const Title = styled.h1`
    width: 11.25rem;
    margin-top: 2.2rem;
`
