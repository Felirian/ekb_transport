import React from 'react';
import Sticky from "../components/Sticky";
import {Container, H2, P1} from "../shared/styles";
import img1 from '../assets/logo/1.png'
import img2 from '../assets/logo/2.png'
import img3 from '../assets/logo/3.png'
import styled from "styled-components";
import {COLOR} from "../shared/variables";

const Logo = () => {
  return (
    <Container>
      <LogoWrapper>
        <Sticky
          text={
            <>
              <P1>
                Исходя из сформированного образа компании было принято решение стилизовать букву с помощью линий. Данное
                решение будет вызывать ассоциацию маршрута и пути. В основе построения лежит сетка 10х10, размеры дуг это
                окружности 4х4 клетки. переплетение колец характеризует единство и надежность.
              </P1>
            </>
          }
          pos={'left'}
          img={img1}
        />

        <Sticky
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
          <H2 style={{color: COLOR.green}}>охранное поле</H2>
          <Sticky
            text={
              <>
                <P1>
                  Охранное поле это зона не включающая в себя лишнюю графическую или текстовую информацию
                </P1>
                <P1>
                  За Х взята длина от дуги нижнего круга до края перегородки
                </P1>
                <P1>
                  В качестве охранного поля взята высота  перегородки в букве Е, равная 0.7х
                </P1>
              </>
            }
            pos={'left'}
            img={img3}
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

export default Logo;