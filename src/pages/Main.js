import React, { cloneElement, useEffect, useState } from "react";
import SvgSelector from "../shared/SvgSelector";
import styled from "styled-components";
import { Container, Frame, H1, H2, H3, P1, P2 } from "../shared/styles";
import { COLOR } from "../shared/variables";
import AOS from "aos";
import "aos/dist/aos.css";

import ecardImg from "../assets/main/ECard.png";
import tramImg from "../assets/main/tram.png";
import eImg from "../assets/main/eImg.png";
import eLogoImg from "../assets/main/eLogoImg.png";

const Main = () => {
  const [tramSel] = useState(0);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <Container>
      <MainWrapper>
        <MainLogo>
          <SvgSelector svg={"logo-large"} />
        </MainLogo>

        <Block1>
          <Block1Column data-aos={"fade-right"}>
            <div style={{ display: "flex", flexDirection: "column", gap: 5 }}>
              <H1 style={{ color: COLOR.green }}>Екатеринбургский </H1>
              <H2 style={{ color: COLOR.grey }}>общественный транспорт</H2>
              <P2 style={{ color: COLOR.grey }}>
                Больше, чем просто транспорт
              </P2>
            </div>
            <P2>
              Наша задача объединить все элементы транспортной инфраструктуры
              города в единую систему
              <br />
              <br />
              Мы создаем комфортную и понятную среду для жителей и гостей города
              <br />
              <br />
              Наша задача повысить пассажиропоток общественного транспорта, что
              уменьшит количество пробок и улучшит экологическую ситуацию в
              городе
            </P2>
          </Block1Column>
          <Block1Column data-aos={"fade-left"}>
            <H2>Содержание</H2>
            <NavList>
              <a href={"#Block1"}>
                <P1>
                  🡦 Введение. Миссия. Слоган. Позиционирование. Целевая
                  аудитория
                </P1>
              </a>
              <a href={"#Block2"}>
                <P1>🡦 Задачи рекламной кампании</P1>
              </a>
              <a href={"#Block3"}>
                <P1>🡦 Креативная концепция и визуальная стратегия</P1>
              </a>
              <a href={"#Block4"}>
                <P1>🡦 Ключевые сообщения</P1>
              </a>
              <a href={"#Block5"}>
                <P1>🡦 Примеры типового решения</P1>
              </a>
            </NavList>
          </Block1Column>
        </Block1>

        <Frame id={"Block1"} data-aos={"fade-up"}>
          <Block2Wrapper>
            <Block2Row>
              <Block2Segment>
                <H3>Позиционирование</H3>
                <P1>
                  Мы позиционируем себя как транспортная система для всех
                  жителей и гостей города. За счет визуально понятных образов
                  пути, транспорта, карты и дороги, мы вызовем у людей чувства
                  надежности и удобства
                </P1>
              </Block2Segment>
              <Block2Segment>
                <H3>Целевая аудитория</H3>
                <P1>
                  Наша целевая аудитория это жители и гости города Екатеринбург,
                  всех возрастов и полов Мы предлагаем людям комфортный и
                  доступный общественный транспорт
                </P1>
              </Block2Segment>
            </Block2Row>
            <Block2Row>
              <Block2Segment>
                <H3>миссия</H3>
                <P1>
                  Мы предоставим качественный и надежный инструмент для
                  обеспечения мобильности граждан независимо от пола и возраста
                </P1>
              </Block2Segment>
              <Block2Segment>
                <H3>Слоган</H3>
                <P1>Больше чем просто транспорт</P1>
              </Block2Segment>
            </Block2Row>
          </Block2Wrapper>
        </Frame>

        <Block3Wrapper id={"Block2"}>
          <H2 data-aos={"fade-right"}>Задачи рекламной кампании</H2>
          <Frame data-aos={"fade-up"} data-aos-offset="0">
            <Block3>
              <Block3Wrapper>
                <Block2Segment>
                  <H3>Привлечение новых пассажиров</H3>
                  <P1>
                    Своим брендом мы должны увеличить число новых пользователей.
                    Измерять успех можно по качественному увеличению
                    пассажиропотока
                  </P1>
                </Block2Segment>
                <Block2Segment>
                  <H3>Увеличение использования мобильного приложения</H3>
                  <P1>
                    Мы стремимся увеличить количество активных пользователей
                    мобильного приложения. Отслеживать можно по количеству
                    совершенных транзакций и времени, проведенному в приложении
                  </P1>
                </Block2Segment>
              </Block3Wrapper>
              <Block2Segment>
                <H3>Повышение осведомленности</H3>
                <P1>
                  Одна из наших задач — это увеличить узнаваемость
                  «Екатеринбургского транспорта». Измерить успех можно по числу
                  новых подписчиков в социальных сетях и количеству поисковых
                  запросов
                </P1>
              </Block2Segment>
            </Block3>
          </Frame>
        </Block3Wrapper>

        <Block3Wrapper id={"Block3"}>
          <H2 data-aos={"fade-right"}>
            Креативная концепция и визуальная стратегия
          </H2>
          <Frame style={{ padding: "30px" }} data-aos={"flip-down"}>
            <P1>
              Мы не просто транспортная компания, мы создаём будущее города,
              соединяя все элементы инфраструктуры в единое пространство.
              Доступность — это наше визитное качество, твой путь без лишних
              заминок. Одна поездка с нами — и транспорт станет твоей надёжной
              опорой в завтрашнем дне
              <br />
              <br />
              Екатеринбургский транспорт — сделаем городское путешествие
              комфортным!
            </P1>
          </Frame>
        </Block3Wrapper>

        <Block3Wrapper id={"Block4"} style={{ textAlign: "center" }}>
          <H2 textAlign={"center"} data-aos={"fade-right"}>
            Ключевые сообщения
          </H2>
          <InfoFrames style={{ textAlign: "left" }}>
            <DoubleFrames>
              <MiniFrame data-aos={"flip-right"}>
                <H3>Доступность</H3>
                <P2>
                  Наша цель — быть понятными и доступными для каждого
                  гражданина. Мы создаем транспортные услуги, которые легко
                  воспринимаются для всех, обеспечивая ясность в каждом
                  пройдённом километре
                  <br />
                  <br />
                  Доступная и понятная иконографика. Читаемые шрифты, отсутствие
                  излишней декоративности
                </P2>
              </MiniFrame>
              <MiniFrame data-aos={"flip-left"}>
                <H3>качество</H3>
                <P2>
                  Наш приоритет — это предоставление высокого качества. Мы
                  стремимся превзойти ожидания клиентов, предоставляя
                  профессиональный сервис и инновационные решения для приятного
                  опыта в каждой поездке
                  <br />
                  <br />
                  Отсутствие шума и грязи. Уделение внимания мелочам
                </P2>
              </MiniFrame>
            </DoubleFrames>
            <DoubleFrames>
              <MiniFrame data-aos={"flip-right"}>
                <H3>удобство</H3>
                <P2>
                  Мы делаем перемещение по городу легким и удобным. Наши решения
                  разработаны с учетом удобства клиентов, предоставляя
                  современные и комфортабельные условия для навигации и
                  ориентировки
                  <br />
                  <br />
                  Закругленные края, не кричащие цвета. Теплые акценты
                </P2>
              </MiniFrame>
              <MiniFrame data-aos={"flip-left"}>
                <H3>надежность</H3>
                <P2>
                  Наш транспорт — это инструмент надежности и безопасности во
                  время путешествия. Используя городской транспорт, пассажир
                  гарантированно прибудет к точке назначения в указанное время
                  <br />
                  <br />
                  Путь, маршрут; четкий и ясный, без резких углов
                </P2>
              </MiniFrame>
            </DoubleFrames>
            <DoubleFrames style={{ justifyContent: "center" }}>
              <MiniFrame style={{ padding: "30px" }} data-aos={"flip-down"}>
                <H3>для всех</H3>
                <P2>
                  Наша миссия состоит в том, чтобы обеспечить мобильность для
                  всех жителей и гостей города, независимо от пола и возраста.
                  Мы создаем транспортные решения, которые соответствуют
                  потребностям всех клиентов, независимо от их пола или возраста
                  <br />
                  <br />
                  Нейтральные цвета, лаконичные формы
                </P2>
              </MiniFrame>
            </DoubleFrames>
          </InfoFrames>
        </Block3Wrapper>

        <Block3Wrapper id="Block5">
          <H2 textAlign={"center"} data-aos={"fade-left"}>
            Примеры типового графического решения
          </H2>
          <Container>
            <Passers>
              <H3>проездные</H3>
              <P1 style={{ width: "600px" }}>
                Мы используются плавные линии и формы без резких углов, чтобы
                создать ощущение комфортного пути. На информационных носителях
                паттерн используется в качестве фона, поэтому состоит из 4
                блоков
              </P1>
            </Passers>
            <Image
              data-aos={"fade-right"}
              src={ecardImg}
              alt={""}
              style={{ opacity: tramSel === 0 ? 1 : 0, paddingTop: "30px" }}
            />
          </Container>
          <Container>
            <Passers style={{ alignItems: "end" }}>
              <H3 style={{ width: "600px" }}>Транспорт</H3>
              <P1 style={{ width: "600px" }}>
                На носителях, где паттерн является стилеобразующим элементом
                используется 1 блок паттерна
              </P1>
            </Passers>
            <Image
              data-aos={"fade-left"}
              src={tramImg}
              alt={""}
              style={{ opacity: tramSel === 0 ? 1 : 0, paddingTop: "30px" }}
            />
          </Container>
          <Container>
            <Passers>
              <H3>Презентации/Веб-сайт</H3>
              <P1 style={{ padding: "30px" }}>
                На титульных слайдах презентации логотип используется без
                подписей и располагается по центру слайда
              </P1>
            </Passers>
            <LogoFrame>
              <Image
                data-aos={"zoom-in"}
                src={eImg}
                alt={""}
                style={{
                  opacity: tramSel === 0 ? 1 : 0,
                  paddingTop: "30px",
                  width: "212px",
                  margin: "127px 156px",
                }}
              />
            </LogoFrame>
            <P1 style={{ padding: "30px" }}>
              На веб-сайтах логотип располагается слева в шапке сайта и
              используется подпись к логотипу
            </P1>
            <LogoFrame>
              <Image
                data-aos={"zoom-in"}
                src={eLogoImg}
                alt={""}
                style={{
                  opacity: tramSel === 0 ? 1 : 0,
                  padding: "30px",
                }}
              />
            </LogoFrame>
          </Container>
        </Block3Wrapper>
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

  h3 {
    color: ${COLOR.grey};
  }
`;
const MainLogo = styled.div`
  margin: 120px 0;
`;

const Block1 = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 120px;
  align-self: stretch;
`;
const Block1Column = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  flex: 1 0 0;
  align-self: stretch;
`;
const NavList = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 25px;
  align-self: stretch;
  margin-top: 30px;
`;

const Block2Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
  align-self: stretch;
`;
const Block2Row = styled.div`
  display: flex;
  justify-content: center;
  align-items: flex-start;
  gap: 30px;
`;
const Block2Segment = styled.div`
  display: flex;
  width: 100%;
  padding: 30px;
  flex-direction: column;
  align-items: flex-start;
  gap: 15px;

  h3 {
    color: ${COLOR.green};
  }
`;

const Block3Wrapper = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  gap: 60px;
  align-self: stretch;
  h2 {
    width: 100%;
  }
`;
const Block3 = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 60px;
  align-self: stretch;
`;
const DoubleFrames = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 30px;
`;

const InfoFrames = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 30px;
`;
const MiniFrame = styled.div`
  border-radius: 30px;
  background: #dadada;
  gap: 15px;
  /* выделение */
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.1);
  display: flex;
  width: 464px;
  padding: 30px;
  flex-direction: column;
  align-items: flex-start;
  align-self: stretch;
`;
const Passers = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 19px;
  align-self: stretch;
`;
const Image = styled.img`
  width: 100%;
  height: auto;
  top: 0;
  transition: 0.8s ease;
`;
const LogoFrame = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  align-self: stretch;
  width: 100%;
  border-radius: 30px;
  background: #dadada;
  gap: 15px;
  /* выделение */
  box-shadow: 0px 0px 50px 0px rgba(0, 0, 0, 0.1);
`;

export default Main;
