import React from "react";
import styled from "styled-components";
import {Caption, Container, P1, P2} from "../shared/styles";
import SvgSelector from "../shared/SvgSelector";

const Footer = () => {
  return (
    <FooterWrapper>
      <InfoBlock>
        <ContactBlock>
          <SvgSelector svg={"logo"}/>
          <Caption style={{textAlign: "left"}}>
            © 2023 - 2024 Екатеринбургский транспорт, <br></br>
            Санкт-Петербург, 4-МД-15
          </Caption>
        </ContactBlock>
        <DevsBlock>
          <P2>Разработчики</P2>
          <a href={'https://t.me/FELiRiAN'} target={'_blank'}>
            <Caption>Организатор - Кристев А. А. (ТГ, ВК, Инст)</Caption>
          </a>
          <Caption>
            Архиватор - Менгазова Н. И.<br></br>
            Визуализатор - Размаев А. А.<br></br>
            Интеллектуал - Дмитрийчук А. В.
          </Caption>
        </DevsBlock>
      </InfoBlock>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
    width: 100%;
    display: flex;
    margin: 120px 0;
    padding: 100px 509px;
    justify-content: center;
    align-items: center;
    background: #d9d9d9;
`;
const InfoBlock = styled.div`
    display: flex;
    width: 1000px;
    height: 108px;
    justify-content: space-between;
    align-items: flex-start;
    flex-shrink: 0;
`;
const ContactBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
`;
const DevsBlock = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
`;

export default Footer;