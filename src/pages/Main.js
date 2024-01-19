import React from 'react';
import SvgSelector from "../shared/SvgSelector";
import styled from "styled-components";
import {Container, Frame, H1, H2, H3, P1, P2} from "../shared/styles";
import {COLOR} from "../shared/variables";

const Main = () => {
  return (
    <Container>
      <MainWrapper>
        <MainLogo>
          <SvgSelector svg={'logo-large'}/>
        </MainLogo>

        <Block1>
          <Block1Column>
            <div style={{display: "flex", flexDirection: "column", gap: 5}}>
              <H1 style={{color: COLOR.green}}>Екатеринбургский </H1>
              <H2 style={{color: COLOR.grey}}>общественный транспорт</H2>
              <P2 style={{color: COLOR.grey}}>Больше, чем просто транспорт</P2>
            </div>
            <P2>
              Наша задача объединить все элементы транспортной инфраструктуры города в единую систему
              <br/><br/>
              Мы создаем комфортную и понятную среду для жителей и гостей города
              <br/><br/>
              Наша задача повысить пассажиропоток общественного транспорта, что уменьшит количество пробок и улучшит
              экологическую ситуацию в городе
            </P2>
          </Block1Column>
          <Block1Column>
            <H2>Содержание</H2>
            <NavList>
              <a href={'#Block1'}><P1>🡦 Введение. Миссия. Слоган. Позиционирование. Целевая аудитория</P1></a>
              <a href={'#1'}><P1>🡦 Задачи рекламной кампании</P1></a>
              <a href={'#1'}><P1>🡦 Креативная концепция и визуальная стратегия</P1></a>
              <a href={'#1'}><P1>🡦 Ключевые сообщения</P1></a>
              <a href={'#1'}><P1>🡦 Примеры типового решения</P1></a>
            </NavList>
          </Block1Column>
        </Block1>

        <Frame id={'Block1'}>
          <Block2Wrapper>
            <Block2Row>
              <Block2Segment>
                <H3>Позиционирование</H3>
                <P1>
                  Мы позиционируем себя как транспортная система для всех жителей и гостей города. За счет визуально
                  понятных образов пути, транспорта, карты и дороги, мы вызовем у людей чувства надежности и
                  удобства
                </P1>
              </Block2Segment>
              <Block2Segment>
                <H3>Целевая аудитория</H3>
                <P1>
                  Наша целевая аудитория это жители и гости города Екатеринбург, всех возрастов и полов
                  Мы предлагаем людям комфортный и доступный общественный транспорт
                </P1>
              </Block2Segment>
            </Block2Row>
            <Block2Row>
              <Block2Segment>
                <H3>миссия</H3>
                <P1>
                  Мы предоставим качественный и надежный инструмент для обеспечения мобильности граждан независимо от
                  пола и возраста
                </P1>
              </Block2Segment>
              <Block2Segment>
                <H3>Слоган</H3>
                <P1>
                  Больше чем просто транспорт
                </P1>
              </Block2Segment>
            </Block2Row>
          </Block2Wrapper>
        </Frame>
        <H2>Креативная концепция и визуальная стратегия</H2>
        <Frame>
          <P1>
            Мы не просто транспортная компания, мы создаём будущее города, соединяя все элементы инфраструктуры в единое
            пространство. Доступность — это наше визитное качество, твой путь без лишних заминок. Одна поездка с нами —
            и транспорт станет твоей надёжной опорой в завтрашнем дне
            <br/><br/>
            Екатеринбургский транспорт — сделаем городское путешествие комфортным!
          </P1>
        </Frame>
      </MainWrapper>
    </Container>
  );
};
const MainWrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 150px;

    h2 {
        color: ${COLOR.green};
    }
`
const MainLogo = styled.div`
    margin: 120px 0;
`
const Block1 = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 120px;
    align-self: stretch;
`
const Block1Column = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: flex-start;
    flex: 1 0 0;
    align-self: stretch;
`

const Block2Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    align-self: stretch;
`
const Block2Row = styled.div`
    display: flex;
    justify-content: center;
    align-items: flex-start;
    gap: 30px;
`
const Block2Segment = styled.div`
    display: flex;
    width: 100%;
    padding: 30px;
    flex-direction: column;
    align-items: flex-start;
    gap: 15px;

    h3 {
        color: ${COLOR.green}
    }
`


const NavList = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 25px;
    align-self: stretch;
    margin-top: 30px;
`

export default Main;