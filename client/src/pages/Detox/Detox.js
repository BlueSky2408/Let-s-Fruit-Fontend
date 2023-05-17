import React from 'react'
import "./Detox.css"

import styled from "styled-components"

import Loader from '../../components/Loader/Loader'
import Navbar from '../../components/Navbar/Navbar'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import Footer from '../../components/Footer/Footer'
import ProductList from '../../components/ProductList/ProductList'


const Container = styled.div``;

const Title = styled.h1`
  margin-top: 80px;
  margin-bottom: 50px;
  font-family: "Great Vibes", cursive;
  font-size: 60px;
  position: relative;
  padding-bottom: 15px;
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

const Detox = () => {
  return (
    <div>
      <Loader />
      <Navbar />
      <HeroBanner />
      <ProductList
        titleBlack="Những sản phẩm"
        titleOrange="bán chạy nhất"
        products={[
          {
            id: 1,
            name: "MS600A",
            price: "500,000",
            image: "https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/321489023_5822231724556412_7332453204103911515_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=lVauLlKiePYAX9sGoCx&_nc_ht=scontent.fhan19-1.fna&oh=00_AfCM3QHILmdcnFsskqW7z4G0kbQPV1P9BDfbwTWgDVZpow&oe=64618E73",
          },
          {
            id: 2,
            name: "MS600B",
            price: "500,000",
            image: "https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/322182578_701039088040383_6287780387508107818_n.jpg?_nc_cat=105&ccb=1-7&_nc_sid=0debeb&_nc_ohc=MiktjaO2OuQAX8hRhTE&_nc_ht=scontent.fhan19-1.fna&oh=00_AfALXRc3Neb96zx6X8ApVlTMqVTY1brSUt0vKxIQU-FqQA&oe=64629623",
          },
          {
            id: 3,
            name: "MS600C",
            price: "500,000",
            image: "https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/320884513_515765223952521_6991890295606375015_n.jpg?_nc_cat=100&ccb=1-7&_nc_sid=0debeb&_nc_ohc=excIdVF5bugAX_i4f9e&_nc_ht=scontent.fhan19-1.fna&oh=00_AfDan-j4pFw5nTciLdTRB9N5O4myTjw7uPMxw8jfuNX8oA&oe=64623D71",
          },
        ]}
      />
      <Container>
        <Title>Detox</Title>
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
      <Footer />
    </div>
  )
}

export default Detox