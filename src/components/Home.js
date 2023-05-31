import React from 'react'
import styled from 'styled-components'
import Section from './Section';

function Home() {
  return (
    <Container>
       <Section
          title="Model S"
          discription="Order Online for Touchless Delivery"
          backgroundImg="model-s.jpg"
          leftBtnText="Order Now"
          rightBtnText="Demo Drive"/>
        
       <Section
       title="Model Y"
       discription="Order Online for Touchless Delivery"
       backgroundImg="model-y.jpg"
       leftBtnText="Order Now"
       rightBtnText="Demo Drive"/>
       

       <Section
       title="Model 3"
       discription="Order Online for Touchless Delivery"
       backgroundImg="model-3.jpg"
       leftBtnText="Order Now"
       rightBtnText="Demo Drive"/>
       

       <Section
       title="Model X"
       discription="Order Online for Touchless Delivery"
       backgroundImg="model-x.jpg"
       leftBtnText="Order Now"
       rightBtnText="Demo Drive"/>
       
      <Section
       title="Lowest Cost Solar Panels in America"
       discription="Money-back guarantee"
       backgroundImg="solar-panel.jpg"
       leftBtnText="ORDER now"
       rightBtnText="Learn more"/>

      <Section
       title="Solar for New Roofs"
       discription="Solar Roof Costs Less Than a New Roof"
       backgroundImg="solar-roof.jpg"
       leftBtnText="ORDER now"
       rightBtnText="Learn more"/>

      <Section
       title="Accessories"
       backgroundImg="accessories.jpg"
       leftBtnText="ORDER now"
       />
    </Container>
  )
}

export default Home

const Container = styled.div`
      height:100vh;
`