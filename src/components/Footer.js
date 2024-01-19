import React from "react";
import styled from "styled-components";
import { Caption, Container, P1, P2 } from "../shared/styles";
import SvgSelector from "../shared/SvgSelector";
import { COLOR } from "../shared/variables";

const Footer = () => {
  return (
    <FooterWrapper>
      <InfoBlock>
        <ContactBlock>
          <SvgSelector svg={"logo"} />
          <Caption style={{ textAlign: "left" }}>
            © 2023 - 2024 Екатеринбургский транспорт, <br></br>
            Санкт-Петербург, 4-МД-15
          </Caption>
        </ContactBlock>
        <DevsBlock>
          <P2>Разработчики</P2>
          <DopBlock>
            <a
              href={"https://t.me/FELiRiAN"}
              target={"_blank"}
              rel="noreferrer"
            >
              <Caption style={{ width: "316px", textAlign: "left" }}>
                Организатор - Кристев А. А.
              </Caption>
            </a>
            <a
              href={"https://t.me/netamikim"}
              target={"_blank"}
              rel="noreferrer"
            >
              <Caption style={{ width: "316px", textAlign: "left" }}>
                Архиватор - Менгазова Н. И.
              </Caption>
            </a>
            <a
              href={"https://t.me/Alobin90"}
              target={"_blank"}
              rel="noreferrer"
            >
              <Caption style={{ width: "316px", textAlign: "left" }}>
                Визуализатор - Размаев А. А.
              </Caption>
            </a>
            <a
              href={"https://t.me/Graf_tripoli"}
              target={"_blank"}
              rel="noreferrer"
            >
              <Caption style={{ width: "316px", textAlign: "left" }}>
                Интеллектуал - Дмитрийчук А. В.
              </Caption>
            </a>
          </DopBlock>
        </DevsBlock>
      </InfoBlock>
    </FooterWrapper>
  );
};

const FooterWrapper = styled.footer`
    width: 100%;
    display: flex;
    margin: 120px 0;
    padding: 102px 509px;
    justify-content: center;
    align-items: center;
    background: #d9d9d9;
`;
const InfoBlock = styled.div`
    display: flex;
    width: 1408px;
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
const DopBlock = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  align-self: stretch;
  `
export default Footer