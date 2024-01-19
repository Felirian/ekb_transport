import React from 'react';
import Sticky from "../components/Sticky";
import {Container, Frame, H2, P1} from "../shared/styles";

import img1 from '../assets/logo/1.png'
import img2 from '../assets/logo/2.png'
import img3 from '../assets/logo/3.png'

import e1 from '../assets/logo/e1.png'
import e2 from '../assets/logo/e2.png'
import e3 from '../assets/logo/e3.png'
import e4 from '../assets/logo/e4.png'
import e5 from '../assets/logo/e5.png'
import e6 from '../assets/logo/e6.png'
import e7 from '../assets/logo/e7.png'

import f1 from '../assets/logo/f2.png'
import f2 from '../assets/logo/f3.png'
import f3 from '../assets/logo/f4.png'
import f4 from '../assets/logo/f5.png'
import f5 from '../assets/logo/f6.png'
import f6 from '../assets/logo/f7.png'
import f7 from '../assets/logo/f8.png'

import nedop from '../assets/logo/nedop.png'

import subBrend1 from '../assets/logo/subBrend1.png'
import subBrend2 from '../assets/logo/subBrend2.png'
import subBrend3 from '../assets/logo/subBrend3.png'
import subBrend4 from '../assets/logo/subBrend4.png'

import modif1 from '../assets/logo/modif.png'
import modif2 from '../assets/logo/modif2.png'

import styled from "styled-components";
import {COLOR} from "../shared/variables";

