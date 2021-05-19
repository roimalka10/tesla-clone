import styled from "styled-components";
import React from "react";
import { useState } from "react";
import MenuIcon from "@material-ui/icons/Menu";
import CloseIcon from "@material-ui/icons/Close";
import { selectCars } from "../features/car/carSlice";
import { useSelector } from "react-redux";

const Header = () => {
  const [BurgerStatus, setBurgerStatus] = useState(false);
  const cars = useSelector(selectCars);

  return (
    <Container>
      <a>
        <img src="/images/logo.svg" alt="" />
      </a>
      <Menu>
        {cars &&
          cars.map((car, index) => (
            <a key={index} href="#">
              {car}
            </a>
          ))}
        <a href="#">Solar Roof</a>
        <a href="#">Solar Panels</a>
      </Menu>
      <RightMenu>
        <a id="shop" href="#">
          Shop
        </a>
        <a href="#">Tesla Account</a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={BurgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          <a href="">Existing Inventroy</a>
        </li>
        <li>
          <a href="">Use Inventroy</a>
        </li>
        <li>
          <a href="">Trade-in</a>
        </li>
        <li>
          <a href="">Cybertruck</a>
        </li>
        <li>
          <a href="">Roadster</a>
        </li>
        <li>
          <a href="">Semi</a>
        </li>
        <li>
          <a href="">Charging</a>
        </li>
        <li>
          <a href="">Powerwall</a>
        </li>
        <li>
          <a href="">Commercial Energy</a>
        </li>
        <li>
          <a href="">Utiities</a>
        </li>
        <li>
          <a href="">Test Drive</a>
        </li>
        <li>
          <a href="">Find Us</a>
        </li>
        <li>
          <a href="">Support</a>
        </li>
        <li>
          <a href="">United States</a>
        </li>
      </BurgerNav>
    </Container>
  );
};

const Container = styled.div`
  min-height: 53px;
  text-transform: uppercase;
  position: fixed;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 0 0 20px;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1;
  a {
    font-size: 16px;

    img {
      height: 13px;
      width: 100px;
    }
  }
`;

const Menu = styled.div`
  padding-left: 140px;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1;
  a {
    font-weight: 400;
    text-decoration: uppercase;
    font-size: 15px;
    margin: 0 10px;
    flex-wrap: nowrap;
  }
  @media (max-width: 1200px) {
    display: none;
  }
`;

const RightMenu = styled.div`
  display: flex;
  align-items: center;
  a {
    font-weight: 400;
    text-decoration: uppercase;
    font-size: 15px;
    margin-right: 14px;
  }
  #shop {
    margin-right: 18px;
  }
`;

const CustomMenu = styled(MenuIcon)`
  cursor: pointer;
  margin-right: 6px;
`;

const BurgerNav = styled.div`
  display: flex;
  flex-direction: column;
  text-align: start;
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: white;
  width: 295px;
  z-index: 20;
  list-style: none;
  padding: 20px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 20px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 600;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

export default Header;
