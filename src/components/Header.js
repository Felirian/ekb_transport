import React, {useEffect} from 'react';
import styled from "styled-components";
import SvgSelector from "../shared/SvgSelector";

import {Link, useLocation} from "react-router-dom";
import {HoverLink, P1} from "../shared/styles";
import {COLOR} from "../shared/variables";

const Header = () => {
  const location = useLocation();
  return (
    <HeaderWrapper>
      <HeaderContainer>
        <SvgSelector svg={'logo'}/>
        <Links>
          <Link to={'/'}>
            <HoverLink style={{color: location.pathname === "/" ? COLOR.green : ''}}>Главная</HoverLink>
          </Link>
          <Link to={'/logo'}>
            <HoverLink style={{color: location.pathname === "/logo" ? COLOR.green : ''}}>Логотип</HoverLink>
          </Link>
          <Link to={'/style'}>
            <HoverLink style={{color: location.pathname === "/style" ? COLOR.green : ''}}>Стиль</HoverLink>
          </Link>
          <Link to={'/media'}>
            <HoverLink style={{color: location.pathname === "/media" ? COLOR.green : ''}}>Носители</HoverLink>
          </Link>
        </Links>
      </HeaderContainer>
    </HeaderWrapper>
  );
};

const HeaderWrapper = styled.header`
    height: 80px;
    width: 100%;
    //background-color: red;
    display: flex;
    justify-content: center;
    align-items: center;
`

const HeaderContainer = styled.div`
    width: 100%;
    max-width: 1408px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    align-self: stretch;
`

const Links = styled.div`
    display: flex;
    align-items: flex-start;
    gap: 30px;
`


export default Header;