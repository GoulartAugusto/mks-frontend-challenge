import React from 'react'
import styled from 'styled-components'

import Image from "next/image"
import { ShoppingBag } from './ShoppingBag'

const WatchImage = "https://mks-sistemas.nyc3.digitaloceanspaces.com/products/applewatch-series7.webp"

interface Props {
    id: String;
    photo: String;
    name: String;
    price: String
    description: String
  }


export default function ProductCard({
    id,
    photo,
    name,
    price,
    description
}: Props) {
  return (
    <Card>
        <Content>
            <Image
                src={`${photo}`}
                width={140}
                height={140}
                alt="Picture of the author"
            />
            <Info>
                <Name>{name}</Name>
                <PriceTag>
                    <Price>R${`${price.substring(0, price.length - 3)}`}</Price>
                </PriceTag>
            </Info>
            <Description>{description}</Description>
            
            <Comprar><ShoppingBag />COMPRAR</Comprar>
        </Content>
    </Card>
  )
}

const Card = styled.div`
    background: #FFF;
    width: 13.625rem;
    height: 17.8125rem;
    border: 1px solid transparent;
    border-radius: 0.5rem;
    box-shadow: 0px 2px 8px 0px rgba(0, 0, 0, 0.14);
    margin-left: 2rem;

`
const Content = styled.div`
    margin: 1.13rem 0.75rem 0.75rem 0.87rem;
    display: flex;
    flex-direction: column;
    align-items: center;

`

const Info = styled.section`
    height: 2.375rem;
    display: flex;
    flex-direction: row;
    margin-top: 0.87rem;
    margin-bottom: 0.5rem;
`

const Name = styled.h1`
    width: 7.75rem;
    color: #2c2c2c;
    font-size: 1rem;
    font-style: normal;
    font-weight: 400;
    line-height: 1.1875rem;
`
const Price = styled.h1`
    color: #FFF;
    font-size: 0.9375rem;
    font-style: normal;
    font-weight: 700;
    line-height: 0.9375rem;
`
const PriceTag = styled.div`
    border-radius: 0.3125rem;
    background: #373737;
    width: 4rem;
    height: 1.625rem;
    display: flex;
    align-items: center;
    justify-content: center;
`

const Description = styled.p`
    color: #2C2C2C;
    font-size: 0.625rem;
    font-style: normal;
    font-weight: 300;
    line-height: 0.75rem;
    height: 1.5625rem;
    margin-bottom: 0.75rem;
`

const Comprar = styled.button`
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    gap: 0.88rem;
    color: #FFF;
    font-size: 0.875rem;
    font-style: normal;
    font-weight: 600;
    letter-spacing: 0.05rem;
    width: 13.625rem;
    height: 1.99419rem;
    border-radius: 0rem 0rem 0.5rem 0.5rem;
    border: none;
    cursor: pointer;
    background: #0F52BA;
`