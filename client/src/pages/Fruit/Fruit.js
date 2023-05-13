import React from 'react'
import "./Fruit.css"

import styled from "styled-components"

import Loader from '../../components/Loader/Loader'
import Navbar from '../../components/Navbar/Navbar'
import HeroBanner from '../../components/HeroBanner/HeroBanner'
import Footer from '../../components/Footer/Footer'
import ProductList from '../../components/ProductList/ProductList'


const Container = styled.div``;

/*
const Title = styled.h1`
  margin-top: 80px;
  margin-bottom: 50px;
  font-family: "Great Vibes", cursive;
  font-size: 60px;
  position: relative;
  padding-bottom: 15px;
  align-content: center;
`;*/

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

const Fruit = (props) => {
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

      <ProductList
        titleBlack="Các sản phẩm của"
        titleOrange="chúng tôi"
        products={[
          {
            id: 1,
            name: "400A",
            price: "450,000",
            image: "https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/322395827_499815978922865_5039692591822169009_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=lZkTJ0nk2QUAX8SbP_-&_nc_ht=scontent.fhan19-1.fna&oh=00_AfAeSDXab1Aw4AxS0wM9omTa7g5cfHIJ8YDLO7OcSfMEUg&oe=64618DE0",
          },
          {
            id: 2,
            name: "400B",
            price: "500,000",
            image: "https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/321509656_1222001525193022_8106500305392848442_n.jpg?_nc_cat=108&ccb=1-7&_nc_sid=0debeb&_nc_ohc=KNO_KhAX4FgAX8BuWmC&_nc_ht=scontent.fhan19-1.fna&oh=00_AfDzvMK24ml_BC3fM2bwtkVJd1yvf2Oq-wurliWwJX3TjQ&oe=64615D84",
          },
          {
            id: 3,
            name: "800A",
            price: "750,000",
            image: "https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/322475861_5810275595721780_6200779565954259560_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=CHTuLAgtEjQAX9cBoot&_nc_ht=scontent.fhan19-1.fna&oh=00_AfDwo67b_ySBti-vItRV1ck88rrVGLhoVwSOLHUOPlX2Qg&oe=6462B37C",
          },
          {
            id: 4,
            name: "800B",
            price: "750,000",
            image: "https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/322137614_5786688798043873_6672700842921838569_n.jpg?_nc_cat=110&ccb=1-7&_nc_sid=0debeb&_nc_ohc=L3wkdlqwL50AX9oJf51&_nc_ht=scontent.fhan19-1.fna&oh=00_AfDOQZUQxGiV9FtJXF0Hec6gyATLDOCk_OFU7-j82z6dqg&oe=6460FD89",
          },
          {
            id: 5,
            name: "800C",
            price: "750,000",
            image: "https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/322699984_880923319758928_8159431902127108329_n.jpg?_nc_cat=102&ccb=1-7&_nc_sid=0debeb&_nc_ohc=hi8oDALdOkEAX8REpQ1&_nc_ht=scontent.fhan19-1.fna&oh=00_AfCSOknuwPNjGhjo5xvEd23f_qs2k-zAvnTo0MO41F8nlA&oe=6461A289",
          },
          {
            id: 6,
            name: "1000D",
            price: "1,000,000",
            image: "https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/321943644_530159252406094_1681331993478793625_n.jpg?_nc_cat=107&ccb=1-7&_nc_sid=0debeb&_nc_ohc=F2aCw6LmsLEAX-DQjnA&_nc_ht=scontent.fhan19-1.fna&oh=00_AfA_egzUIs3fPR7DvHesuACHiqXxohBD92qTVLdwPqASSQ&oe=64625828",
          },
          {
            id: 7,
            name: "1000A",
            price: "1,000,000",
            image: "https://scontent.fhan19-1.fna.fbcdn.net/v/t39.30808-6/321655037_1338687766935830_7235559467892545101_n.jpg?_nc_cat=103&ccb=1-7&_nc_sid=0debeb&_nc_ohc=EHdkGQQLEE8AX_LWSi8&_nc_ht=scontent.fhan19-1.fna&oh=00_AfAMurcdNIhjbG5x5lYfa455doJOlopvQ_H_Z_1dol5JxA&oe=64627655",
          },
        ]}
      />
      <Footer />
    </div>
  )
}

export default Fruit