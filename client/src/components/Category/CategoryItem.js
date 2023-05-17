import React from "react";
import styled from "styled-components";
import "./Category.css"

const Image = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
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
    <div className="categoryItem-container">
      <Image src={item.img} />
      <div className="info">
        <div className="categ-title">
          <h1>{item.title}</h1>
        </div>
        <Wrapper>
          <a href={item.router}><Button>SHOP NOW</Button></a>
        </Wrapper>
      </div>
    </div>
  );
};

export default CategoryItem;
