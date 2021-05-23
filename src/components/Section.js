import React from "react";
import styled from "styled-components";
import Fade from "react-reveal/Fade";

const Section = ({
  title,
  description,
  leftBtnText,
  rightBtnText,
  backgroundImg,
}) => {
  return (
    <Wrap bgImage={backgroundImg}>
      <Fade bottom>
        <ItemText>
          <h1>{title}</h1>
          <p>{description}</p>
        </ItemText>
      </Fade>
      <Buttons>
        <Fade bottom>
          <ButtonGroup>
            <LeftButton>{leftBtnText}</LeftButton>
            {rightBtnText && <RightButton>{rightBtnText}</RightButton>}
          </ButtonGroup>
          <DownArrow src="/images/down-arrow.svg" />
        </Fade>
      </Buttons>
    </Wrap>
  );
};

const Wrap = styled.div`
  width: 100vw;
  height: 100vh;
  background-image: ${(props) => `url("/images/${props.bgImage}")`};
  background-position: center center;
  background-repeat: no-repeat;
  background-size: cover;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
`;

const ItemText = styled.div`
  h1 {
    font-size: 42px;
    font-weight: 200;
    margin-bottom: 5px;
  }
  p {
    font-size: 14px;
    font-weight: lighter;
    color: #787d84;
  }
  padding-top: 16vh;
  text-align: center;
  margin: 4px 15px 0 0;
`;

const Buttons = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-right: 15px;
`;

const ButtonGroup = styled.div`
  display: flex;
  margin-bottom: 0px;

  @media (max-width: 600px) {
    flex-direction: column;
  }
`;

const LeftButton = styled.div`
  margin: 10px;
  background-color: rgba(23, 26, 32, 0.8);
  height: 40px;
  width: 256px;
  color: white;
  display: flex;
  justify-content: center;
  align-items: center;
  border-radius: 100px;
  opacity: 0.95;
  text-transform: uppercase;
  font-size: 13px;
  cursor: pointer;
  @media (max-width: 600px) {
    width: 90vw;
    margin-left: 15px;
  }
`;

const RightButton = styled(LeftButton)`
  background: white;
  opacity: 0.65;
  color: black;
`;

const DownArrow = styled.img`
  margin-bottom: 30px;
  height: 45px;
  overflow-x: hidden;
  animation: animateDown infinite 1.5s;
`;

export default Section;
