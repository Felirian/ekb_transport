import * as React from "react";
import styled from "styled-components";
import img21 from '../assets/cards/2.1.png'
import img22 from '../assets/cards/2.2.png'
import img23 from '../assets/cards/2.3.png'
import img24 from '../assets/cards/2.4.png'
import img25 from '../assets/cards/2.5.png'
const Cards = (props) => {
  return (
    <>
      <CardImage src={img21} alt={''}/>
      <CardImage src={img22} alt={''}/>
      <CardImage src={img23} alt={''}/>
      <CardImage src={img24} alt={''}/>
      <CardImage src={img25} alt={''}/>
    </>
  );
}


const CardImage = styled.img`
    max-width: 1408px;
    max-height: 871px;
`;

export default Cards


