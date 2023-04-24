import React from 'react'
import CategoryItem from './CategoryItem';
import { categories } from '../../data';
import styled from 'styled-components';

const Container = styled.div`
  display: flex;
  padding: 40px;
  gap: 10px;
  margin-left: 20px;
  margin-top: 50px;
`;

const Categories = () => {
  return (
    <Container>
      {categories.map((item) => (
        <CategoryItem item={item} key={item.id} />
      ))}
    </Container>
  )
}

export default Categories