const Logo = () => {
  const eImg = [e1, e2, e3, e4, e5, e6, e7,]
  const fImg = [f2, f1, f3, f4, f5, f6, f7,]


  return (
    <Container>
      <LogoWrapper>
        <Sticky
          height={'526px'}
          text={
            <>
              <P1>
                Исходя из сформированного образа компании было принято решение стилизовать букву с помощью линий. Данное
                решение будет вызывать ассоциацию маршрута и пути. В основе построения лежит сетка 10х10, размеры дуг
                это
                окружности 4х4 клетки. переплетение колец характеризует единство и надежность.
              </P1>
            </>
          }
          pos={'left'}
          img={img1}
        />

        <Sticky
          height={'1013px'}
          text={
            <>
              <P1>
                Способ построения логотипа — использование
                простых геометрических фигур
              </P1>
              <P1>
                Углы элементов логотипа имеют закругления, за исключением внутренних, образующихся при построении
              </P1>
              <P1>
                Толщина линий логотипа к сетке построения - 1:2
              </P1>
            </>
          }
          pos={'right'}
          img={img2}
        />

        <Block1>
          <H2 style={{color: COLOR.green}} data-aos={"fade-up"}>охранное поле</H2>
          <Sticky
            height={'706px'}
            text={
              <>
                <P1>
                  Охранное поле это зона не включающая в себя лишнюю графическую или текстовую информацию
                </P1>
                <P1>
                  За Х взята длина от дуги нижнего круга до края перегородки
                </P1>
                <P1>
                  В качестве охранного поля взята высота перегородки в букве Е, равная 0.7х
                </P1>
              </>
            }
            pos={'left'}
            img={img3}
          />
        </Block1>

        <Block2Wrapper>
          <H2 style={{width: '100%', color: COLOR.green}} data-aos={"flip-down"}>Допустимые модификации</H2>
          <Block2Row1>
            <P1 data-aos={"flip-down"}>
              Рекомендуется использовать логотип на однотонном фоне в допустимых цветах и их сочетаниях
              <br/><br/>
              Помимо этого допустимо использовать логотип в плашке с закругленными
              краями и на фоне фирменного цвета или любого монохромного цвета, с условием, что логотип белого или
              черного цветов
              <br/><br/>
              Рекомендации применимы
              и к логотипам суббрендов с учетом цветовых ограничений, что указано
              в возможных сочетаниях
            </P1>
          </Block2Row1>
          <Frame style={{
            display: "flex",
            justifyContent: 'space-between',
            width: '100%',
            borderRadius: '30px',
            padding: '30px'
          }} data-aos={"flip-down"}>
            {eImg.map((el, i) => (
              <img src={el} alt={''} key={i}/>
            ))}
          </Frame>
          <Frame style={{
            display: "flex",
            justifyContent: 'space-between',
            width: '100%',
            borderRadius: '30px',
            padding: '30px'
          }} data-aos={"flip-down"}>
            {fImg.map((el, i) => (
              <img src={el} alt={''} key={i}/>
            ))}
          </Frame>
        </Block2Wrapper>

        <Block1>
          <H2 style={{color: COLOR.green}} data-aos={"fade-up"}>Недопустимые модификации</H2>
          <Sticky
            height={'777px'}
            text={
              <>
                <P1>
                  Недопустимо:<br/>
                  - Деформацию пропорций по вертикали и/или горизонтали<br/>
                  - Брать в круглый фрейм<br/>
                  - Использовать как паттерн<br/>
                  - Использовать как символ в словах<br/>
                  - Вращение логотипа<br/>
                  - Раздробление логотипа по цвету<br/>
                  - Изменение размера отдельных элементов логотипа<br/>
                  - Использование эффектов<br/>
                  - Разрезание части знака<br/>
                  - Делать логотип с градиентом<br/>
                </P1>
              </>
            }
            pos={'left'}
            img={nedop}
          />
        </Block1>

        <Block1>
          <H2 style={{color: COLOR.green}}>СУББРЕНДЫ</H2>
          <div style={{display: "flex", gap: '230px'}}>
            <P1 data-aos={"fade-right"}>
              Мы предлагаем брендирование общественного транспорта: автобусов, метро, трамваев и троллейбусов. Для
              каждого транспорта разработан логотип, за основу которого была взята первая буква
              в названии транспорта
            </P1>
            <P1 data-aos={"fade-left"}>
              Логотип создан из одной непрерывной линии, с закруглениями углов; пересекающиеся линии перекрывают друг
              друга. Таким образом мы хотим вызвать ассоциацию с комфортной дорогой, путем
            </P1>
          </div>
        </Block1>
        <img src={subBrend1} alt={''} data-aos={"flip-down"} style={{height: '880px'}}/>
        <img src={subBrend2} alt={''} data-aos={"flip-down"} style={{height: '880px'}}/>
        <div style={{display: "flex", gap: '230px'}}>
          <P1 data-aos={"fade-right"}>
            Мы предлагаем брендирование общественного транспорта: автобусов, метро, трамваев и троллейбусов. Для
            каждого транспорта разработан логотип, за основу которого была взята первая буква
            в названии транспорта
          </P1>
          <P1 data-aos={"fade-left"}>
            Логотип создан из одной непрерывной линии, с закруглениями углов; пересекающиеся линии перекрывают друг
            друга. Таким образом мы хотим вызвать ассоциацию с комфортной дорогой, путем
          </P1>
        </div>
        <img src={subBrend3} alt={''} data-aos={"flip-down"} style={{height: '880px'}}/>
        <img src={subBrend4} alt={''} data-aos={"flip-down"} style={{height: '880px'}}/>


        <Block1>
          <H2 style={{color: COLOR.green}}>Модификации логотипов суббрендов</H2>
          <Sticky
            height={'501px'}
            text={
              <>
                <P1>
                  Каждому из суббрендов мы подобрали свой<br/> фирменный цвет, который<br/> используется на носителях
                </P1>
              </>
            }
            pos={'right'}
            img={modif1}
          />
          <Sticky
            height={'501px'}
            text={
              <>
                <P1>
                  Основные и инверсированные версии <br/> монохромного логотипа, на примере <br/> метрополитена
                </P1>
              </>
            }
            pos={'left'}
            img={modif2}
          />
        </Block1>
      </LogoWrapper>
    </Container>
  );
};

const LogoWrapper = styled.div`
    margin-top: 150px;
    display: inline-flex;
    flex-direction: column;
    align-items: center;
    gap: 300px;
`

const Block1 = styled.div`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 30px;
    align-self: stretch;
`

const Block2Wrapper = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 30px;
    align-self: stretch;
`
const Block2Row1 = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: flex-start;
    align-self: stretch;
`


export default Logo;