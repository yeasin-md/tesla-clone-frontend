import React from 'react';
import styled from 'styled-components';
import Section from './Section';
function Home() {
  return (
    <Container>
      <Section
        title="Model S"
        description="Order Online For Touchless Delivery"
        backgrounImg="model-s.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
        arrowBtn="btn"
      />{' '}
      <Section
        title="Model X"
        description="Order Online For Touchless Delivery"
        backgrounImg="model-x.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />{' '}
      <Section
        title="Model Y"
        description="Order Online For Touchless Delivery"
        backgrounImg="model-y.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />{' '}
      <Section
        title="Model 3"
        description="Order Online For Touchless Delivery"
        backgrounImg="model-3.jpg"
        leftBtnText="Custom Order"
        rightBtnText="Existing Inventory"
      />{' '}
      <Section
        title="Lowest Cost Solar Panels in America"
        description="Money-back guarantee"
        backgrounImg="solar-panel.jpg"
        leftBtnText="Order now"
        rightBtnText="learn More"
      />
      <Section
        title="Accessories"
        backgrounImg="accessories.jpg"
        leftBtnText="Shop now"
      ></Section>
    </Container>
  );
}

export default Home;
const Container = styled.div`
  height: 100vh;
`;
