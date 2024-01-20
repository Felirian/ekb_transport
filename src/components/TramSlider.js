import React, {useEffect, useState} from 'react';
import img0 from '../assets/tramSlider/24.png'
import img1 from '../assets/tramSlider/25.png'
import img2 from '../assets/tramSlider/26.png'
import img3 from '../assets/tramSlider/27.png'
import styled from "styled-components";
import {HoverLink, P1} from "../shared/styles";

const TramSlider = () => {
  const [tramSel, setTramSel] = useState(0)

  useEffect(() => {

  }, []);

  return (
    <div style={{width: '100%', marginTop: '150px'}}>

      <ImegeWrapper>
        <Image src={img0} alt={''} style={{opacity: tramSel === 0 ? 1 : 0}}/>
        <Image src={img1} alt={''} style={{opacity: tramSel === 1 ? 1 : 0}}/>
        <Image src={img2} alt={''} style={{opacity: tramSel === 2 ? 1 : 0}}/>
        <Image src={img3} alt={''} style={{opacity: tramSel === 3 ? 1 : 0}}/>
      </ImegeWrapper>
      <div style={{width: "fit-content"}}>
        <HoverLink onClick={() => setTramSel(0)}>Итог</HoverLink>
        <HoverLink onClick={() => setTramSel(1)}>Размеры</HoverLink>
        <HoverLink onClick={() => setTramSel(2)}>Размещение</HoverLink>
        <HoverLink onClick={() => setTramSel(3)}>Паттерн</HoverLink>

      </div>

    </div>
  );
};



const ImegeWrapper = styled.div`
    position: relative;
    height: 550px;
`

const Image = styled.img`
    width: 100%;
    height: auto;
    position: absolute;
    top: 0;
    transition: 0.8s ease;
`

export default TramSlider;