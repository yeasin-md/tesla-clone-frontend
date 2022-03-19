import React from 'react';
import Fade from 'react-reveal/Fade';
import styled from 'styled-components';
function Section({
  title,
  description,
  backgrounImg,
  leftBtnText,
  rightBtnText,
  arrowBtn,
}) {
  return (
    <Wrap bgImg={backgrounImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>

      <Buttons>
        <Fade left>
          <ButtonGroup>
            <LeftBtn>{leftBtnText}</LeftBtn>
            {rightBtnText && <RigthBtn>{rightBtnText}</RigthBtn>}
          </ButtonGroup>
        </Fade>

        {arrowBtn && <DownArrow src="/images/down-arrow.svg"></DownArrow>}
      </Buttons>
    </Wrap>
  );
}

export default Section;
const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-size: cover;
  background-postion: center center;
  background-repeat: no-repeat;
  object-fit: fill;
  display: flex;
  background-image: ${props => `url('/images/${props.bgImg}')`};
  flex-direction: column;
  overflow: hidden;
  justify-content: space-between;
  align-items: center;
`;
const ItemText = styled.div`
  padding: 15vh;
  text-align: center;
`;
const ButtonGroup = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-direction: column;
  }
`;
const LeftBtn = styled.div`
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.85;
  text-transform: uppercase;
  font-size: 12px;
  cursor: pointer;
  margin: 8px;
`;
const RigthBtn = styled(LeftBtn)`
  background: white;
  opacity: 0.65;
  color: black;
`;
const DownArrow = styled.img`
  margin-top: 20px;
  height: 40px;
  animation: animateDown infinite 1.5s;
`;
const Buttons = styled.div``;
