import React from 'react'
import "./Alcohol.css"

import styled from "styled-components"

import Loader from '../../components/Loader/Loader'
import Navbar from '../../components/Navbar/Navbar'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import Products from '../../components/Products/Products'
import Footer from '../../components/Footer/Footer'


const Container = styled.div``;

const Title = styled.h1`
    margin: 20px
`;

const FilterContainer = styled.div`
    display: flex;
    justify-content: space-between;
`;

const Filter = styled.div`
    margin: 20px;
`;

const FilterText = styled.span`
    font-sie: 20px;
    font-weight: 600;
    margin-right: 20px;
`;

const Select = styled.select`
    padding: 10px;
    margin-right: 20px;
`;

const Option = styled.option`

`;

const Alcohol = () => {
  return (
    <div>
      <Loader />
      <Navbar />
      <HeroBanner />
      <Container>
        <Title>Whine & Whisky</Title>
        <FilterContainer>
          <Filter>
            <FilterText>Filter Products:</FilterText>
            <Select>
              <Option disabled selected>
                Season
              </Option>
              <Option>Spring</Option>
              <Option>Summer</Option>
              <Option>Autumn</Option>
              <Option>Winter</Option>
            </Select>
            <Select>
              <Option disabled selected>
                Event
              </Option>
              <Option>Birthday</Option>
              <Option>Celebration</Option>
              <Option>New Year</Option>
              <Option>Anniversary</Option>
            </Select>
          </Filter>
          <Filter>
            <FilterText>Sort Products:</FilterText>
            <Select>
              <Option selected>Newest</Option>
              <Option>Price (asc)</Option>
              <Option>Price (desc)</Option>
            </Select>
          </Filter>
        </FilterContainer>
      </Container>
      <Products />
      <Footer />
    </div>
  )
}

export default Alcohol