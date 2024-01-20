import React from 'react';
import styled from "styled-components";
import SvgSelector from "../shared/SvgSelector";

const PageUp = () => {

  return (
    <Wrapper onClick={()=> window.scrollTo({ top: 0, behavior: 'smooth' })}>
      <SvgSelector svg={'up'}/>
    </Wrapper>
  );
};

const Wrapper = styled.div`
    position: fixed;
    z-index: 99;
    bottom: 30px;
    right: 30px;
`

export default PageUp;