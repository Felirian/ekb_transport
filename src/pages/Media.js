import React from 'react';
import Cards from "../components/Cards";
import TramSlider from "../components/TramSlider";
import {Container} from "../shared/styles";

const Media = () => {
  return (
    <Container>
      <TramSlider/>
      <Cards/>

    </Container>
  );
};

export default Media;