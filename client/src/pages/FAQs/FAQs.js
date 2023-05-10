import React from 'react'
import "./FAQs.css"

import styled from "styled-components"

import Loader from '../../components/Loader/Loader'
import Navbar from '../../components/Navbar/Navbar'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import Footer from '../../components/Footer/Footer'

const Container = styled.div``;

const Title = styled.h1`
    margin: 20px
`;

const FAQs = () => {
  return (
    <div>
      <Loader />
      <Navbar />
      <HeroBanner />
      <Container>
        <Title>FAQs</Title>

      </Container>
      <Footer />
    </div>
  )
}

export default FAQs