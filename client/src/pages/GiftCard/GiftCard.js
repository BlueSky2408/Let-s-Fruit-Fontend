import React from 'react'
import "./GiftCard.css"

import styled from "styled-components"

import Loader from '../../components/Loader/Loader'
import Navbar from '../../components/Navbar/Navbar'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import Footer from '../../components/Footer/Footer'
import ProductList from '../../components/ProductList/ProductList'
import ProductCard from '../../components/Product/ProductCard'


const Container = styled.div``;

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

const GiftCard = () => {
  return (
    <div>
      <Loader />
      <Navbar />
      <HeroBanner />
      <ProductList />
      <Container>
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
      <div className="product-section mt-80 mb-150">
        <div className="container">
          <div className="row">
            <div className="col-lg-8 offset-lg-2 text-center">
              <div className="section-title">
                <h3>Những sản phẩm <span className="orange-text">của chúng tôi</span></h3>
              </div>
            </div>
          </div>

          <div className="row">
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
            <ProductCard />
          </div>
        </div>
      </div>
      <Footer />
    </div>
  )
}

export default GiftCard