"use client"

import { QueryClient, QueryClientProvider } from "@tanstack/react-query"
import styled, { createGlobalStyle } from 'styled-components'

import  Header  from "@/components/Header"
import CardGallery from "@/components/CardGallery"
import Footer from "@/components/Footer"

import store from "@/redux/store"
import { Provider } from 'react-redux';

const queryClient = new QueryClient()

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

export default async function Home() {
  const data = await fetchDetails()

  interface Props {
    id: Number;
    photo: String;
    name: String;
    price: String
    description: String
  }
  return (
    <QueryClientProvider client={queryClient}>
      <Provider store={store}>
      <Main>
      <GlobalStyle />
        <Header />
        <CardGallery />
        <Footer />
      </Main>
      </Provider>
    </QueryClientProvider>
  )
}

const GlobalStyle = createGlobalStyle`
  * {
    box-sizing: border-box;
    margin: 0;
    padding: 0;
    font-family: 'Montserrat', sans-serif;

  }
`

const Main = styled.main`
    background: #F9F9F9;
`

