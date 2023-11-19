import React from 'react'
import styled from 'styled-components'

export default function Footer() {
  return (
    <Container>
        <span>MKS sistemas © Todos os direitos reservados</span>
    </Container>
  )
}

const Container = styled.footer`
    height: 2.125rem;
    background: #EEE;
    font-size: 0.75rem;
    font-style: normal;
    font-weight: 400;
    line-height: normal;
    display: flex;
    justify-content: center;
    align-items: center;
`