import React from 'react'
import styled from 'styled-components'

import ProductCard from "@/components/ProductCard"

// testing

async function fetchDetails() {
  const response = await fetch(
    "https://mks-frontend-challenge-04811e8151e6.herokuapp.com/api/v1/products?page=1&rows=8&sortBy=id&orderBy=ASC"
  )
  if (response.ok) {
    const responseBody = await response.json()
    // console.log(`data ${data}`)
    //setData(responseBody)
    console.log(`data ${responseBody}`)
    return responseBody
  }
}

//

export default async function CardGallery() {
  const data = await fetchDetails()

  interface Props {
    id: Number;
    photo: String;
    name: String;
    price: String
    description: String
  }

  return (
    <Container>
        <Grid>
          {data.products.map(function (item: Props) {
            return (
              <ProductCard
                key={item.id.toString()}
                id={item.id}
                price={item.price}
                name={item.name}
                photo={item.photo}
                description={item.description}
                ></ProductCard>
            )
          })}
        </Grid>
    </Container>
  )
}

const Container = styled.main`
    margin-top: 7.25rem;
    display: flex;
    justify-content: center;
`
const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);

   @media screen and (max-width: 950px){
    grid-template-columns: repeat(3, 1fr);
    }
    @media screen and (max-width: 730px){
    grid-template-columns: repeat(2, 1fr);
    margin-top: -6.25rem;
    }
    @media screen and (max-width: 550px){
    grid-template-columns: repeat(1, 1fr);
    }
`

