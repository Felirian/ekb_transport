import React from 'react';
import Cards from "../components/Cards";
import TramSlider from "../components/TramSlider";
import {Container, H1, P1, P2} from "../shared/styles";

import bigImg from '../assets/fullPage.png'

import suv from '../assets/suvenirs.png'

import tabloid from '../assets/tabloid.png'
import tabloid1 from '../assets/tabloid1.png'
import tabloid2 from '../assets/tabloid2.png'
import tabloid3 from '../assets/tabloid3.png'

import train from '../assets/train.png'

import site from '../assets/site.png'

import card1 from '../assets/cards/1.1.png';
import card2 from '../assets/cards/1.2.png';


import Sticky from "../components/Sticky";
import {COLOR} from "../shared/variables";
import styled from "styled-components";

const Media = () => {
  return (
    <Container style={{display: "flex", flexDirection: "column", alignItems: "center", gap: '150px'}}>
      <div style={{display: "flex", flexDirection: "column", alignItems: "center", gap: '60px'}}>
        <TramSlider/>
        <P1 style={{maxWidth: '1000px'}}>
          Стилеобразующий элемент трамвая наносится только на декоративные панели
          в верхней части вагона и нижних бортах. Цвет деталей передней и задней части вагона соответствует цветовой
          палитре транспорта
        </P1>
      </div>

      <div style={{display: "flex", gap: '60px'}}>
        <img src={tabloid} alt={''} width={'345px'} height={'478px'} data-aos={"fade-right"}/>
        <img src={tabloid1} alt={''} width={'345px'} height={'478px'} data-aos={"fade-left"}/>
      </div>
      <Text data-aos={"fade-up"}>
        <P1>
          Наклейки на стекло содержат фирменные цвета (акцентный цвет зависит от вида транспорта) и шрифты бренда -
          Montserrat Light или Montserrat Regular
          <br/><br/>
          На наклейке крупно обозначен маршрут транспорта, стоимость проезда, а также возможность оплачивать проезд из
          приложения в данном транспорте
        </P1>
      </Text>
      <img src={tabloid2} alt={''} width={'998px'} height={'315px'} data-aos={"fade-left"}/>
      <Text data-aos={"fade-up"}>
        <P1>
          На наклейке обозначены важные остановки фирменным шрифтом Montserrat Regular, остальные - Montserrat Light.
          Это сделано для того, чтобы можно было прочитать информацию с наклейки на расстоянии до 25 метров
        </P1>
      </Text>

      <img src={tabloid3} alt={''} height={'987px'} data-aos={"fade-up"}/>
      <Text data-aos={"fade-up"}>
        <P1>
          Наклейки имеют размеры 250 мм × 370 мм и 1000 мм × 250 мм и располагаются от краев стекла на растоянии 40 мм.
          Белая часть на макете обозначает полупрозрачную матовую часть наклейки. Линия маршрута на карте имеет тот же
          цвет, что и транспорт
        </P1>
      </Text>

      <img src={train} alt={''} data-aos={"fade-up"} height={'792px'}/>
      <Text data-aos={"fade-up"}>
        <P1>
          На передней части обшивки трамвайного вагона изображен логотип суббренда в фирменном цвете. Он расположен по
          центру, на расстоянии 80 мм от нижнего края лобового стекла и имеет размер 250 мм × 250 мм
        </P1>
      </Text>

      <img src={site} alt={''} data-aos={"fade-up"} height={'490px'}/>

      <Text data-aos={"fade-up"}>
        <P1>
          Для сидений трамвая используется тот же фирменный цвет, что и на панелях обшивки трамвая, с добавлением
          фирменного паттерна бренда
          <br/><br/><br/><br/><br/><br/>
          Представляем вашему вниманию пример расположения компонентов на модели трамвая и то, как это могло бы
          выглядеть в реальной жизни
        </P1>
      </Text>

      <img src={bigImg} alt={''} width={'1903px'} height={'7508px'}/>

      <H1 style={{color: COLOR.green}}>Проездные</H1>
      <Sticky
        height={'926px'}
        text={
          <>
            <P2>
              Для проездных карт использован шаблон визитной карточки с закругленными углами. На лицевой стороне
              расположен паттерн и логотип бренда
              <br/><br/>
              На оборотной стороне, в верхней секции расположено название компании. В средней секции расположены
              название тарифа, ФИО клиента и значки общественного транспорта, на которых клиент, согласно тарифу, может
              ездить. В нижней секции расположен адрес веб-сайта компании и номер карты
              <br/><br/>
              Цвета для проездной карты используются соответственно цветовой палитре и принадлежности к виду транспорта
              <br/><br/>
              Формат 55х85 мм, стандарт
            </P2>
          </>
        }
        pos={'left'}
        img={card1}
      />

      <Sticky
        height={'926px'}
        text={
          <>
            <P2>
              Формат 55х85 мм, стандарт
              <br/><br/>
              На оборотной стороне, в верхней секции расположено название компании. В средней секции расположены
              название тарифа и значок общественного транспорта, к которому принадлежит проездной. В нижней секции
              расположен адрес веб-сайта компании и номер карты
              <br/><br/>
              Цвета для проездной карты используются соответственно цветовой палитре и принадлежности к виду транспорта
            </P2>
          </>
        }
        pos={'right'}
        img={card2}
      />
      <Cards/>
      <H1 style={{color: COLOR.green}}>Сувениры</H1>
      <img src={suv} alt={''}/>


    </Container>
  );
};

const Text = styled.div`
    max-width: 1000px;
    width: 100%;
`

export default Media;