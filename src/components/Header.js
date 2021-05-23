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
        <a href="https://www.tesla.com/solarroof" target="_blank">
          Solar Roof
        </a>
        <a href="https://www.tesla.com/solarpanels" target="_blank">
          Solar Panels
        </a>
      </Menu>
      <RightMenu>
        <a id="shop" href="https://shop.tesla.com/?tesref=true" target="_blank">
          Shop
        </a>
        <a
          href="https://auth.tesla.com/oauth2/v1/authorize?client_id=teslaweb&response_type=code&scope=openid%20email%20profile&redirect_uri=https%3A//www.tesla.com/openid-connect/generic&state=Wq3u5Q2t7JIwG8wSMkKVcgf4X6FbcvFhwlU2fiB8gzY&locale=en-US"
          target="_blank"
        >
          Tesla Account
        </a>
        <CustomMenu onClick={() => setBurgerStatus(true)} />
      </RightMenu>
      <BurgerNav show={BurgerStatus}>
        <CloseWrapper>
          <CustomClose onClick={() => setBurgerStatus(false)} />
        </CloseWrapper>
        <li>
          <a href="https://www.tesla.com/inventory/new/m3" target="_blank">
            Existing Inventroy
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/inventory/used/m3" target="_blank">
            Used Inventroy
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/tradein" target="_blank">
            Trade-in
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/cybertruck" target="_blank">
            Cybertruck
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/roadster" target="_blank">
            Roadster
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/semi" target="_blank">
            Semi
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/charging" target="_blank">
            Charging
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/powerwall" target="_blank">
            Powerwall
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/commercial" target="_blank">
            Commercial Energy
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/utilities" target="_blank">
            Utiities
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/drive" target="_blank">
            Test Drive
          </a>
        </li>
        <li>
          <a
            href="https://www.tesla.com/findus?v=2&bounds=64.20540327078639%2C-46.224610562500004%2C2.9846921277096476%2C-152.3085949375&zoom=4&filters=store%2Cservice%2Csupercharger%2Cdestination%20charger%2Cbodyshop"
            target="_blank"
          >
            Find Us
          </a>
        </li>
        <li>
          <a href="https://www.tesla.com/support" target="_blank">
            Support
          </a>
        </li>
        <li>
          <a href="#">United States</a>
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
    color: #2a2b2d;
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
    color: #2a2b2d;
    margin-right: 14px;
  }
  #shop {
    margin-right: 18px;
  }
  a,
  #shop {
    @media (max-width: 1200px) {
      display: none;
    }
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
  padding: 14px 6px 20px 28px;
  transform: ${(props) => (props.show ? "translateX(0)" : "translateX(100%)")};
  transition: transform 0.2s;
  li {
    padding: 20px 0;
    border-bottom: 1px solid rgba(0, 0, 0, 0.2);

    a {
      font-weight: 400;
      font-size: 14px;
    }
  }
  @media (max-width: 1200px) {
    li a {
      font-weight: 200;
      font-size: 12px;
    }
  }
`;

const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-bottom: 10px;
`;

const CustomClose = styled(CloseIcon)`
  cursor: pointer;
`;

export default Header;
