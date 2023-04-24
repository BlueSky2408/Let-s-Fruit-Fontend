import React from "react";
import styled from "styled-components";

const Container = styled.div`
  flex: 1;
  height: 70vh;
  position: relative;
`;

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

const Info = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Title = styled.h1`
  color: #F28123;
  margin-bottom: 20px;
  font-family: 'Poppins', sans-serif;
  font-weight: 400;
  text-shadow: 2px 0 #fff, -2px 0 #fff, 0 2px #fff, 0 -2px #fff,
              1px 1px #fff, -1px -1px #fff, 1px -1px #fff, -1px 1px #fff;
`;

const Button = styled.button`
  -webkit-transition: 0.3s;
  -o-transition: 0.3s;
  transition: 0.3s;

  border-radius: 50px;
  font-family: 'Poppins', sans-serif;
  display: inline-block;
  background-color: #F28123;
  color: #fff;
  padding: 10px 20px;
`;

const Wrapper = styled.div`
  &:hover ${Button} {
    background-color: #051922;
    color: #F28123;
  }
`;


const CategoryItem = ({ item }) => {
  return (
    <Container>
      <Image src={item.img} />
      <Info>
        <Title>{item.title}</Title>
        <Wrapper>
          <Button>SHOP NOW</Button>
        </Wrapper>
      </Info>
    </Container>
  );
};

export default CategoryItem;
