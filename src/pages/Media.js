import React from 'react';
import Cards from "../components/Cards";
import TramSlider from "../components/TramSlider";
import {Container, H1, P1, P2} from "../shared/styles";
import card1 from '../assets/cards/1.1.png';
import card2 from '../assets/cards/1.2.png';
import Sticky from "../components/Sticky";
import {COLOR} from "../shared/variables";

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

      <H1 style={{color: COLOR.green}}>Сувениры</H1>


      <Cards/>
    </Container>
  );
};

export default Media;