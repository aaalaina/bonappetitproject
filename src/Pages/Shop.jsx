import styled from "styled-components";
// import React, { useEffect, useState } from 'react'
// import axios from 'axios'
import ShopProducts from "../Components/ShopProducts";
import { shopProducts } from "../data";
import { Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { mobile, tablet } from "../responsive";
import Navbar from "../Components/navbarstuff/navbar";
import Footer from "../Components/footerstuff/footer";

const Container = styled.div`
  padding-right: 30px;
  padding-left: 30px;
  display: grid;
  margin: auto;
  grid-template-columns: 1fr 1fr;
  grid-row-gap: 50px;
  grid-column-gap: 50px;
  padding-bottom: 4rem;

  ${mobile({
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: "10px",
    paddingRight: "10px",
  })}
  ${tablet({
    display: "flex",
    flexWrap: "wrap",
    paddingLeft: "20px",
    paddingRight: "20px",
  })}
`;
const Title = styled.h1`
  font-size: 40px;
  font-weight: 700;
  letter-spacing: 1px;
  width: 160px;
  text-align: center;
  margin: auto;
  white-space: nowrap;
  padding-top: 10px;
  padding-bottom: 10px;
  margin-bottom: 30px;
  margin-top: 30px;
  border-bottom: 5px solid #ccd3ff;
  border-top: 5px solid #ffe54c;
`;

const Shop = () => {
  // const [shopProducts, showShop] = useState([]);

  // useEffect(() => {
  //   axios.get('http://localhost:3000/shop').then(
  //     (response) => {
  //       showShop(response.data);
  //     }
  //   );
  // }, []);

  return (
    <div>
      <Navbar />
      <Splide
        options={{
          rewind: true,
          height: "300px",
          width: "100%",
          object: "fit-cover",
          autoplay: true,
          interval: 3000,
        }}
        aria-label="React Splide"
      >
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1606787366850-de6330128bfc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="slide 1"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1534533983688-c7b8e13fd3b6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="slide 2"
          />
        </SplideSlide>
        <SplideSlide>
          <img
            src="https://images.unsplash.com/photo-1553499944-3cea7081e412?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1770&q=80"
            alt="slide  3"
          />
        </SplideSlide>
      </Splide>

      <Title>Shopping</Title>

      <Container>
        {shopProducts.map((item) => (
          <ShopProducts item={item} key={item.id} />
        ))}
      </Container>
      <Footer />
    </div>
  );
};

export default Shop;
