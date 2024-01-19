import React, {useEffect} from 'react';
import styled from "styled-components";
import AOS from "aos";

const Sticky = ({pos, img, text}) => {

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <StickyWrapper style={{flexDirection: pos === 'left' ? 'row':'row-reverse'}} >
      <Image src={img} alt={''} data-aos={pos === 'left' ? "fade-right":"fade-left"}/>
      <Text data-aos={pos === 'left' ? "fade-left":"fade-right"}>
        {text}
      </Text>
    </StickyWrapper>
  );
};

const StickyWrapper = styled.div`
    width: 100%;
    //height: 300px;
    position: relative;
    top: 0;
    gap: 8px;
    display: flex;
`
const Text = styled.div`
    display: flex;
    padding: 30px 0;
    
    width: 100%;
    height: fit-content;
    
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    flex: 1 0 0;
    
    top: 30vh;
    position: sticky;
`
const Image = styled.img`
    width: auto;    
`

export default Sticky;