import React, {useEffect, useState} from 'react';
import img0 from '../assets/tramSlider/24.png'
import img1 from '../assets/tramSlider/25.png'
import img2 from '../assets/tramSlider/26.png'
import img3 from '../assets/tramSlider/25.png'
import styled from "styled-components";
import {P1} from "../shared/styles";

const TramSlider = () => {
  const [tramSel, setTramSel] = useState(0)

  useEffect(() => {

  }, []);

  return (
    <div style={{width: '100%'}}>
      <button onClick={() => setTramSel(0)}>1</button>
      <button onClick={() => setTramSel(1)}>2</button>
      <button onClick={() => setTramSel(2)}>3</button>
      <button onClick={() => setTramSel(3)}>4</button>
      <ImegeWrapper>
        <Image src={img0} alt={''} style={{opacity: tramSel === 0 ? 1 : 0}}/>
        <Image src={img1} alt={''} style={{opacity: tramSel === 1 ? 1 : 0}}/>
        <Image src={img2} alt={''} style={{opacity: tramSel === 2 ? 1 : 0}}/>
        <Image src={img3} alt={''} style={{opacity: tramSel === 3 ? 1 : 0}}/>
      </ImegeWrapper>
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