import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import { styled } from "styled-components";
import { Container, H1, H2, P1, P2 } from "../shared/styles";
import { COLOR } from "../shared/variables";

import colorsImg from "../assets/style/colors.png";
import exoBold from "../assets/style/exobold.png";
import exoLight from "../assets/style/exolight.png";
import sans from "../assets/style/opensans.png";
import monser from "../assets/style/montserrat.png";
import monserR from "../assets/style/montserratr.png";
import pattern from "../assets/style/pattern.png";
import patterns from "../assets/style/patterns.png";
import patternUse from "../assets/style/patternUse.png";

const Style = () => {
  const [styleSel] = useState(0);

  useEffect(() => {
    AOS.init();
    AOS.refresh();
  }, []);

  return (
    <StyleWrapper>
      <Container style={{ display: "flex", flexDirection: "column" }}>
        <H1 data-aos={"fade-left"} style={{ alignSelf: "flex-end" }}>
          цветовая палитра
        </H1>
        <StyleBlock>
          <Image src={colorsImg} alt={""} style={{ padding: "37px" }} />
        </StyleBlock>
      </Container>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <H1 data-aos={"fade-left"} style={{ alignSelf: "flex-end" }}>
          фирменный шрифт
        </H1>
        <FontBlock>
          <P1 style={{ width: "931px" }}>
            Основным фирменным шрифтом бренда Екатеринбургский транспорт для
            фирменных носителей является EXO 2. Данный шрифт имеет несколько
            начертаний, для бренда
            <br />
            <br />
            Для заголовков и крупного акцентного текста рекомендуется
            использовать EXO 2 Bold, для подзаголовков и основного текста - EXO
            2 Light или Open Sans Light, для мелкого текста, текста на сайте и
            деловой документации — Montserrat Light или Montserrat Regular
          </P1>
        </FontBlock>
        <ImagesBlock>
          <Image src={exoBold} alt={""} data-aos={"flip-down"} />
          <BR></BR>
          <Image src={exoLight} alt={""} data-aos={"flip-down"} />
          <BR></BR>
          <Image src={sans} alt={""} data-aos={"flip-down"} />
          <BR></BR>
          <Image src={monser} alt={""} data-aos={"flip-down"} />
          <BR></BR>
          <Image src={monserR} alt={""} data-aos={"flip-down"} />
          <BR></BR>
        </ImagesBlock>
      </Container>
      <Container
        style={{ display: "flex", flexDirection: "column", gap: "50px" }}
      >
        <H1
          textAlign={"center"}
          data-aos={"fade-up"}
          style={{ alignSelf: "center" }}
        >
          паттерн
        </H1>
        <FontBlock style={{ padding: "0" }}>
          <P1 style={{ width: "931px" }}>
            Фундаментом для айдентики служат переплетение и перекрытие линий,
            символизирующих дороги общественного транспорта, с вплетением
            логотипа бренда и суббрендов
            <br />
            <br />
            При построении графических элементов на основе паттерна следует
            ориентироваться на концепцию перекрытия, плавности линий и
            закруглений углов
          </P1>
        </FontBlock>
      </Container>
      <Image src={pattern} alt={""} />
      <FontBlock style={{ padding: "0" }}>
        <P1 style={{ width: "931px" }}>
          При использовании паттерна на информационных носителях следует
          использовать соотношение 4:1 (т.е. использовать 4 блока паттерна) и
          непрозрачность 33%
          <br />
          <br />
          При создании информационных носителей (визитки, плакаты, баннеры и
          т.д.) на основе паттерна, толщина его линий должна быть в 7 раз меньше
          акцентного элемента
          <br />
          <br />
          Цвет паттерна всегда черный (#000000), на разных носителях различается
          только непрозрачность
        </P1>
      </FontBlock>
      <FontBlock>
        <Image src={patterns} alt={""} data-aos={"fade-up"} />
        <P1 style={{ alignSelf: "flex-end", paddingTop: "30px" }}>
          Буква А выполняет роль акцентного элемента
        </P1>
      </FontBlock>
      <Container
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "flex-end",
          width: "1408px",
        }}
      >
        <PatternBlock>
          <Image src={patternUse} alt={""} />
          <P1 style={{ alignSelf: "center" }}>
            При использовании паттерна как стилеобразущего элемента следует
            использовать один блок паттерна, из которого будут браться
            фрагменты, с соотношением блока паттерна к минимальной стороне
            фрагмента от 1:60 до 1:70
            <br />
            <br />
            Непрозрачность паттерна в таком случае будет 20%
          </P1>
        </PatternBlock>
        <P1
          style={{
            alignSelf: "flex-end",
            width: "1012px",
            paddingTop: "30px",
            textAlign: "right",
          }}
        >
          Также учитываются габариты объекта, на который наносится паттерн -
          если сумма трех измерений меньше 1 метра используется 4 блока
          паттерна, если больше то один блок
        </P1>
      </Container>
    </StyleWrapper>
  );
};

const StyleWrapper = styled.div`
  display: flex;
  width: 100%;
  max-width: 1408px;
  flex-direction: column;
  align-items: center;
  padding: 100px;
  gap: 100px;
  h1 {
    color: ${COLOR.green};
  }

  h3 {
    color: ${COLOR.grey};
  }
`;
const Image = styled.img`
  width: "1169px";
`;
const StyleBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-end;
`;
const FontBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
`;
const PatternBlock = styled.div`
  display: flex;
  flex-direction: row;
  align-items: start;
  justify-content: space-between;
  gap: 75px;
  width: 1408px;
`;
const ImagesBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 100px 0;
  gap: 35px;
`;
const BR = styled.div`
  border: 1px solid grey;
  width: 1300px;
  border-radius: 30px;
`;

export default Style;
