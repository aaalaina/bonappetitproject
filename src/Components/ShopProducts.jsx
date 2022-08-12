import React from 'react'
import styled from 'styled-components'


const Container = styled.div`
display:flex;
flex-direction:column;
padding-bottom:20px;
justify-content:flex-end;
align-items:flex-end;
height:100%;
width:100%;
border-bottom: 2px solid black;
border-left: 2px solid black;
padding-left:10px;
`
const InfoContainer = styled.div`
display:flex;
flex-direction:column;

`
const Image = styled.img`
display:flex;
width:100%;
border-radius:5%;
`
const Title = styled.h2`
dispaly:flex;
`
const Desc = styled.p`
display:flex;
color:gray;
`
const Button = styled.button`
dispaly:flex;
justify-content:flex-end;
font-size: 16px;
font-weight: 200;
letter-spacing: 1px;
padding: 13px 20px 13px;
outline: 0;
border: 1px solid black;
cursor: pointer;
position: relative;
background-color: rgba(0, 0, 0, 0);
user-select: none;
-webkit-user-select: none;
touch-action: manipulation;
position:absolute bottom;

&:after{
  content: "";
  background-color: #ffe54c;
  width: 100%;
  z-index: -1;
  position: absolute;
  height: 100%;
  top: 7px;
  left: 7px;
  transition: 0.2s;
}

&:hover{
  &:after{
  top: 0px;
  left: 0px;
  }
}

`


const ShopProducts = ({item}) => {
  return (
    <Container>
    <InfoContainer>
        <Image src ={item.img}/>
        <Title>{item.title}</Title>
        <Desc>{item.descr}</Desc>
        <Button>Learn More</Button>
        </InfoContainer>
        </Container>
  )
}

export default ShopProducts